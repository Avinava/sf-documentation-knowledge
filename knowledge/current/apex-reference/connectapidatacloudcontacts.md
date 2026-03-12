---
title: "ConnectApi.DatacloudContacts"
domain: apex-reference
topic: connectapidatacloudcontacts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.990Z
estimatedTokens: 202
keywords: [ConnectApi.DatacloudContacts, Lists, contacts, were, purchased, specific, order, page, URLs, number, order.]
---

# ConnectApi.DatacloudContacts

> Lists all contacts that were purchased in the specific order, page
      URLs, and the number of contacts in the order.

# ConnectApi.DatacloudContacts

Lists all contacts that were purchased in the specific order, page URLs, and the number of contacts in the order.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contacts | List<ConnectApi.DatacloudContact> | A detailed list of purchased contacts. | 32.0 |
| currentPageUrl | String | URL to the current page of contacts. | 32.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 32.0 |
| previousPageUrl | String | URL to the previous page of contacts. This value is null if there is no previous page. | 32.0 |
| total | Integer | Number of contacts that are associated with this order. Can be greater than the number of contacts that are shown on a single page. | 32.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.DatacloudContact (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
