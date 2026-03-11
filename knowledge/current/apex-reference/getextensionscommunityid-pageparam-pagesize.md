---
title: "getExtensions(communityId, pageParam,
    pageSize)"
domain: apex-reference
topic: getextensionscommunityid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getExtensions, communityId, pageParam, pageSize, Get, extensions., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getExtensions(communityId, pageParam,
    pageSize)

> Get extensions.

### getExtensions(communityId, pageParam, pageSize)

Get extensions.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ExtensionDefinitions getExtensions(String communityId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 15.

#### Return Value

Type: [ConnectApi.ExtensionDefinitions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_extension_definition_collection.htm#apex_connectapi_output_extension_definition_collection "A collection of extension definitions.")