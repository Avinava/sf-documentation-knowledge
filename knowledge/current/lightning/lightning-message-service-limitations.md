---
title: "Lightning Message Service Limitations"
domain: lightning
topic: lightning-message-service-limitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.292Z
estimatedTokens: 799
keywords: [Lightning, Message, Service, Limitations, Keep, mind, working]
---

# Lightning Message Service Limitations

> Keep the following in mind when working with Lightning message service.

# Lightning Message Service Limitations

Keep the following in mind when working with Lightning message service.

Supported Experiences

Lightning message service supports only the following experiences:

-   Lightning Experience standard navigation
-   Lightning Experience console navigation
-   Salesforce mobile app for Aura and Lightning Web Components, but not for Visualforce pages
-   Lightning components used in Experience Builder sites.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    Lightning Message Service doesn't work with Salesforce Tabs + Visualforce sites or with Visualforce pages in Experience Builder sites.


Aura Components That Don’t Render Aren’t Supported

Lightning message service only supports Aura components that render. You can’t use lightning:messageChannel in an Aura component that uses the background utility item interface. Similarly, Aura components that use lightning:messageChannel can’t call Lightning Message Service methods in the init lifecycle handler because the component hasn’t rendered.

lightning:messageChannel Must Be a Child of aura:component

In a custom Aura component, lightning:messageChannel must be an immediate child of the aura:component tag. It can’t be nested in an HTML tag or another component.

For example, the following code renders without a problem.

```

```

This code throws an error when the Aura component tries to render.

```

```

Messages are Constrained by iframe Boundary

If your component uses Lightning message service to publish a message, that message is constrained by any iframe boundary. To work around this limitation, use the [sforce.one.subscribe() and sforce.one.unsubscribe() methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_subscribe.htm).

Avoid Dynamically Creating lightning:messageChannel Components in Aura

Do not use[createComponent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponent.htm "Create a component from a type and a set of attributes. This method accepts the name of a type of component, a map of attributes, and a callback to notify the caller.") to dynamically create a lightning:messageChannel component in Aura. Dynamically created components may not work as expected. For information on supported ways to create a lightning:messageChannel component, see [Create a Message Channel](atlas.en-us.lightning.meta/lightning/message_channel_create.htm "To create a lightning:messageChannel component in your org, use the LightningMessageChannel metadata type and append it with __c. The message channel isn’t a custom object, it just uses the same suffix.").

#### See Also

-   [Invoking Actions on Component Initialization](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/js_cb_init_handler.htm "Invoking Actions on Component Initialization - HTML (New Window)")

-   [*Component Reference*: lightning:backgroundUtilityItem](https://developer.salesforce.com/docs/component-library/bundle/lightning:backgroundUtilityItem/documentation "Component Reference: lightning:backgroundUtilityItem - HTML (New Window)")

## Code Examples

```
<aura:component>
  <lightning:messageChannel type="myMessageChannel__c" />
  <lightning:card>...</lightning:card>
</aura:component>
```

```
<aura:component>
  <lightning:card>
    <lightning:messageChannel type="myMessageChannel__c" />
  </lightning:card>
</aura:component>
```

## Related Topics

- createComponent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponent.htm)
- Create a Message Channel (atlas.en-us.lightning.meta/lightning/message_channel_create.htm)
