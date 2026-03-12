---
title: "Document Decision"
domain: omnistudio
topic: document-decision
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.164Z
estimatedTokens: 398
keywords: [Document, Decision, Invoke, Table, accept, key-value, pairs, match, keys, either, Types, Categories, associated, them.]
---

# Document Decision

> Invoke a Decision Table, accept key-value pairs that match the Decision Table keys, and
    return either Document Types or Document Categories and the Document Types associated with
    them.

# Document Decision

Invoke a Decision Table, accept key-value pairs that match the Decision Table keys, and return either Document Types or Document Categories and the Document Types associated with them.

For example, one use case is applying for a driver's license. Based on questions about where the applicant lives, a Decision Table can list the documents to be uploaded for proof of identity.

The Decision Table must be active and have DocumentDecisionRequirement, a platform object, as its Source Object. This platform object stores the Decision Table's inputs, outputs, and business rules.

One of the Decision Table outputs must be DocumentReferenceObjectId, which references a Document Type or Document Category object. An optional output is isUploadRequired, which sets the default for the Document Categories property isRequired. These two outputs don’t appear in the connect API’s outputs.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | List<Map<String, Object>> | List of inputs passed to Decision Table. Each key is a Decision Table field name, and each value is valid for that field. | Required | 59.0 |

Response body for POST

[Document Decision Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_document_decision_response.htm "Output representation of the Document Decision response, including Decision Table output.")

## Code Examples

```
/connect/document-matrix/document-decision/decisionTableId
```

```
{
  "inputs": [
    {
      "Country": "USA",
      "State": "CA"
    }
  ]
}
```

## Related Topics

- Document Decision Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_document_decision_response.htm)
