---
title: "ConnectApi.CommerceSearchIndexLog"
domain: apex-reference
topic: connectapicommercesearchindexlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.833Z
estimatedTokens: 218
keywords: [ConnectApi.CommerceSearchIndexLog, Search, index, log]
---

# ConnectApi.CommerceSearchIndexLog

> Search index log information.

# ConnectApi.CommerceSearchIndexLog

Search index log information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| catalog​SnapshotTime | Datetime | Catalog snapshot time of the index build. | 57.0 |
| completionDate | Datetime | Completion date of the index build. | 57.0 |
| createdById | String | ID of the user who initiated the index build. | 57.0 |
| index​BuildStatus | ConnectApi.​CommerceSearch​IndexStatus | Status of the index. Values are:CompletedFailedInProgress | 57.0 |
| indexBuildType | ConnectApi.​CommerceSearch​IndexBuildType | Build type of the index. Values are:FullIncremental | 57.0 |
| indexId | String | ID of the index build. | 57.0 |
| message | String | Detailed message for the index build status. | 57.0 |
| number​OfProducts | Integer | Number of new or changed products in the index build. | 57.0 |

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CommerceSearch​IndexStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceSearch​IndexBuildType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
