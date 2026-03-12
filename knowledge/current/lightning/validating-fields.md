---
title: "Validating Fields"
domain: lightning
topic: validating-fields
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:49.200Z
estimatedTokens: 1470
keywords: [Validating, Validate, user, input, handle, errors, display, error, messages, Prevent, Invalid, Getting, Submitted, Validation, Considerations]
---

# Validating Fields

> Validate user input, handle errors, and display error messages on input
        fields.

# Validating Fields

Validate user input, handle errors, and display error messages on input fields.

Built-in field validation is available for the base components discussed in [Creating a Form](atlas.en-us.lightning.meta/lightning/lightning_base_form.htm "Work with user input for server-side use, such as creating or updating a record. Or get user input to update the user interface, such as displaying or hiding components.").

Base components simplify input validation by providing attributes to define error conditions, enabling you to handle errors by checking the component’s validity state. For example, you can set a minimum length for a field, display an error message when the condition is not met, and handle the error based on the given validity state.

Most of the base components provide attributes and methods to enable different ways to validate input.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Refer to the [Component Library](https://developer.salesforce.com/docs/component-library/ "HTML (New Window)") for component examples, specification, and documentation.

Require a field

When you set required="true", the field is invalid when a user interacts with it but does not make a selection or enter an input.

Specify a type

A lightning:input field that expects a certain data type is invalid if an incorrect data format is entered. For example, the email type on lightning:input expects an email address and the number type expects a number.

Specify a criteria

A lightning:input field that specifies a certain criteria or attribute, max, min, pattern, and so on, is invalid if the criteria isn’t met. You can provide a custom error message using attributes like messageWhenValueMissing, when it’s available on the component.

Check field validity

The validity attribute on the base components returns the validity states of an input. This attribute is based on the ValidityState object from the Web API. For example, you want to check if a field is valid when a user removes focus from the field.

```

```

If all constraint validations are met, the field returns true .

```

```

Report field validity

To programmatically set and display an error message on a field, use the setCustomValidity() and reportValidity() methods available on the base components. For more information, see the [lightning:input documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:input/documentation "HTML (New Window)").

## Prevent Invalid Fields from Getting Submitted

In [Creating a Form](atlas.en-us.lightning.meta/lightning/lightning_base_form.htm "Work with user input for server-side use, such as creating or updating a record. Or get user input to update the user interface, such as displaying or hiding components.") we implemented a basic form with built-in validation for required fields and specific types. Let’s customize the submission behavior such that the form displays errors on invalid fields. Customized behavior is useful if a user tries to submit an empty form and to identify errors in a field.

```

```

## Example

The [Aura Components Basics Trailhead module](https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_basics "HTML (New Window)") walks you through building a form for creating an expense record.

## Field Validation Considerations

Client-side field validation provides an initial check for user data before submitting it to the server. Implement your own server-side validation to ensure that user data is saved in the expected format. Consider the following guidelines.

Start with Lightning Data Service

When working with Salesforce data, we recommend that you use the lightning:recordForm, lightning:recordEditForm, lightning:recordViewForm, or force:recordData base components. They are built on [Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency."), which ensures data consistency, while handling sharing rules and field-level security for you. The components also provide field validation and error handling.

Enforce data integrity

For data integrity, enforce it at the lowest level possible. For example, specifying required="true" on the base components is only cosmetic. Enforce the field as required in the field definition. See [Require Field Input to Ensure Data Quality](https://help.salesforce.com/articleView?id=fields_about_universally_required_fields.htm&language=en_US "HTML (New Window)").

Consider validation rules

Define [validation rules](https://help.salesforce.com/articleView?id=fields_about_field_validation.htm&language=en_US "HTML (New Window)") to verify that the data a user enters in a record meets the standards you specify before the user can save the record. You can retrieve the error that’s returned by a validation rule using [response.getError()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getError.htm "Returns an array of error objects for server-side actions only. Each error object has a message field. In any mode except PROD mode, each object also has a stack field, which is a list describing the execution stack when the error occurred."). If you don’t handle the error, the form submission fails silently.

Alternatively, use a base component built on Lightning Data Service to automatically display the validation rule error on a field. For example, you can define a validation rule that enforces an email address to contain @example.com. The field displays the error message if the validation rule fails.

## Code Examples

```
<lightning:input name="input" aura:id="myinput" label="Enter some text" onblur="{! c.handleBlur }" />
```

```
handleBlur: function (cmp, event) {
    var validity = cmp.find("myinput").get("v.validity");
    console.log(validity.valid); //returns true
}
```

```
({
    handleCreateContact: function(component, event) {
        var allValid = component.find('contact').reduce(function (validSoFar, inputCmp) {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);

        if (allValid) {
        /******** Insert code from "Creating a Form" topic ********/
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
            /******** End code from "Creating a Form" topic ********/
        } else {
            alert('Please update the invalid form entries and try again.');
        }
        
    },
})
```

## Related Topics

- Creating a Form (atlas.en-us.lightning.meta/lightning/lightning_base_form.htm)
- Lightning Data Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- response.getError() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getError.htm)
