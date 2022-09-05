import React, { Component } from 'react';
import axios from 'axios';


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
        }
    }
    postPerson = async (e) => {
        const data = {
            'name': e.target.name.value,
            'age': e.target.age.value,
            'gender': e.target.gender.value,
        }
        const res = await axios.post('http://localhost:3000/person ', { data });
        this.setState({ age: res.data.age });
        console.log(res.data)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(
            {
                name: e.target.name.value,
                age: e.target.age.value,
                gender: e.target.gender.value
            }
        )
        // console.log(e.target.gender.value)
        this.postPerson(e)
    }


    // handlchangename = (e) => {
    //   this.setState({
    //     name: e.target.name.value,
    //   })
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2 data-testid='name' >Name </h2>
                    <input id='name' data-testid='name-input' type="text" />

                    <h2 data-testid='age'>Age </h2>
                    <input id='age' data-testid='age-input' type='number' />

                    <h2 data-testid='gender'>Gender </h2>
                    <input id='gender' data-testid='gender-input' type="text" />

                    <button type="submit"> Submit</button>
                </form>

                <p> My Name is {this.state.name}</p>
                <p> My Age is {this.state.age}</p>
                <p> My Gender is {this.state.gender}</p>

            </div>
        );
    }
}

export default Person;