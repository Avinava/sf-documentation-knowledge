---
title: "Document Recipient Status"
domain: clm-developer-guide
topic: document-recipient-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.456Z
estimatedTokens: 318
keywords: [Document, Recipient, Status, Output, representation, sequence, signers]
---

# Document Recipient Status

> Output representation of recipient status and sequence information for the
    signers.

# Document Recipient Status

Output representation of recipient status and sequence information for the signers.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contract​Document​VersionId | String | Record ID of the contract document version. | Small, 61.0 | 61.0 |
| hasCurrent​UserSigned | Boolean | Indicates whether the current user has signed the document (true) or not (false). The default value is false. | Small, 61.0 | 61.0 |
| isCurrent​UserRecipient | Boolean | Indicates whether the current user is also a signer (true) or not (false). The default value is false. | Small, 61.0 | 61.0 |
| preceding​SignersExists | Boolean | Indicates whether the document is signed by preceding signers (true) or not (false). The default value is false. | Small, 61.0 | 61.0 |
| preceding​SignersSigned | Boolean | Indicates whether all preceding signers have completed their signatures (true) or not (false). The default value is false. | Small, 61.0 | 61.0 |
| recipient​Sequence | Integer | Sequence number of the current user. | Small, 61.0 | 61.0 |
| recipients | Recipients Response[] | List of all the signers involved in the contract document. | Big, 61.0 | 61.0 |

## Code Examples

```
{
  "isCurrentUserRecipient": "true",
  "hasCurrentUserSigned": "true",
  "recipientSequence": "4",
  "preceddingSignersExists": "true",
  "preceedingSignersSigned": "true",
  "Recipients": [
    {
      "Name": "Rishyv Misrep",
      "email": "rishyv@salesforce.com",
      "status": "Signed",
      "finalStatusDateTime": ""
    }
  ]
}
```

## Related Topics

- Recipients Response[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_recipient_output.htm)
