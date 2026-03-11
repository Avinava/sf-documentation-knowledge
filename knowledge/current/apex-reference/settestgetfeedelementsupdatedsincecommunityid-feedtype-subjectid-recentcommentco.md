---
title: "setTestGetFeedElementsUpdatedSince(communityId, feedType,
      subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince,
      showInternalOnly, customFilter, result)"
domain: apex-reference
topic: settestgetfeedelementsupdatedsincecommunityid-feedtype-subjectid-recentcommentco
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetFeedElementsUpdatedSince, communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElementsUpdatedSince, called, matching]
---

# setTestGetFeedElementsUpdatedSince(communityId, feedType,
      subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince,
      showInternalOnly, customFilter, result)

> Register a ConnectApi.FeedElementPage object to
    be returned when getFeedElementsUpdatedSince is called
    with matching parameters in a test context. Use the method with the same parameters or the code
    throws an exception.

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsUpdatedSince is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, String customFilter, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be ConnectApi.FeedType.Record.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a case.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

elementsPerBundle

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

density

Type: [ConnectApi.FeedDensity](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

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

customFilter

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the Metadata API Developer Guide for supported values.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_5a "Get a page of filtered feed elements from a case feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")