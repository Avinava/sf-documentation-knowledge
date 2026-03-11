---
title: "getMentionCompletions(communityId, q,
        contextId)"
domain: apex-reference
topic: getmentioncompletionscommunityid-q-contextid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.350Z
keywords: [getMentionCompletions, communityId, contextId, Get, first, page, possible, users, groups, mention, feed, item, body, comment, body., API, Version, Requires, Chatter, Signature]
---

# getMentionCompletions(communityId, q,
        contextId)

> Get the first page of possible users and groups to mention in a feed item body or
        comment body.

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