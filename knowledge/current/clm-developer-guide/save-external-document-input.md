---
title: "Save External Document Input"
domain: clm-developer-guide
topic: save-external-document-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.178Z
estimatedTokens: 110
keywords: [Save, External, Document, Input, representation, salesforce]
---

# Save External Document Input

> Input representation to save external document to
    salesforce.

# Save External Document Input

Input representation to save external document to salesforce.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalDocumentId | String | ID of an external document. | Required | 58.0 |
| isAsync | Boolean | Is Async | Required | 58.0 |
| metadata | External Document Metadata | Metadata | Optional | 58.0 |

## Code Examples

```
{
    "externalDocumentId" : "id",
    "isAsync" : "false", 
    "metadata": {
        "sections" : [
            {
                "guid": "guid1",
                "name": "test1",
                "isReadonly": false
            },
            {
                "guid": "guid2",
                "name": "test2",
                "isReadonly": false
            }
        ],
        "objectReferences" :[
            {
                "objectType": "clause",
                "objectId": "clauseid1",
                "usages": {
                    "sectionIds": [
                        "guid1",
                        "guid2"
                    ],
                    "usedInDocument": true
                }
            },
            {
                "objectType": "clause",
                "objectId": "clauseid2",
                "usages": {
                    "sectionIds": [
                        "guid1",
                        "guid2"
                    ],
                    "usedInDocument": false // points to if this object is used in document as well without sections
                }
            }
        ]
    }
}
```

## Related Topics

- External
                        Document Metadata (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_external_document_metadata.htm)
