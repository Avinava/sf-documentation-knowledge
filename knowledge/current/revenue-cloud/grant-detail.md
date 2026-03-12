---
title: "Grant Detail"
domain: revenue-cloud
topic: grant-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.920Z
estimatedTokens: 256
keywords: [Grant, Detail, Output, representation, details, grant, ProductUsageGrant, LineItemUsageResourceGrant, TransactionUsageEntitlement, objects.]
---

# Grant Detail

> Output representation of the details of a grant from the ProductUsageGrant,
    LineItemUsageResourceGrant, or TransactionUsageEntitlement objects.

# Grant Detail

Output representation of the details of a grant from the ProductUsageGrant, LineItemUsageResourceGrant, or TransactionUsageEntitlement objects.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| grantType | String | Details about the grant type. | Big, 65.0 | 65.0 |
| id | String | ID of the usage resource grant. | Big, 65.0 | 65.0 |
| quantity | Double | Quantity of the negotiated usage resource grant. | Big, 65.0 | 65.0 |
| usageGrant​Negotiable | String | Specifies whether the grant is negotiable or not. | Big, 65.0 | 65.0 |
| usageRefresh​Policy | Policy Detail | ID of the usage grant refresh policy. | Big, 65.0 | 65.0 |
| usageRollover​Policy | Policy Detail | ID of the usage grant rollover policy. | Big, 65.0 | 65.0 |
| validity​PeriodTerm | Double | Validity period term of the grant. | Big, 65.0 | 65.0 |
| validity​PeriodUnit | String | Validity period unit of the grant. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "negotiatedGrantDetail": {
    "grantType": "Grant",
    "id": "1X6xx00000000OECAY",
    "quantity": 100,
    "usageGrantNegotiable": "Negotiable",
    "usageRefreshPolicy": {
      "displayName": null,
      "id": "1BYxx0000004C92GAE",
      "negotiable": "Non-Negotiable"
    },
    "usageRolloverPolicy": {
      "displayName": null,
      "id": "1BVxx0000004C92GAE",
      "negotiable": "Non-Negotiable"
    },
    "validityPeriodTerm": 12,
    "validityPeriodUnit": "Month"
  }
}
```

## Related Topics

- Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_policy_detail_output.htm)
