---
title: "Date Issue Input"
domain: netzero-cloud-dev-guide
topic: date-issue-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.240Z
estimatedTokens: 211
keywords: [Date, Issue, Input, representation, energy, consumption, records, having, issues]
---

# Date Issue Input

> Input representation of the request to get energy consumption
      records having date issues.

# Date Issue Input

Input representation of the request to get energy consumption records having date issues.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Filter Input[] | List of filters to filter the records. Each filter item is a key-value pair that contains the name and its value.Possible name is:FuelType | Required | 55.0 |
| recordId | String | ID of the Stationary Asset Carbon Footprint object for which the associated energy consumption records with date issues must be retrieved.Ensure that the Stationary Asset Carbon Footprint object has a valid start date and end date. | Required | 55.0 |
| types | String[] | Types of date issues.Possible values are:MISSING_DATESOUT_OF_DATE_RANGEOVERLAPPING_DATES | Required | 55.0 |

## Code Examples

```
{
   "recordId":"0ps1Q00002WsMwBQAV",
   "types":[
      "MISSING_DATES",
      "OUT_OF_DATE_RANGE",
      "OVERLAPPING_DATES"
   ],
   "filters":[
      {
         "item":"FuelType",
         "value":"Diesel"
      }
   ]
}
```

## Related Topics

- Filter
                        Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_request_filter_input.htm)
