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
    Link to = { "/edit/" + props.Service._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteService(props.Service._id) }}>Delete</a > </
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
            Service: this.state.Service.filter(el => el.ServiceName = searchKey)
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
    Report (){ window.print();}

    render() {
        return ( <
            div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > Service Report </h4> </
            div > </
            div>

            <
            table class="table table-bordered table-black" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Service ID </th> <
            th > Service Name </th> <
            th > Package Type </th> <
            th > Price </th> <
            th > Number Of People </th> </
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
                    td > { props.NumberOfPeople } </td>   
                    

                    </tr>
                )

            }

            </tbody> </table >

            <div className = "container" >
           
            
            <input type = "Button"
            onClick = { this.Report }
            value = "Print This Report"
            className = "btn btn-danger"/>
            </div>

            </div>
        )
    }
}
