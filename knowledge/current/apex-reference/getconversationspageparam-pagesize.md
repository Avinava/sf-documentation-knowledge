---
title: "getConversations(pageParam, pageSize)"
domain: apex-reference
topic: getconversationspageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getConversations, pageParam, pageSize, Get, page, conversations., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getConversations(pageParam, pageSize)

> Get a page of conversations.

### getConversations(pageParam, pageSize)

Get a page of conversations.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations(String pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")