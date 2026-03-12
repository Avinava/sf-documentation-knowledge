---
title: "Usage Resource Grant And Policy Detail"
domain: revenue-cloud
topic: usage-resource-grant-and-policy-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.622Z
estimatedTokens: 220
keywords: [Usage, Resource, Grant, Policy, Detail, Output, representation, details, usage, resource, grant, policy.]
---

# Usage Resource Grant And Policy Detail

> Output representation of the details of a usage resource grant and policy.

# Usage Resource Grant And Policy Detail

Output representation of the details of a usage resource grant and policy.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| grant​Detail | Grant Detail | Details about the grants from the ProductUsageGrant object. | Big, 65.0 | 65.0 |
| negotiated​Grant​Detail | Grant Detail | Details about the negotiated grants from the LineItemUsageResourceGrant or TransactionUsageEntitlement object. | Big, 65.0 | 65.0 |
| negotiated​Resource​PolicyDetail | Resource Policy Detail | Details about the policy from the LineItemUsageResourcePolicy or BindingObjectUsageResourcePolicy object. | Big, 65.0 | 65.0 |
| resourcePolicy​Detail | Resource Policy Detail | Details about the policy from the ProductUsageResourcePolicy object. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "usageResourceGrantAndPolicyDetail": {
    "grantDetail": {
      "grantType": "Grant",
      "id": "1BXxx0000004C9lGAE",
      "quantity": 100,
      "usageGrantNegotiable": "Negotiable",
      "usageRefreshPolicy": {
        "id": "1BYxx0000004C92GAE",
        "negotiable": "Non-Negotiable"
      },
      "usageRolloverPolicy": {
        "id": "1BVxx0000004C93GAE",
        "negotiable": "Non-Negotiable"
      },
      "validityPeriodTerm": 1,
      "validityPeriodUnit": "Month"
    },
    "negotiatedGrantDetail": {
      "grantType": "Grant",
      "id": "1X6xx00000000OECAY",
      "quantity": 100,
      "usageGrantNegotiable": "Negotiable",
      "usageRefreshPolicy": {
        "id": "1BYxx0000004C92GAE",
        "negotiable": "Non-Negotiable"
      },
      "usageRolloverPolicy": {
        "id": "1BVxx0000004C93GAE",
        "negotiable": "Non-Negotiable"
      },
      "validityPeriodTerm": 1,
      "validityPeriodUnit": "Month"
    },
    "negotiatedResourcePolicyDetail": {
      "id": "1X5xx00000000OECAY",
      "ratingFrequencyPolicy": {
        "id": null,
        "negotiable": null
      },
      "usageAggregationPolicy": {
        "id": null,
        "negotiable": null
      },
      "usageCommitmentPolicy": {
        "id": "7Pexx0000004C92CAE",
        "negotiable": "Non-Negotiable"
      },
      "usageOveragePolicy": {
        "id": null,
        "negotiable": null
      }
    },
    "resourcePolicyDetail": {
      "id": "7Suxx0000004C9kCAE",
      "ratingFrequencyPolicy": {
        "id": null,
        "negotiable": null
      },
      "usageAggregationPolicy": {
        "id": null,
        "negotiable": null
      },
      "usageCommitmentPolicy": {
        "id": "7Pexx0000004C92CAE",
        "negotiable": "Non-Negotiable"
      },
      "usageOveragePolicy": {
        "id": null,
        "negotiable": null
      }
    }
  }
}
```

## Related Topics

- Grant Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_negotiated_grant_detail_output.htm)
- Resource
                  Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_resource_policy_detail_output.htm)
