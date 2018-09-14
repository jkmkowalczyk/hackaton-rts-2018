import React, {Component} from 'react';
import fire from '../../fire';


class Test extends Component {
    getTests = (test) => {
        fire.database().ref("tests/" + test).on("value", snapshot => {
            console.log(snapshot.val())
        });
    };


    render() {
        return (
            <div>
                {this.getTests("test1")}
            </div>
        )
    }
}

export default Test