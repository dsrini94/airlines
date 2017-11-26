import React from 'react';
import {Divider,Dropdown,Icon, Input, Grid, Button, Form} from 'semantic-ui-react';


const titleOptions = [
  { key: 'mr', text: 'Mr', value: 'Mr' },
  { key: 'mrs', text: 'Mrs', value: 'Mrs' },
  { key: 'miss', text: 'Miss', value: 'Miss' },
  { key: 'ms', text: 'Ms', value: 'Ms' },
  { key: 'Mstr', text: 'Mstr', value: 'Mstr' },
  { key: 'capt', text: 'Capt', value: 'Capt' },
  { key: 'prof', text: 'Prof', value: 'Prof' },
  { key: 'Dr', text: 'Dr', value: 'Dr' },
  { key: 'Lady', text: 'Lady', value: 'Lady' },
  { key: 'Lord', text: 'Lord', value: 'Lord' },
  { key: 'Hon', text: 'The Rt Hon', value: 'The Rt Hon' },
  { key: 'rabbi', text: 'Rabbi', value: 'Rabbi' },
  { key: 'rev', text: 'Rev', value: 'Rev' },
  { key: 'sir', text: 'Sir', value: 'Sir' },
  { key: 'bar', text: 'Baroness', value: 'Baroness' },
  { key: 'baron', text: 'Baron', value: 'Baron' },
  { key: 'vis', text: 'Viscount', value: 'Viscount' },
  { key: 'Vis', text: 'Viscountess', value: 'Viscountess' },
]

const genderOptions = [
  { key: 'm', text: 'Male', value: 'Male' },
  { key: 'f', text: 'Female', value: 'Female' },
  { key: 't', text: 'Transgender', value: 'Transgender' },
]

export default class RegisterPage extends React.Component
{
  render()
  {
    return (
      <div style={{overflow:'hidden'}}>
        <div className="registerPage">
          <Grid >
            <Grid.Row only='mobile'>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                <center>
                  <br/>
                  <span className="companyName">Register</span>
                  <br/>
                  <br/>
                  <br/>
                  <span className="subHeaders">Personal Information</span>
                  <br/>
                  <br/>
                  <Dropdown placeholder='Title' fluid selection options={titleOptions} />
                  <br/>
                  <Input fluid icon='user' iconPosition='left' placeholder='First Name as on your passport'/>
                  <br/>
                  <Input fluid icon='user' iconPosition='left' placeholder='Last Name as on your passport'/>
                  <br/>
                  <Input fluid icon='mail' iconPosition='left' placeholder='Email adress'/>
                  <br/>
                  <Input fluid icon='birthday' iconPosition='left' placeholder='DOB'/>
                  <br/>
                  <Dropdown placeholder='Gender' fluid selection options={genderOptions} />
                  <br/>
                  <Input fluid icon='mobile' iconPosition='left' placeholder='Phone no'/>
                  <br/>
                  <Input fluid icon='birthday' iconPosition='left' placeholder='passport no'/>
                  <br/>
                  <Input fluid icon='lock' iconPosition='left' placeholder='password'/>
                  <br/>
                  <Input fluid icon='lock' iconPosition='left' placeholder='confirm password'/>
                  <br/>
                   <span className="subHeaders">Address Details</span>
                   <br/>
                   <br/>
                   <Input fluid icon='home' iconPosition='left' placeholder='Address line 1'/>
                   <br/>
                   <Input fluid icon='home' iconPosition='left' placeholder='Address line 2'/>
                   <br/>
                   <Input fluid icon='home' iconPosition='left' placeholder='Address line 3'/>
                   <br/>
                   <Input fluid icon='map signs' iconPosition='left' placeholder='Town / City'/>
                   <br/>
                   <Input fluid icon='world' iconPosition='left' placeholder='Country / State'/>
                   <br/>
                   <Input fluid icon='map pin' iconPosition='left' placeholder='zip code'/>
                   <br/>
                </center>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div>
        <br/>
        <br/>
          <center>
            <Button size='huge' inverted animated style={{backgroundColor:'#F22731'}}>
              <Button.Content visible><span className="companyName">Register</span></Button.Content>
              <Button.Content hidden>
                <Icon inverted name='right arrow'/>
              </Button.Content>
            </Button>
            <br/>
          </center>
        </div>
      </div>
    )
  }
}
