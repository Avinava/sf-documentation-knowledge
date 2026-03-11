---
title: "getMentionValidations(communityId, parentId, recordIds,
      visibility)"
domain: apex-reference
topic: getmentionvalidationscommunityid-parentid-recordids-visibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.350Z
keywords: [getMentionValidations, communityId, parentId, recordIds, visibility, Get, information, whether, mentions, valid, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMentionValidations(communityId, parentId, recordIds,
      visibility)

> Get information about whether the mentions are valid for the context user.

### getMentionValidations(communityId, parentId, recordIds, visibility)

Get information about whether the mentions are valid for the context user.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Mentions getMentionValidations(String communityId, String parentId, List<String\> recordIds, ConnectApi.FeedItemVisibilityType visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The feed item parent ID.

recordIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A comma-separated list of IDs to be mentioned. The maximum value is 25.

visibility

Type: [ConnectApi.FeedItemVisibilityType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedItemTypeVisEnum)

Type of users who can see a feed item.

-   AllUsers—Visibility is not limited to internal users.
-   InternalUsers—Visibility is limited to internal users.

#### Return Value

Type: [ConnectApi.​​Mention​Validations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mentionValidations.htm "Information about whether a set of mentions is valid for the context user.")

#### Usage

Call this method to check whether the record IDs returned from a call to ConnectApi.Mentions.getMentionCompletions are valid for the context user. For example, the context users can’t mention private groups they don’t belong to. If such a group were included in the list of mention validations, the ConnectApi.MentionValidations.hasErrors property would be true and the group would have a ConnectApi.MentionValidation.valdiationStatus of Disallowed.