import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { CustomerLogin } from "./pages/CustomerLogin";
import { CustomerList } from "./pages/CustomerList";
import { CustomerUpsert } from "./pages/CustomerUpsert";
import { CustomerRegistration } from "./pages/CustomerRegistration"
import { CustomerProfile } from "./pages/CustomerProfile";
import { CustomerProfileUpdate } from "./pages/CustomerUpdate";

function App() {

  const history = useHistory();

  

  return (
    <>
      
      <Route exact path="/customer-registration" component={CustomerRegistration} />
      <Route exact path="/customer-signin" component={CustomerLogin} />
      <Route exact path="/customer-list" component={CustomerList} />
      <Route exact path="/customer-upsert" component={CustomerUpsert} />
      <Route exact path="/customer-profile" component={CustomerProfile} />
      <Route exact path="/customer-update" component={CustomerProfileUpdate} />
    </>
  )


}
export default App
