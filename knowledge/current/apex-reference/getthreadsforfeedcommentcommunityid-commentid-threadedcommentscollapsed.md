---
title: "getThreadsForFeedComment(communityId, commentId,
      threadedCommentsCollapsed)"
domain: apex-reference
topic: getthreadsforfeedcommentcommunityid-commentid-threadedcommentscollapsed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getThreadsForFeedComment, communityId, commentId, threadedCommentsCollapsed, Access, comments, capability, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getThreadsForFeedComment(communityId, commentId,
      threadedCommentsCollapsed)

> Access the comments capability for a comment.

### getThreadsForFeedComment(communityId, commentId, threadedCommentsCollapsed)

Access the comments capability for a comment.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentsCapability getThreadsForFeedComment(String communityId, String commentId, Boolean threadedCommentsCollapsed)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

#### Return Value

Type: [ConnectApi.CommentsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm "If a feed element or comment has this capability, the context user can add a comment to it.")

If the comment doesn’t support the comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").