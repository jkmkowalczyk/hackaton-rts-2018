import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Navbar.css';
import Searchbar from "./Searchbar";
import {Menu} from 'semantic-ui-react';
import avatar from './default-avatar.png';
import fire from "../../fire";
import Sticky from 'react-sticky-el';

class Navbar extends Component {

    state = {
        userName: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : ""
    };

    handleLogoutClick = () => {
        fire.auth().signOut().then(
            () => {
                localStorage.setItem("isAuthenticated", "false");
                this.props.history.push("/");
            }
        ).catch((err) => console.log(err.message));
    };

    handleItemClick = () => {
        this.props.history.push("/dashboard");
    };

    render() {

        return (
            <Sticky>
                <div className="navbar">
                    <Menu>
                        <Menu.Item onClick={this.handleItemClick}>
                            <div className="navbar-logo"/>
                        </Menu.Item>
                        <Menu.Item>
                            <p className="navbar-title">REACT TESTING SERVICE</p>
                        </Menu.Item>

                        < Menu.Menu position='right'>
                            <Menu.Item>
                                <Searchbar/>
                            </Menu.Item>
                            <Menu.Item>
                                <img className="navbar-user-container-avatar" src={avatar}/>
                                <div className="navbar-user-container-name"> Cześć {this.state.userName}</div>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleLogoutClick}>
                                Wyloguj
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </div>
            </Sticky>
        )
    }
}

export default Navbar
