---
title: "Creating a Form"
domain: lightning
topic: creating-a-form
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.239Z
estimatedTokens: 1321
keywords: [Creating, Form, Work, user, input, server-side, updating, record, displaying, hiding, components, Implement, Basic]
---

# Creating a Form

> Work with user input for server-side use, such as creating or updating a record. Or
        get user input to update the user interface, such as displaying or hiding
        components.

# Creating a Form

Work with user input for server-side use, such as creating or updating a record. Or get user input to update the user interface, such as displaying or hiding components.

If you’re creating a form to work with Salesforce data, use the lightning:recordForm, lightning:recordEditForm, lightning:recordViewForm, or force:recordData base components as they are built on [Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency."). Otherwise, you must wire up the fields to the Salesforce object yourself and use Apex to process the user input as shown in the next section.

## Example

The [Aura Components Basics Trailhead module](https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_basics "HTML (New Window)") walks you through building a form for creating an expense record.

## Implement a Basic Form

Before proceeding, we recommend that you have working knowledge of [web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms "HTML (New Window)"), as the rest of the topic builds on that concept.

You can collect data in fields that accept different types of user input, such as a checkbox, date, email, file, password, number, phone, radio, or text. Most user input can be collected by using [lightning:input](https://developer.salesforce.com/docs/component-library/bundle/lightning:input "HTML (New Window)").

Here’s a list of form controls for option selection and their corresponding base components.

-   Button: [lightning:button (and lightning:buttonIcon and so on)](https://developer.salesforce.com/docs/component-library/bundle/lightning:button "HTML (New Window)")
-   Checkbox: [lightning:checkboxGroup](https://developer.salesforce.com/docs/component-library/bundle/lightning:checkboxGroup "HTML (New Window)")
-   Dropdown menu for single selection: [lightning:combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning:combobox "HTML (New Window)")
-   Dropdown menu for single selection using the HTML <select\>: [lightning:select](https://developer.salesforce.com/docs/component-library/bundle/lightning:select "HTML (New Window)")
-   Dual listbox for multiple selection: [lightning:dualListbox](https://developer.salesforce.com/docs/component-library/bundle/lightning:dualListbox "HTML (New Window)")
-   Radio button: [lightning:radioGroup](https://developer.salesforce.com/docs/component-library/bundle/lightning:radioGroup "HTML (New Window)")

Here’s a list of form controls for entering an input value and their corresponding base components.

-   Input field: [lightning:input](https://developer.salesforce.com/docs/component-library/bundle/lightning:input "HTML (New Window)")
-   Address compound field: [lightning:inputAddress](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputAddress "HTML (New Window)")
-   Geolocation compound field: [lightning:inputLocation](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputLocation "HTML (New Window)")
-   Name compound field: [lightning:inputName](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputName "HTML (New Window)")
-   Rich text field: [lightning:inputRichText](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputRichText "HTML (New Window)")
-   Input range for number selection: [lightning:slider](https://developer.salesforce.com/docs/component-library/bundle/lightning:slider)
-   Text input (multi-line): [lightning:textarea](https://developer.salesforce.com/docs/component-library/bundle/lightning:textarea "HTML (New Window)")

When you use the base components, the <label\> and <input\> elements are automatically configured for you. For form styling, you get the Salesforce Lightning Design System (SLDS) styling. You can also use SLDS utility classes to customize the layout of your form.

Let’s say we want a form that collects a contact’s name, email address, and comments.

In this example, we are using lightning:inputName, lightning:input, and lightning:textarea in a standalone app. To create a grid layout for the fields, use lightning:layout.

```

```

The client-side controller submits the user data to the Apex controller and updates the v.message attribute when the contact is created successfully.

```

```

The Apex controller uses the upsert DML operation to create a contact record.

```

```

Notice that the form allows you to submit empty fields without any user interaction. The field-level errors for required fields that you leave empty are displayed only after you interact with the fields. Also, if you enter an invalid email format, the email field displays an error.

Customize the submission behavior to prevent invalid fields from getting submitted. For more information, see [Validating Fields](atlas.en-us.lightning.meta/lightning/js_validate_fields.htm "Validate user input, handle errors, and display error messages on input fields.").

## Code Examples

```
<aura:application access="GLOBAL" extends="force:slds" controller="ContactController"> 
    <aura:attribute name="salutationOptions" type="List" default="[
        {'label': 'Mr.', 'value': 'Mr.'},
        {'label': 'Ms.', 'value': 'Ms.'},
        {'label': 'Mrs.', 'value': 'Mrs.'},
        {'label': 'Dr.', 'value': 'Dr.'},
        {'label': 'Prof.', 'value': 'Prof.'},
    ]"/>
    <aura:attribute name="newContact" type="Contact"
        default="{ 'sobjectType': 'Contact',
                   'Title': '',
                   'FirstName': '',
                   'LastName': '',
                   'Email': '',
                   'Description': '' }" />
    <aura:attribute name="message" type="String" default=""/>
    
    <lightning:card iconName="standard:contact" title="Add a Contact">
        <div class="slds-p-around_medium">
            <lightning:layout>
                <lightning:layoutItem size="4" padding="around-small">
                    <lightning:inputName aura:id="contact"
                                         label="Contact Name"
                                         firstName="{!v.newContact.FirstName}"
                                         lastName="{!v.newContact.LastName}"
                                         salutation="{!v.newContact.Title}"
                                         options="{!v.salutationOptions}"
                                         required="true"/>
                </lightning:layoutItem> 
                <lightning:layoutItem size="8" padding="around-small">
                    <lightning:input aura:id="contact" label="Email" type="email" value="{!v.newContact.Email}"/>
                    <lightning:textarea aura:id="contact" label="Comments" value="{!v.newContact.Description}"/>
                    <lightning:button label="Create Contact" onclick="{!c.handleCreateContact}" variant="brand" class="slds-m-top_medium"/>
                </lightning:layoutItem>
            </lightning:layout>
            <p>{!v.message}</p>
        </div>
    </lightning:card>
</aura:application>
```

```
({
    handleCreateContact: function(component, event) {
        var saveContactAction = component.get("c.createContact");
            saveContactAction.setParams({
                "contact": component.get("v.newContact")
            });
        
        // Configure the response handler for the action
        saveContactAction.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.message", "Contact created successfully");
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
    },
})
```

```apex
public with sharing class ContactController {
    
    @AuraEnabled
    public static Contact createContact(Contact contact){
        upsert contact;
        return contact;
    }
}
```

## Related Topics

- Lightning Data Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Validating Fields (atlas.en-us.lightning.meta/lightning/js_validate_fields.htm)
