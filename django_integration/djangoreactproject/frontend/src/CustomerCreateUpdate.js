import React, { Component } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

class CustomerCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk) {
            customersService.getCustomer(params.pk).then((c)=>{
                this.myRef.firstName.value = c.first_name;
                this.myRef.lastName.value = c.last_name;
                this.myRef.email.value = c.email;
                this.myRef.phone.value = c.phone;
                this.myRef.address.value = c.address;
                this.myRef.description.value = c.description;
            })
        }
      }

    handleCreate(){
        customersService.createCustomer(
            {
                "first_name": this.myRef.firstName.value,
                "last_name": this.myRef.lastName.value,
                "email": this.myRef.email.value,
                "phone": this.myRef.phone.value,
                "address": this.myRef.address.value,
                "description": this.myRef.description.value
            }          
        ).then((result)=>{
            alert("Customer created!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }
    
    handleUpdate(pk){
        customersService.updateCustomer(
            {
                "pk": pk,
                "first_name": this.myRef.firstName.value,
                "last_name": this.myRef.lastName.value,
                "email": this.myRef.email.value,
                "phone": this.myRef.phone.value,
                "address": this.myRef.address.value,
                "description": this.myRef.description.value
            }          
        ).then((result)=>{
            console.log(result);
            alert("Customer updated!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }
    
    handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
            this.handleUpdate(params.pk);
        }
        else {
            this.handleCreate();
        }

        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" type="text" ref='firstName' />

            <label>
              Last Name:</label>
              <input className="form-control" type="text" ref='lastName'/>

            <label>
              Phone:</label>
              <input className="form-control" type="text" ref='phone' />

            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />

            <label>
              Address:</label>
              <input className="form-control" type="text" ref='address' />

            <label>
              Description:</label>
              <textarea className="form-control" ref='description' ></textarea>


            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
    }  
}

export default CustomerCreateUpdate;