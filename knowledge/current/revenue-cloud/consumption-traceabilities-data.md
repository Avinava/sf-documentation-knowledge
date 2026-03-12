---
title: "Consumption Traceabilities Data"
domain: revenue-cloud
topic: consumption-traceabilities-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.574Z
estimatedTokens: 83
keywords: [Consumption, Traceabilities, Data, Output, representation, list, asset, details.]
---

# Consumption Traceabilities Data

> Output representation of the list of asset details.

# Consumption Traceabilities Data

Output representation of the list of asset details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assets | Asset Detail[] | List of assets for the specified liable summaries. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "data": {
    "assets": [
      {
        "assetId": "ASSET1",
        "usageEntitlementAccountId": "1EA000000000001",
        "grantBindingTargetId": "1GB000000000001",
        "billingPeriods": [
          {
            "startDate": "2025-01-01",
            "endDate": "2025-01-31",
            "resources": [
              {
                "liableSummaryId": "1HG000000000001",
                "usageResourceId": "1BX000000000004",
                "usageResourceName": "SF Credits",
                "usageResourceUomId": "1UM000000000001",
                "usageResourceUomUnitCode": "CREDIT",
                "resourceTotalOverageQuantity": 333.33,
                "resourceTotalOverageAmount": 333.33,
                "resourceTotalConsumption": 1500,
                "rateAndConsumptionSources": [
                  {
                    "startDate": "2025-01-01",
                    "endDate": "2025-01-31",
                    "rateUomId": "USD",
                    "ratableSummaryId": "URS3",
                    "ratingExecutionId": "1RE000000000001",
                    "overageQuantity": 333.33,
                    "overageAmount ": 333.33,
                    "totalConsumption": 1500,
                    "netUnitRate": 1,
                    "consumptionSources": [
                      {
                        "consumptionSourceId": "1AE000000000001",
                        "consumptionUnit": 500
                      },
                      {
                        "consumptionSourceId": "1CO000000000001",
                        "consumptionUnit": 375,
                        "commitRate": 1.5,
                        "targetRate": 2,
                        "cmtAssetRatableSummaryId": "URSCARID1"
                      },
                      {
                        "consumptionSourceId": "1CO000000000002",
                        "consumptionUnit": 125,
                        "commitRate": 0.75,
                        "targetRate": 1,
                        "cmtAssetRatableSummaryId": "URSCARID2"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Related Topics

- Asset
                  Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_asset_detail_output.htm)
