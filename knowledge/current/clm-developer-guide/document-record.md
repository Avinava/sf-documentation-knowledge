---
title: "Document Record"
domain: clm-developer-guide
topic: document-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.461Z
estimatedTokens: 154
keywords: [Document, Record]
---

# Document Record

> Document record.

# Document Record

Document record.

Response example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, String> | Additional fields related to document for custom implementation. | Big, 56.0 | 56.0 |
| fileExtension | String | The file extension of document. | Small, 56.0 | 56.0 |
| name | String | The name of document. | Small, 56.0 | 56.0 |
| sourceId | String | The source ID of document. | Small, 56.0 | 56.0 |
| sourceType | String | The source type of document. | Small, 56.0 | 56.0 |

## Code Examples

```
{
    "documents": 
    [
       
        {
            "name":"docx-template",
            "sourceId": "800xx000000boTRAAY",
            "fileExtension":"docx",            
            "sourceType":"Content",
            "additionalFields":
                {
                    "key1": "value1"
                }
        },
        {
            "name":"annual-contract-doc",
            "sourceId": "800xx000000boQTFGS",
            "fileExtension":"pdf",            
            "sourceType":"Content",
            "additionalFields":
                {
                    "key1": "value1",
                    "key2": "value2"
                }
        }
    ]
}
```
