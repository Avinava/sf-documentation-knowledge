---
title: "External Documents Save"
domain: clm-developer-guide
topic: external-documents-save
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.353Z
estimatedTokens: 185
keywords: [External, Documents, Save]
---

# External Documents Save

> Save external documents.

# External Documents Save

Save external documents.

Resource

```

```

Available version

58.0

Example for PUT

```

```

HTTP methods

PUT

Request body for PUT

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalDocumentId | String | ID of an external document. | Required | 58.0 |
| isAsync | Boolean | Is Async | Required | 58.0 |
| metadata | External Document Metadata | Metadata | Optional | 58.0 |

Response body for PUT

[Save External Document Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_save_external_document.htm "Output representation for save external document operation.")

## Code Examples

```
/connect/external-document/save
```

```
https://yourInstance.salesforce.com/services/data/v58.0/connect/external-document?externalDocumentId=${externalDocumentId}&isAsync=false
```

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
- Save External Document Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_save_external_document.htm)
