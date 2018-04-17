import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.css';
import 'assets/css/demo.css';
import App from 'layouts/Home/Home.jsx';

// import indexRoutes from 'routes/index.jsx';

const hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <App/>
            {/* {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            component={prop.component}
                        />
                    );
                })
            } */}
        </Switch>
    </HashRouter>
, document.getElementById('root'));
