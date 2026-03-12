---
title: "Lightning Message Service Methods for Lightning
      Experience"
domain: api-cti
topic: lightning-message-service-methods-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.850Z
estimatedTokens: 806
keywords: [Lightning, Message, Service, Experience, three, allow, CTI, implementation, communicate, Visualforce, Aura, components, subscribe, attaches, listener]
---

# Lightning Message Service Methods for Lightning
      Experience

> These three methods allow your CTI implementation to
               communicate with other Visualforce, Aura, and Lightning components that also use the
               Lightning Message Service. The subscribe
            method attaches a listener function to a specified Lightning Message Channel. T

# Lightning Message Service Methods for Lightning Experience

## Usage

These three methods allow your CTI implementation to communicate with other Visualforce, Aura, and Lightning components that also use the Lightning Message Service. The subscribe method attaches a listener function to a specified Lightning Message Channel. The publish method lets you send a message on a Lightning Message Channel. The unsubscribe method lets you remove listener functions you added with the subscribe method.

These methods are available in API version 47.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

These methods can be used only with Lightning Experience. They can be used in iFrame and Visualforce components.

## Syntax

The subscribe method allows you to attach a listener function to a specified Lightning Message Channel. Lightning Message Service calls your listener function with the message that a component sends.

```

```

## Arguments for subscribe

| Name | Type | Description |
| --- | --- | --- |
| channelName | string | The name of the Message Channel that you can subscribe to. |
| listener | function | JavaScript method that’s called when a message is sent on the Message Channel. |
| callback | function | JavaScript method that’s executed when the API method call is completed. |

## Arguments for unsubscribe

| Name | Type | Description |
| --- | --- | --- |
| subscription | object | The subscription from which you can remove the listener function. |
| callback | function | JavaScript method that’s executed when the API method call is completed. |

## Arguments for publish

| Name | Type | Description |
| --- | --- | --- |
| channelName | string | The name of the Message Channel that you can subscribe to. |
| message | object | Serializable JSON object that is sent on the Message Channel. |
| callback | function | JavaScript method that’s executed when the API method call is completed. |

#### See Also

-   [Blog: Lightning Message Service](https://developer.salesforce.com/blogs/2019/10/lightning-message-service-developer-preview.html "Blog: Lightning Message Service - HTML (New Window)")

-   [Sample Code for Using Lightning Message Service with Open CTI](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_lex_message_service.htm "You can use the Lightning Message Service API to communicate with an Open CTI softphone. This example displays three buttons that subscribe, publish, and remove a message channel servicedev1_SampleMC__c.")

-   [*Lightning Aura Components Developer Guide: Communicating Across the DOM with Lightning Message Service*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_intro.htm "
    Lightning Aura Components Developer Guide: Communicating Across the DOM with Lightning
    Message Service
    - HTML (New Window)")

-   [*Visualforce Developer Guide: Communicating Across the DOM with Lightning Message Service*](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_intro.htm "
    Visualforce Developer Guide: Communicating Across the DOM with Lightning Message
    Service
    - HTML (New Window)")

## Code Examples

```
var SAMPLEMC = "SAMPLEMC__c";
var SAMPLEMC_SUBSCRIPTION = null; 
sforce.opencti.subscribe({channelName: SAMPLEMC, listener: onPublishMessage, callback: subscribeSampleMCCallback});
```

## Related Topics

- Sample Code for Using Lightning Message Service with Open CTI (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_lex_message_service.htm)
