---
title: "Promotion Wizard Input Structure"
domain: retail-api
topic: promotion-wizard-input-structure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.472Z
estimatedTokens: 684
keywords: [Promotion, Wizard, Input, Structure, document, SmartUI, generates, initializing, new, metadata-driven, extracts, user, clicked, launching, order]
---

# Promotion Wizard Input Structure

> This document describes the input that SmartUI generates when
      initializing the new metadata-driven promotion wizard. SmartUI extracts information on where
      the user clicked when launching the wizard in order to provide as much information as possible
      to the wizard so it can be used to provide sensible defaults.

# Promotion Wizard Input Structure

This document describes the input that SmartUI generates when initializing the new metadata-driven promotion wizard. SmartUI extracts information on where the user clicked when launching the wizard in order to provide as much information as possible to the wizard so it can be used to provide sensible defaults.

## Input Sample for New Promotion

```

```

## Properties

This method returns a list of items with the following properties:

| Property Name | Type | Description |
| --- | --- | --- |
| Slogan | String | Promotion slogan of the row where the user clicked to create a new promotion. |
| GroupText | String | Group text of the row where the user clicked to create a new promotion. |
| initialDate | Number | Timestamp of the date on the calendar view the user clicked on in milliseconds. |
| AnchorAccount | Id | Account of the row where the user clicked to create a new promotion. |
| PromotionTemplate | Id | Promotion template of the row where the user clicked to create a promotion. |
| criterion_<X>_product__c | Id | Product hierarchy of the row where the user clicked to create a promotion. |
| <x>__c | String | Additional product grouping attributes present in the row where the user clicked to create a promotion. |

## Input Sample for Copy Promotion

```

```

## Properties

This method returns a list of items with the following properties:

| Property Name | Type | Description |
| --- | --- | --- |
| promotionId | String | ID of the promotion that is copied. |

## Input Sample for Derive Promotion

```

```

## Properties

This method returns a list of items with the following properties:

| Property Name | Type | Description |
| --- | --- | --- |
| promotionId | String | ID of the promotion that is derived.. |

## Using MetadataWizard in custom components

MetadataWizard engine can be used in Aura components to render wizards in your custom Aura components.

Component Markup

```

```

Component Controller

```

```

| Parameter | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| metadata | Object | true* |  | Object representing the Wizard metadata (same format as on MetadataWizard Configuration Record). |
| metadataName | String | true* |  | MetadataWizard configuration record name to extract the metadata from. |
| input | Object | FALSE | {} | Metadata Wizard Input. This object can be accessed in expressions using the _input_ identifier. |
| stateBeforeSubmit | Boolean | FALSE | FALSE | Represents the state of the wizard input state between executions of the runWizard function. |
| modal | Boolean | FALSE | FALSE | If true, the wizard will e rendered as a modal. If false, the wizard will be rendered inline. |

## Code Examples

```
{
    "Slogan": "Sample Slogan",
    "GroupText": "Sample Group Text",
    "initialDate": 1603670400000,
    "AnchorAccount": "0012X000023GAClQAO",
    "criterion_1_product__c": "a2L2X00000Bw3LeUAJ",
    "criterion_3_product__c": "a2L2X00000Bw3MxUAJ",
    "pack_size_unit__c": "pk",
    "PromotionTemplate": "a2a2X000003NMgFQAW",
    "product_form__c": "Solid"
}
```

```
{
    "promotionId": "a2a2X000003NMgFQAW"
}
```

```
{
    "promotionId": "a2a2X000003NMgFQAW"
}
```

```
<aura:component implements="..." >
    <aura:handler name="init"
        value="{!this}"
        action="{!c.doInit}"
    />
    <!-- Add wizard to markup -->
    <cgcloud:MetadataWizard aura:id="wizard"></cgcloud:MetadataWizard>
</aura:component>
```

```
({
    doInit : function(component, event, helper) {
        // initialize the wizard
        component.find('wizard').runWizard({
                metadataName: 'NewPromotion',   // MetadataWizard metadata name to load the configuration from
                modal: false,                   // If the content will be rendered in a modal window or in place.
                input: {                        // Initial input state
                    TestCheckbox: true
                }
            })
                .then($A.getCallback((result) => {
                    // Show spinner
                    component.find('wizard').showSpinner(); // Display a spinner
                    // process the result
                    console.log('Result Action: ', result.action);      // Action that triggered the the resolution
                    console.log('Result: ', result.result);             // Wizard result, this can be passed to an API
                    console.log('Result: ', result.stateBeforeSubmit);  // Wizard state before submission
                    // hide spinner
                    component.find('wizard').hideSpinner(); // Hide the spinner
                }));
        });
    }
})
```
