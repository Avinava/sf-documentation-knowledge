---
title: "setMessagingComponent() for LWC for Lightning Experience"
domain: service-cloud
topic: setmessagingcomponent-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.356Z
keywords: [setMessagingComponent, LWC, Lightning, Experience, Arguments, Response, Sample, Code]
---

# setMessagingComponent() for LWC for Lightning Experience

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