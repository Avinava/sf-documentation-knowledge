---
title: "getFeedElement(communityId, feedElementId,
      threadedCommentsCollapsed)"
domain: apex-reference
topic: getfeedelementcommunityid-feedelementid-threadedcommentscollapsed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElement, communityId, feedElementId, threadedCommentsCollapsed, Get, feed, element, its, comments, threaded, style., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getFeedElement(communityId, feedElementId,
      threadedCommentsCollapsed)

> Get a feed element and its comments in a threaded
    style.

### getFeedElement(communityId, feedElementId, threadedCommentsCollapsed)

Get a feed element and its comments in a threaded style.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")