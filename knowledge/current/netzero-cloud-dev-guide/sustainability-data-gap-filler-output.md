---
title: "Sustainability Data Gap Filler Output"
domain: netzero-cloud-dev-guide
topic: sustainability-data-gap-filler-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.373Z
estimatedTokens: 146
keywords: [Sustainability, Data, Gap, Filler, Output, representation]
---

# Sustainability Data Gap Filler Output

> Output representation of the data gap filler request.

# Sustainability Data Gap Filler Output

Output representation of the data gap filler request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | Response code. | Small, 55.0 | 55.0 |
| gaps | Sustainability Data Gap Record[] | List of data gap records. Each item in the list corresponds to the gap between the start and end date. | Small, 55.0 | 55.0 |
| message | String | Response message indicating whether the API request is successful or not. | Small, 55.0 | 55.0 |

## Code Examples

```
{
   "code":0,
   "gaps":[
      {
         "fillValues":{
            "MANUAL":{
               "FuelConsumptionUnit":"kWh",
               "FuelType":"Diesel",
               "Name":"SAES - Jan 1, 2023 - Jul 25, 2023 - Diesel",
               "FuelConsumption":0,
               "EndDate":"2023-07-25",
               "StartDate":"2023-01-01"
            }
         }
      },
      {
         "fillValues":{
            "MANUAL":{
               "FuelConsumptionUnit":"kWh",
               "FuelType":"Diesel",
               "Name":"SAES - Aug 1, 2023 - Dec 31, 2023 - Diesel",
               "FuelConsumption":0,
               "EndDate":"2023-12-31",
               "StartDate":"2023-08-01"
            }
         }
      }
   ],
   "message":"The data gaps were identified."
}
```

## Related Topics

- Sustainability Data Gap Record (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_data_gap_record.htm)
