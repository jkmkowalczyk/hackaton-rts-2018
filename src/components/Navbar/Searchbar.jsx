import {AutoComplete} from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import data from '../../test-list';
import './Navbar.css';


class Searchbar extends Component {

    state = {
        testList: []
    };

    loadTests = () => {
        this.setState({testList: data});
    };


    componentWillMount() {
        this.loadTests();
    }

    render() {
        return (
            <div className="searchbar-container">
                <AutoComplete
                    style={{width: 300}}
                    dataSource={this.state.testList}
                    placeholder="znajdź test"
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    autoFocus={true}
                />
            </div>
        )
    }
}

export default Searchbar