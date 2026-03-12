---
title: "Compute Data Gap Fillers"
domain: netzero-cloud-dev-guide
topic: compute-data-gap-fillers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.289Z
estimatedTokens: 370
keywords: [Compute, Data, Gap, Fillers, Identify, energy, consumption, records, associated, Stationary, Asset, Carbon, Footprint, missing, period]
---

# Compute Data Gap Fillers

> Identify and get energy consumption records associated with the
      Stationary Asset Carbon Footprint object that are missing for a given period. You can fill any
      energy use data gaps for a stationary asset categorized as a commercial
    building.

# Compute Data Gap Fillers

Identify and get energy consumption records associated with the Stationary Asset Carbon Footprint object that are missing for a given period. You can fill any energy use data gaps for a stationary asset categorized as a commercial building.

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
| filters | Filter Input[] | List of filters to filter the output records. Each filter item is a key-value pair that contains the name and its value.Possible name is:FuelType | Optional | 55.0 |
| methods | String[] | List of the names of different methods to retrieve data gaps.Possible values are:BUILDING_BENCHMARKDAILY_AVERAGE_CURRENT_YEARDAILY_AVERAGE_LAST_YEARMANUALREGIONAL_BENCHMARK | Required | 55.0 |
| recordId | String | ID of the Stationary Asset Carbon Footprint object for which the associated energy consumption records with data gaps must be retrieved.Ensure that the Stationary Asset Carbon Footprint object has a valid start date and end date. | Required | 55.0 |

Response body for POST

[Sustainability Data Gap Filler Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_d_g_f_data_gap_filler.htm "Output representation of the data gap filler request.")

## Code Examples

```
/connect/sustainability/dgf/compute-datagap-fillers
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/sustainability/dgf/compute-datagap-fillers
```

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

- Filter Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_request_filter_input.htm)
- Sustainability Data Gap Filler Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_d_g_f_data_gap_filler.htm)
