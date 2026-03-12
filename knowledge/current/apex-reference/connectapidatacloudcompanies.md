---
title: "ConnectApi.DatacloudCompanies"
domain: apex-reference
topic: connectapidatacloudcompanies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.068Z
estimatedTokens: 229
keywords: [ConnectApi.DatacloudCompanies, companies, were, purchased, specific, order, URLs, number]
---

# ConnectApi.DatacloudCompanies

> Lists all companies that were purchased in a specific order, page
      URLs, and the number of companies in the order.

# ConnectApi.DatacloudCompanies

Lists all companies that were purchased in a specific order, page URLs, and the number of companies in the order.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| companies | ConnectApi.DatacloudCompany | A detailed list of companies that were part of a single order. | 32.0 |
| currentPageUrl | String | The URL for the current page of a list of companies. | 32.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 32.0 |
| previousPageUrl | String | The URL to the previous page of companies that were viewed before the current page. If this value is null, there’s no previous page. | 32.0 |
| total | Integer | The number of companies in the order. You can calculate the number of pages to display by dividing this number by your page size. The default page size is 25. | 32.0 |

## Related Topics

- ConnectApi.DatacloudCompany (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
