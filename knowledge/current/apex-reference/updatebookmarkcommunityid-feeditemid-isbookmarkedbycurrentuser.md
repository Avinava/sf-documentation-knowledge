---
title: "updateBookmark(communityId, feedItemId,
                  isBookmarkedByCurrentUser)"
domain: apex-reference
topic: updatebookmarkcommunityid-feeditemid-isbookmarkedbycurrentuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [updateBookmark, communityId, feedItemId, isBookmarkedByCurrentUser, Bookmark, feed, item, remove, bookmark, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateBookmark(communityId, feedItemId,
                  isBookmarkedByCurrentUser)

> Bookmark a feed item or remove a bookmark from a feed item.

### updateBookmark(communityId, feedItemId, isBookmarkedByCurrentUser)

Bookmark a feed item or remove a bookmark from a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [updateFeedElementBookmarks(communityId, feedElementId, bookmarks)](#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_1 "Bookmark a feed element or remove a bookmark from a feed element using an input class.") or [updateFeedElementBookmarks(communityId, feedElementId, isBookmarkedByCurrentUser)](#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_2 "Bookmark a feed element or remove a bookmark from a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItem updateBookmark(String communityId, String feedItemId, Boolean isBookmarkedByCurrentUser)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

isBookmarkedByCurrentUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

—Specifying true adds the feed item to the list of bookmarks for the context user. Specify false to remove a bookmark.

#### Return Value

Type: [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")