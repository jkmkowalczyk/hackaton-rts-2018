import React, {Component} from "react";
import fire from "../../fire";

import {Button, Checkbox, Form, Icon, Input} from "antd";
import "antd/dist/antd.css";
import "./style.css";

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleLoginClick() {
        fire
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(err => console.log(err.message));

        this.onAuthStateChange();

        this.setState({
            email: "",
            password: ""
        });
    }

    handleGoogleLoginClick() {
        console.log("auth");
        fire
            .auth()
            .signInWithPopup(fire.auth().GoogleAuthProvider())
            .catch(err => console.log(err.message));

        this.onAuthStateChange();
    }

    onAuthStateChange() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem("user", JSON.stringify({uid: user.uid, email: user.email}));
                localStorage.setItem("isAuthenticated", "true");
                console.log(JSON.parse(localStorage.getItem("user")));
                console.log(localStorage.getItem("isAuthenticated"));
                this.props.history.push("/dashboard");
            } else {
                console.log("not logged in");
            }
        });
    }

    render() {
        return <div>
            <div className="login-content">
              <div className="login-overlay" />
            </div>
            <div >
                <div className="logo">
                    <div className="login-logo" />
                </div>
                <div>
                    <p>
                       Masz ważny egzamin? Nie wiesz jak się do niego przygotować? W takim razie świetnie trafiłeś/aś!  Już teraz zaloguj się do RTS i przekonaj się jak nauka z nami może być prosta i przyjemna.
                    </p>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange.bind(this)} />
                </FormItem>
                <FormItem className="bottom-items-wrapper">
                    <Checkbox>Zapamietaj mnie</Checkbox>
                    <a className="login-form-forgot" href="">
                    Przypomnij hasło
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLoginClick.bind(this)}>
                    Zaloguj się
                    </Button>
                    lub <a href="">Zarejestruj się już teraz!</a>
                </FormItem>
                </Form>
            </div>
            
          </div>;
    }
}

export default Login;
