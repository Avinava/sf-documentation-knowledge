---
title: "Binding Object Resource Policy Detail"
domain: revenue-cloud
topic: binding-object-resource-policy-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.148Z
estimatedTokens: 255
keywords: [Binding, Resource, Policy, Detail, Output, representation, usage]
---

# Binding Object Resource Policy Detail

> Output representation of the details of a usage resource policy.

# Binding Object Resource Policy Detail

Output representation of the details of a usage resource policy.

JSON example

This example includes the details of a usage resource policy.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| drawdown​Order | String | Specifies the order or way to process the drawdown. See Usage Management Essentials to know more about a drawdown process. | Big, 65.0 | 65.0 |
| id | String | ID of the Binding Object Usage Resource Policy record. | Big, 65.0 | 65.0 |
| ratingFrequency​Policy | Policy Detail | Details of the rating frequency policy. | Big, 65.0 | 65.0 |
| usageAggregation​Policy | Policy Detail | Details of the usage aggregation policy. | Big, 65.0 | 65.0 |
| usageCommitment​Policy | Policy Detail | Details of the commitment policy of the usage resource. | Big, 65.0 | 65.0 |
| usageOverage​Policy | Policy Detail | Details of the overage policy of the usage resource. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "bindingObjectResourcePolicyDetail": {
    "drawdownOrder": "ExpiringFirst",
    "id": "1X2SB00000002WT0AY",
    "ratingFrequencyPolicy": {
      "id": "1HJSB0000000G3B4AU",
      "negotiable": null
    },
    "usageAggregationPolicy": {
      "id": "1cfSB0000001xHPYAY",
      "negotiable": null
    },
    "usageCommitmentPolicy": {
      "id": null,
      "negotiable": null
    },
    "usageOveragePolicy": {
      "id": "7UkSB00000002OP0AY",
      "negotiable": null
    }
  }
}
```

## Related Topics

- Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_policy_detail_output.htm)
