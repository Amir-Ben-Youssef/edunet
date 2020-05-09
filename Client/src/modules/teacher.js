import React from 'react';
import {Link} from 'react-router-dom';

let courses = [{name : 'Mekla', id:0}, {name : 'Noum', id:1}]


export default class Teacher extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            id : props.match.params.id,
            data : null
        }
        this.fetchData();
        console.log(props.match.params.id)
    }

    fetchData(){
        fetch(`http://localhost:8080/teachers/${this.state.id}`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data => {
            this.setState({
                data : JSON.parse(data)
            })
        })
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img className='card-img-top' src={this.state.data !== null ? this.state.data.photo : ''}></img>
                        <div className='card-body'>
                            <h4 className='card-title'>{this.state.data !== null ? (this.state.data.first_name + ' ' +this.state.data.last_name)  : ''}</h4>
                            <p className='card-text'>{this.state.data !== null ? this.state.data.email  : ''}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Teacher Courses</h2>
                            {courses.map((element, index)=>{
                                return(
                                    <div className='row' key ={index}>
                                        <div className='col-md'>
                                            <Link to={'/course/'+element.id}><h4>{element.name}</h4></Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}