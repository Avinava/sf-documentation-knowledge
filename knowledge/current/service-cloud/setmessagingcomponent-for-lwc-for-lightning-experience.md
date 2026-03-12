---
title: "setMessagingComponent() for LWC for Lightning Experience"
domain: service-cloud
topic: setmessagingcomponent-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.929Z
estimatedTokens: 293
keywords: [setMessagingComponent, LWC, Lightning, Experience, Inserts, specified, messaging, component, service, rep’s, text, box., insert, works, only, console, apps., Arguments, Response, Sample]
---

# setMessagingComponent() for LWC for Lightning Experience

> Inserts a specified messaging component into the service rep’s text box. You can also
  use this method to insert text into the service rep’s text box. This method works only in
  Lightning console apps.

# setMessagingComponent() for LWC for Lightning Experience

Inserts a specified messaging component into the service rep’s text box. You can also use this method to insert text into the service rep’s text box. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the record for the Messaging session. |
| messageType | String | The message component type to place in the service rep’s text box. For example, StaticContentMessage. See Message Types and Message Format Types. |
| nameOrId | String | The name or ID of the messaging component to place in the service rep’s text box. |
| text | String | Optional. The message to the end user. For example: This is a sample message. |
| setAtCursor | Boolean | Optional. Indicates whether to insert the message at the current cursor location. If false, the message overwrites any existing text. Default value is false. |

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.

## Sample Code

This example inserts a static content message into the service rep’s text box.

```

```

## Code Examples

```
import { LightningElement, api } from 'lwc';
import { setMessagingComponent } from 'lightning/conversationToolkitApi';

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
