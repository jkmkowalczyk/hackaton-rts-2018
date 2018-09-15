import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import fire from "../../fire";

export default class index extends Component {
    writeToFirebase() {
        fire
            .database()
            .ref("user/test")
            .set({
                username: "Jakub",
                email: "test@test.com",
                uid: "asd"
            }),
            function (err) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("Data added successfully");
                }
            };
    }

    readFromFirebase() {
        fire
            .database()
            .ref("users/test")
            .on("value", snapshot => {
                console.log(snapshot.val());
                return <div>{snapshot.val()}</div>;
            });
    }

    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                <div>
                    {this.writeToFirebase()}
                    {this.readFromFirebase()}
                </div>
            </div>
        );
    }
}
