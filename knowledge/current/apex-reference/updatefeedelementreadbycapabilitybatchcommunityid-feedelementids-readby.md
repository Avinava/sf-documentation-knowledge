---
title: "updateFeedElementReadByCapabilityBatch(communityId,
      feedElementIds, readBy)"
domain: apex-reference
topic: updatefeedelementreadbycapabilitybatchcommunityid-feedelementids-readby
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateFeedElementReadByCapabilityBatch, communityId, feedElementIds, readBy, Mark, multiple, feed, elements, read, context, user, same, time, input, class., API, Version, Requires, Chatter, Signature]
---

# updateFeedElementReadByCapabilityBatch(communityId,
      feedElementIds, readBy)

> Mark multiple feed elements as read by the context user at the same time using an input class.

### updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, readBy)

Mark multiple feed elements as read by the context user at the same time using an input class.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] updateFeedElementReadByCapabilityBatch(String communityId, List<String\> feedElementIds, ConnectApi.ReadByCapabilityInput readBy)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Up to 500 feed element IDs to mark as read.

readBy

Type: [ConnectApi.ReadByCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_read_by_capability.htm#apex_connectapi_input_read_by_capability "Mark feed elements as read by the context user.")

A ConnectApi.ReadByCapabilityInput body indicating to mark the feed elements as read.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

The returned objects correspond to each of the input objects and are returned in the same order as the input objects.

The method call fails only if an error occurs that affects the entire operation (such as a parsing failure). If an individual object causes an error, the error is embedded within the ConnectApi.BatchResult list.