import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Service = props => ( <
    tr >
    <
    td > { props.Service.ServiceID } </td> <
    td > { props.Service.ServiceName } </td> <
    td > { props.Service.PackageType } </td> <
    td > { props.Service.Price } </td> <
    td > { props.Service.NumberOfPeople } </td> <
    td >
    <
    Link to = { "/update/" + props.Service._id } > Update </Link> | <a href=" " onClick={() => { props.deleteService(props.Service._id) }}>Delete</a > </
    td > </tr> 
)

export default class ServiceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Service: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/Service/')
            .then(response => {
                this.setState({ Service: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Service/')
            .then(response => {
                this.setState({ Service: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteService(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Service/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Service: this.state.Service.filter(el => el._id !== id)
            })
        }
    }

    ServiceList() {
        return this.state.Service.map(currentService => {
            return <Service Service = { currentService }
            deleteService = { this.deleteService }
            key = { currentService._id }
            />;
        })
    }

    filterData(Service, searchKey) {

        this.setState({
            Service: this.state.Service.filter(el => el.CompanyName = searchKey)
        })

    }




    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Service/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.ServiceName.includes(searchKey)
            )

            this.setState({ Service: result })

        });

    }

    render() {
        return ( <
            div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <
            div className = "coloumn" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > All Service </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by Service Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>

            <
            table class="table table-bordered table-white" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Service ID </th> <
            th > Service Name </th> <
            th > Package Type </th> <
            th > Price </th> <
            th > Number Of People </th> <
            th > Actions </th> </
            tr > </
            thead> <
            tbody >
            
             {
                this.state.Service.map(props =>
                    <
                    tr key = { props.ServiceID } >
                    
                    <td > { props.ServiceID } </td>  <
                    td > { props.ServiceName } </td>  <
                    td > { props.PackageType } </td>  <
                    td > { props.Price } </td>  < 
                    td > { props.NumberOfPeople } </td>  <    

                    td >
                    <
                    Link to = { "/update/" + props._id } >  <Button variant = "warning btn-sm"> Update </Button> </Link>  
                    <a href="" onClick={() => { this.deleteService(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </
                    td >

                    </tr>
                )

            }

            </tbody> </
            table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/create" >
            <button type="button" class="btn btn-success" variant = "primary" > New Service </button>
            </
            Link >
            </div>

            </div>
        )
    }
}

