import React, { Component } from 'react';
import CategoryList from './CategoryList'
import QuestionsItem from './QuestionsItem'

import './QuestionsList.css';

export default class QuestionsList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
          questions: <QuestionsItem key={"question1"} Key={1}/>,
          array: [],
          i: 2
        };
    }

    BtnClick(e)
    {
        if(document.getElementById("pyt"+(this.state.i-1).toString()).value !== '' &&
            document.getElementById("odpa"+(this.state.i-1).toString()).value !== '' &&
            document.getElementById("odpb"+(this.state.i-1).toString()).value !== '' &&
            document.getElementById("odpc"+(this.state.i-1).toString()).value !== '' &&
            document.getElementById("odpd"+(this.state.i-1).toString()).value !== '' &&
            document.getElementById("odp"+(this.state.i-1).toString()).value !== ''
        )
        {
            this.state.array.push({pyt: document.getElementById("pyt"+(this.state.i-1).toString()).value,
                odpa: document.getElementById("odpa"+(this.state.i-1).toString()).value,
                odpb: document.getElementById("odpa"+(this.state.i-1).toString()).value,
                odpc: document.getElementById("odpa"+(this.state.i-1).toString()).value,
                odpd: document.getElementById("odpa"+(this.state.i-1).toString()).value,
                odp: document.getElementById("odpa"+(this.state.i-1).toString()).value});
            this.setState({questions: <QuestionsItem key={"question"+this.state.i} Key={this.state.i}/>});
            this.state.i=this.state.i+1;
            document.querySelector(".category-select").disabled = true;
        }
    }

    render()
    {
        return(
            <div className="wrapper">
                <CategoryList/>
                {this.state.array.map(i => {if(i)return (<div className="questions-submited">
                    <div className="q-submited">Pytanie: {i.pyt}</div>
                    <div className="q-submited">Odpowiedź A: {i.odpa}</div>
                    <div className="q-submited">Odpowiedź B: {i.odpb}</div>
                    <div className="q-submited">Odpowiedź C: {i.odpc}</div>
                    <div className="q-submited">Odpowiedź D: {i.odpd}</div>
                    <div className="q-submited">Odpowiedź Prawidłowa: {i.odp}</div>
                   </div>)})}
                <div className="questions-container">{this.state.questions}</div>
                <button id="next-btn" onClick={this.BtnClick.bind(this)}>Następny</button>
            </div>
        );
    }
}