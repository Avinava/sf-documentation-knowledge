---
title: "getCommentBatch(communityId, commentIds)"
domain: apex-reference
topic: getcommentbatchcommunityid-commentids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getCommentBatch, communityId, commentIds, Get, list, comments., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommentBatch(communityId, commentIds)

> Get a list of comments.

### getCommentBatch(communityId, commentIds)

Get a list of comments.

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getCommentBatch(String communityId, List<String\> commentIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 100 comment IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.") object and errors for comments that didn’t load.