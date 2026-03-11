---
title: "getCommentsForFeedElement(communityId, feedElementId,
      threadedCommentsCollapsed)"
domain: apex-reference
topic: getcommentsforfeedelementcommunityid-feedelementid-threadedcommentscollapsed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getCommentsForFeedElement, communityId, feedElementId, threadedCommentsCollapsed, Get, comments, threaded, style, feed, element., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getCommentsForFeedElement(communityId, feedElementId,
      threadedCommentsCollapsed)

> Get comments in a threaded style for a feed
    element.

### getCommentsForFeedElement(communityId, feedElementId, threadedCommentsCollapsed)

Get comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

#### Return Value

Type: [ConnectApi.CommentPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm#apex_connectapi_output_comment_page "A page of comments.")

If the feed element doesn’t support the Comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").