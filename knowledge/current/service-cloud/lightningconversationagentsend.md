---
title: "lightning:conversationAgentSend"
domain: service-cloud
topic: lightningconversationagentsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.189Z
estimatedTokens: 218
keywords: [lightning, conversationAgentSend, Event, triggered, agent, sends, chat, message, through, Salesforce, console., does, intercept, before, it’s, sent, visitor., event, Enhanced, Messaging]
---

# lightning:conversationAgentSend

> Messaging event triggered when an agent
            sends a message through the Salesforce console. This method intercepts the message
            before it’s sent to the chat visitor. This event is also triggered when using Enhanced
            Messaging channels. To work with Enhanced Messaging channels, the session must be active
            and the Enhanced Conversation Component must be visible on the page.

# lightning\_\_conversationAgentSend

Messaging event triggered when an agent sends a message through the Salesforce console. This method intercepts the message before it’s sent to the chat visitor. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current conversation. |
| content | String | The text of the message in the conversation log. |
| name | String | The name of the agent who is attempting to send the message. This name matches the agent name displayed in the conversation log. |
| timestamp | Date/Time | The date and time that the agent attempted to send the message. |

## LWC Sample Code

To listen to the lightning\_\_conversationAgentSend event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

```

```

## Aura Components Sample Code

Component code:

```

```

Controller code:

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" description="Conversation toolkit api sample">
  <lightning:conversationToolkitAPI aura:id="conversationKit" />
  <aura:handler event="lightning:conversationAgentSend" action="{! c.onAgentSend}" />
</aura:component>
```

```
({
    onAgentSend: function(cmp, evt, helper) {
        var recordId = evt.getParam("recordId");
        var content = evt.getParam("content");
        var name = evt.getParam("name");
        var type = evt.getParam("type");
        var timestamp = evt.getParam("timestamp");

        console.log("recordId:" + recordId + " content:" + content + " name:" + name + " timestamp:" + timestamp);
    }
})
```

```
import { LightningElement, wire } from 'lwc';

import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';

import ConversationAgentSendChannel from '@salesforce/messageChannel/lightning__conversationAgentSend';

export default class ConversationAgentSendExample extends LightningElement {
    subscription = null;
    recordId;

    // To pass scope, you must get a message context.
    @wire(MessageContext)
    messageContext;

    // Standard lifecycle hook used to subscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    // Pass scope to the subscribe() method.
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                ConversationAgentSendChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    // Handler for message received by component
    handleMessage(message) {
        this.recordId = message.recordId;
    }
}
```

```
<lightning:messageChannel type="lightning__conversationAgentSend" scope="APPLICATION" 
                          onMessage="{!c.onConversationAgentSend}" />
```

```
({
    onConversationAgentSend: function(cmp, evt, helper) {
        var recordId = evt.getParam("recordId");
        var content = evt.getParam("content");
        var name = evt.getParam("name");
        var timestamp = evt.getParam("timestamp");

        console.log("recordId:" + recordId + " content:" + content + " name:" + name + " timestamp:" + timestamp);
    }
})
```
