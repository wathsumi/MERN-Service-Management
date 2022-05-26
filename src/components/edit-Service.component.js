import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditService extends Component {
    constructor(props) {
        super(props);

        this.onChangeServiceID = this.onChangeServiceID.bind(this);
        this.onChangeServiceName = this.onChangeServiceName.bind(this);
        this.onChangePackageType = this.onChangePackageType.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeNumberOfPeople = this.onChangeNumberOfPeople.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ServiceID: '',
            ServiceName: '',
            PackageType: '',
            Price: '',
            NumberOfPeople: '',
            Service: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Service/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ServiceID: response.data.ServiceID,
                    ServiceName: response.data.ServiceName,
                    PackageType: response.data.PackageType,
                    Price: response.data.Price,
                    NumberOfPeople: response.data.NumberOfPeople,
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Service/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Service: response.data.map(Service => Service.ServiceName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //set the ServiceID 
    onChangeServiceID(e) {
        this.setState({
            ServiceID: e.target.value
        })
    }

    //set ServiceName
    onChangeServiceName(e) {
        this.setState({
            ServiceName: e.target.value
        })
    }

    //set the PackageType
    onChangePackageType(e) {
        this.setState({
            PackageType: e.target.value
        })
    }

     //Set Price
     onChangePrice(e) {
        this.setState({
            Price: e.target.value
        })
    }

    //set NumberOfPeople
    onChangeNumberOfPeople(e) {
        this.setState({
            NumberOfPeople: e.target.value
        })
    }

   


    onSubmit(e) {
        e.preventDefault();

        const Service = {
            ServiceID: this.state.ServiceID,
            ServiceName: this.state.ServiceName,
            PackageType: this.state.PackageType,
            Price: this.state.Price,
            NumberOfPeople: this.state.NumberOfPeople,
            

        }

        console.log(Service);

        axios.post('http://localhost:5000/Service/update/' + this.props.match.params.id, Service)
            .then(res => console.log(res.data));
        alert("Update Successfully")
        window.location = '/';
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://ece.emory.edu/_includes/images/sections/programs/Events-Intro-Card.jpg "
            width = "90%"
            height = "60% " />
            </div> <div class = "col-12" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Update Service</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Service ID: </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Service ID"
            value = { this.state.ServiceID }
            onChange = { this.onChangeServiceID }/>
             </div >
             
              <div className = "form-group" >
            <label > Service Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Service Name"
            value = { this.state.ServiceName }
            onChange = { this.onChangeServiceName }/> </div > 
             <div className = "form-group" >
            <label > Package Type: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Package Type"
            //maxlength = "10"
            value = { this.state.PackageType }
            onChange = { this.onChangePackageType }/>
            </div > 
             <div className = "form-group" >
            <label > Price: </label>
             <input type = "Number"
            className = "form-control"
            placeholder = "Enter Price"
            value = { this.state.Price }
            onChange = { this.onChangePrice }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Number Of People: </label> <
            input type = "Number"
            required className = "form-control"
            placeholder = "Enter Number Of People "
            value = { this.state.NumberOfPeople }
            onChange = { this.onChangeNumberOfPeople }/>  </div> 
            
            
            </div > <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary" /> 
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}


