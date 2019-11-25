/* @flow */

import React, { Component } from "react";
import { Container, Button, Text, Icon, Right, Footer, FooterTab, 
  Badge } from "native-base";

class MainFooter extends Component {
  render() {
    return (
      <Container>
      
      <Footer>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              vertical
              badge
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="bulb" />
              <Text style={{fontSize:10}}>Notification</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('CreateTicket')}>
              <Icon name="hand" />
              <Text>Make Ticket</Text>
            </Button>
            
            <Button onPress={() => this.props.navigation.navigate('CallNurse')}>
              <Icon name="microphone" />
              <Text>Call Nurse</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="cog" />
              <Text>Settings</Text>
            </Button>
          
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

export default MainFooter;
