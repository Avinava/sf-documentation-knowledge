---
title: "Policy Details"
domain: revenue-cloud
topic: policy-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.015Z
estimatedTokens: 115
keywords: [Policy, Details, Output, representation, details, policy.]
---

# Policy Details

> Output representation of the details of a policy.

# Policy Details

Output representation of the details of a policy.

JSON example

This example includes the details for different policy types.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the policy. | Big, 65.0 | 65.0 |
| negotiable | String | Indicates whether the policy is negotiable. Valid values are:NegotiableNon-Negotiable | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "bindingObjectGrantDetail": [
    {
      "effectiveEndDate": "Sat Oct 04 23:59:59 GMT 2025",
      "effectiveStartDate": "Fri Sep 05 00:00:00 GMT 2025",
      "grantType": "Grant",
      "id": "1B0SB0000000Eiv0AE",
      "product": {
        "id": "01tSB000006XMtqYAG"
      },
      "quantity": 100,
      "record": {
        "id": "02iSB000000IoETYA0"
      },
      "unitOfMeasure": {
        "id": "0hESB0000003yfp2AA"
      },
      "usageRefreshPolicy": {
        "id": "1BYSB0000001lOH4AY",
        "negotiable": null
      },
      "usageRolloverPolicy": {
        "id": "1BVSB000000A1xJ4AS",
        "negotiable": null
      },
      "validityPeriodTerm": 1,
      "validityPeriodUnit": "Month"
    }
  ]
}
```
