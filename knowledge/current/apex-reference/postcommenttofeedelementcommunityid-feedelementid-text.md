---
title: "postCommentToFeedElement(communityId, feedElementId,
      text)"
domain: apex-reference
topic: postcommenttofeedelementcommunityid-feedelementid-text
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [postCommentToFeedElement, communityId, feedElementId, text, Post, plain-text, comment, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# postCommentToFeedElement(communityId, feedElementId,
      text)

> Post a plain-text comment to a feed element.

### postCommentToFeedElement(communityId, feedElementId, text)

Post a plain-text comment to a feed element.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment postCommentToFeedElement(String communityId, String feedElementId, String text)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the comment. A comment can contain up to 10,000 characters.

#### Return Value

Type: [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.")

If the feed element doesn’t support the Comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```

```