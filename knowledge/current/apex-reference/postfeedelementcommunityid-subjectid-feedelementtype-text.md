---
title: "postFeedElement(communityId, subjectId, feedElementType,
      text)"
domain: apex-reference
topic: postfeedelementcommunityid-subjectid-feedelementtype-text
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [postFeedElement, communityId, subjectId, feedElementType, text, Post, plain-text, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# postFeedElement(communityId, subjectId, feedElementType,
      text)

> Post a plain-text feed element.

### postFeedElement(communityId, subjectId, feedElementType, text)

Post a plain-text feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement postFeedElement(String communityId, String subjectId, ConnectApi.FeedElementType feedElementType, String text)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string me to indicate the context user.

feedElementType

Type: [ConnectApi.​FeedElement​Type](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedElementTypeEnum)

The only possible value is FeedItem.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text of the feed element. A feed element can contain up to 10,000 characters.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example

```

```