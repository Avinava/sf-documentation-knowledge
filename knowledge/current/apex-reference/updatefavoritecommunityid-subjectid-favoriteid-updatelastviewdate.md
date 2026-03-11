---
title: "updateFavorite(communityId, subjectId, favoriteId,
      updateLastViewDate)"
domain: apex-reference
topic: updatefavoritecommunityid-subjectid-favoriteid-updatelastviewdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.237Z
keywords: [updateFavorite, communityId, subjectId, favoriteId, updateLastViewDate, Update, last, view, date, saved, search, list, feed, current, system, time., API, Version, Requires, Chatter]
---

# updateFavorite(communityId, subjectId, favoriteId,
      updateLastViewDate)

> Update the last view date of the saved search or list view feed to the current system
  time.

### updateFavorite(communityId, subjectId, favoriteId, updateLastViewDate)

Update the last view date of the saved search or list view feed to the current system time.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedFavorite updateFavorite(String communityId, String subjectId, String favoriteId, Boolean updateLastViewDate)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

favoriteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a favorite.

updateLastViewDate

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify whether to update the last view date of the specified favorite to the current system time (true) or not (false).

#### Return Value

Type: [ConnectApi.FeedFavorite](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")