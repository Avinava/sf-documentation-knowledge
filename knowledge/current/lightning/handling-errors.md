---
title: "Handling Errors"
domain: lightning
topic: handling-errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.720Z
estimatedTokens: 791
keywords: [Handling, Errors, Lightning, Data, Service, error, resource, record, inaccessible, server, Handle, Form-Based, Components, force, recordData]
---

# Handling Errors

> Lightning Data Service returns an error when a resource, such as a record or an object,
    is inaccessible on the server.

# Handling Errors

Lightning Data Service returns an error when a resource, such as a record or an object, is inaccessible on the server.

For example, an error occurs if you pass in an invalid input to the form-based components, such as an invalid record ID or missing required fields. An error is also returned if the record isn’t in the cache and the server is offline. Also, a resource can become inaccessible on the server when it’s deleted or has its sharing or visibility settings updated.

## Handle Errors For Form-Based Components

Two types of errors—field-level errors and Lightning Data Service errors—are handled by lightning:recordForm, lightning:recordEditForm, and lightning:recordViewForm. Field-validation errors display below a field and cannot be customized. For example, an error is shown below a required field when it’s empty. Lightning Data Service errors are handled in the following ways.

lightning:recordForm

Automatically displays an error message above the form fields. You can provide additional error handling using the onerror event handler.

lightning:recordEditForm

To automatically display an error message above or below the form fields, include lightning:messages before or after your lightning:inputField components.

You can provide additional error handling using the onerror event handler.

lightning:recordViewForm

To automatically display an error message above or below the form fields, include lightning:messages before or after your lightning:outputField components.

If a single field has multiple validation errors, the form shows only the first error on the field. Similarly, if a submitted form has multiple errors, the form displays only the first error encountered. When you correct the displayed error, the next error is displayed.

The error object looks like this.

```

```

Get the error object using this syntax.

```

```

## Handle Errors For force:recordData

To act when an error occurs, handle the recordUpdated event and handle the case where the changeType is “ERROR”.

## Example

Declare that your component handles the recordUpdated event.

```

```

Implement an action handler that handles the error.

```

```

If an error occurs when the record begins to load, targetError is set to a localized error message. An error occurs if:

-   Input is invalid because of an invalid attribute value, or combination of attribute values. For example, an invalid recordId, or omitting both the layoutType and the fields attributes.
-   The record isn’t in the cache and the server is unreachable (offline).

If the record becomes inaccessible on the server, the recordUpdated event is fired with changeType set to "REMOVED." No error is set on targetError, since records becoming inaccessible is sometimes the expected outcome of an operation. For example, after lead convert the lead record becomes inaccessible.

Records can become inaccessible for the following reasons.

-   Record or entity sharing or visibility settings restrict access.
-   Record or entity is deleted.

When the record becomes inaccessible on the server, the record’s JavaScript object assigned to targetRecord is unchanged.

## Code Examples

```
{
  "message": "Disconnected or Canceled",
  "detail": "",
  "output": {
    
  },
  "error": {
    "ok": false,
    "status": 400,
    "statusText": "Bad Request",
    "body": {
      "message": "Disconnected or Canceled"
    }
  }
}
```

```
handleError: function (cmp, event, helper) {
    var error = event.getParams();

    // Get the error message
    var errorMessage = event.getParam("message");
}
```

```
<force:recordData aura:id="forceRecord"
    recordId="{!v.recordId}"
    fields="Name,Title,Email"
    targetRecord="{!v._record}"
    targetFields="{!v.simpleRecord}"
    targetError="{!v._error}"
    recordUpdated="{!c.recordUpdated}" />
```

```
({
  recordUpdated: function(component, event, helper) {

    var changeType = event.getParams().changeType;

    if (changeType === "ERROR") { /* handle error; do this first! */ }
    else if (changeType === "LOADED") { /* handle record load */ }
    else if (changeType === "REMOVED") { /* handle record removal */ }
    else if (changeType === "CHANGED") { /* handle record change */ }
})
```
