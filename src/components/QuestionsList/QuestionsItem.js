import React, { Component } from 'react';

export default class QuestionsItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            clicked: '',
            array: [
                <input id={"pyt"+this.props.Key} key={"pyt"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz pytanie...");this.CheckInput(e);}} placeholder="Wpisz pytanie..."></input>,
                <form className="form-input" key={"f"+this.props.Key}>
                    <div className="input-box" key={"a"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} key={"ra"+this.props.Key} value="A" name="answer"></input>
                        <input id={"odpa"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź a...");this.CheckInput(e);}} key={"odpa"+this.props.Key} placeholder="Wpisz odpowiedź a..."></input>
                    </div>
                    <div className="input-box" key={"b"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="B" name="answer" key={"rb"+this.props.Key}></input>
                        <input id={"odpb"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź b...");this.CheckInput(e);}} key={"odpb"+this.props.Key} placeholder="Wpisz odpowiedź b..."></input>
                    </div>
                    <div className="input-box" key={"c"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="C" name="answer" key={"rc"+this.props.Key}></input>
                        <input id={"odpc"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź c...");this.CheckInput(e);}} key={"odpc"+this.props.Key} placeholder="Wpisz odpowiedź c..."></input>
                    </div>
                    <div className="input-box" key={"d"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="D" name="answer" key={"rd"+this.props.Key}></input>
                        <input id={"odpd"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź d...");this.CheckInput(e);}} key={"odpd"+this.props.Key} placeholder="Wpisz odpowiedź d..."></input>
                    </div>
                </form>,
                <div  key={"p"+this.props.Key}>Prawidłowa odpowiedź: <p id={"odp"+this.props.Key} key={"ans"+this.props.Key}></p></div>],
            lastClicked: null
        };
    }

    CheckInput(e)
    {
        if(e.target.value !== '')e.target.style.borderColor="#dddddd";
        else e.target.style.borderColor="red";
    }

    OnInput(e)
    {
        e.target.placeholder = "";
    }

    OnInputBlur(e, str)
    {
        e.target.placeholder = str;
    }

    OnRadioClick(e)
    {
        if(this.state.lastClicked) if(this.state.lastClicked.value !== '')this.state.lastClicked.style.borderColor = "#dddddd";
        else this.state.lastClicked.style.borderColor = "red";
        this.setState({array: [
                <input id={"pyt"+this.props.Key} key={"pyt"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz pytanie...");this.CheckInput(e);}} placeholder="Wpisz pytanie..."></input>,
                <form className="form-input" key={"f"+this.props.Key}>
                    <div className="input-box" key={"a"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} key={"ra"+this.props.Key} value="A" name="answer"></input>
                        <input id={"odpa"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź a...");this.CheckInput(e);}} key={"odpa"+this.props.Key} placeholder="Wpisz odpowiedź a..."></input>
                    </div>
                    <div className="input-box" key={"b"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="B" name="answer" key={"rb"+this.props.Key}></input>
                        <input id={"odpb"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź b...");this.CheckInput(e);}} key={"odpb"+this.props.Key} placeholder="Wpisz odpowiedź b..."></input>
                    </div>
                    <div className="input-box" key={"c"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="C" name="answer" key={"rc"+this.props.Key}></input>
                        <input id={"odpc"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź c...");this.CheckInput(e);}} key={"odpc"+this.props.Key} placeholder="Wpisz odpowiedź c..."></input>
                    </div>
                    <div className="input-box" key={"d"+this.props.Key}>
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="D" name="answer" key={"rd"+this.props.Key}></input>
                        <input id={"odpd"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => {this.OnInputBlur(e, "Wpisz odpowiedź d...");this.CheckInput(e);}} key={"odpd"+this.props.Key} placeholder="Wpisz odpowiedź d..."></input>
                    </div>
                </form>,
                <div  key={"p"+this.props.Key}>Prawidłowa odpowiedź: <p id={"odp"+this.props.Key} key={"ans"+this.props.Key}>{e.target.value}</p></div>]});
        e.target.nextElementSibling.style.borderColor = "green";
        this.state.lastClicked=e.target.nextElementSibling;
    }


    render()
    {
        return this.state.array;
    }
}