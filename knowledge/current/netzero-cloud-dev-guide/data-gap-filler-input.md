---
title: "Data Gap Filler Input"
domain: netzero-cloud-dev-guide
topic: data-gap-filler-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.236Z
estimatedTokens: 232
keywords: [Data, Gap, Filler, Input, representation, missing, energy, consumption, records]
---

# Data Gap Filler Input

> Input representation of the request to get missing energy
      consumption records.

# Data Gap Filler Input

Input representation of the request to get missing energy consumption records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Filter Input[] | List of filters to filter the output records. Each filter item is a key-value pair that contains the name and its value.Possible name is:FuelType | Optional | 55.0 |
| methods | String[] | List of the names of different methods to retrieve data gaps.Possible values are:BUILDING_BENCHMARKDAILY_AVERAGE_CURRENT_YEARDAILY_AVERAGE_LAST_YEARMANUALREGIONAL_BENCHMARK | Required | 55.0 |
| recordId | String | ID of the Stationary Asset Carbon Footprint object for which the associated energy consumption records with data gaps must be retrieved.Ensure that the Stationary Asset Carbon Footprint object has a valid start date and end date. | Required | 55.0 |

## Code Examples

```
{
   "recordId":"0pfRM0000004HZtYAM",
   "filters":[
      {
         "item":"FuelType",
         "value":"Diesel"
      }
   ],
   "methods":[
      "REGIONAL_BENCHMARK",
      "BUILDING_BENCHMARK",
      "MANUAL"
   ]
}
```

## Related Topics

- Filter
                        Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_request_filter_input.htm)
