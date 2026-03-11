---
title: "isCommentEditableByMe(communityId, commentId)"
domain: apex-reference
topic: iscommenteditablebymecommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [isCommentEditableByMe, communityId, commentId, Discover, whether, context, user, edit, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, See]
---

# isCommentEditableByMe(communityId, commentId)

> Discover whether the context user can edit a comment.

### isCommentEditableByMe(communityId, commentId)

Discover whether the context user can edit a comment.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedEntityIsEditable isCommentEditableByMe(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

#### Return Value

Type: [ConnectApi.FeedEntityIsEditable](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_is_editable.htm#apex_connectapi_output_feed_entity_is_editable "Indicates if the context user can edit a feed element or comment.")

If the comment doesn’t support the edit capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### See Also

-   [Edit a Comment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_comment.htm "Edit a Comment - HTML (New Window)")