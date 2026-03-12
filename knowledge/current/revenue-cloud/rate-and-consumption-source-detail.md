---
title: "Rate and Consumption Source Detail"
domain: revenue-cloud
topic: rate-and-consumption-source-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.293Z
estimatedTokens: 367
keywords: [Rate, Consumption, Source, Detail, Output, representation, details, specific, rate, its, consumption, source.]
---

# Rate and Consumption Source Detail

> Output representation of the details of a specific rate and its consumption
    source.

# Rate and Consumption Source Detail

Output representation of the details of a specific rate and its consumption source.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| consumptionSource​Details | Consumption Source Detail[] | Details on the consumption source. | Big, 66.0 | 66.0 |
| endDate | String | End date for the specific rate period. | Big, 66.0 | 66.0 |
| netUnit​Rate | Double | Net unit rate. | Big, 66.0 | 66.0 |
| overageAmt | Double | Amount for the overage quantity. | Big, 66.0 | 66.0 |
| overageQty | Double | Quantity of consumption that was rated as overage. | Big, 66.0 | 66.0 |
| ratable​SummaryId | String | Unique ID for the summary used in rating. | Big, 66.0 | 66.0 |
| ratable​SummaryStatus | String | Status of ratable summary. | Big, 66.0 | 66.0 |
| rateUomId | String | Unit of measure for the rate. | Big, 66.0 | 66.0 |
| rateUomName | String | Name of the rate unit of measure | Big, 66.0 | 66.0 |
| ratingExecution​Id | String | Execution ID of the rating. | Big, 66.0 | 66.0 |
| sourceUsage​ResourceId | String | ID of the source usage resource. | Big, 66.0 | 66.0 |
| sourceUsage​ResourceName | String | Name of the source usage resource. | Big, 66.0 | 66.0 |
| startDate | String | Start date for the specific rate period. | Big, 66.0 | 66.0 |
| total​Consumption | Double | Total quantity consumed for this rate. | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
```

## Related Topics

- Consumption Source Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_consumption_source_detail_output.htm)
