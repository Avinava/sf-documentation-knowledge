---
title: "Split Documents"
domain: health-cloud-object-reference
topic: split-documents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.341Z
estimatedTokens: 521
keywords: [Split, Documents, document, attach, pages, transformed, Salesforce, records]
---

# Split Documents

> Split a document and attach one or more pages from the transformed
      document to Salesforce
      records.

# Split Documents

Split a document and attach one or more pages from the transformed document to Salesforce records.

For example, suppose you receive a fax containing multiple patients' documents in a single scanned copy. As needed, separate the document pages and attach the split documents to the patient's record.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentID | String | The ID of the content document to be split. | Required | 55.0 |
| linkedObjectID | String | The ID of the linked object with which the split document must be associated. This is the ID of the DocumentChecklistItem object for Salesforce. | Required | 55.0 |

Request body for POST

Root XML tag

<DocumentManagementInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isOcrRequested | Boolean | Indicates whether OCR is required to process the content document (true) or not (false).By default, OCR is performed on the first five pages of the content document.NoteSet this field value to true to perform OCR on all the pages of a content document that contains more than five pages. | Optional | 55.0 |
| linkedObjectFieldsMap | Map<String, String> | Represents the map that contains the linked object fields. For example, the linked object is the Document Checklist Item for Salesforce. | Optional | 55.0 |
| pageSpecificationList | Page Specification List Input[] | The page specifications list representation. | Required | 55.0 |
| targetFileName | String | The name of the target file that is created from the split document. | Optional | 55.0 |

Response body for POST

[Document Management Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_management_result.htm "Output representation of the document split request.")

## Code Examples

```
/connect/document-automation/contentDocuments/${contentDocumentId}/linkedObjects/${linkedObjectId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/document-automation/contentDocuments/0ioRM0000004CqTYAU/linkedObjects/0OxRM0000004CqTYAU
```

```
{
    "pageSpecificationList": { 
        "pageSpecifications": [
            {
                "page":1,
                "rotation":0,
                "addToTargetFile":"true"
            },
            {
                "page":2,
                "rotation":0,
                "addToTargetFile":"true"
            }
        ]
    },
    "linkedObjectFieldsMap" : {
        "linkedObjectFields" : {"ReceivedDocumentId" : "0ioxx00000000ODAAY"}
    },
    "isOcrRequested" : true
}
```

## Related Topics

- Page
                        Specification List Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_page_specification_input.htm)
- Document Management Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_management_result.htm)
