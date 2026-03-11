---
title: "getFilterFeed(communityId, subjectId,
  keyPrefix)"
domain: apex-reference
topic: getfilterfeedcommunityid-subjectid-keyprefix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getFilterFeed, communityId, subjectId, keyPrefix, Get, feed, filtered, key, prefix, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFilterFeed(communityId, subjectId,
  keyPrefix)

> Get a feed filtered by a key prefix for a user.

### getFilterFeed(communityId, subjectId, keyPrefix)

Get a feed filtered by a key prefix for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Feed getFilterFeed(String communityId, String subjectId, String keyPrefix)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

keyPrefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A *key prefix* is the first three characters of a record ID, which specifies the object type.

#### Return Value

Type: [ConnectApi.Feed](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm "Chatter feed.")