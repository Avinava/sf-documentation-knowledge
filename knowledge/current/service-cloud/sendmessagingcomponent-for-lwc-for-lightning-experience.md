---
title: "sendMessagingComponent() for LWC for Lightning Experience"
domain: service-cloud
topic: sendmessagingcomponent-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.347Z
keywords: [sendMessagingComponent, LWC, Lightning, Experience, Arguments, Response, Sample, Code]
---

# sendMessagingComponent() for LWC for Lightning Experience

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