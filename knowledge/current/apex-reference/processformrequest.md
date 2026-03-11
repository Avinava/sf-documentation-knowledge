---
title: "processFormRequest"
domain: apex-reference
topic: processformrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.674Z
keywords: [processFormRequest, Processes, form, request, returns, record, created, during, processing., Signature, Parameters, Return, Value, ProcessFormHandler, Example, Implementation]
---

# processFormRequest

> Processes the form request and returns the ID of the record created during form
    processing.

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