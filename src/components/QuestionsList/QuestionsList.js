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
        let temp = document.getElementById("pyt"+(this.state.i-1).toString()).value;
        let temp2 = document.getElementById("odpa"+(this.state.i-1).toString()).value;
        let temp3 = document.getElementById("odpb"+(this.state.i-1).toString()).value;
        let temp4 = document.getElementById("odpc"+(this.state.i-1).toString()).value;
        let temp5 = document.getElementById("odpd"+(this.state.i-1).toString()).value;
        let temp6 = document.getElementById("odp"+(this.state.i-1).toString()).innerText;
        if(temp !== '' &&
            temp2 !== '' &&
            temp3 !== '' &&
            temp4 !== '' &&
            temp5 !== '' &&
            temp6 !== ''
        )
        {
            this.state.array.push({pyt: temp,
                odpa: temp2,
                odpb: temp3,
                odpc: temp4,
                odpd: temp5,
                odp: temp6});
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
                {this.state.array.map(i => {if(i)return (<div key={"qs"+this.state.i} className="questions-submited">
                    <div key={"op"+this.state.i} className="q-submited">Pytanie: {i.pyt}</div>
                    <div key={"oa"+this.state.i} className="q-submited">Odpowiedź A: {i.odpa}</div>
                    <div key={"ob"+this.state.i} className="q-submited">Odpowiedź B: {i.odpb}</div>
                    <div key={"oc"+this.state.i} className="q-submited">Odpowiedź C: {i.odpc}</div>
                    <div key={"od"+this.state.i} className="q-submited">Odpowiedź D: {i.odpd}</div>
                    <div key={"a"+this.state.i} className="q-submited">Odpowiedź Prawidłowa: {i.odp}</div>
                   </div>)})}
                <div className="questions-container">{this.state.questions}</div>
                <button id="next-btn" onClick={this.BtnClick.bind(this)}>Następny</button>
            </div>
        );
    }
}