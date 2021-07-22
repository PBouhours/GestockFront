import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateLogin from '../accueuil/CreateLogin';
import Login from '../accueuil/Login';
import ProductCreate from '../product/ProductCreate';
import ProductDetails from '../product/ProductDetails';
import ProductList from '../product/ProductList';
import ProductSearch from '../product/ProductSearch';

function MainRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/compte-creation">
            <CreateLogin />
          </Route>
          <Route exact path="/stock">
            <ProductList />
          </Route>
          <Route exact path="/stock/:id" component={ProductDetails} />
          <Route
            exact
            path="/stock/recherche/:query"
            component={ProductSearch}
          />
        </Switch>
        <Route exact path="/creation-produit">
          <ProductCreate />
        </Route>
      </Router>
    </div>
  );
}

export default MainRouter;
