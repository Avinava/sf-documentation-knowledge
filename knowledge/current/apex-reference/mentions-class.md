---
title: "Mentions Class"
domain: apex-reference
topic: mentions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.452Z
estimatedTokens: 3927
namespace: ConnectApi
keywords: [Mentions, Access, information, mentions., mention, “@”, character, followed, user, group, name., mentioned, they, receive, notification., getMentionCompletions, communityId, contextId, API, Version]
---

# Mentions Class

> Access information about mentions. A mention is an “@”
character followed by a user or group name. When a user or group is
mentioned, they receive a notification.

**Namespace:** `ConnectApi`

# Mentions Class

Access information about mentions. A mention is an “@” character followed by a user or group name. When a user or group is mentioned, they receive a notification.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Mentions Methods

These methods are for Mentions. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[getMentionCompletions(communityId, q, contextId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectAPI_Mentions_getMentionCompletions)**
    Get the first page of possible users and groups to mention in a feed item body or comment body.
-   **[getMentionCompletions(communityId, q, contextId, type, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectAPI_Mentions_getMentionCompletions_2)**
    Get a page of possible mention proposals of the specified type.
-   **[getMentionValidations(communityId, parentId, recordIds, visibility)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectAPI_Mentions_getMentionValidations)**
    Get information about whether the mentions are valid for the context user.

### getMentionCompletions(communityId, q, contextId)

Get the first page of possible users and groups to mention in a feed item body or comment body.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.MentionCompletionPage getMentionCompletions (String communityId, String q, String contextId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A search term for matching user and group names. Searching for a group requires a minimum of 2 characters. Searching for a user doesn’t require a minimum number of characters. This parameter does not support wildcards.

contextId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A feed item ID (for a mention in a comment) or a feed subject ID (for a mention in a feed item) that narrows search results, with more useful results listed first. Use a group ID for groups that allow customers to ensure mention completion results include customers.

#### Return Value

Type: [ConnectApi.​MentionCompletion​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

#### Usage

Call this method to generate a page of proposed mentions that a user can choose from when they enter characters after @ in a feed item body or a comment body.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetMentionCompletions(communityId, q, contextId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectApi_Mentions_setTestGetMentionCompletions "Register a ConnectApi.MentionCompletionPage object to be returned when getMentionCompletions(String, String, String) is called in a test context.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getMentionCompletions(communityId, q, contextId, type, pageParam, pageSize)

Get a page of possible mention proposals of the specified type.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Mentions getMentionCompletions (String communityId, String q, String contextId, ConnectApi.MentionCompletionType type, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A search term for matching user and group names. Searching for a group requires a minimum of 2 characters. Searching for a user doesn’t require a minimum number of characters. This parameter does not support wildcards.

contextId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A feed item ID (for a mention in a comment) or a feed subject ID (for a mention in a feed item) that narrows search results, with more useful results listed first. Use a group ID for groups that allow customers to ensure mention completion results include customers.

type

Type: [ConnectApi.MentionCompletionType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#MentionCompletionType_enum)

Type of mention completion.

-   All—All mention completions, regardless of the type of record to which the mention refers.
-   Group—Mention completions for groups.
-   User—Mention completions for users.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​MentionCompletion​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

#### Usage

Call this method to generate a page of proposed mentions that a user can choose from when they enter characters after @ in a feed item body or a comment body.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetMentionCompletions(communityId, q, contextId, type, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectApi_Mentions_setTestGetMentionCompletions_2 "Register a ConnectApi.MentionCompletionPage object to be returned when getMentionCompletions(String, String, String, ConnectApi.MentionCompletionType, Integer, Integer) is called in a test context.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


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

## Mentions Test Methods

These test methods are for Mentions. All methods are static.

For information about using these methods to test your ConnectApi code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestGetMentionCompletions(communityId, q, contextId, result)

Register a ConnectApi.MentionCompletionPage object to be returned when getMentionCompletions(String, String, String) is called in a test context.

#### API Version

29.0

#### Signature

public static Void setTestGetMentionCompletions (String communityId, String q, String contextId, ConnectApi.MentionCompletionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A search term for matching user and group names. Searching for a group requires a minimum of 2 characters. Searching for a user doesn’t require a minimum number of characters. This parameter does not support wildcards.

contextId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A feed item ID (for a mention in a comment) or a feed subject ID (for a mention in a feed item) that narrows search results, with more useful results listed first. Use a group ID for groups that allow customers to ensure mention completion results include customers.

result

Type: [ConnectApi.​MentionCompletion​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

A ConnectApi.MentionCompletionPage object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getMentionCompletions(communityId, q, contextId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectAPI_Mentions_getMentionCompletions "Get the first page of possible users and groups to mention in a feed item body or comment body.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetMentionCompletions(communityId, q, contextId, type, pageParam, pageSize, result)

Register a ConnectApi.MentionCompletionPage object to be returned when getMentionCompletions(String, String, String, ConnectApi.MentionCompletionType, Integer, Integer) is called in a test context.

#### API Version

29.0

#### Signature

public static Void setTestGetMentionCompletions (String communityId, String q, String contextId, ConnectApi.MentionCompletionType type, Integer pageParam, Integer pageSize, ConnectApi.MentionCompletionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A search term for matching user and group names. Searching for a group requires a minimum of 2 characters. Searching for a user doesn’t require a minimum number of characters. This parameter does not support wildcards.

contextId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A feed item ID (for a mention in a comment) or a feed subject ID (for a mention in a feed item) that narrows search results, with more useful results listed first. Use a group ID for groups that allow customers to ensure mention completion results include customers.

type

Type: [ConnectApi.MentionCompletionType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#MentionCompletionType_enum)

Type of mention completion.

-   All—All mention completions, regardless of the type of record to which the mention refers.
-   Group—Mention completions for groups.
-   User—Mention completions for users.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

result

Type: [ConnectApi.​MentionCompletion​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

A ConnectApi.MentionCompletionPage object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getMentionCompletions(communityId, q, contextId, type, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm#apex_ConnectAPI_Mentions_getMentionCompletions_2 "Get a page of possible mention proposals of the specified type.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getMentionCompletions(communityId, q, contextId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm)
- getMentionCompletions(communityId, q, contextId, type, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm)
- getMentionValidations(communityId, parentId, recordIds, visibility) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​MentionCompletion​Page (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm)
- setTestGetMentionCompletions(communityId, q, contextId, result) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm)
- ConnectApi.MentionCompletionType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- setTestGetMentionCompletions(communityId, q, contextId, type, pageParam, pageSize, result) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Mentions_static_methods.htm)
