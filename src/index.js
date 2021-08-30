import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ScrollToTop from "./components/commoms/ScrollTop";
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import firebase from "firebase";
import Loading from "./components/parts/loading/Loading";
import Whatsapp from "./components/commoms/Whatsapp";
import ForgotPassword from "./components/parts/auth/ForgotPassword";
import NotFound from "components/parts/notFound/NotFound";
const Home = React.lazy(() => import("./containers/home/Home"));
const CategoriDetail = React.lazy(() =>
  import("./containers/categori/CategoriDetail")
);
const ProductDetail = React.lazy(() =>
  import("./containers/product/ProductDetail")
);

const Grocery = React.lazy(() => import("./containers/grocery/Grocery"));
const ListNew = React.lazy(() => import("./containers/news/ListNew"));
const Contact = React.lazy(() => import("./containers/contact/Contact"));
const Cart = React.lazy(() => import("./components/parts/cart/Cart"));
const CheckCout = React.lazy(() => import("./components/parts/cart/CheckCout"));
const ProductNewDetail = React.lazy(() =>
  import("./containers/news/ProductNewDetail")
);
const token = localStorage.getItem("userToken");

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <Router>
        <ScrollToTop />

        <Switch>
          <Route path="/vanibeauty/categoridetail">
            <CategoriDetail />
          </Route>
          <Route path="/vanibeauty/productlist/product-detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/vanibeauty/grocery">
            <Grocery />
          </Route>
          <Route path="/vanibeauty/news">
            <ListNew />
          </Route>

          <Route path="/vanibeauty/contact">
            <Contact />
          </Route>
          <Route path="/vanibeauty/cart/checkout">
            <CheckCout />
          </Route>
          <Route
            path="/vanibeauty/cart"
            render={() => (token ? <Cart /> : <Redirect to="/notfound" />)}
          />
          <Route path="/notfound">
            <NotFound />
          </Route>
          <Route path="/vanibeauty/newdetail/:id">
            <ProductNewDetail />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Whatsapp />
    </Suspense>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
