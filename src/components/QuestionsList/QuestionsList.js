import React, { Component } from 'react';
import CategoryList from './CategoryList'
import QuestionsItem from './QuestionsItem'

export default class QuestionsList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
          array: [],
          i: 1
        };
}

    BtnClick()
    {
        this.state.array.push(<QuestionsItem key={this.state.i++} Key={this.state.i++}/>);
        this.setState({array: [this.state.array]});
    }

    render()
    {
        return(
            <div>
                <CategoryList/>
                {this.state.array}
                <button onClick={this.BtnClick.bind(this)}>Click</button>
            </div>
        );
    }
}