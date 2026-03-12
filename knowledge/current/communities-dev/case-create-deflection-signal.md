---
title: "Case Create Deflection Signal"
domain: communities-dev
topic: case-create-deflection-signal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.255Z
estimatedTokens: 914
keywords: [Case, Deflection, Signal, lightningcommunity, deflectionSignal, event, fired, Aura, site, user, deflected, away, creating, customer, views]
---

# Case Create Deflection Signal

> The lightningcommunity:deflectionSignal event is
    fired in an Aura site when a user is deflected away from creating a customer case. After a user
    views an article or discussion, they’re asked if the interaction was helpful, and whether they
    want to abandon their case.

# Case Create Deflection Signal

The lightningcommunity:deflectionSignal event is fired in an Aura site when a user is deflected away from creating a customer case. After a user views an article or discussion, they’re asked if the interaction was helpful, and whether they want to abandon their case.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

We gather data only for those lightningcommunity:deflectionSignal events that are triggered by authenticated users.

![Did the content solve your issue screenshot](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fdeflection_was_it_helpful.png&folder=communities_dev)

You can configure the Case Deflection component to fire this event automatically using the component’s Deflection Metrics properties in Experience Builder. The Case Deflection component works together with the Contact Support Form to register deflection interactions.

![Case Deflection properties](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fdeflection_builder_properties.png&folder=communities_dev)

## Attributes

The sourceType for deflection signals from the Case Deflection component is caseCreateDeflectionModal.

The source is what the user has typed into the subject field or the description of the Case Create Form. The destination is the ID of the Article or Discussion deflection item.

The payload is a JavaScript object key-value mapping. The following properties are used for this type of signal.

| Payload Property | Type | Description | Supported Values | Required |
| --- | --- | --- | --- | --- |
| deflectionAnswer | string | The user’s answer to the first question, asking whether the deflection item was helpful. | YESNOnull—the user didn’t vote | No |
| confirmationAnswer | string | The user’s answer to the second question, asking whether they wish to stop creating a case. | YESNOnull—the user didn’t vote | No |
| state | string | The state the popup window was last left in before it was closed. | MeasureDeflectionState—the user didn’t answer the first questionConfirmationQuestionState—the user didn’t answer the second questionConfirmationMessageState—the user answered both questions | No |
| caseCreated | boolean | Indicates whether the user created a case. | true—the user created a casefalse—the user didn’t create a case | No |

## Examples

Custom Aura components can listen to this system event and handle it as required. For example, if the user didn’t find the content helpful the component can start another process.

Here’s a sample component that listens to the system event.

```

```

This client-side controller example handles the system event and checks for failed case deflections. That is, the controller checks for interactions where the user didn’t find the deflection item helpful.

```

```

Custom Aura components that act as case create forms and case deflection components can also fire this event. Given valid parameters, the event is automatically handled and processed for reporting. This example fires a lightningcommunity:deflectionSignal event with values from the component attributes.

```

```

A user can successively view multiple deflection items before ultimately deciding whether to create or abandon a case. Each view fires a lightningcommunity:deflectionSignal event. If you want to process all the events as a single batch, set shouldSubmitSourceTypeSignals=true for the final event in which the user abandons or creates the case. This example fires the last deflection signal event, based on whether the case was created or not.

```

```

## Code Examples

```
<aura:component implements="forceCommunity:availableForAllPageTypes">
    <aura:attribute name="message" type="String" required="false"/>
    <aura:handler event="lightningcommunity:deflectionSignal" action="{!c.handleSignal}"/>
    <lightning:formattedText value="{!v.message}"/>
</aura:component>
```

```
({
    handleSignal: function(component, event, helper) {
        var signal = event.getParams() || {},
            sourceType = signal.sourceType,
            payload = signal.payload;
        // Process case create deflection signals
        if (sourceType && sourceType === "caseCreateDeflectionModal") {
            if (payload && payload.deflectionAnswer === "NO") {
                component.set("v.message", "Sorry you didn't find that helpful.");
            }
            if (payload && payload.caseCreated === true) {
                component.set("v.message", "We Apologize For The Inconvenience. We'll get in touch with you shortly about your case.");
            }
        }
    }
})
```

```
fireCaseDeflectionSignal : function(component, shouldSubmitSourceTypeSignals) {
    var evt = $A.get("e.lightningcommunity:deflectionSignal");
    evt.setParams({
        sourceType: "caseCreateDeflectionModal",
        source: cmp.get("v.deflectionTerm"),
        destinationType: component.get("v.deflectionEntityType"),
        destination: component.get("v.deflectionEntityId"),
        payload: {
            deflectionAnswer: component.get("v.deflectionAnswer"),
            confirmationAnswer: component.get("v.confirmationAnswer"),
            state: component.get("v.deflectionState"),
            caseCreated: component.get("v.caseCreated")
        },
        shouldSubmitSourceTypeSignals: shouldSubmitSourceTypeSignals
    });
    evt.fire();
}
```

```
fireCaseCreatedSignal : function(component, caseCreated) {
    // Send all accumulated signals to the server to be processed
    var evt = $A.get("e.lightningcommunity:deflectionSignal");
    evt.setParams({
        sourceType: "caseCreateDeflectionModal",
        payload: {
            caseCreated: caseCreated
        },
        shouldSubmitSourceTypeSignals: true
    });
    evt.fire();
}
```
