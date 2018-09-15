import React, { Component } from 'react';

export default class CategoryList extends Component
{
    CheckInput(e)
    {
        if(e.target.selectedIndex === 0)
            e.target.style.borderColor = "red";
        else
            e.target.style.borderColor = "#dddddd";
    }

    render()
    {
        return(
            <select className="category-select" onBlur={e => this.CheckInput(e)}>
                <option value="">Wybierz kategorię...</option>
                <option value="Literatura">Literatura</option>
                <option value="Fizyka">Fizyka</option>
                <option value="Matematyka">Matematyka</option>
                <option value="Historia">Historia</option>
            </select>
        );
    }
}