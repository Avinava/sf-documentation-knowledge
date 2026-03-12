---
title: "Lightning Base Components Considerations"
domain: lightning
topic: lightning-base-components-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:49.255Z
estimatedTokens: 1362
keywords: [Lightning, Base, Components, Considerations, guidelines, Alternatives, Targeting, Component, DOM, Deprecated, Block-Element-Modifier, BEM, Notation, Individual, Limited]
---

# Lightning Base Components Considerations

> Learn about the guidelines on using the base components.

# Lightning Base Components Considerations

Learn about the guidelines on using the base components.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Don’t depend on the markup of a base component as its internals can change in future releases. Reaching into the component internals can also cause unrecoverable errors in the app. For example, using cmp.get("v.body") and examining the DOM elements can cause issues in your code if the component markup changes down the road. See the knowledge article [Salesforce Component Internals Are Protected](https://help.salesforce.com/s/articleView?id=001395244&type=1&language=en_US).

## Alternatives to Targeting the Component DOM

With Lightning Locker enforced, you can’t traverse the DOM for components you don't own. Instead of accessing the DOM tree, take advantage of value binding with component attributes and use component methods that are available to you. For example, to get an attribute on a component, use cmp.find("myInput").get("v.name") instead of cmp.find("myInput").getElement().name. The latter doesn’t work if you don’t have access to the component, such as a component in another namespace.

## Deprecated Block-Element-Modifier (BEM) Notation

In LWC API version 61.0, Salesforce changed the specification for SLDS class name modifiers. We changed from using the double-dash \-- notation for modifiers to using the single-underscore notation \_. Use the latest notation when authoring your components.

```

```

```

```

## Individual Component Considerations

Many of the base components are still evolving and these considerations can help you while you’re building your apps.

lightning:buttonMenu

This component contains menu items that are created only if the button is triggered. You can’t reference the menu items during initialization or if the button isn’t triggered yet.

lightning:input

Fields for percentage and currency input must specify a step increment of 0.01 as required by the native implementation.

```

```

When working with checkboxes, radio buttons, and toggle switches, use aura:id to group and traverse the array of components. Grouping them enables you to use get("v.checked") to determine which elements are checked or unchecked without reaching into the DOM. You can also use the name and value attributes to identify each component during the iteration. The following example groups three checkboxes together using aura:id.

```

```

In your client-side controller, you can retrieve the array using cmp.find("colors") and inspect the checked values.

When working with type="file", you must provide your own server-side logic for uploading files to Salesforce. Read the file using the FileReader HTML object, and then encode the file contents before sending them to your Apex controller. In your Apex controller, you can use the EncodingUtil methods to decode the file data. For example, you can use the Attachment object to upload files to a parent object. In this case, you pass in the base64 encoded file to the Body field to save the file as an attachment in your Apex controller.

Uploading files using this component is subject to regular Apex controller limits, which is 1 MB. To accommodate file size increase due to base64 encoding, we recommend that you set the maximum file size to 750 KB. You must implement chunking for file sizes larger than 1 MB. Files uploaded via chunking are subject to a size limit of 4 MB. For more information, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)") . Alternatively, you can use lightning:fileUpload to upload files directly to records.

lightning:tab

This component creates its body during runtime. You can’t reference the component during initialization. Referencing the component using aura:id can return unexpected results, such as the component returning an undefined value when implementing cmp.find("myComponent").

lightning:tabset

When you load more tabs than can fit the width of the viewport, the tabset provides navigation buttons to scroll horizontally to display the overflow tabs.

## Methods with Limited Support on Some Components

Some methods have limited support or no support on these components:

-   lightning:avatar
-   lightning:badge
-   lightning:breadcrumb
-   lightning:formattedDateTime
-   lightning:formattedNumber
-   lightning:icon
-   lightning:input
-   lightning:inputField
-   lightning:outputField
-   lightning:relativeDateTime
-   lightning:textarea

getDef()

getDef() can’t get API methods or attach change handlers in the specified components. The correct way to work with base components is to work with the instances, and not attempt to access the component or its definition.

getReference()

getReference() method support is limited. You can’t use it with controllers with these components. For example, getReference('v.value') works but getReference('c.myFunc') doesn’t work.

afterRender()

afterRender() isn’t supported by the specified components. Don’t call afterRender() on Lightning base components directly. For example, component.find('lightning:input').afterRender() doesn’t work.

No nested component access

You can’t access sub-components inside a base component. You can only use the exposed API. For example, cmp.find('mylightning:inputField').find('innercomponent') doesn’t work.

## Code Examples

```
<!-- Incorrect BEM notation -->
<a class="slds-button slds-button--neutral" href="#">Neutral Link</a>
```

```
<!-- Correct BEM notation -->
<a class="slds-button slds-button_neutral" href="#">Neutral Link</a>
```

```
<lightning:input type="number" name="percentVal" label="Enter a percentage value" formatter="percent" step="0.01" />
<lightning:input type="number" name="currencyVal" label="Enter a dollar amount" formatter="currency" step="0.01" />
```

```
<aura:component>
    <form>
      <fieldset>
        <legend>Select your favorite color:</legend>
        <lightning:input type="checkbox" label="Red" 
            name="color1" value="1" aura:id="colors"/>
        <lightning:input type="checkbox" label="Blue" 
            name="color2" value="2" aura:id="colors"/>
        <lightning:input type="checkbox" label="Green" 
            name="color3" value="3" aura:id="colors"/>
      </fieldset>
    <lightning:button label="Submit" onclick="{!c.submitForm}"/>
    </form>
</aura:component>
```
