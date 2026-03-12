---
title: "ConnectApi.CommerceAddressCollection"
domain: apex-reference
topic: connectapicommerceaddresscollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.801Z
estimatedTokens: 270
keywords: [ConnectApi.CommerceAddressCollection, collection, Commerce, addresses]
---

# ConnectApi.CommerceAddressCollection

> A collection of Commerce addresses.

# ConnectApi.CommerceAddressCollection

A collection of Commerce addresses.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| count | Integer | Count of addresses. | 54.0 |
| currentPageToken | String | Token to the current page of addresses. | 54.0 |
| currentPageUrl | String | URL to the current page of addresses. | 54.0 |
| items | List<ConnectApi.CommerceAddressOutput> | Address Details | 54.0 |
| nextPageToken | String | Token to the next page of addresses. | 54.0 |
| nextPageUrl | String | URL to the next page of addresses. | 54.0 |
| pageSize | Integer | Page size for addresses. | 54.0 |
| previousPageToken | String | Token to previous page of addresses. | 54.0 |
| previousPageUrl | String | URL to the previous page of addresses. | 54.0 |
| sortOrder | ConnectApi.CommerceAddressSort | Sort order for Commerce addresses.CreatedDateAsc—Sort in ascending order of created date.CreatedDateDesc—Sort in descending order of created date.NameAsc—Sort in ascending order of name.NameDesc—Sort in descending order of name. | 54.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.CommerceAddressOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_output.htm)
- ConnectApi.CommerceAddressSort (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
