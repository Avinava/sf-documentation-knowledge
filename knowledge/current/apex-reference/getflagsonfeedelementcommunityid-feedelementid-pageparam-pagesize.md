---
title: "getFlagsOnFeedElement(communityId, feedElementId, pageParam,
      pageSize)"
domain: apex-reference
topic: getflagsonfeedelementcommunityid-feedelementid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [getFlagsOnFeedElement, communityId, feedElementId, pageParam, pageSize, Get, page, moderation, flags, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFlagsOnFeedElement(communityId, feedElementId, pageParam,
      pageSize)

> Get a page of moderation flags on a feed element.

### getFlagsOnFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of moderation flags on a feed element.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability getFlagsOnFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.