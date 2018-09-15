import React, {Component} from 'react';
import fire from '../../fire';


class Test extends Component {


    q;
    c;

    get = () => {
        fire.database().ref("tests/" + "test1").on("value", snapshot => {
            this.q = snapshot.val().pytania;
            this.c = snapshot.val().category;
        })
    };

    componentWillMount() {

    };


    render() {
        return (
            <div>
                {this.q}
                {console.log(this.q)}
            </div>
        )
    }
}

export default Test