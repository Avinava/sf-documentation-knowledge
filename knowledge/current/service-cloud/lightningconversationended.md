---
title: "lightning__conversationEnded"
domain: service-cloud
topic: lightningconversationended
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.225Z
estimatedTokens: 195
keywords: [lightning__conversationEnded, Messaging, event, triggered, active, chat, ends, agent, leaves, conference., Enhanced, channels., work, channels, session, must, Conversation, Component, visible, page.]
---

# lightning__conversationEnded

> Messaging event triggered when an active
            chat ends or an agent leaves a chat conference. This event is also triggered when using
            Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must
            be active and the Enhanced Conversation Component must be visible on the
        page.

# lightning\_\_conversationEnded

Messaging event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current chat. |

## LWC Sample Code

To listen to the lightning\_\_conversationEnded event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

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

import ConversationEndedChannel from '@salesforce/messageChannel/lightning__conversationEnded';

export default class ConversationEndedExample extends LightningElement {
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
                ConversationEndedChannel,
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
<lightning:messageChannel type="lightning__conversationEnded" scope="APPLICATION" 
                          onMessage="{!c.onConversationEndedEvent}" />
```

```
({
    onConversationEndedEvent: function(cmp, evt, helper) {
        var conversation = cmp.find("conversationKit");
        var recordId = evt.getParam("recordId");

        console.log("recordId:" + recordId);
    }
})
```
