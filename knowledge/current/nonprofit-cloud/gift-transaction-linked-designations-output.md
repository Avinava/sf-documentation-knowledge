---
title: "Gift Transaction Linked Designations Output"
domain: nonprofit-cloud
topic: gift-transaction-linked-designations-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.035Z
estimatedTokens: 90
keywords: [Gift, Transaction, Linked, Designations, Output, representation]
---

# Gift Transaction Linked Designations Output

> Output representation of a list of gift designations.

# Gift Transaction Linked Designations Output

Output representation of a list of gift designations.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| transactionLinkedDesignations | Gift Designation Record Output[] | List of designations. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "transactionLinkedDesignations":[
      {
         "amount":100,
         "designationId":"6gdRM000000000LYAQ",
         "percent":100
      },
      {
         "amount":100,
         "designationId":"6gcxx000004WhULAA0",
         "percent":50
      }
   ]
}
```

## Related Topics

- Gift Designation Record Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_gift_designation_record_output.htm)
