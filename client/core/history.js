import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';
import { canUseDom } from 'history/lib/ExecutionEnvironment';

var history = canUseDom ? createBrowserHistory : createMemoryHistory;

export default useQueries(history)();
