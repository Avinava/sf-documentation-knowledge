---
title: "publishDraftFeedElement(communityId, feedElementId,
      feedElement)"
domain: apex-reference
topic: publishdraftfeedelementcommunityid-feedelementid-feedelement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [publishDraftFeedElement, communityId, feedElementId, feedElement, Publish, draft, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# publishDraftFeedElement(communityId, feedElementId,
      feedElement)

> Publish a draft feed element.

### publishDraftFeedElement(communityId, feedElementId, feedElement)

Publish a draft feed element.

#### API Version

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement publishDraftFeedElement(String communityId, String feedElementId, ConnectApi.FeedElementInput feedElement)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element to publish.

feedElement

Type: [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm#apex_connectapi_input_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Use this optional parameter to edit your draft before publishing.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

The published feed element has a new ID.