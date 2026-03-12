---
title: "ConnectApi.CdpCalculatedInsightPageData"
domain: apex-reference
topic: connectapicdpcalculatedinsightpagedata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.592Z
estimatedTokens: 306
keywords: [ConnectApi.CdpCalculatedInsightPageData, Calculated, insight, collection, data]
---

# ConnectApi.CdpCalculatedInsightPageData

> Calculated insight collection data.

# ConnectApi.CdpCalculatedInsightPageData

Calculated insight collection data.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| count | Integer | Number of results returned in the page. | 57.0 |
| currentPageToken | String | Token identifying the current page. | 57.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 57.0 |
| items | List<ConnectApi.​CdpCalculated​InsightOutput> | List of calculated insights. | 57.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 57.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 57.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | 57.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 57.0 |
| total | Integer | Total row count of calculated insights. | 57.0 |

#### See Also

-   [ConnectApi.CdpCalculatedInsightPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_collection.htm "Collection of calculated insights.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpCalculated​InsightOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm)
- ConnectApi.CdpCalculatedInsightPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_collection.htm)
