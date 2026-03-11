---
title: "updateFeedElement(communityId, feedElementId,
      feedElement)"
domain: apex-reference
topic: updatefeedelementcommunityid-feedelementid-feedelement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateFeedElement, communityId, feedElementId, feedElement, Edit, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example, Editing, Feed, Post, Question]
---

# updateFeedElement(communityId, feedElementId,
      feedElement)

> Edit a feed element.

### updateFeedElement(communityId, feedElementId, feedElement)

Edit a feed element.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement updateFeedElement(String communityId, String feedElementId, ConnectApi.FeedElementInput feedElement)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element to be edited. Feed items are the only type of feed element that can be edited.

feedElement

Type: [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm#apex_connectapi_input_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Information about the feed item to be edited.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

If the feed element doesn’t support the edit capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example for Editing a Feed Post

```

```

#### Example for Editing a Question Title and Post

```

```