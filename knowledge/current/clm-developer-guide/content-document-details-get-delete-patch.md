---
title: "Content Document Details (GET, DELETE, PATCH)"
domain: clm-developer-guide
topic: content-document-details-get-delete-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.221Z
estimatedTokens: 380
keywords: [Content, Document, PATCH, associated, contract, version]
---

# Content Document Details (GET, DELETE, PATCH)

> Get content document details associated with a contract document
      version.
    Delete content document details associated with a contract document
      version.
    Update the content document details associated with a contract document
      version.

# Content Document Details (GET, DELETE, PATCH)

Get content document details associated with a contract document version. Delete content document details associated with a contract document version. Update the content document details associated with a contract document version.

Resource

```

```

Available version

56.0

HTTP methods

GET, DELETE, PATCH

Example for GET

```

```

Example for DELETE

```

```

Example for PATCH

```

```

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentId | String | ID of the content document object created for an attachment. | Required | 56.0 |

JSON example for DELETE

```

```

Response body for GET

[Content Document List](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_document_list_respons.htm "Output representation of the content document record list.")

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentId | String | ID of the content document whose sharing status is being updated. | Required | 60.0 |
| share | Boolean | Indicates whether sharing is enabled (true) or disabled (false) for the content document. | Required | 60.0 |

Response body for PATCH

[Generic Output](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_generic_output.htm "Generic output response.")\[\]

## Code Examples

```
/connect/clm/contract-document-version/${contractDocumentVersionId}/content-documents
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract-document-version/$0qtXXXXXXX/content-documents
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract-document-version/$0qtXXXXXXX}/content-documents?contentDocumentId=$069XXXXXXX
```

```
https://yourInstance.salesforce.com/services/data/v60.0/connect/clm/contract-document-version/$0qtXXXXXXX/content-document?contentDocumentId=
069XXXXXXX&share=true
```

```
{
    "contractDocumentVersionId": "0qtXXXXXXX" // The contractDocumentVersionId for which the attachment is to be Deleted.
    "contentDocumentId" : "069XXXXXXX" // The ContentDocumentId is ID of ContentDocument created for attachment
}
```

## Related Topics

- Content Document List (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_document_list_respons.htm)
- Generic
              Output (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_generic_output.htm)
