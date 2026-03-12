---
title: "Gift Commitment Default Designations Output"
domain: nonprofit-cloud
topic: gift-commitment-default-designations-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.024Z
estimatedTokens: 116
keywords: [Gift, Commitment, Designations, Output, representation, associated]
---

# Gift Commitment Default Designations Output

> Output representation of a list of default designations associated with a gift
    commitment.

# Gift Commitment Default Designations Output

Output representation of a list of default designations associated with a gift commitment.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| commitmentDefaultDesignations | Gift Commitment Default Designation Record Output [] | List of default gift designations associated with a gift commitment. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "commitmentDefaultDesignations":[
      {
         "designationId":"6idRM000000000LYAQ",
         "percent":100
      },
      {
         "designationId":"6gaxx000004WhULAA0",
         "percent":50
      }
   ]
}
```

## Related Topics

- Gift Commitment Default Designation Record Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_gift_commitment_default_designation_record_output.htm)
