---
title: "Sustainability Date Issue Output"
domain: netzero-cloud-dev-guide
topic: sustainability-date-issue-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.379Z
estimatedTokens: 231
keywords: [Sustainability, Date, Issue, Output, representation]
---

# Sustainability Date Issue Output

> Output representation for sustainability date issue
    request.

# Sustainability Date Issue Output

Output representation for sustainability date issue request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | Response code. | Small, 55.0 | 55.0 |
| message | String | Response message indicating whether the API request is successful or not. | Small, 55.0 | 55.0 |
| missingDatesRecords | String[] | List of record IDs for which either the start or the end date is missing. | Small, 55.0 | 55.0 |
| outOfDateRangeRecords | String[] | List of record IDs for which either the start or the end date is outside the Carbon Footprint (CF) date range. | Small, 55.0 | 55.0 |
| overlappingDatesRecords | String[] | List of record IDs that have a start date or end date that overlaps with the dates of other records associated with the same Carbon Footprint. | Small, 55.0 | 55.0 |

## Code Examples

```
{
   "code":0,
   "message":"The date issues for the energy use records were identified.",
   "missingDatesRecords":[
      "7LKRM000000RsGQ4A0",
      "7LKRM000000RsGV4A0"
   ],
   "outOfDateRangeRecords":[
      
   ],
   "overlappingDatesRecords":[
      
   ]
}
```
