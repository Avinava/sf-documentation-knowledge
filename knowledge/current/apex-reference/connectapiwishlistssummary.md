---
title: "ConnectApi.WishlistsSummary"
domain: apex-reference
topic: connectapiwishlistssummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.358Z
estimatedTokens: 123
keywords: [ConnectApi.WishlistsSummary, wishlist, summaries, context, user]
---

# ConnectApi.WishlistsSummary

> List of wishlist summaries and the displayed list for the context
      user.

# ConnectApi.WishlistsSummary

List of wishlist summaries and the displayed list for the context user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| displayedList | ConnectApi.​Wishlist | Oldest wishlist displayed for the context user. | 49.0 |
| summaries | List<ConnectApi.​WishlistSummary> | Summary of wishlists belonging to the context user. | 49.0 |
| wishlistCount | Integer | Total number of wishlists belonging to the context user. | 49.0 |

## Related Topics

- ConnectApi.​Wishlist (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​WishlistSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
