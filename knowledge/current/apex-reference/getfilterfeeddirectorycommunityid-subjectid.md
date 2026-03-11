---
title: "getFilterFeedDirectory(communityId,
      subjectId)"
domain: apex-reference
topic: getfilterfeeddirectorycommunityid-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getFilterFeedDirectory, communityId, subjectId, Get, feed, directory, filter, feeds, available, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFilterFeedDirectory(communityId,
      subjectId)

> Get a feed directory of filter feeds available to the context user.

### getFilterFeedDirectory(communityId, subjectId)

Get a feed directory of filter feeds available to the context user.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedDirectory getFilterFeedDirectory(String communityId, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

#### Return Value

Type: [ConnectApi.FeedDirectory](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_directory.htm "Directory of feeds and favorites.")

This feed directory contains a list of filter feeds, which are the news feed filtered to include feed items whose parent is a specific entity type.

#### Usage

Call this method to return a directory containing a list of ConnectApi.FeedDirectoryItem objects. Each object contains a key prefix associated with an entity type the context user is following. A *key prefix* is the first three characters of a record ID, which specifies the object type.

Use key prefixes to filter the news feed so that it contains only feed items whose parent is the entity type associated with the key prefix. For example, get all the feed items whose parent is an Account. To get the feed items, pass a key prefix to the ConnectApi.getFeedItemsFromFilterFeed method.

The information about filter feeds never contains the key prefixes for users (005) or groups (0F9), but all users can use those key prefixes as filters.

The ConnectApi.FeedDirectory.favorites property is always empty when returned by a call to getFilterFeedDirectory because you can’t filter a news feed by favorites.

#### Example

This example calls getFilterFeedDirectory and loops through the returned FeedDirectoryItem objects to find the key prefixes the context user can use to filter their news feed. It then copies each keyPrefix value to a list. Finally, it passes one of the key prefixes from the list to the getFeedItemsFromFilterFeed method. The returned feed items include every feed item from the news feed whose parent is the entity type specified by the passed key prefix.

```

```