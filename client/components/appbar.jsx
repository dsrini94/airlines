import React from 'react';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Label,
  Dropdown
} from 'semantic-ui-react';

const trigger = (
  <Menu.Item as='a' style={{marginRight:"30px"}}>
    <Icon name='bell'/>
    <Label color='yellow' floating>22</Label>
  </Menu.Item>
)

const options = [
  { key: 'user', text: 'gowtham has tagged you and six others in this post gowtham has tagged you and six others in this post', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

export default class Appbar extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content'
    }
  }
  handleSiderbarVisiblity()
  {
    if (this.state.sidebarVisiblity)
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity,
        toggleIcon: 'content'
      })
    else
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity,
        toggleIcon: 'remove'
      })
  }
  render()
  {
    return (
      <div className="sidebar">
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical>
            <Menu.Item name='home' color='red'>
              <Icon name='home' color='red'/>
              Home
            </Menu.Item>
            <Menu.Item name='gamepad' color='red'>
              <Icon name='gamepad' color='red'/>
              Games
            </Menu.Item>
            <Menu.Item name='camera' color='red'>
              <Icon name='camera' color='red'/>
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher >
            <Segment basic style={{
              padding:"14px 0px"
            }}>
              <Menu secondary className='appbar' inverted  >
                <Menu.Item name='browse'>
                  <Icon name={this.state.toggleIcon} inverted style={{
                    marginLeft: '0px'
                  }} onClick={this.handleSiderbarVisiblity.bind(this)}/>
                </Menu.Item>
                <Menu.Item name='submit'>
                  Alex !
                </Menu.Item>
                <Menu.Menu position='right' style={{paddingRight:'10px'}}>
                  <Dropdown  trigger={trigger} options={options} pointing='top right' icon={null}/>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
