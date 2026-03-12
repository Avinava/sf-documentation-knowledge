---
title: "LWC Methods for Enhanced Messaging in Lightning Experience"
domain: service-cloud
topic: lwc-methods-for-enhanced-messaging-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.195Z
estimatedTokens: 1131
keywords: [LWC, Enhanced, Messaging, Lightning, Experience, Conversation, Toolkit, API, interact, customer, web, component, apply, components, Sample]
---

# LWC Methods for Enhanced Messaging in Lightning Experience

> The Conversation Toolkit API for Enhanced Messaging provides methods to interact with a
  Messaging customer from a Lightning web component (LWC). These methods apply to Lightning web
  components in Lightning Experience only.

# LWC Methods for Enhanced Messaging in Lightning Experience

The Conversation Toolkit API for Enhanced Messaging provides methods to interact with a Messaging customer from a Lightning web component (LWC). These methods apply to Lightning web components in Lightning Experience only.

The Conversation Toolkit API is designed for Enhanced Messaging channels, which includes Messaging for In-App and Web, Enhanced Apple, Enhanced Facebook Messenger, Enhanced WhatsApp, Enhanced SMS, and Partner Messaging.

These methods help developers customize the agent experience and how users and other components interact with the conversation component on a page. For example, if you want to customize how an agent composes a message, you can create a messaging composer to draft and send a message during the conversation. These methods only work with an open Messaging Session record page in the console or standard app. If the record is not open, the methods don’t work.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Use only rendered components with the Conversation Toolkit APIs. If you use a component that doesn’t have markup or that operates in the background, the APIs don’t work. The conversation component must also be rendered for the APIs to work.

## Sample Code

This sample code is an example of the .html file of an LWC bundle that uses Conversation Toolkit API.

```

```

This sample code is an example of the .xml metadata file of the LWC bundle.

```

```

This sample code is an example of the .js file of the LWC bundle. Here is where you use the LWC methods for Enhanced Messaging.

```

```

These are the LWC methods for Enhanced Messaging.

-   **[endConversation() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_endConversation_lwc.htm)**
    Ends the Messaging session. This method works only in Lightning console apps.
-   **[getConversationLog() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getConversationLog_lwc.htm)**
    Retrieves the conversation log. This method works only in Lightning console apps.
-   **[inactivateConversation() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_inactivateConversation_lwc.htm)**
    Suspends the conversation. This method works only in Lightning console apps.
-   **[sendTextMessage() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendTextMessage_lwc.htm)**
    Sends a new text message from the agent to an end user. This method works only in Lightning console apps.
-   **[setAgentInput() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setagentinput_lwc.htm)**
    Sets the text in the agent's text box. This method works only in Lightning console apps.
-   **[setMessagingComponent() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setMessagingComponent_lwc.htm)**
    Inserts a specified messaging component into the service rep’s text box. You can also use this method to insert text into the service rep’s text box. This method works only in Lightning console apps.
-   **[sendMessagingComponent() for LWC for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendMessagingComponent_lwc.htm)**
    Sends a new message with a specified messaging component on behalf of the service rep. You can also use this method to send a text message. This method works only in Lightning console apps.

#### See Also

-   [*Salesforce Trailhead*: Build Lightning Web Components](https://trailhead.salesforce.com/content/learn/trails/build-lightning-web-components "Salesforce Trailhead: Build Lightning Web Components  - HTML (New Window)")

-   [*Salesforce Help*: Customize the Enhanced Conversation Component in the Agent Console](https://help.salesforce.com/s/articleView?language=en_US&id=sf.messaging_customize_enhanced_conversation_component.htm "Salesforce Help: Customize the Enhanced Conversation Component in the Agent
    Console  - HTML (New Window)")

-   [*Salesforce Help*: Messaging Component Types and Formats](https://help.salesforce.com/s/articleView?language=en_US&id=sf.messaging_customize_enhanced_conversation_component.htm "Salesforce Help: Messaging Component Types and Formats  - HTML (New Window)")

## Code Examples

```
<template>
    <lightning-card title="LWC tool kit api" icon-name="custom:custom14">
      <lightning-conversation-toolkit-api lwc:ref="lwcToolKitApi">
      </lightning-conversation-toolkit-api>
      <div>
        {apiOutput}
      </div>
      <div>
        <lightning-button label="getConversationLog" onclick={handleButtonClick} value="getConversationLog"></lightning-button>
        <lightning-button label="sendTextMessage" onclick={handleButtonClick} value="sendTextMessage"></lightning-button>
        <lightning-button label="setAgentInput" onclick={handleButtonClick} value="setAgentInput"></lightning-button>
        <lightning-button label="endConversation" onclick={handleButtonClick} value="endConversation"></lightning-button>
      </div>
      <template for:each={log} for:item="item">
        <li key={item}>
          {item}
        </li>
      </template>
       
    </lightning-card>
  </template>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="helloWorld">
  <apiVersion>52.0</apiVersion>
  <isExposed>true</isExposed>
  <targets>
    <target>lightning__AppPage</target>
    <target>lightning__RecordPage</target>
    <target>lightning__HomePage</target>
  </targets>
</LightningComponentBundle>
```

```
import { LightningElement, api,track } from 'lwc';
 
export default class HelloWorld extends LightningElement {
  @api recordId;
   
  @track log = [];
  @track apiOutput;
  changeHandler(event) {
    this.greeting = event.target.value;
  }
 
  async handleButtonClick(event){
    this.reset();
    const toolKit = this.refs.lwcToolKitApi;
    let result;
    switch (event.target.value) {
      case 'getConversationLog':
        result = await toolKit.getConversationLog(this.recordId);
        for(let i=0;i<result.messages.length;i++){
          var msg = {
              type:result.messages[i].type,
              content:result.messages[i].content,
              name:result.messages[i].name,
              timestamp:result.messages[i].timestamp
          }
          this.log.push(JSON.stringify(msg));
        }
        break;
      case 'sendTextMessage':
        result = await toolKit.sendTextMessage(this.recordId, { text: 'Text from toolkit' });
        break;
      case 'setAgentInput':
        result = await toolKit.setAgentInput(this.recordId,{ text: 'Inserting from toolkit' });
        break;
      case 'endConversation':
        result = await toolKit.endConversation(this.recordId);
        break;
    }
    if(result){
      this.apiOutput = event.target.value + " sucess";
    } else {
      this.apiOutput = event.target.value + " failed";
    }
 
  }
 
  reset(){
    this.log = [];
    this.apiOutput='';
  }
 
}
```

## Related Topics

- endConversation() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_endConversation_lwc.htm)
- getConversationLog() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getConversationLog_lwc.htm)
- inactivateConversation() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_inactivateConversation_lwc.htm)
- sendTextMessage() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendTextMessage_lwc.htm)
- setAgentInput() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setagentinput_lwc.htm)
- setMessagingComponent() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setMessagingComponent_lwc.htm)
- sendMessagingComponent() for LWC for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendMessagingComponent_lwc.htm)
