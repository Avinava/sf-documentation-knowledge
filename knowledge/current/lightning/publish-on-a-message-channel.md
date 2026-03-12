---
title: "Publish on a Message Channel"
domain: lightning
topic: publish-on-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.301Z
estimatedTokens: 663
keywords: [Publish, Message, Channel, include, lightning, messageChannel, component, Aura, component's, controller, file]
---

# Publish on a Message Channel

> To publish a message on a message channel, include a lightning:messageChannel component in your Aura component and use the publish() method in your Aura component's controller file.

# Publish on a Message Channel

To publish a message on a message channel, include a lightning:messageChannel component in your Aura component and use the publish() method in your Aura component's controller file.

## Example

The lmsPublisherAuraComponent from the [github.com/trailheadapps/lwc-recipes](https://github.com/trailheadapps/lwc-recipes "HTML (New Window)") repo shows how to publish a message to notify subscribers on a Lightning page when a contact is selected.

To reference a message channel, add the lightning:messageChannel component to your Aura component. The component has a required type attribute, which is the name of the message channel.

```

```

To reference a message channel from an org that has a namespace, prefix the message channel name with the namespace: <lightning:messageChannel type="Namespace\_\_MessageChannelName\_\_c"/>.

This example shows how to publish a message on the SampleMessageChannel\_\_c channel when a button is clicked.

In myComponent.cmp, we create two components, lightning:button and lightning:messageChannel. On lightning:button, the onclick handler calls the handleClick() JavaScript function in the controller. We assign the aura:id attribute to lightning:messageChannel to access the publish() method.

```

```

```

```

In the controller, handleClick() contains the payload object. This object holds the message that gets sent on the SampleMessageChannel\_\_c message channel. Here, the message is a recordId with the value "some string" and recordData, whose value is the key-value pair value: "some value". Then, the controller finds the lightning:messageChannel component referenced in myComponent.cmp and calls publish() with the payload.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Lightning message service publishes messages to any subscribed component until the destroy phase of the component's lifecycle, even if the component isn't visible. Sometimes when you navigate away from a Lightning page, components are cached and not destroyed. These components still receive messages. For more information, see [lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.") and related [system events](atlas.en-us.lightning.meta/lightning/events_system.htm "The framework fires several system events during its lifecycle.")

## Code Examples

```
<!-- myComponent.cmp -->
<aura:component>
    <lightning:messageChannel type="SampleMessageChannel__c"/>
</aura:component>
```

```
<!-- myComponent.cmp -->
<aura:component>
    <lightning:button onclick="{! c.handleClick }"/>
    <lightning:messageChannel type="SampleMessageChannel__c"
        aura:id="sampleMessageChannel"/>
</aura:component>
```

```
// myComponentController.js
({
    handleClick: function(cmp, event, helper) {
        var payload = {
            recordId: "some string",
            recordData: {
                value: "some value"
            }
        };
        cmp.find("sampleMessageChannel").publish(payload);
    }
})
```

## Related Topics

- lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- system events (atlas.en-us.lightning.meta/lightning/events_system.htm)
