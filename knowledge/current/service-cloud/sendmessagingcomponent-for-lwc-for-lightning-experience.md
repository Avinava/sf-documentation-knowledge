---
title: "sendMessagingComponent() for LWC for Lightning Experience"
domain: service-cloud
topic: sendmessagingcomponent-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.917Z
estimatedTokens: 242
keywords: [sendMessagingComponent, LWC, Lightning, Experience, Sends, new, message, specified, messaging, component, behalf, service, rep., send, text, message., works, only, console, apps.]
---

# sendMessagingComponent() for LWC for Lightning Experience

> Sends a new message with a specified messaging component on behalf of the service rep.
  You can also use this method to send a text message. This method works only in Lightning console
  apps.

# sendMessagingComponent() for LWC for Lightning Experience

Sends a new message with a specified messaging component on behalf of the service rep. You can also use this method to send a text message. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the record for the Messaging session. |
| messageType | String | The message component type to send on behalf of the service rep. For example, StaticContentMessage. See Message Types and Message Format Types. |
| nameOrId | String | The name or ID of the messaging component to send on behalf of the service rep. |
| text | String | Optional. The message to the end user. For example: This is a sample message. |

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.

## Sample Code

This example sends a static content message on behalf of the service rep.

```

```

## Code Examples

```
import { LightningElement, api } from 'lwc';
import { sendMessagingComponent } from 'lightning/conversationToolkitApi';

export default class MyComponent extends LightningElement {
    @api recordId;

    async handleButtonClick(event) {
        const result = await setMessagingComponent(
            this.recordId, {
                messageType: "StaticContentMessage",
                nameOrId: "1mdxx0000000001AAA"
            });
        console.log(result);
    }
}
```
