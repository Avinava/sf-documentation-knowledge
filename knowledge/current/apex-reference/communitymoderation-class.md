---
title: "CommunityModeration Class"
domain: apex-reference
topic: communitymoderation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.625Z
estimatedTokens: 15323
namespace: ConnectApi
keywords: [CommunityModeration, Add, moderation, flag, comment, addFlagToComment, communityId, commentId, API, Version, Requires, Chatter, Usage, visibility, addFlagToFeedElement]
---

# CommunityModeration Class

> Add a moderation flag of the specified type to a
    comment.

**Namespace:** `ConnectApi`

# CommunityModeration Class

Get information about flagged feed items and comments in an Experience Cloud site. Add and remove flags from comments and feed items.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommunityModeration Methods

These methods are for CommunityModeration. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[addFlagToComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment)**
    Add a moderation flag to a comment.
-   **[addFlagToComment(communityId, commentId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_2)**
    Add a moderation flag of the specified visibility to a comment.
-   **[addFlagToComment(communityId, commentId, type)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_5)**
    Add a moderation flag of the specified type to a comment.
-   **[addFlagToComment(communityId, commentId, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_6)**
    Add a moderation flag with a note to a comment.
-   **[addFlagToComment(communityId, commentId, type, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_7)**
    Add a moderation flag of the specified type with a note to a comment.
-   **[addFlagToComment(communityId, commentId, type, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_9)**
    Add a moderation flag of the specified type and visibility to a comment.
-   **[addFlagToComment(communityId, commentId, visibility, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_10)**
    Add a moderation flag of the specified visibility with a note to a comment.
-   **[addFlagToComment(communityId, commentId, type, visibility, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToComment_11)**
    Add a moderation flag of the specified type and visibility with a note to a comment.
-   **[addFlagToFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_1)**
    Add a moderation flag to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_2)**
    Add a moderation flag of the specified visibility to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, type)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_5)**
    Add a moderation flag of the specified type to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_6)**
    Add a moderation flag with a note to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, type, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_7)**
    Add a moderation flag of the specified type with a note to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, type, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_9)**
    Add a moderation flag of the specified type and visibility to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, visibility, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_10)**
    Add a moderation flag of the specified visibility with a note to a feed element.
-   **[addFlagToFeedElement(communityId, feedElementId, type, visibility, note)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_11)**
    Add a moderation flag of the specified type and visibility with a note to a feed element.
-   **[getFlagsOnComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnComment)**
    Get the moderation flags on a comment.
-   **[getFlagsOnComment(communityId, commentId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnComment_2)**
    Get the moderation flags with specified visibility on a comment.
-   **[getFlagsOnComment(communityId, commentId, pageSize, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnComment_6)**
    Get a page of moderation flags on a comment.
-   **[getFlagsOnComment(communityId, commentId, visibility, pageSize, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnComment_7)**
    Get a page of moderation flags with specified visibility on a comment.
-   **[getFlagsOnFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_1)**
    Get the moderation flags on a feed element.
-   **[getFlagsOnFeedElement(communityId, feedElementId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_2)**
    Get the moderation flags with specified visibility on a feed element.
-   **[getFlagsOnFeedElement(communityId, feedElementId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_6)**
    Get a page of moderation flags on a feed element.
-   **[getFlagsOnFeedElement(communityId, feedElementId, visibility, pageSize, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_7)**
    Get a page of moderation flags with specified visibility on a feed element.
-   **[removeFlagFromComment(communityId, commentId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_removeFlagFromComment)**
    Remove a moderation flag from a comment.
-   **[removeFlagFromFeedElement(communityId, feedElementId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_removeFlagFromFeedElement_1)**
    Remove a moderation flag from a feed element.

### addFlagToComment(communityId, commentId)

Add a moderation flag to a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, visibility)

Add a moderation flag of the specified visibility to a comment.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, type)

Add a moderation flag of the specified type to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagType type)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, note)

Add a moderation flag with a note to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, type, note)

Add a moderation flag of the specified type with a note to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagType type, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, type, visibility)

Add a moderation flag of the specified type and visibility to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagType type, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, visibility, note)

Add a moderation flag of the specified visibility with a note to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToComment(communityId, commentId, type, visibility, note)

Add a moderation flag of the specified type and visibility with a note to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagType type, ConnectApi.CommunityFlagVisibility visibility, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId)

Add a moderation flag to a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, visibility)

Add a moderation flag of the specified visibility to a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Visibility behavior of a flag for various user types. One of these values:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, type)

Add a moderation flag of the specified type to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagType type)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, note)

Add a moderation flag with a note to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, type, note)

Add a moderation flag of the specified type with a note to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagType type, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, type, visibility)

Add a moderation flag of the specified type and visibility to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagType type, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Visibility behavior of a flag for various user types. One of these values:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, visibility, note)

Add a moderation flag of the specified visibility with a note to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagVisibility visibility, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Visibility behavior of a flag for various user types. One of these values:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedElement(communityId, feedElementId, type, visibility, note)

Add a moderation flag of the specified type and visibility with a note to a feed element.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagType type, ConnectApi.CommunityFlagVisibility visibility, String note)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Visibility behavior of a flag for various user types. One of these values:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.

### getFlagsOnComment(communityId, commentId)

Get the moderation flags on a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnComment(communityId, commentId, visibility)

Get the moderation flags with specified visibility on a comment.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnComment(communityId, commentId, pageSize, pageParam)

Get a page of moderation flags on a comment.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId, Integer pageSize, String pageParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnComment(communityId, commentId, visibility, pageSize, pageParam)

Get a page of moderation flags with specified visibility on a comment.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility, Integer pageSize, String pageParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnFeedElement(communityId, feedElementId)

Get the moderation flags on a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability getFlagsOnFeedElement(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnFeedElement(communityId, feedElementId, visibility)

Get the moderation flags with specified visibility on a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability getFlagsOnFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types. One of these values:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of moderation flags on a feed element.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability getFlagsOnFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnFeedElement(communityId, feedElementId, visibility, pageSize, pageParam)

Get a page of moderation flags with specified visibility on a feed element.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability getFlagsOnFeedElement(String communityId, String feedElementId, ConnectApi.CommunityFlagVisibility visibility, Integer pageSize, String pageParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### removeFlagFromComment(communityId, commentId, userId)

Remove a moderation flag from a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags removeFlagFromComment(String communityId, String commentId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: Void

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.

### removeFlagFromFeedElement(communityId, feedElementId, userId)

Remove a moderation flag from a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static void removeFlagFromFeedElement(String communityId, String feedElementId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.

## Retired CommunityModeration Methods

These methods for CommunityModeration are retired.

-   **[addFlagToFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedItem)**
    Add a moderation flag to a feed item.
-   **[addFlagToFeedItem(communityId, feedItemId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_addFlagToFeedItem_2)**
    Add a moderation flag with specified visibility to a feed item.
-   **[getFlagsOnFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedItem)**
    Get the moderation flags on a feed item.
-   **[getFlagsOnFeedItem(communityId, feedItemId, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedItem_2)**
    Get the moderation flags with specified visibility on a feed item.
-   **[removeFlagsOnFeedItem(communityId, feedItemId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm#apex_ConnectAPI_CommunityModeration_removeFlagFromFeedItem)**
    Remove a moderation flag from a feed item.

### addFlagToFeedItem(communityId, feedItemId)

Add a moderation flag to a feed item.

#### API Version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [addFlagToFeedElement(communityId, feedElementId)](#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_1 "Add a moderation flag to a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a feed item, Allow members to flag content must be selected for an Experience Cloud site.

### addFlagToFeedItem(communityId, feedItemId, visibility)

Add a moderation flag with specified visibility to a feed item.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [addFlagToFeedElement(communityId, feedElementId, visibility)](#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_2 "Add a moderation flag of the specified visibility to a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToFeedItem(String communityId, String feedItemId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a feed item, Allow members to flag content must be selected for an Experience Cloud site.

### getFlagsOnFeedItem(communityId, feedItemId)

Get the moderation flags on a feed item.

#### API Version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFlagsOnFeedElement(communityId, feedElementId)](#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_1 "Get the moderation flags on a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### getFlagsOnFeedItem(communityId, feedItemId, visibility)

Get the moderation flags with specified visibility on a feed item.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFlagsOnFeedElement(communityId, feedElementId, visibility)](#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_2 "Get the moderation flags with specified visibility on a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnFeedItem(String communityId, String feedItemId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types. Values are:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.

### removeFlagsOnFeedItem(communityId, feedItemId, userId)

Remove a moderation flag from a feed item.

#### API Version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [removeFlagFromFeedElement(communityId, feedElementId, userId)](#apex_ConnectAPI_CommunityModeration_removeFlagFromFeedElement_1 "Remove a moderation flag from a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags removeFlagsOnFeedItem(String communityId, String feedItemId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: Void

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- addFlagToComment(communityId, commentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, visibility) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, type) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, note) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, type, note) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, type, visibility) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, visibility, note) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToComment(communityId, commentId, type, visibility, note) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
- addFlagToFeedElement(communityId, feedElementId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommunityModeration_static_methods.htm)
