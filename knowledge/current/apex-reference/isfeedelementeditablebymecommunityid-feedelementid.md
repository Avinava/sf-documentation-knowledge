---
title: "isFeedElementEditableByMe(communityId,
    feedElementId)"
domain: apex-reference
topic: isfeedelementeditablebymecommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [isFeedElementEditableByMe, communityId, feedElementId, Discover, whether, context, user, edit, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, See]
---

# isFeedElementEditableByMe(communityId,
    feedElementId)

> Discover whether the context user can edit a feed element.

### isFeedElementEditableByMe(communityId, feedElementId)

Discover whether the context user can edit a feed element.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedEntityIsEditable isFeedElementEditableByMe(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element. Feed items are the only type of feed element that can be edited.

#### Return Value

Type: [ConnectApi.FeedEntityIsEditable](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_is_editable.htm#apex_connectapi_output_feed_entity_is_editable "Indicates if the context user can edit a feed element or comment.")

If the feed element doesn’t support the edit capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### See Also

-   [Edit a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_feed_element.htm "Edit a Feed Element - HTML (New Window)")
    
-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")