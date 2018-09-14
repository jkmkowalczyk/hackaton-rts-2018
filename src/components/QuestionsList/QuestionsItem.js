import React, { Component } from 'react';

export default class QuestionsItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            array: [<input key={"pyt"+this.props.Key} onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz pytanie...")} placeholder="Wpisz pytanie..."></input>,
                <input onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź a...")} key={"odpa"+this.props.Key} placeholder="Wpisz odpowiedź a..."></input>,
                <input onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź b...")} key={"odpb"+this.props.Key} placeholder="Wpisz odpowiedź b..."></input>,
                <input onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź c...")} key={"odpc"+this.props.Key} placeholder="Wpisz odpowiedź c..."></input>,
                <input onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Wpisz odpowiedź d...")} key={"odpd"+this.props.Key} placeholder="Wpisz odpowiedź d..."></input>,
                <input onFocus={this.OnInput} onBlur={(e) => this.OnInputBlur(e, "Podaj literę prawidłowej odpowiedzi...")} key={"odp"+this.props.Key} placeholder="Podaj literę prawidłowej odpowiedzi..."></input>]
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


    render()
    {
        return(
            <div>
                {this.state.array}
            </div>
        );
    }
}