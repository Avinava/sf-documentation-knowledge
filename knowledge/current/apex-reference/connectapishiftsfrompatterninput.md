---
title: "ConnectApi.ShiftsFromPatternInput"
domain: apex-reference
topic: connectapishiftsfrompatterninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.347Z
keywords: [ConnectApi.ShiftsFromPatternInput]
---

# ConnectApi.ShiftsFromPatternInput

# ConnectApi.ShiftsFromPatternInput

Shifts from a pattern.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| schedulingEnd​Date | String | Scheduling end date in YYYY-MM-DD format.Provide schedulingEndDate or schedulingOccurrences. Don’t provide both. | Required if scheduling​Occurrences isn’t provided | 51.0 |
| scheduling​Occurrences | Integer | Number of scheduling occurrences.Provide schedulingEndDate or schedulingOccurrences. Don’t provide both. | Required if schedulingEnd​Date isn’t provided | 51.0 |
| schedulingStart​Date | String | Scheduling start date in YYYY-MM-DD format. | Required | 51.0 |
| serviceResourceId | String | ID of the service resource to assign shifts to.In version 53.0 and later, use serviceResourceIdList. | Optional | 51.0–52.0 |
| serviceResourceId​List | List<String> | List of service resource IDs to assign shifts to. | Optional | 53.0 |
| serviceTerritoryId | String | ID of the service territory to assign shifts to. | Optional | 51.0 |
| shiftStatus | String | Status of the shifts. Default values are:ConfirmedPublishedTentativeAdditional status values can be created. | Optional | 52.0 |