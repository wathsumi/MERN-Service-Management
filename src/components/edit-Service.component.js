import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditService extends Component {
    constructor(props) {
        super(props);

        this.onChangeServiceID = this.onChangeServiceID.bind(this);
        this.onChangeServiceName = this.onChangeServiceName.bind(this);
        this.onChangePackageType  = this.onChangePackageType .bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ServiceID: '',
            ServiceName: '',
            PackageType : '',
            PostalCode: '',
            Email: '',
            Description: '',
            Materials: '',
            Service: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Service/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ServiceID: response.data.ServiceID,
                    PackageType : response.data.PackageType ,
                    ServiceName: response.data.ServiceName,
                    PostalCode: response.data.PostalCode,
                    Email: response.data.Email,
                    Description: response.data.Description,
                    Materials: response.data.Materials,
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

    //set the PackageType 
    onChangePackageType (e) {
        this.setState({
            PackageType : e.target.value
        })
    }

    //set ServiceName
    onChangeServiceName(e) {
        this.setState({
            ServiceName: e.target.value
        })
    }

   

    //set PostalCode
    onChangePostalCode(e) {
        this.setState({
            PostalCode: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

     //set Description
     onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }

    //Set Materials
    onChangeMaterials(e) {
        this.setState({
            Materials: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Service = {
            ServiceID: this.state.ServiceID,
            ServiceName: this.state.ServiceName,
            PackageType : this.state.PackageType ,
            PostalCode: this.state.PostalCode,
            Email: this.state.Email,
            Description: this.state.Description,
            Materials: this.state.Materials

        }

        console.log(Service);

        axios.post('http://localhost:5000/Service/update/' + this.props.match.params.id, Service)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/';
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Edit Service</font> </h3 >  
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
            <label > Company Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "EnterCompany Name"
            value = { this.state.ServiceName }
            onChange = { this.onChangeServiceName }/> </div > 
             <div className = "form-group" >
            <label > PackageType : </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter PackageType "
            //maxlength = "10"
            value = { this.state.PackageType  }
            onChange = { this.onChangePackageType  }/>
            </div > 
             <div className = "form-group" >
            <label > Posta Code: </label>
             <input type = "text"
            className = "form-control"
            placeholder = "Enter PostalCode"
            value = { this.state.PostalCode }
            onChange = { this.onChangePostalCode }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Email: </label> <
            input type = "email"
            required className = "form-control"
            placeholder = "Enter an Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>  </div> 

            <div className = "form-group" >
            <label > Brief Description of company: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter a Brief Description of company"
            value = { this.state.Description }
            onChange = { this.onChangeDescription }/>  </div>

            <div className = "form-group" >
            <label > SupplyMaterials And goods: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter an SupplyMaterials And goods"
            value = { this.state.Materials }
            onChange = { this.onChangeMaterials }/>  </div>

            
            
            
            
            </div > <div className = "form-group" >
            <input type = "submit"
            value = "Edit"
            className = "btn btn-primary" />
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}




