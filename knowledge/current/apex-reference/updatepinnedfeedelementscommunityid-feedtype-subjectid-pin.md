---
title: "updatePinnedFeedElements(communityId, feedType, subjectId,
      pin)"
domain: apex-reference
topic: updatepinnedfeedelementscommunityid-feedtype-subjectid-pin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updatePinnedFeedElements, communityId, feedType, subjectId, pin, Pin, unpin, feed, elements, group, topic, feed., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# updatePinnedFeedElements(communityId, feedType, subjectId,
      pin)

> Pin or unpin feed elements to a group or topic feed.

### updatePinnedFeedElements(communityId, feedType, subjectId, pin)

Pin or unpin feed elements to a group or topic feed.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.PinCapability updatePinnedFeedElements(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.PinCapabilityInput pin)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are Record and Topics.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId must be a group ID. If feedType is Topics, subjectId must be a topic ID.

pin

Type: [ConnectApi.PinCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_pin_capability.htm#apex_connectapi_input_pin_capability "Pin or unpin a feed element to a feed.")

A ConnectApi.PinCapabilityInput object indicating the feed element to pin or unpin.

#### Return Value

Type: [ConnectApi.PinCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pin_capability.htm#apex_connectapi_output_pin_capability "If a feed element has this capability, users who have permission can pin it to a feed.")

If the feed doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").