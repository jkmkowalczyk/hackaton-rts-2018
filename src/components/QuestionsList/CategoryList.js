import React, { Component } from 'react';

export default class CategoryList extends Component
{
    render()
    {
        return(
            <select className="category-select">
                <option value="Literatura">Literatura</option>
                <option value="Fizyka">Fizyka</option>
                <option value="Matematyka">Matematyka</option>
                <option value="Historia">Historia</option>
            </select>
        );
    }
}