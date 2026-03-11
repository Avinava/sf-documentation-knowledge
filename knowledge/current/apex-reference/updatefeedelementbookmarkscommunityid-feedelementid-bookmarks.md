---
title: "updateFeedElementBookmarks(communityId, feedElementId,
      bookmarks)"
domain: apex-reference
topic: updatefeedelementbookmarkscommunityid-feedelementid-bookmarks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateFeedElementBookmarks, communityId, feedElementId, bookmarks, Bookmark, feed, element, remove, bookmark, input, class., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateFeedElementBookmarks(communityId, feedElementId,
      bookmarks)

> Bookmark a feed element or remove a bookmark from a feed element using
      an input class.

### updateFeedElementBookmarks(communityId, feedElementId, bookmarks)

Bookmark a feed element or remove a bookmark from a feed element using an input class.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BookmarksCapability updateFeedElementBookmarks(String communityId, String feedElementId, ConnectApi.BookmarksCapabilityInput bookmarks)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

bookmarks

Type: [ConnectApi.BookmarksCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bookmarks_capability.htm#apex_connectapi_input_bookmarks_capability "Create or update a bookmark on a feed element.")

Information about a bookmark.

#### Return Value

Type: [ConnectApi.BookmarksCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bookmarks_capability.htm#apex_connectapi_output_bookmarks_capability "If a feed element has this capability, the context user can bookmark it.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").