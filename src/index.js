import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    BrowserRouter,
    StaticRouter
} from 'react-router-dom';
import { createServer } from 'http';
import ReactDomServer ftom 'react-dom/server';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.css';
import 'assets/css/demo.css';
import App from 'layouts/Home/Home.jsx';

// import indexRoutes from 'routes/index.jsx';
createServer((req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
    res.end() 
    });
const hist = createBrowserHistory();
ReactDOM.render((
  <BrowserRouter history = {hist}>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
