---
title: "getFeedElementsUpdatedSince(communityId, feedType, subjectId,
      recentCommentCount, density, pageParam, pageSize, updatedSince,
    showInternalOnly)"
domain: apex-reference
topic: getfeedelementsupdatedsincecommunityid-feedtype-subjectid-recentcommentcount-den
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getFeedElementsUpdatedSince, communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, Get, page, feed, elements, record, feed., Include, only, updated, since]
---

# getFeedElementsUpdatedSince(communityId, feedType, subjectId,
      recentCommentCount, density, pageParam, pageSize, updatedSince,
    showInternalOnly)

> Get a page of feed elements from a record feed. Include only feed
      elements that have been updated since the time specified in the
        updatedSince parameter. Specify whether to return feed elements posted by
      internal (non-Experience Cloud site) users only.

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)

Get a page of feed elements from a record feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be ConnectApi.FeedType.Record.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Any record ID, including a group ID.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

density

Type: [ConnectApi.​FeedDensity](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

updatedSince

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the updatesToken property of the ConnectApi.FeedElementPage response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

showInternalOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (true), or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3 "Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsUpdatedSince is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")