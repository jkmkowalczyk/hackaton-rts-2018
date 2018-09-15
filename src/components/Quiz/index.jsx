import React, {Component} from 'react';
import fire from '../../fire';


class Quiz extends Component {


    q;
    c;

    get = () => {
        fire.database().ref("tests/" + "test1").on("value", snapshot => {
            this.q = snapshot.val().pytania;
            this.c = snapshot.val().category;
        })
    };

    componentWillMount() {
        this.get()
    };


    render() {
        return (
            <div>
                {console.log(this.q)}
            </div>
        )
    }
}

export default Quiz