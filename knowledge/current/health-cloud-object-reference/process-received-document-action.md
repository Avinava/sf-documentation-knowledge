---
title: "Process Received Document Action"
domain: health-cloud-object-reference
topic: process-received-document-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.156Z
estimatedTokens: 514
keywords: [Process, Received, Document, Action, record, processed, results, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Process Received Document Action

> Create a record with the processed results of the specified received
			document.

# Process Received Document Action

Create a record with the processed results of the specified received document.

This action is available in API version 59.0 and later.

## Special Access Rules

The Document Checklist and Intelligent Document Workspace permission set licenses are required to access the Process Received Document action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/processReceivedDocument

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| additionalFields | TypesObjectDescriptionRecord containing the additional fields to create or update in the target object, which aren't present in the Intelligent Document Reader field mappings. |
| documentTypeId | TypestringDescriptionID of the document type record that’s used in the template with the Intelligent Document Reader field mappings to use to process the received document. |
| ignoreFieldValueConflict | TypebooleanDescriptionIndicates whether to ignore conflicts in Optical Character Recognition (OCR) (true) or not (false). The default value is false. |
| objectApiName | TypestringDescriptionAPI name of the target object to create or update a record for. |
| override​Confidence​Score​Threshold | TypeintegerDescriptionConflict confidence score threshold value to use for the extracted value. |
| receivedDocumentId | TypestringDescriptionRequired.ID of the received document record to process. |
| recordTypeId | TypestringDescriptionID of the record type of the target object to create a record for. |
| templateApiName | TypestringDescriptionAPI name of the template with the Intelligent Document Reader field mappings to use to process the received document. |

## Outputs

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionID of the record created by the action. |

## Example

POST

Here’s a sample request for the Process Received Document action.

```

```

Here’s a sample response for the Process Received Document action.

```

```

## Code Examples

```
{ 
  "inputs" : [
    {
      "receivedDocumentId" : "0ioRM00000002nPYAQ",
      "objectApiName" : "Demo__c",
      "templateApiName" : "InsuranceCard",
      "recordTypeId" : "012RM0000005c7bYAA",
      "documentTypeId" : "0deRM00000000GnYAI"
    }
  ]
}
```

```
[
  {
    "actionName": "processReceivedDocument",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "recordId": "a00RM000001DZ6ZYAW"
    }
  }
]
```
