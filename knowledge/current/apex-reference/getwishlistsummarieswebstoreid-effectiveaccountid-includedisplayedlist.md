---
title: "getWishlistSummaries(webstoreId, effectiveAccountId,
      includeDisplayedList)"
domain: apex-reference
topic: getwishlistsummarieswebstoreid-effectiveaccountid-includedisplayedlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [getWishlistSummaries, webstoreId, effectiveAccountId, includeDisplayedList, Get, wishlist, summaries., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getWishlistSummaries(webstoreId, effectiveAccountId,
      includeDisplayedList)

> Get wishlist summaries.

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList)

Get wishlist summaries.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

includeDisplayedList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the displayed list (true) or not (false). If null, defaults to false.

#### Return Value

Type: [ConnectApi.WishlistsSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")