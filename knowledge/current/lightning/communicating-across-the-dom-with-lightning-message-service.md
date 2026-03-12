---
title: "Communicating Across the DOM with Lightning Message Service"
domain: lightning
topic: communicating-across-the-dom-with-lightning-message-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.297Z
estimatedTokens: 879
keywords: [Communicating, Across, DOM, Lightning, Message, Service, communicate, Visualforce, pages, embedded, Aura, components, web, including, utility]
---

# Communicating Across the DOM with Lightning Message Service

> Use Lightning message service to communicate across the DOM within a Lightning page.
    Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and
    Lightning web components, including components in a utility bar and pop-out utilities. Choose
    whether a component subscribes to messages from the entire application, or from only the active
    area.

# Communicating Across the DOM with Lightning Message Service

Use Lightning message service to communicate across the DOM within a Lightning page. Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and Lightning web components, including components in a utility bar and pop-out utilities. Choose whether a component subscribes to messages from the entire application, or from only the active area.

If you're switching from Salesforce Classic to Lightning Experience, you can build Lightning web components that can communicate with existing Visualforce pages or Aura components. You can also use Lightning message service to communicate with softphones via Open CTI.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Lightning message service is available in Lightning Experience and as a beta feature for Lightning components used in Experience Builder sites.

To access Lightning message service in Aura, use the lightning:messageChannel component. A message is a serializable JSON object. Examples of data that you can pass in a message include strings, numbers, booleans, and objects. A message can’t contain functions and symbols. The lightning:messageChannel component is only available in Lightning Experience.

-   **[Create a Message Channel](atlas.en-us.lightning.meta/lightning/message_channel_create.htm)**
    To create a lightning:messageChannel component in your org, use the LightningMessageChannel metadata type and append it with \_\_c. The message channel isn’t a custom object, it just uses the same suffix.
-   **[Publish on a Message Channel](atlas.en-us.lightning.meta/lightning/message_channel_publish.htm)**
    To publish a message on a message channel, include a lightning:messageChannel component in your Aura component and use the publish() method in your Aura component's controller file.
-   **[Subscribe to a Message Channel](atlas.en-us.lightning.meta/lightning/message_channel_subscribe.htm)**
    To subscribe to a message channel, create a handler method to run when it receives a message.
-   **[Lightning Message Service Limitations](atlas.en-us.lightning.meta/lightning/message_channel_considerations.htm)**
    Keep the following in mind when working with Lightning message service.

#### See Also

-   [Blog: Lightning Message Service](https://developer.salesforce.com/blogs/2019/10/lightning-message-service-developer-preview.html "Blog: Lightning Message Service - HTML (New Window)")

-   [*Lightning Web Components Developer Guide*: Communicating Across the DOM with Lightning Message Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_intro.htm "Lightning Web Components Developer Guide: Communicating Across the DOM with
    Lightning Message Service - html (New Window)")

-   [*Visualforce Developer Guide*: Communicating Across the DOM with Lightning Message Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_intro.htm "Visualforce Developer Guide: Communicating Across the DOM with
    Lightning Message Service - html (New Window)")

-   [*Open CTI Developer Guide*: Lightning Message Service Methods for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_cti.meta/api_cti/sforce_api_cti_methods_lms.htm "Open CTI Developer Guide: Lightning Message Service Methods for
    Lightning Experience - HTML (New Window)")

## Related Topics

- Create a Message Channel (atlas.en-us.lightning.meta/lightning/message_channel_create.htm)
- Publish on a Message Channel (atlas.en-us.lightning.meta/lightning/message_channel_publish.htm)
- Subscribe to a Message Channel (atlas.en-us.lightning.meta/lightning/message_channel_subscribe.htm)
- Lightning Message Service Limitations (atlas.en-us.lightning.meta/lightning/message_channel_considerations.htm)
