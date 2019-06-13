import React, { Component } from 'react'
import TodoInput from './InsidePage/TodoInput';
import TodoList from './InsidePage/TodoList';

import uuid from 'uuid';

export class ProjectThreeMain extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    };
    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id:this.state.id,
            title:this.state.item
        };

        console.log(newItem);


        const updatedItems = [...this.state.items,newItem];

        this.setState({
            items:updatedItems,
            item:'',
            id:uuid(),
            editItem:false
        });
    };

    clearList = ()=>{
        this.setState({
            items:[]
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 mx-auto mt-4">
                        <h3 className="text-capitalize text-center">todo input</h3>
                        <TodoInput 
                            item={this.state.item} 
                            handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit} 
                        />
                        <TodoList items={this.state.items} clearList={this.clearList} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectThreeMain;
