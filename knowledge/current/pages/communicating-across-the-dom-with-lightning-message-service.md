---
title: "Communicating Across the DOM with Lightning Message Service"
domain: pages
topic: communicating-across-the-dom-with-lightning-message-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.805Z
estimatedTokens: 1269
namespace: SampleMessageChannel
keywords: [Communicating, Across, DOM, Lightning, Message, Service, communicate, Visualforce, pages, embedded, Aura, components, web, including, utility]
---

# Communicating Across the DOM with Lightning Message Service

> Use Lightning message service to communicate across the DOM within a Lightning page.
  Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and
  Lightning web components, including components in a utility bar and pop-out utilities. Choose
  whether a component subscribes to messages from the entire application, or from only the active
  area.

**Namespace:** `SampleMessageChannel`

# Communicating Across the DOM with Lightning Message Service

Use Lightning message service to communicate across the DOM within a Lightning page. Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and Lightning web components, including components in a utility bar and pop-out utilities. Choose whether a component subscribes to messages from the entire application, or from only the active area.

If you're switching from Salesforce Classic to Lightning Experience, you can now build Lightning web components that can communicate with existing Visualforce pages or Aura components. You can also use Lightning message service to communicate with softphones via Open CTI.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Lightning message service is available in Lightning Experience and as a beta feature for Lightning components used in Experience Builder sites.

To access Lightning message service in Visualforce, use the $MessageChannel global variable. A message is a serializable JSON object. Examples of data that you can pass in a message include strings, numbers, objects, and booleans. A message can’t contain functions and symbols. The $MessageChannel global variable is only available in Lightning Experience.

## Use Message Channels Created Within Your Org

Here's an example of using a Lightning message channel developed within your org.

```

```

Here, we reference a custom message channel with a formula expression {!$MessageChannel.SampleMessageChannel\_\_c}. This expression creates a token that we assign to the variable SAMPLEMC. This token is unique to your custom message channel and can be used within the Lightning message service API methods. The syntax SampleMessageChannel\_\_c refers to a custom instance of the LightningMessageChannel metadata type. The \_\_c suffix indicates that it’s custom, but note that it isn’t a custom object. See [Create a Message Channel](atlas.en-us.pages.meta/pages/message_channel_publish.htm "To publish on a Message Channel from a Visualforce page, include the $MessageChannel global variable in your page's JavaScript code and write a method that calls sforce.one.publish().") to learn more.

If your org has a namespace, don’t include it in your message channel expression. For example, if your org’s namespace is MyNamespace, the message channel expression remains "{!$MessageChannel.SampleMessageChannel\_\_c}".

## Use Message Channels Created Outside Your Org

To use message channels from packages created by developers outside of your org, reference them with the syntax {!$MessageChannel.Namespace\_name\_\_c}. For example, if SampleMessageChannel wasn’t local to your org and came from a package with the namespace SamplePackageNamespace, the syntax would be {$MessageChannel.SamplePackageNamespace\_\_SampleMessageChannel\_\_c}.

-   **[Create a Message Channel](atlas.en-us.pages.meta/pages/message_channel_create.htm)**
    To create a Lightning Message Channel in your org, use the LightningMessageChannel metadata type.
-   **[Publish on a Message Channel](atlas.en-us.pages.meta/pages/message_channel_publish.htm)**
    To publish on a Message Channel from a Visualforce page, include the $MessageChannel global variable in your page's JavaScript code and write a method that calls sforce.one.publish().
-   **[Subscribe and Unsubscribe from a Message Channel](atlas.en-us.pages.meta/pages/message_channel_subscribe.htm)**
    To subscribe and unsubscribe from a message channel, use the sforce.one.subscribe() and sforce.one.unsubscribe() methods.
-   **[Considerations and Limitations](atlas.en-us.pages.meta/pages/message_channel_considerations.htm)**
    Keep these considerations and limitations in mind when working with Lightning message service in Visualforce.

#### See Also

-   [Blog: Lightning Message Service](https://developer.salesforce.com/blogs/2019/10/lightning-message-service-developer-preview.html "Blog: Lightning Message Service - HTML (New Window)")

-   [*Lightning Web Components Developer Guide*: Communicating Across the DOM with Lightning Message Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_intro.htm "Lightning Web Components Developer Guide: Communicating Across the DOM with
    Lightning Message Service - html (New Window)")

-   [*Lightning Aura Components Developer Guide*: Communicating Across the DOM with Lightning Message Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_intro.htm "Lightning Aura Components Developer Guide: Communicating Across the DOM with
    Lightning Message Service - html (New Window)")

-   [*Open CTI Developer Guide*: Lightning Message Service Methods for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_cti.meta/api_cti/sforce_api_cti_methods_lms.htm "Open CTI Developer Guide: Lightning Message Service Methods for
    Lightning Experience - HTML (New Window)")

## Code Examples

```
<apex:page>
    <script>
        // Load the MessageChannel token in a variable
        var SAMPLEMC = "{!$MessageChannel.SampleMessageChannel__c}";
    </script>
</apex:page>
```

## Related Topics

- Create a Message Channel (atlas.en-us.pages.meta/pages/message_channel_publish.htm)
- Create a Message Channel (atlas.en-us.pages.meta/pages/message_channel_create.htm)
- Publish on a Message Channel (atlas.en-us.pages.meta/pages/message_channel_publish.htm)
- Subscribe and Unsubscribe from a Message Channel (atlas.en-us.pages.meta/pages/message_channel_subscribe.htm)
- Considerations and Limitations (atlas.en-us.pages.meta/pages/message_channel_considerations.htm)
