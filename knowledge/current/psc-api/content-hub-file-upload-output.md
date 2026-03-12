---
title: "Content Hub File Upload Output"
domain: psc-api
topic: content-hub-file-upload-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.785Z
estimatedTokens: 185
keywords: [Content, Hub, File, Upload, Output, representation]
---

# Content Hub File Upload Output

> Output representation for Content Hub File Upload.

# Content Hub File Upload Output

Output representation for Content Hub File Upload.

JSON Example

```

```

Properties

| Property Name | Description |
| --- | --- |
| isSuccess | Indicates whether the request succeeded (true) or failed (false). |
| contentVersionId | The content version ID generated at the server side for the file being uploaded. |
| contentDocumentId | The content document ID generated at the server side for the file being uploaded. |
| contentDocumentLinkId | The content document link ID, which maintains the link between contextId and Content Document ID. |
| code | The status code that represents the status of the request. |
| message | The message that explains why the request failed or a related message. |

## Code Examples

```
{
    "code": 201,
    "contentDocumentId": "069xx0000004CH6",
    "contentDocumentLinkId": null,
    "contentVersionId": "068xx0000004CH6AAM",
    "isSuccess": true,
    "message": "The file null has been uploaded at 00Dxx0000006Gnj-sfdcroot/onlyCases/simple/sf_agent_1741704735043.png"
}
```
