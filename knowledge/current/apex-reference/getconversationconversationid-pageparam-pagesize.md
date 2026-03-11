---
title: "getConversation(conversationId, pageParam,
            pageSize)"
domain: apex-reference
topic: getconversationconversationid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getConversation, conversationId, pageParam, pageSize, Get, page, conversation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getConversation(conversationId, pageParam,
            pageSize)

> Get a page of a conversation.

### getConversation(conversationId, pageParam, pageSize)

Get a page of a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String conversationId, String pageParam, Integer pageSize)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")