---
title: "getReadByForFeedElement(communityId, feedElementId, pageParam,
      pageSize)"
domain: apex-reference
topic: getreadbyforfeedelementcommunityid-feedelementid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getReadByForFeedElement, communityId, feedElementId, pageParam, pageSize, Get, page, information, who, read, feed, element, when., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getReadByForFeedElement(communityId, feedElementId, pageParam,
      pageSize)

> Get a page of information about who read a feed element and
    when.

### getReadByForFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of information about who read a feed element and when.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ReadByPage getReadByForFeedElement(String communityId, String feedElementId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ReadByPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm#apex_connectapi_output_read_by_collection "A collection of information about who read the feed element and when.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").