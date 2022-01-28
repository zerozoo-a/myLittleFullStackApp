import App from './app';
import IndexRoute from './routes/index.route';
import UserRoute from './routes/user.route';

const app: App = new App([new UserRoute(), new IndexRoute()]);
app.listen();
