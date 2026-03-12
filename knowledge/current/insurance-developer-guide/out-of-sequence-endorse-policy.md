---
title: "Out-of-Sequence Endorse Policy"
domain: insurance-developer-guide
topic: out-of-sequence-endorse-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.713Z
estimatedTokens: 128
keywords: [Out-of-Sequence, Endorse, Policy, Output, representation, sequence, endorsement, process]
---

# Out-of-Sequence Endorse Policy

> Output representation of the details for the out of sequence policy endorsement
    process.

# Out-of-Sequence Endorse Policy

Output representation of the details for the out of sequence policy endorsement process.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response[] | Error details when the out-of-sequence endorsement operation fails. | Small, 65.0 | 65.0 |
| jobIdentifier | String | ID of the job that's created for the out-of-sequence endorsement process. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "error": [
    {
      "detail": "Looks like you don't have access to this feature. Your Salesforce admin can help with that.",
      "errors": [
        {
          "code": "INTERNAL_ERROR",
          "message": "Something went wrong. Try again later or contact your Salesforce admin for help."
        }
      ],
      "instance": "",
      "title": "Access Denied"
    }
  ],
  "jobIdentifier": "15Uxx0000004CUWEA2"
}
```

## Related Topics

- Error
                  Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_output.htm)
