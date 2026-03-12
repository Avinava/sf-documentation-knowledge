---
title: "ConnectApi.UserPage"
domain: apex-reference
topic: connectapiuserpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.250Z
estimatedTokens: 232
keywords: [ConnectApi.UserPage, Page, users.]
---

# ConnectApi.UserPage

> Page of users.

# ConnectApi.UserPage

Page of users.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | Integer | Token identifying the current page. | 28.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| nextPageToken | Integer | Token identifying the next page, or null if there isn’t a next page. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageToken | Integer | Token identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| users | List<ConnectApi.​User​Detail> | List of user detail information. If the context user doesn’t have permission to see a property, the property is set to null. | 28.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​User​Detail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_detail.htm)
