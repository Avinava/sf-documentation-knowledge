---
title: "Navigate to a Record Create Page with Default Field Values"
domain: lightning
topic: navigate-to-a-record-create-page-with-default-field-values
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.337Z
estimatedTokens: 743
keywords: [Navigate, Record, lightning, pageReferenceUtils, component, utilities, encoding, Pass, pageReference.state.defaultFieldValues, attribute, standard__objectPage, Launch, Account, Standard, Action]
---

# Navigate to a Record Create Page with Default Field Values

> The lightning:pageReferenceUtils component
        provides utilities for encoding default field values into a string. Pass this string into
        the pageReference.state.defaultFieldValues
        attribute on standard__objectPage page reference
        types.

# Navigate to a Record Create Page with Default Field Values

The lightning:pageReferenceUtils component provides utilities for encoding default field values into a string. Pass this string into the pageReference.state.defaultFieldValues attribute on standard\_\_objectPage page reference types.

To launch a record create page with prepopulated field values, use the lightning:pageReferenceUtils and lightning:navigation components together. The examples on this page show you how to do this using standard actions and override actions.

## Launch an Account Record with Default Field Values Using a Standard Action

This example adds two standard action links that navigate to a record create page with default field values. The first link uses a URL that you generate using generateUrl(pageRef), and the second link navigates directly to the record create page using navigate(pageRef).

```

```

In your client-side controller, get defaultFieldValues from pageRef and pass them into encodeDefaultFieldValues(). When you click a link to create an account, encodeDefaultFieldValues() reads and encodes the values and passes them into a new standard\_\_objectPage.

```

```

## Handle Default Field Values Using an Override Action

With standard actions, the default field values pass through the URL to the object as a string, and the redirect and replace is handled for you. With override actions, the encoding is handled for you, but you are responsible for decoding the string of default field values from the URL and handling the redirect and replace.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

We recommend that you always redirect and replace to remove the default field values from the URL and browser history.

This example uses hasPageReference to launch an account create page via an override action.

```

```

The client-side controller reads the default field values from the state key and gets the encoded string. It then passes the string into decodeDefaultFieldValues() to decode it and retrieve the object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

All default field values are passed into the record create page as strings, regardless of field type. For example, NumberOfEmployees: 35000 is passed into the page as the string 35000 instead of a number field type. Boolean values are passed into the page as true or false strings.

This example is similar to prepopulating field values using lightning:recordEditForm, except that here the defaultFieldValues are dynamically generated when navigating to the form.

```

```

#### See Also

-   [*Component Library*: lightning:pageReferenceUtils Reference](https://developer.salesforce.com/docs/component-library/bundle/lightning:pageReferenceUtils/documentation "Component Library: lightning:pageReferenceUtils
    Reference - HTML (New Window)")

## Code Examples

```
<!-- auraNavigator.cmp -->
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes">
    <aura:attribute name="url" type="String"/>
    
    <!-- Specify the pageReference type. Only object is supported. -->
    <aura:attribute name="pageReference" type="Object"/>
    <aura:handler name="init" value="{! this }" action="{! c.init }"/>

    <!-- Implement the navigation service. -->
    <lightning:navigation aura:id="navService"/>

    <!-- pageReferenceUtil component -->
    <lightning:pageReferenceUtils aura:id="pageRefUtils"/>

    <!-- Generate a link to launch an account record create page. -->
    <a href="{!v.url}">New Account (Aura Link)</a> <br/>

    <!-- Launch an account record create page -->
    <a href="#" onclick="{!c.handleClick}">New Account (Aura PageRef)</a> <br/>
</aura:component>
```

```
// auraNavigatorController.js
({
    init : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            state: {
            }
        }
        // Replace with your own field values
        var defaultFieldValues = {
            Name: "Salesforce, #1=CRM",
            OwnerId: "005XXXXXXXXXXXXXXX",
            AccountNumber: "ACXXXX",
            NumberOfEmployees: 35000,
            CustomCheckbox__c: true
        };
        pageRef.state.defaultFieldValues = cmp.find("pageRefUtils").encodeDefaultFieldValues(defaultFieldValues);
        cmp.set("v.pageReference", pageRef);
        var defaultUrl = "#";

        // Generate a Link for the Aura Link example
        navService.generateUrl(pageRef)
        .then($A.getCallback(function(url) {
            cmp.set("v.url", url ? url : defaultUrl);
        }), $A.getCallback(function(error) {
            cmp.set("v.url", defaultUrl);
        }));
    },
    
    // Navigate to the record create page for the Aura PageRef example
    handleClick : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageRef = cmp.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageRef);
    }
})
```

```
<!-- auraNewAccountOverride.cmp -->
<aura:component implements="lightning:actionOverride,lightning:hasPageReference">

    <lightning:pageReferenceUtils aura:id="pageRefUtils"/>
    <lightning:recordEditForm 
                    objectApiName="Account"
                    onload="{!c.handleCreateLoad}">
        <lightning:messages />
        <lightning:inputField aura:id="nameField" fieldName="Name"/>
        <lightning:inputField aura:id="numOfEmpField" fieldName="NumberOfEmployees"/>
        <lightning:inputField aura:id="ownerIdField" fieldName="OwnerId"/>
        <lightning:inputField aura:id="customCheckField" fieldName="CustomCheckbox__c"/>
        <lightning:button class="slds-m-top_small" type="submit" label="Create new" />
    </lightning:recordEditForm>
</aura:component>
```

```
// auraNewAccountOverrideController.js
({
    handleCreateLoad: function (cmp, event, helper) {
        var pageRef = cmp.get("v.pageReference");
        var defaultFieldValues =
        cmp.find("pageRefUtils").decodeDefaultFieldValues(pageRef.state.defaultFieldValues);
    
        var nameFieldValue = cmp.find("nameField").set("v.value", defaultFieldValues.Name);
        var numOfEmpFieldValue = cmp.find("numOfEmpField").set("v.value", defaultFieldValues.NumberOfEmployees);
        var ownerIdFieldValue = cmp.find("ownerIdField").set("v.value", defaultFieldValues.OwnerId);
        var customCheckFieldValue = cmp.find("customCheckField").set("v.value", defaultFieldValues.CustomCheckbox__c === 'true');
    }
})
```
