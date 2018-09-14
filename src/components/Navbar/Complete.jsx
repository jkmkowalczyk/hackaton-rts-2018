import {AutoComplete} from 'antd';
import * as React from "react";
import 'antd/dist/antd.css';

function onSelect(value) {
    console.log('onSelect', value);
}

class Complete extends React.Component {
    state = {
        dataSource: ["backbone"],
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : ["datasou"
            ],
        });
    };

    render() {
        const {dataSource} = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                style={{width: 200}}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            />
        );
    }
}

export default Complete