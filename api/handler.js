'use strict';

var request = require('request');
var extend = require('extend');

const URL = 'https://api.dailymotion.com';

const SEARCH = require('./defaults/search.json');
const VIDEO = require('./defaults/video.json');
const RELATED = require('./defaults/related.json');

var paginationHeaders = (body) => {
  return {
    'X-Pagination-Total': body.total,
    'X-Pagination-Page': body.page,
    'X-Pagination-Per-Page': body.limit,
    'X-Pagination-Pages': Math.ceil(body.total / body.limit)
  }
}

module.exports.search = (event, context, cb) => {
  var qs = extend({}, SEARCH, event.query);

  var onSearch = (err, res, body) => {
    if(err) {
      cb(new Error('[400] Bad Request'))
    } else {
      cb(null, { body: body.list, header: paginationHeaders(body) });
    }
  };

  request({
    url: `${URL}/videos`,
    method: 'get',
    json: true,
    qs: qs
  }, onSearch);
};

module.exports.video = (event, context, cb) => {
  if( ! event.query.id) {
    cb(new Error('[400] Missing ?id='))
  } else {
    var id = event.query.id;
    delete(event.query.id);

    var qs = extend({}, VIDEO, event.query);

    request({
      url: `${URL}/video/${id}`,
      method: 'get',
      json: true,
      qs: qs
    }, (err, res, body) => {
      if(err) {
        cb(new Error(`[400] ${err.message}`))
      } else {
        cb(null, body);
      }
    });
  }
};

module.exports.related = (event, context, cb) => {
  if( ! event.query.id) {
    cb(new Error('[400] Missing ?id='))
  } else {
    var id = event.query.id;
    delete(event.query.id);

    var qs = extend({}, RELATED, event.query);

    request({
      url: `${URL}/video/${id}/related`,
      method: 'get',
      json: true,
      qs: qs
    }, (err, res, body) => {
      if(err) {
        cb(new Error(`[400] ${err.message}`))
      } else {
        cb(null, { body: body.list, header: paginationHeaders(body) });
      }
    });
  }
};
