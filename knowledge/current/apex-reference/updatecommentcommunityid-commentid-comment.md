---
title: "updateComment(communityId, commentId,
    comment)"
domain: apex-reference
topic: updatecommentcommunityid-commentid-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateComment, communityId, commentId, comment, Edit, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# updateComment(communityId, commentId,
    comment)

> Edit a comment.

### updateComment(communityId, commentId, comment)

Edit a comment.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment updateComment(String communityId, String commentId, ConnectApi.CommentInput comment)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment to be edited.

comment

Type: [ConnectApi.CommentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm#apex_connectapi_input_comment "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

Information about the comment to be edited.

#### Return Value

Type: [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.")

If the comment doesn’t support the edit capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```

```