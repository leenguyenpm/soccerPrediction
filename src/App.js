import { Layout } from "antd";
import { Image } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import "./App.css";
import Login from "./Login.js";

const App = () => (
  <body>
    <Layout>
      <div className="App">
        <div class="wrapper-login">
          <Image alt="logo" src="imgs/logo2.png" width={100} />
          <h2 class="title">Get More things done with an account</h2>
          <p>
            get access eaglepredict, the most powerfull platform for bet
            prediction
          </p>
          <br />
          <br />
          <span id="labelLogin">LOGIN TO YOUR ACCOUNT</span>
          <br />
          <br />
          <br />
          <Login />
          <br />
          <br />
          <br />
        </div>
      </div>
    </Layout>
  </body>
);

export default App;
