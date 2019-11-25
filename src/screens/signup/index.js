/* @flow */

import React, { Component } from 'react';
import { 
  Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon, Text, Form, Item, 
  Label, Input, Picker, DatePicker } from 'native-base';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: undefined
     };
    this.setDate = this.setDate.bind(this);
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container>
        <Header noLeft>
          <Left />
          <Body>
            <Title>New Patient Registration</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text>Sign IN</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>First Name</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Phone</Label>
              <Input keyboardType = 'numeric' />
            </Item>

            <Item fixedLabel picker style={{paddingLeft: 18}}>
              <Label>Title</Label>
                <Picker 
                mode="dropdown"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                >
                  <Item label="Mr." value="key0" />
                  <Item label="Ms." value="key1" />
                  <Item label="None" value="key2" />
                </Picker>
            </Item>

            <Item fixedLabel>
              <Label>Date of Birth</Label>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
                textStyle={{ color: "green" }}
                onDateChange={this.setDate}
                maximumDate={new Date(2018, 12, 31)}
              />
            </Item>

            <Item fixedLabel>
              <Label>Address</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Primary Care Giver Name</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Primary Care Giver Number</Label>
              <Input keyboardType = 'numeric'/>
            </Item>

            <Item fixedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>

          <Button block info style={{marginTop: 15}} 
          onPress={() => this.props.navigation.navigate('HospitalAdmission')}>
              <Text>Register</Text>
           </Button>

        </Content>

      </Container>
    );
  }
}
