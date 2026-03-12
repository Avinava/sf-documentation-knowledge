---
title: "UI Customization"
domain: retail-api
topic: ui-customization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.131Z
estimatedTokens: 466
keywords: [Customization, managed, packages, provided, components, replaceable, custom, implementations, requirements, suited, implementation, Add, Package, Component, Card]
---

# UI Customization

> All managed packages provided UI components are replaceable by custom implementations if
        the default requirements are not  suited for your implementation.

# UI Customization

All managed packages provided UI components are replaceable by custom implementations if the default requirements are not suited for your implementation.

## Add Fields to a Managed Package Component Card

It is not supported to add new Fields to a Managed Package UI Component Card. If you need a UI Component displaying the same fields as the managed package with additional custom fields, develop your own component.

## Add New Field on Managed Package SObjects

If you want to add a new field to a Managed Package included the SObjects, the field value is automatically available in the tpm-promotion LWC component. The field will be automatically loaded on the respective component property as long as the running user has access to it. In order to display/edit this value, you’ll need to create a custom component with the TPM\_Promotion component included to render it.

The Managed Package SObjects which has their attributes automatically loaded are:

-   Promotion\_\_c
-   Tactic\_\_c
-   Tactic\_Fund\_\_c
-   Promotion\_Attachment\_\_c
-   Promotion\_Attachment\_Link\_\_c
-   Tactic\_Condition\_Creation\_Definition\_\_c

**Example**

```

```

## Add Custom Data in TPM UI

To add new SObjects to the UI, provide the records as part of the custom state. The custom state property is serialized during a promotion save and is passed as a parameter to your APEX layer Promotion Save process hook.

In order to receive these records or data during the APEX save process, configure them as Custom State in the TPM\_Promotion component:

```

```

## Update Managed Packages SObjects

Use the API in the tpm-promotion component.

```

```

## Reactive UI changes

Using the events provided by the tpm-promotion component, custom UI components can react to changes to fields that have been changed in other UI components:

```

```

## Code Examples

```
<!-- template -->
<template>
   <!-- use tpm-promotion component -->
   <cgcloud-tpm-promotion 
        promotion-id={recordId}
        onpromotionchange={onPromotionChange}
   ></cgcloud-tpm-promotion>
   
   <!-- render text -->
   <lightning-formatted-text value={myNewField}></lightning-formatted-text>
</template>

<!-- controller -->
import { LightningElement, api } from 'lwc';

export default class MyCustomComponent extends LightningElement {
    @api
    recordId; // required for the promotion id

    myNewField = '';

    // Listen for promotion change events
    onPromotionChange(event) {
        this.myNewField = event.detail.value['MyNewField__c'];
    }
}
```

```
// Custom Component controller
storeCustomRecords() {
    // Get the component
    const promotionComponent = this.template.querySelector('cgcloud-tpm-promotion');
    promotionComponent.setCustomState( // Set the new Custom State
        Object.assign( // Use a object assign to ensure we are keeping other values
            {},
            customState,
            { myRecords: myRecords }
        )
    );    
}
```

```
// Custom Component controller
storeCustomValues(){
    // Get the component
    const promotionComponent = this.template.querySelector('cgcloud-tpm-promotion');

    // set a promotion field
    promotionComponent.setPromotionField('cgcloud__Slogan_Language_1__c', 'My new Slogan');
    
    // set a tactic field
    promotionComponent.setTacticField(tacticId, 'cgcloud__Group_Text__c', 'My tactic text');
    
    // set a tactic fund field
    const tacticFunds = promotionComponent.getProperty('tacticFunds');
    
    // Retrieved objects are locked, to change them, make a shallow copy and set it
    const newTacticFunds = [...tacticFunds];
    newTacticFunds[0] = {...newTacticFunds[0]};
    newTacticFunds[0].IsDeleted = true;
    
    // Set the values
    promotionComponent.setTacticFunds(tacticFunds);
}
```

```
<!-- template -->
<template>
   <!-- use tpm-promotion component -->
   <cgcloud-tpm-promotion 
        promotion-id={recordId}
        onpromotionchange={onPromotionChange}
   ></cgcloud-tpm-promotion>
   
   {slogan}
</template>


<!-- Controller -->
import { LightningElement, api } from 'lwc';

export default class MyCustomComponent extends LightningElement {
    @api
    recordId; // required for the promotion id

    slogan = '';

    // Listen for promotion change events
    onPromotionChange(event) {
        const newSlogan = event.detail.value['cgcloud__Slogan__c'];
        if (this.slogan != newSlogan) {
            // Do your custom logic on slogan change
        }
        
        this.slogan = newSlogan;
    }
}
```
