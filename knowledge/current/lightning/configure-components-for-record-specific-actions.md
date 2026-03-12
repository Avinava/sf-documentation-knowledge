---
title: "Configure Components for Record-Specific Actions"
domain: lightning
topic: configure-components-for-record-specific-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.475Z
estimatedTokens: 1256
keywords: [Configure, Components, Record-Specific, Actions, Add, force, hasRecordId, Aura, component, enable, assigned, current, record, useful, Lightning]
---

# Configure Components for Record-Specific Actions

> Add the force:hasRecordId interface to an Aura
        component to enable the component to be assigned the ID of the current record. The current
        record ID is useful if the component is used on a Lightning record page, as an
        object-specific custom action or action override in Lightning Experience or the Salesforce
        app, and so on.

# Configure Components for Record-Specific Actions

Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.

force:hasRecordId is a marker interface. A marker interface is a signal to the component’s container to add the interface’s behavior to the component.

The recordId attribute is set only when you place or invoke the component in an explicit record context. For example, when you place the component directly on a record page layout, or invoke it as an object-specific action from a record page or object home. In all other cases, such as when you invoke the component as a global action, or create the component programmatically inside another component, recordId isn’t set, and your component shouldn’t depend on it.

## Example of a Component for a Record-Specific Action

This extended example shows a component designed to be invoked as a custom object-specific action from the detail page of an account record. After creating the component, you need to create the custom action on the account object, and then add the action to an account page layout. When opened using an action, the component appears in an action panel that looks like this:![QuickContact action panel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Factions_quickcontact_panel.png&folder=lightning)

The component definition begins by implementing both the force:lightningQuickActionWithoutHeader and the force:hasRecordId interfaces. The first makes it available for use as an action and prevents the standard controls from displaying. The second adds the interface’s automatic record ID attribute and value assignment behavior, when the component is invoked in a record context.

quickContact.cmp

```

```

The component defines the following attributes, which are used as member variables.

-   account—holds the full account record, after it’s loaded in the init handler
-   newContact—an empty contact, used to capture the form field values

The rest of the component definition is a standard form that displays an error on the field if the required fields are empty or the phone field doesn’t match the specified pattern.

The component’s controller has all of the interesting code, in three action handlers.

quickContactController.js

```

```

The first action handler, doInit, is an init handler. Its job is to use the record ID that’s provided via the force:hasRecordId interface and load the full account record. Note that there’s nothing to stop this component from being used in an action on another object, like a lead, opportunity, or custom object. In that case, doInit will fail to load a record, but the form will still display.

The handleSaveContact action handler validates the form by calling a helper function. If the form isn’t valid, the field-level errors are displayed. If the form is valid, then the action handler:

-   Prepares the server action to save the new contact.
-   Defines a callback function, called the response handler, for when the server completes the action. The response handler is discussed in a moment.
-   Enqueues the server action.

The server action’s response handler does very little itself. If the server action was successful, the response handler:

-   Closes the action panel by firing the force:closeQuickAction event.
-   Displays a “toast” message that the contact was created by firing the force:showToast event.
-   Updates the record page by firing the force:refreshView event, which tells the record page to update itself.

This last item displays the new record in the list of contacts, once that list updates itself in response to the refresh event.

The handleCancel action handler closes the action panel by firing the force:closeQuickAction event.

The component helper provided here is minimal, sufficient to illustrate its use. You’ll likely have more work to do in any production quality form validation code.

quickContactHelper.js

```

```

Finally, the Apex class used as the server-side controller for this component is deliberately simple to the point of being obvious.

QuickContactController.apxc

```

```

One method retrieves an account based on the record ID. The other associates a new contact record with an account, and then saves it to the database.

#### See Also

-   [Configure Components for Custom Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm "Add the force:lightningQuickAction or force:lightningQuickActionWithoutHeader interface to an Aura component to enable it to be used as a custom action in Lightning Experience or the Salesforce mobile app. You can use components that implement one of these interfaces as object-specific or global actions in both Lightning Experience and the Salesforce mobile app.")

## Code Examples

```
<aura:component controller="QuickContactController"
    implements="force:lightningQuickActionWithoutHeader,force:hasRecordId">

    <aura:attribute name="account" type="Account" />
    <aura:attribute name="newContact" type="Contact"
        default="{ 'sobjectType': 'Contact' }" /> <!-- default to empty record -->
    
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />

    <!-- Display a header with details about the account -->
    <div class="slds-page-header" role="banner">
        <p class="slds-text-heading_label">{!v.account.Name}</p>
        <h1 class="slds-page-header__title slds-m-right_small
            slds-truncate slds-align-left">Create New Contact</h1>
    </div>

    <!-- Display the new contact form -->
     <lightning:input aura:id="contactField" name="firstName" label="First Name"
                      value="{!v.newContact.FirstName}" required="true"/>
  
    <lightning:input aura:id="contactField" name="lastname" label="Last Name"
                     value="{!v.newContact.LastName}" required="true"/>
            
    <lightning:input aura:id="contactField" name="title" label="Title"
                     value="{!v.newContact.Title}" />
    
    <lightning:input aura:id="contactField" type="phone" name="phone" label="Phone Number"
                     pattern="^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$"
                     messageWhenPatternMismatch="The phone number must contain 7, 10, or 11 digits. Hyphens are optional."
                     value="{!v.newContact.Phone}" required="true"/>
    
    <lightning:input aura:id="contactField" type="email" name="email" label="Email"
                     value="{!v.newContact.Email}" />
        
    <lightning:button label="Cancel" onclick="{!c.handleCancel}" class="slds-m-top_medium" />
    <lightning:button label="Save Contact" onclick="{!c.handleSaveContact}"
               variant="brand" class="slds-m-top_medium"/>
    
</aura:component>
```

```
({
    doInit : function(component, event, helper) {

        // Prepare the action to load account record
        var action = component.get("c.getAccount");
        action.setParams({"accountId": component.get("v.recordId")});

        // Configure response handler
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.account", response.getReturnValue());
            } else {
                console.log('Problem getting account, response state: ' + state);
            }
        });
        $A.enqueueAction(action);
    },

    handleSaveContact: function(component, event, helper) {
        if(helper.validateContactForm(component)) {
            
            // Prepare the action to create the new contact
            var saveContactAction = component.get("c.saveContactWithAccount");
            saveContactAction.setParams({
                "contact": component.get("v.newContact"),
                "accountId": component.get("v.recordId")
            });

            // Configure the response handler for the action
            saveContactAction.setCallback(this, function(response) {
                var state = response.getState();
                if(state === "SUCCESS") {

                    // Prepare a toast UI message
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Contact Saved",
                        "message": "The new contact was created."
                    });

                    // Update the UI: close panel, show toast, refresh account page
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                    $A.get("e.force:refreshView").fire();
                }
                else if (state === "ERROR") {
                    console.log('Problem saving contact, response state: ' + state);
                }
                else {
                    console.log('Unknown problem, response state: ' + state);
                }
            });

            // Send the request to create the new contact
            $A.enqueueAction(saveContactAction);
        }
        
    },

    handleCancel: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})
```

```
({
    validateContactForm: function(component) {
        var validContact = true;

        // Show error messages if required fields are blank
        var allValid = component.find('contactField').reduce(function (validFields, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validFields && inputCmp.get('v.validity').valid;
        }, true);

        if (allValid) {
            // Verify we have an account to attach it to
            var account = component.get("v.account");
            if($A.util.isEmpty(account)) {
                validContact = false;
                console.log("Quick action context doesn't have a valid account.");
            }
        }

        return(validContact);
    }
})
```

```apex
public with sharing class QuickContactController {

    @AuraEnabled
    public static Account getAccount(Id accountId) {
        // Perform isAccessible() checks here
        return [SELECT Name, BillingCity, BillingState FROM Account WHERE Id = :accountId];
    }
    
    @AuraEnabled
    public static Contact saveContactWithAccount(Contact contact, Id accountId) {
        // Perform isAccessible() and isUpdateable() checks here
        contact.AccountId = accountId;
        upsert contact;
        return contact;
    }

}
```

## Related Topics

- Configure Components for Custom Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)
