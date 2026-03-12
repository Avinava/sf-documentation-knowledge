---
title: "lightning__conversationEndUserMessage"
domain: service-cloud
topic: lightningconversationendusermessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.363Z
estimatedTokens: 280
keywords: [lightning__conversationEndUserMessage, Messaging, event, triggered, customer, new, message, Enhanced, channels, text, messages, files, rich, content, work]
---

# lightning__conversationEndUserMessage

> Messaging event triggered when the
            customer sends a new message. In Enhanced Messaging channels, this event is triggered
            only for text messages. This event is not triggered for messages with files or rich
            content. To work with Enhanced Messaging channels, the session must be active and the
            Enhanced Conversation Component must be visible on the page.

# lightning\_\_conversationEndUserMessage

Messaging event triggered when the customer sends a new message. In Enhanced Messaging channels, this event is triggered only for text messages. This event is not triggered for messages with files or rich content. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current conversation. |
| content | String | The message sent by the customer. |
| name | String | The name of the user who sent the message. This name matches the username displayed in the conversation log. |
| timestamp | Date/Time | The date and time the message was received. |

## LWC Sample Code

To listen to the lightning\_\_conversationEndUserMessage event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

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

```
import { LightningElement, wire } from 'lwc';

import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';

import ConversationEndUserChannel from '@salesforce/messageChannel/lightning__conversationEndUserMessage';

export default class ConversationEndUserExample extends LightningElement {
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
                ConversationEndUserChannel,
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
<lightning:messageChannel type="lightning__conversationEndUserMessage" scope="APPLICATION" 
                          onMessage="{!c.onConversationEndUserMessage}" />
```

```
({
    onConversationEndUserMessage: function(cmp, evt, helper) {
        var recordId = evt.getParam('recordId');
        var content = evt.getParam('content');
        var name = evt.getParam('name');
        var timestamp = evt.getParam('timestamp');

        console.log("recordId:" + recordId + " content:" + content + " name:" + name + " timestamp:" + timestamp);
    }
})
```
