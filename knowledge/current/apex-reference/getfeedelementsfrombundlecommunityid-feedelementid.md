---
title: "getFeedElementsFromBundle(communityId,
    feedElementId)"
domain: apex-reference
topic: getfeedelementsfrombundlecommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElementsFromBundle, communityId, feedElementId, Get, feed, elements, bundle., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeedElementsFromBundle(communityId,
    feedElementId)

> Get feed elements from a bundle.

### getFeedElementsFromBundle(communityId, feedElementId)

Get feed elements from a bundle.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElementsFromBundle(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")