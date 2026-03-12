---
title: "Lightning Action Examples"
domain: lightning
topic: lightning-action-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.715Z
estimatedTokens: 1347
keywords: [Lightning, Action, Examples, base, components, Quick, Contact, panel, recordViewForm, recordEditForm, force, recordData, Usage, Differences]
---

# Lightning Action Examples

> Here are some examples that use the base components to create a Quick Contact action
        panel.

# Lightning Action Examples

Here are some examples that use the base components to create a Quick Contact action panel.

Let’s say you want to create a Lightning action that enables users to create contacts on an account record. You can do this easily using lightning:recordViewForm and lightning:recordEditForm. If you require granular customization, use force:recordData.

The following examples can each be added as a Lightning action on the account object. Clicking the action’s button on the account layout opens a panel to create a contact.

## Create a Lightning Action Using lightning:recordViewForm and lightning:recordEditForm

The Quick Contact action panel includes a header with the account name and a form that creates a contact for that account record. Display the account name using lightning:recordViewForm and display the contact form using lightning:recordEditForm.

![Example of Lightning action using lightning:recordEditForm](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdata_service_form_action.png&folder=lightning)

formQuickContact.cmp

```

```

formQuickContactController.js

```

```

Using lightning:recordEditForm, you can nest thelightning:inputField components in <div\> containers and add custom styling. You also need to provide your own cancel and submit buttons.

Consider the simpler lightning:recordForm component, which provides default **Cancel** and **Save** buttons. You can achieve the same result by replacing the lightning:recordEditForm component with the following.

```

```

## Create a Lightning Action Using force:recordData

The Quick Contact action panel includes a header with the account name and a form that creates a contact for that account record. Display the account name and display the contact form using two separate instances of force:recordData.

![Example of Lightning action using force:recordData](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdata_service_example_action.png&folder=lightning)

This force:recordData example is similar to the example provided in [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm#components_using_lex_s1_config_action_recordid "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on."). Compare the two examples to better understand the differences between using @AuraEnabled Apex controllers and using Lightning Data Service.

ldsQuickContact.cmp

```

```

ldsQuickContactController.js

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The callback passed to getNewRecord() must be wrapped in $A.getCallback() to ensure correct access context when the callback is invoked. If the callback is passed in without being wrapped in $A.getCallback(), any attempt to access private attributes of your component results in access check failures.

Even if you’re not accessing private attributes, it’s a best practice to always wrap the callback function for getNewRecord() in $A.getCallback(). Never mix (contexts), never worry.

ldsQuickContactHelper.js

```

```

## Usage Differences

Consider the following differences between the previous examples.

Field labels and values

lightning:recordViewForm and lightning:recordEditForm obtain labels and the requiredness properties from the object schema. In the first example, the Last Name field is a required field on the contact object. The component provides field-level validation.

With force:recordData, you must provide your own labels and requiredness property for each field. You can also provide your own field-level validation, as shown by the lightning:input component with the pattern and messageWhenPatternMismatch attributes.

Saving the record

lightning:recordEditForm saves the record automatically when you provide a lightning:button component with the submit type.

With force:recordData, you must call the saveRecord function.

Lightning Data Service errors

lightning:recordViewForm and lightning:recordEditForm display Lightning Data Service errors automatically using lightning:messages, and provide custom error handling via the onerror event handler.

With force:recordData, you must handle and display the errors on your own.

#### See Also

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

-   [Controlling Access](atlas.en-us.lightning.meta/lightning/access_intro.htm "The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.")

## Code Examples

```
<aura:component implements="force:lightningQuickActionWithoutHeader,force:hasRecordId">
    
   <div class="slds-page-header" role="banner">
       <lightning:recordViewForm recordId="{!v.recordId}" 
                                 objectApiName="Account">
           
           <div class="slds-text-heading_label">
               <lightning:outputField fieldName="Name" variant="label-hidden"/>
           </div>
           <lightning:messages/>
       </lightning:recordViewForm>
       <h1 class="slds-page-header__title slds-m-right_small
                      slds-truncate slds-align-left">Create New Contact</h1>
    </div>
    <lightning:recordEditForm aura:id="myform"
                              objectApiName="Contact"
                              onsubmit="{!c.handleSubmit}"
                              onsuccess="{!c.handleSuccess}">
        <lightning:messages/>
        <lightning:inputField fieldName="FirstName"/>
        <lightning:inputField fieldName="LastName"/>
        <lightning:inputField fieldName="Title"/>
        <lightning:inputField fieldName="Phone"/>
        <lightning:inputField fieldName="Email"/>
        <div class="slds-m-top_medium">
            <lightning:button label="Cancel" onclick="{!c.handleCancel}" />
            <lightning:button type="submit" label="Save Contact" variant="brand"/>
        </div>
    </lightning:recordEditForm>
    
</aura:component>
```

```
({
    handleCancel: function(cmp, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
    
    handleSubmit: function(cmp, event, helper) {
        event.preventDefault();
        var fields = event.getParam('fields');
        fields.AccountId = cmp.get("v.recordId");
        cmp.find('myform').submit(fields);
    },
    
    handleSuccess: function(cmp, event, helper) {
        // Success! Prepare a toast UI message
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "title": "Contact Saved",
            "message": "The new contact was created."
        });
        
        // Update the UI: close panel, show toast, refresh account page
        $A.get("e.force:closeQuickAction").fire();
        resultsToast.fire();
        
        // Reload the view
        $A.get("e.force:refreshView").fire();    
    }
})
```

```
<aura:attribute name="fields" type="String[]" default="['FirstName','LastName','Title','Phone','Email']" />
<lightning:recordForm objectApiName="Contact"
                      fields="{!v.fields}"
                      onsubmit="{!c.handleSubmit}"
                      onsuccess="{!c.handleSuccess}" />
```

```apex
<aura:component implements="force:lightningQuickActionWithoutHeader,force:hasRecordId">

    <aura:attribute name="account" type="Object"/>
    <aura:attribute name="simpleAccount" type="Object"/>
    <aura:attribute name="accountError" type="String"/>
    <force:recordData aura:id="accountRecordLoader"
        recordId="{!v.recordId}"
        fields="Name,BillingCity,BillingState"
        targetRecord="{!v.account}"
        targetFields="{!v.simpleAccount}"
        targetError="{!v.accountError}"
    />

    <aura:attribute name="newContact" type="Object" access="private"/>
    <aura:attribute name="simpleNewContact" type="Object" access="private"/>
    <aura:attribute name="newContactError" type="String" access="private"/>
    <force:recordData aura:id="contactRecordCreator"
        layoutType="FULL"
        targetRecord="{!v.newContact}"
        targetFields="{!v.simpleNewContact}"
        targetError="{!v.newContactError}"
        />

    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <!-- Display a header with details about the account -->
    <div class="slds-page-header" role="banner">
        <p class="slds-text-heading_label">{!v.simpleAccount.Name}</p>
        <h1 class="slds-page-header__title slds-m-right_small
            slds-truncate slds-align-left">Create New Contact</h1>
    </div>

    <!-- Display Lightning Data Service errors, if any -->
    <aura:if isTrue="{!not(empty(v.accountError))}">
            {!v.accountError}
    </aura:if>
    <aura:if isTrue="{!not(empty(v.newContactError))}">
        {!v.newContactError}
    </aura:if>

    <!-- Display the new contact form -->
    <lightning:input aura:id="contactField" name="firstName" label="First Name"
                     value="{!v.simpleNewContact.FirstName}" required="true"/>
  
    <lightning:input aura:id="contactField" name="lastname" label="Last Name"
                     value="{!v.simpleNewContact.LastName}" required="true"/>
            
    <lightning:input aura:id="contactField" name="title" label="Title"
                     value="{!v.simpleNewContact.Title}" />
    
    <lightning:input aura:id="contactField" type="phone" name="phone" label="Phone Number"
                     pattern="^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$"
                     messageWhenPatternMismatch="The phone number must contain 7, 10, or 11 digits. Hyphens are optional."
                     value="{!v.simpleNewContact.Phone}" required="true"/>
    
    <lightning:input aura:id="contactField" type="email" name="email" label="Email"
                     value="{!v.simpleNewContact.Email}" />
        
    <lightning:button label="Cancel" onclick="{!c.handleCancel}" class="slds-m-top_medium" />
    <lightning:button label="Save Contact" onclick="{!c.handleSaveContact}"
                      variant="brand" class="slds-m-top_medium"/>
     
    
</aura:component>
```

```
({
    doInit: function(component, event, helper) {
        component.find("contactRecordCreator").getNewRecord(
            "Contact", // objectApiName
            null, // recordTypeId
            false, // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newContact");
                var error = component.get("v.newContactError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    },

    handleSaveContact: function(component, event, helper) {
        if(helper.validateContactForm(component)) {
            component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
            component.find("contactRecordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {

                    // Success! Prepare a toast UI message
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Contact Saved",
                        "message": "The new contact was created."
                    });

                    // Update the UI: close panel, show toast, refresh account page
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();

                    // Reload the view so components not using force:recordData
                    // are updated
                    $A.get("e.force:refreshView").fire();
                }
                else if (saveResult.state === "INCOMPLETE") {
                    console.log("User is offline, device doesn't support drafts.");
                }
                else if (saveResult.state === "ERROR") {
                    console.log('Problem saving contact, error: ' +
                                 JSON.stringify(saveResult.error));
                }
                else {
                    console.log('Unknown problem, state: ' + saveResult.state +
                                ', error: ' + JSON.stringify(saveResult.error));
                }
            });
        }
    },

    handleCancel: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
})
```

## Related Topics

- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
- Controlling Access (atlas.en-us.lightning.meta/lightning/access_intro.htm)
