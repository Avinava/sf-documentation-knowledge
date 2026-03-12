---
title: "Object Reference"
domain: revenue-cloud
topic: object-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.518Z
estimatedTokens: 190
keywords: [Output, representation, sObject, along, any, potential, error]
---

# Object Reference

> Output representation of an sObject with a reference ID along with any potential
    error.

# Object Reference

Output representation of an sObject with a reference ID along with any potential error.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| referenceId | String | ID that identifies the specific Salesforce object that’s returned in the API response. | Small, 59.0 | 59.0 |
| record | Map<String, Object> | The sObject record data represented as a map of attribute names to their values. | Small, 59.0 | 59.0 |
| error | https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm[] | Detailed information about any error associated with the sObject in the response. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "referenceid": "refQuote",
  "record": {
    "attributes": {
      "type": "Quote",
      "method": "POST"
    },
    "quantity": "2"
  },
  "error": {
    "errorCode": "INVALID_API_INPUT",
    "message": "Reference Id format is irrelevant."
  }
}
```
