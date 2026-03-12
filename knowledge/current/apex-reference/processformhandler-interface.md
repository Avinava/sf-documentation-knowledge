---
title: "ProcessFormHandler Interface"
domain: apex-reference
topic: processformhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.898Z
estimatedTokens: 423
namespace: RichMessaging
keywords: [ProcessFormHandler, Apex, processes, responses, forms, submitted, messaging, session., processFormRequest, Example, Implementation]
---

# ProcessFormHandler Interface

> Apex interface that processes the responses to forms submitted in a messaging
        session.

**Namespace:** `RichMessaging`

# ProcessFormHandler Interface

Apex interface that processes the responses to forms submitted in a messaging session.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[ProcessFormHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm#apex_RichMessaging_ProcessFormHandler_methods)**


## ProcessFormHandler Methods

The following are methods for ProcessFormHandler.

-   **[processFormRequest](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm#apex_RichMessaging_ProcessFormHandler_processFormRequest)**
    Processes the form request and returns the ID of the record created during form processing.

### processFormRequest

Processes the form request and returns the ID of the record created during form processing.

#### Signature

ID processFormRequest(RichMessaging.ProcessFormResponse formResponse)

#### Parameters

formResponse

Type: RichMessaging.ProcessFormResponse

The form response.

#### Return Value

ID

Type: RichMessaging.ProcessFormResponse

#### ProcessFormHandler Example Implementation

The sample ContactApexFormHandler Apex class automatically captures the customer's submitted details, creates a Contact record in Salesforce, and returns the Contact record ID.

This is an example implementation of the RichMessaging.ProcessFormHandler interface.

```

```

For more information, see "Create a Form Based on an Apex Class" in [this help topic](https://help.salesforce.com/s/articleView?id=service.messaging_components_forms.htm&language=en_US).

## Code Examples

```apex
global class ContactApexFormHandler implements Richmessaging.ProcessFormHandler{
    global ID 
    processFormRequest(RichMessaging.ProcessFormResponse formResponse) {
        // Create a new Contact object
            Contact newContact = new Contact(
            Phone = formResponse.formValues.get('Phone'),
            Salutation = formResponse.formValues.get('Salutation'),
            Email = formResponse.formValues.get('Email')
            );
    // Insert the new contact into the database
    insert newContact;
     // Return the ID of the newly created contact
     return newContact.Id;
```

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- ProcessFormHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm)
- processFormRequest (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm)
