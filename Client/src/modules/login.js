import React from 'react';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: null,
            password :null,
            role:null
        }
    }
    
    // collect data from input
    handleInput(e){
        let target = e.target.name;
        let value =e.target.value;
        this.state[target]=value;
    }
    // submit a form
    handleSubmit(e){
        e.preventDefault();
    }
    

    render(){
        return(
            <div className="modal-body lbody">
                <form className="loginPage">
                    <div className="form-group form-group-lg">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control"  placeholder="Enter email" name="email" onChange={this.handleInput.bind(this)} required/>
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control"  placeholder="Enter password" name="password" onChange={this.handleInput.bind(this)} required/>
                    </div>
                <div className="form-group form-group-lg">
                   <div className="row">
                       <div className="col-md-3">
                         <label htmlFor="role" className="form-check-label" >Role</label>
                         </div>
                         <div className="col-md-4">
                         <input type="radio" className="form-check-input" name="role" value="student" onChange={this.handleInput.bind(this)}  />
                          <label htmlFor="role" className="form-check-label" >Student</label>
                            
                          </div>
                          <div className="col-md-4">
                              <input type="radio" className="form-check-input" value="teacher" onChange={this.handleInput.bind(this)} name="role" />
                            <label htmlFor="role" className="form-check-label" >Teacher</label>                            
                            </div>
                    </div>
                
                </div>
                    <button  className="btn btn-success" id="logbtn" onClick={this.handleSubmit.bind(this)}>Login</button>
                </form>
            </div>
        )
    }
} 