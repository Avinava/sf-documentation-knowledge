---
title: "Date Issues"
domain: netzero-cloud-dev-guide
topic: date-issues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.294Z
estimatedTokens: 312
keywords: [Date, Issues, Identify, energy, consumption, records, associated, Stationary, Asset, Carbon, Footprint]
---

# Date Issues

> Identify and get energy consumption records with date issues
      associated with the Stationary Asset Carbon Footprint object.

# Date Issues

Identify and get energy consumption records with date issues associated with the Stationary Asset Carbon Footprint object.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Filter Input[] | List of filters to filter the records. Each filter item is a key-value pair that contains the name and its value.Possible name is:FuelType | Required | 55.0 |
| recordId | String | ID of the Stationary Asset Carbon Footprint object for which the associated energy consumption records with date issues must be retrieved.Ensure that the Stationary Asset Carbon Footprint object has a valid start date and end date. | Required | 55.0 |
| types | String[] | Types of date issues.Possible values are:MISSING_DATESOUT_OF_DATE_RANGEOVERLAPPING_DATES | Required | 55.0 |

Response body for POST

[Sustainability Date Issue Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_date_issue.htm "Output representation for sustainability date issue request.")

## Code Examples

```
/connect/sustainability/dgf/identify-date-issues
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/sustainability/dgf/identify-date-issues
```

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

- Filter Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_request_filter_input.htm)
- Sustainability Date Issue Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_date_issue.htm)
