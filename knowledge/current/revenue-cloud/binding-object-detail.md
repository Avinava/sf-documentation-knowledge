---
title: "Binding Object Detail"
domain: revenue-cloud
topic: binding-object-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.397Z
estimatedTokens: 182
keywords: [Binding, Detail, Output, representation, list, records, binding, target, details.]
---

# Binding Object Detail

> Output representation of the list of records with the binding target details.

# Binding Object Detail

Output representation of the list of records with the binding target details.

JSON example

This example includes the details of a binding object.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| binding​ObjectRate | Binding Object Rate | Details about the Binding Object Rates object or Asset Rates object. | Big, 65.0 | 65.0 |
| binding​Object​ResourceGrantAnd​PolicyDetail | Binding Object Resource Grant and Policy Detail | Details about the resource grants and binding policies. | Big, 65.0 | 65.0 |
| usage​Resource | Lookup Detail | Details of the usage resource such as the ID of the record. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "records": [
    {
      "bindingObjectRate": {
        "id": "1QNSB0000001JyH4AU,1QNSB0000001JyI4AU",
        "negotiatedRate": null,
        "negotiatedRateAdjustments": [
          {
            "lowerBound": 101,
            "name": null,
            "rateAdjustmentId": "1DMSB000001N3C74AK",
            "rateAdjustmentType": "Amount",
            "rateAdjustmentValue": 10,
            "tierUnitOfMeasure": "USD",
            "upperBound": null
          },
          {
            "lowerBound": 1,
            "name": null,
            "rateAdjustmentId": "1DMSB000001N3C64AK",
            "rateAdjustmentType": "Percentage",
            "rateAdjustmentValue": 30,
            "tierUnitOfMeasure": "USD",
            "upperBound": 100
          }
        ],
        "rate": 100,
        "rateCardEntryId": "1CJSB000000207R4AQ,1CJSB000000207S4AQ",
        "rateUnitOfMeasureName": "USD"
      },
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
      },
      "usageResource": {
        "id": "1BRSB0000001x4h4AA"
      }
    }
  ]
}
```

## Related Topics

- Binding Object Rate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_binding_object_rate_output.htm)
- Binding Object Resource Grant and Policy Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_binding_object_resource_grant_and_policy_detail_output.htm)
- Lookup Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_lookup_detail_output.htm)
