---
title: "Using Apex Services from Your Container"
domain: lightning
topic: using-apex-services-from-your-container
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.503Z
estimatedTokens: 215
keywords: [Apex, Services, Container, lightning-container, NPM, module, call, Lightning, component]
---

# Using Apex Services from Your Container

> Use the lightning-container NPM module to call
    Apex methods from your Lightning container component.

# Using Apex Services from Your Container

Use the lightning-container NPM module to call Apex methods from your Lightning container component.

To call Apex methods from lightning:container, you must set the CSP level to low in the manifest.json file. A CSP level of low allows the Lightning container component load resources from outside of the Lightning domain.

This is an Aura component that includes a Lightning container component that uses Apex services:

```

```

This is the component’s controller:

```

```

There’s not a lot going on in the component’s JavaScript controller—the real action is in the JavaScript app, uploaded as a static resource, that the Lightning container references.

```

```

The first function, callApex(), uses the LCC.callApex method to call getAccount, an Apex method that gets and displays an account’s information.

## Code Examples

```apex
<aura:component access="global" implements="flexipage:availableForAllPageTypes">

    <aura:attribute access="private" name="error" type="String" default=""/>

    <div>
        <aura:if isTrue="{! !empty(v.error)}">
            <lightning:textarea name="errorTextArea" value="{!v.error}" label="Error: "/>
        </aura:if>

        <lightning:container aura:id="ReactApp"
                             src="/ApexController/index.html"
                             onerror="{!c.handleError}"/>
    </div>

</aura:component>
```

```
({
    handleError: function(component, error, helper) {
        var description = error.getParams().description;
        component.set("v.error", description);
    }
})
```

```
import React, { Component } from 'react';
import LCC from "lightning-container";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  callApex() {
    LCC.callApex("lcc1.ApexController.getAccount",
                 this.state.name,
                 this.handleAccountQueryResponse,
                 {escape: true});
  }

  handleAccountQueryResponse(result, event) {
    if (event.status) {
      this.setState({account: result});
    }
    else if (event.type === "exception") {
      console.log(event.message + " : " + event.where);
    }
  }

  render() {
    var account = this.state.account;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LCC</h2>
        </div>
        <p className="App-intro">
          Account Name: <input type="text" id="accountName" value={this.state.name} onChange={e => this.onAccountNameChange(e)}/><br/>
          <input type="submit" value="Call Apex Controller" onClick={this.callApex}/><br/>
          Id: {account.Id}<br/>
          Phone: {account.Phone}<br/>
          Type: {account.Type}<br/>
          Number of Employees: {account.NumberOfEmployees}<br/>
        </p>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      account: {}
    };

    this.handleAccountQueryResponse = this.handleAccountQueryResponse.bind(this);
    this.onAccountNameChange = this.onAccountNameChange.bind(this);
    this.callApex = this.callApex.bind(this);
  }

  onAccountNameChange(e) {
    this.setState({name: e.target.value});
  }
}

export default App;
```
