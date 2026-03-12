---
title: "Document Management Input"
domain: health-cloud-object-reference
topic: document-management-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.945Z
estimatedTokens: 262
keywords: [Document, Management, Input, representation, split]
---

# Document Management Input

> Input representation for the document split request.

# Document Management Input

Input representation for the document split request.

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

## Code Examples

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
