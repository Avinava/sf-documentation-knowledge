---
title: "updateFeedElementReadByCapabilityBatch(communityId,
      feedElementIds, isReadByMe)"
domain: apex-reference
topic: updatefeedelementreadbycapabilitybatchcommunityid-feedelementids-isreadbyme
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateFeedElementReadByCapabilityBatch, communityId, feedElementIds, isReadByMe, Mark, multiple, feed, elements, read, context, user, same, time., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# updateFeedElementReadByCapabilityBatch(communityId,
      feedElementIds, isReadByMe)

> Mark multiple feed elements as read by the context user at the same time.

### updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, isReadByMe)

Mark multiple feed elements as read by the context user at the same time.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] updateFeedElementReadByCapabilityBatch(String communityId, List<String\> feedElementIds, Boolean isReadByMe)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Up to 500 feed element IDs to mark as read.

isReadByMe

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies to mark the feed element as read (true) for the context user.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").