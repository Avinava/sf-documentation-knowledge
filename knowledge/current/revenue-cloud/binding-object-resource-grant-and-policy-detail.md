---
title: "Binding Object Resource Grant And Policy Detail"
domain: revenue-cloud
topic: binding-object-resource-grant-and-policy-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.416Z
estimatedTokens: 168
keywords: [Binding, Resource, Grant, Policy, Detail, Output, representation, details, resource, grants, binding, policies.]
---

# Binding Object Resource Grant And Policy Detail

> Output representation of the details of resource grants and binding policies.

# Binding Object Resource Grant And Policy Detail

Output representation of the details of resource grants and binding policies.

JSON example

This example includes the details of resource grants and binding policies for a specified binding object.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bindingObject​Grant​Detail | Binding Object Grant Detail[] | Details of the negotiated resource grants for the specified binding object. | Big, 65.0 | 65.0 |
| bindingObject​ResourcePolicy​Detail | Binding Object Resource Policy Detail | Detail of the binding policies. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "bindingObjectResourceGrantAndPolicyDetail": {
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
    ],
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
}
```

## Related Topics

- Binding Object Grant Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_binding_object_grant_detail_output.htm)
- Binding Object Resource Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_binding_object_resource_policy_detail_output.htm)
