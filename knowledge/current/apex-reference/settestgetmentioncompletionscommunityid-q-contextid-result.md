---
title: "setTestGetMentionCompletions(communityId, q, contextId,
                  result)"
domain: apex-reference
topic: settestgetmentioncompletionscommunityid-q-contextid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.350Z
keywords: [setTestGetMentionCompletions, communityId, contextId, result, Register, ConnectApi.MentionCompletionPage, object, returned, getMentionCompletions, String, called, test, context., API, Version, Signature, Parameters, Return, Value, See]
---

# setTestGetMentionCompletions(communityId, q, contextId,
                  result)

> Register a ConnectApi.MentionCompletionPage
    object to be returned when getMentionCompletions(String, String,
      String) is called in a test context.

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