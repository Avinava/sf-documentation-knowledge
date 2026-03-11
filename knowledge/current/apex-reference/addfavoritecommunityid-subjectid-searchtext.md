---
title: "addFavorite(communityId, subjectId,
  searchText)"
domain: apex-reference
topic: addfavoritecommunityid-subjectid-searchtext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.236Z
keywords: [addFavorite, communityId, subjectId, searchText, Add, feed, search, favorite, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# addFavorite(communityId, subjectId,
  searchText)

> Add a feed search favorite for a user.

### addFavorite(communityId, subjectId, searchText)

Add a feed search favorite for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedFavorite addFavorite(String communityId, String subjectId, String searchText)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

searchText

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specify the text of the search to be saved as a favorite. This method can only create a feed search favorite, not a list view favorite or a topic.

#### Return Value

Type: [ConnectApi.FeedFavorite](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")