---
title: "Binding Object Grant Detail"
domain: revenue-cloud
topic: binding-object-grant-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.402Z
estimatedTokens: 370
keywords: [Binding, Grant, Detail, Output, representation, details, usage, resource, grants, specified, binding, object.]
---

# Binding Object Grant Detail

> Output representation of the details of usage resource grants for a specified binding
    object.

# Binding Object Grant Detail

Output representation of the details of usage resource grants for a specified binding object.

JSON example

This example includes the details of usage resource grants for a specified binding object.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| effective​EndDate | String | Effective end date for the asset lifecycle. | Big, 65.0 | 65.0 |
| effective​StartDate | String | Effective start date for the asset lifecycle. | Big, 65.0 | 65.0 |
| grantType | String | Type of usage resource grant. | Big, 65.0 | 65.0 |
| id | String | ID of the Transaction Usage Entitlement record responsible for the grant. | Big, 65.0 | 65.0 |
| product | Lookup Detail | Details of the product. | Big, 65.0 | 65.0 |
| quantity | Double | Quantity of the binding object usage resource grant. | Big, 65.0 | 65.0 |
| record | Lookup Detail | ID of the asset. | Big, 65.0 | 65.0 |
| unitOf​Measure | Lookup Detail | unit of measure of the usage resource. | Big, 65.0 | 65.0 |
| usageRefresh​Policy | Policy Detail | ID of the usage grant refresh policy. | Big, 65.0 | 65.0 |
| usageRollover​Policy | Policy Detail | ID of the usage grant rollover policy. | Big, 65.0 | 65.0 |
| validityPeriod​Term | Double | Validity period term of the usage resource grant. | Big, 65.0 | 65.0 |
| validityPeriod​Unit | String | Validity period unit of the usage resource grant. | Big, 65.0 | 65.0 |

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

## Related Topics

- Lookup Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_lookup_detail_output.htm)
- Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_policy_detail_output.htm)
