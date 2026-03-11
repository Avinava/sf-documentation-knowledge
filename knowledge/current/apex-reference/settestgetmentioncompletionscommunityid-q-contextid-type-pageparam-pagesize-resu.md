---
title: "setTestGetMentionCompletions(communityId, q, contextId, type,
         pageParam, pageSize, result)"
domain: apex-reference
topic: settestgetmentioncompletionscommunityid-q-contextid-type-pageparam-pagesize-resu
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.350Z
keywords: [setTestGetMentionCompletions, communityId, contextId, type, pageParam, pageSize, result, Register, ConnectApi.MentionCompletionPage, object, returned, getMentionCompletions, String, ConnectApi.MentionCompletionType, Integer, called, test, context., API, Version]
---

# setTestGetMentionCompletions(communityId, q, contextId, type,
         pageParam, pageSize, result)

> Register a ConnectApi.MentionCompletionPage
      object to be returned when getMentionCompletions(String,
         String, String, ConnectApi.MentionCompletionType, Integer, Integer) is called in a
      test context.

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