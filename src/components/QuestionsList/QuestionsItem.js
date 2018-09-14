import React, { Component } from 'react';

export default class QuestionsItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            clicked: '',
            array: [
                <input id={"pyt"+this.props.Key} key={"pyt"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz pytanie...")} placeholder="Wpisz pytanie..."></input>,
                <form>
                    <div className="input-box">
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} key={"ra"+this.props.Key} value="A" name="answer"></input>
                        <input id={"odpa"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź a...")} key={"odpa"+this.props.Key} placeholder="Wpisz odpowiedź a..."></input>
                    </div>
                    <div className="input-box">
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="B" name="answer" key={"rb"+this.props.Key}></input>
                        <input id={"odpb"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź b...")} key={"odpb"+this.props.Key} placeholder="Wpisz odpowiedź b..."></input>
                    </div>
                    <div className="input-box">
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="C" name="answer" key={"rc"+this.props.Key}></input>
                        <input id={"odpc"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź c...")} key={"odpc"+this.props.Key} placeholder="Wpisz odpowiedź c..."></input>
                    </div>
                    <div className="input-box">
                        <input type="radio" onClick={this.OnRadioClick.bind(this)} value="D" name="answer" key={"rd"+this.props.Key}></input>
                        <input id={"odpd"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź d...")} key={"odpd"+this.props.Key} placeholder="Wpisz odpowiedź d..."></input>
                    </div>
                </form>,
                <div>Prawidłowa odpowiedź: </div>],
            lastClicked: null
        };
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
        if(this.state.lastClicked) this.state.lastClicked.style.borderColor = "#dddddd";
        this.setState({array: [
        <input id={"pyt"+this.props.Key} key={"pyt"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz pytanie...")} placeholder="Wpisz pytanie..."></input>,
        <form>
            <div className="input-box">
                <input type="radio" onClick={this.OnRadioClick.bind(this)} key={"ra"+this.props.Key} value="A" name="answer"></input>
                <input id={"odpa"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź a...")} key={"odpa"+this.props.Key} placeholder="Wpisz odpowiedź a..."></input>
            </div>
            <div className="input-box">
                <input type="radio" onClick={this.OnRadioClick.bind(this)} value="B" name="answer" key={"rb"+this.props.Key}></input>
                <input id={"odpb"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź b...")} key={"odpb"+this.props.Key} placeholder="Wpisz odpowiedź b..."></input>
            </div>
            <div className="input-box">
                <input type="radio" onClick={this.OnRadioClick.bind(this)} value="C" name="answer" key={"rc"+this.props.Key}></input>
                <input id={"odpc"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź c...")} key={"odpc"+this.props.Key} placeholder="Wpisz odpowiedź c..."></input>
            </div>
            <div className="input-box">
                <input type="radio" onClick={this.OnRadioClick.bind(this)} value="D" name="answer" key={"rd"+this.props.Key}></input>
                <input id={"odpd"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź d...")} key={"odpd"+this.props.Key} placeholder="Wpisz odpowiedź d..."></input>
            </div>
        </form>,
        <div>Prawidłowa odpowiedź: {e.target.value}</div>]});
        e.target.nextElementSibling.style.borderColor = "green";
        this.state.lastClicked=e.target.nextElementSibling;
    }

    render()
    {
        return this.state.array;
    }
}