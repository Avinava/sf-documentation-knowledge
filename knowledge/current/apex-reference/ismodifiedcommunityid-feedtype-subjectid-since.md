---
title: "isModified(communityId, feedType, subjectId,
    since)"
domain: apex-reference
topic: ismodifiedcommunityid-feedtype-subjectid-since
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [isModified, communityId, feedType, subjectId, since, Discover, whether, news, feed, updated, changed., method, poll, updates., Important, API, Version, Requires, Chatter, Signature]
---

# isModified(communityId, feedType, subjectId,
    since)

> Discover whether a news feed has been updated or changed. Use this method to poll a news
    feed for updates.

### isModified(communityId, feedType, subjectId, since)

Discover whether a news feed has been updated or changed. Use this method to poll a news feed for updates.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedModifiedInfo isModified(String communityId, ConnectApi.FeedType feedType, String subjectId, String since)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Specifies the type of feed. The only supported type is News

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

since

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An opaque token containing information about the last modified date of the feed. Retrieve this token from the [FeedElementPage.isModifiedToken](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.") property.

#### Return Value

Type: [ConnectApi.Feed​ModifiedInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_modified_info.htm "Feed modified information.")