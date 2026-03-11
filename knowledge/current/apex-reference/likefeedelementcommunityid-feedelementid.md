---
title: "likeFeedElement(communityId, feedElementId)"
domain: apex-reference
topic: likefeedelementcommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [likeFeedElement, communityId, feedElementId, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# likeFeedElement(communityId, feedElementId)

> Like a feed element.

### likeFeedElement(communityId, feedElementId)

Like a feed element.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLike likeFeedElement(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.ChatterLike](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_like.htm#apex_connectapi_output_chatter_like "Chatter like information.")

If the feed element doesn’t support the ChatterLikes capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```

```