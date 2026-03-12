---
title: "ChatterMessages Class"
domain: apex-reference
topic: chattermessages-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:17.348Z
estimatedTokens: 11945
namespace: ConnectApi
keywords: [ChatterMessages, Get, send, search, reply, messages., get, conversations, mark, read, count, unread, Usage, getConversation, conversationId, API, Version, Requires, Chatter, pageParam]
---

# ChatterMessages Class

> Get, send, search, and reply to private messages. You can also get and search private
        conversations, mark conversations as read, and get a count of unread private
        messages.

**Namespace:** `ConnectApi`

# ChatterMessages Class

Get, send, search, and reply to private messages. You can also get and search private conversations, mark conversations as read, and get a count of unread private messages.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Private messages and direct messages are different features. Direct messages are newer and offer a richer feature set for private communication in Experience Cloud sites. Direct messages are a capability within Chatter feeds. To work with direct messages, use the [ChatterFeeds Class](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_static_methods "Get, post, and delete feed elements, likes, comments, and bookmarks. You can also search feed elements, share feed elements, and vote on polls.").

## ChatterMessages Methods

These methods are for ChatterMessages. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[getConversation(conversationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation)**
    Get a conversation.
-   **[getConversation(conversationId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_2)**
    Get a page of a conversation.
-   **[getConversation(communityId, conversationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_3)**
    Get a conversation from an Experience Cloud site.
-   **[getConversation(communityId, conversationId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_4)**
    Get a page of a conversation from an Experience Cloud site.
-   **[getConversations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations)**
    Get the most recent conversations.
-   **[getConversations(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_2)**
    Get a page of conversations.
-   **[getConversations(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_3)**
    Get the most recent conversations from an Experience Cloud site.
-   **[getConversations(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_4)**
    Get a page of conversations from an Experience Cloud site.
-   **[getMessage(messageId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessage)**
    Get a message.
-   **[getMessage(communityId, messageId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessage_2)**
    Get a message from an Experience Cloud site.
-   **[getMessages()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages)**
    Get the most recent messages.
-   **[getMessages(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_2)**
    Get a page of messages.
-   **[getMessages(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_3)**
    Get the most recent messages from an Experience Cloud site.
-   **[getMessages(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_4)**
    Get a page of messages from an Experience Cloud site.
-   **[getUnreadCount()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getUnreadCount)**
    Get the number of conversations that are marked unread.
-   **[getUnreadCount(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getUnreadCount_2)**
    Get the number of conversations that are marked unread in an Experience Cloud site.
-   **[markConversationRead(conversationId, read)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_markConversationRead)**
    Mark a conversation as read or unread.
-   **[markConversationRead(communityId, conversationID, read)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_markConversationRead_2)**
    Mark a conversation as read or unread in an Experience Cloud site.
-   **[replyToMessage(text, inReplyTo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_replyToMessage)**
    Reply to a message.
-   **[replyToMessage(communityId, text, inReplyTo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_replyToMessage_2)**
    Reply to a message in an Experience Cloud site.
-   **[searchConversation(conversationId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation)**
    Get a conversation that matches the search criteria.
-   **[searchConversation(conversationId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_2)**
    Get a conversation with a page of messages that match the search criteria.
-   **[searchConversation(communityId, conversationId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_3)**
    Get a conversation with messages that match the search criteria in an Experience Cloud site.
-   **[searchConversation(communityId, conversationId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_4)**
    Get a conversation with a page of messages that match the search criteria in an Experience Cloud site.
-   **[searchConversations(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations)**
    Get conversations in which member names and messages match the search criteria.
-   **[searchConversations(pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_2)**
    Get a page of conversations in which member names and messages match the search criteria.
-   **[searchConversations(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_3)**
    Get conversations in which member names and messages match the search criteria in an Experience Cloud site.
-   **[searchConversations(communityId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_4)**
    Get a page of conversations in which member names and messages match the search criteria in an Experience Cloud site.
-   **[searchMessages(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages)**
    Get messages that match the search criteria.
-   **[searchMessages(pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_2)**
    Get a page of messages that match the search criteria.
-   **[searchMessages(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_3)**
    Get messages that match the search criteria in an Experience Cloud site.
-   **[searchMessages(communityId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_4)**
    Get a page of messages that match the search criteria in an Experience Cloud site.
-   **[sendMessage(text, recipients)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_sendMessage)**
    Send a message to a list of recipients.
-   **[sendMessage(communityId, text, recipients)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_sendMessage_2)**
    Send a message to a list of recipients in an Experience Cloud site.

### getConversation(conversationId)

Get a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String conversationId)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### getConversation(conversationId, pageParam, pageSize)

Get a page of a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String conversationId, String pageParam, Integer pageSize)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### getConversation(communityId, conversationId)

Get a conversation from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String communityId, String conversationId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### getConversation(communityId, conversationId, pageParam, pageSize)

Get a page of a conversation from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String communityId, String conversationId, String pageParam, String pageSize)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

pageParam

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### getConversations()

Get the most recent conversations.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations()

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### getConversations(pageParam, pageSize)

Get a page of conversations.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations(String pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### getConversations(communityId)

Get the most recent conversations from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### getConversations(communityId, pageParam, pageSize)

Get a page of conversations from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations(String communityId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### getMessage(messageId)

Get a message.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage getMessage(String messageId)

#### Parameters

messageId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the message.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

### getMessage(communityId, messageId)

Get a message from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage getMessage(String communityId, String messageId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

messageId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the message.

#### Return Value

Type:[ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

### getMessages()

Get the most recent messages.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage getMessages()

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### getMessages(pageParam, pageSize)

Get a page of messages.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage getMessages(String pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### getMessages(communityId)

Get the most recent messages from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage getMessages(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### getMessages(communityId, pageParam, pageSize)

Get a page of messages from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage getMessages(String communityId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### getUnreadCount()

Get the number of conversations that are marked unread.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UnreadConversationCount getUnreadCount()

#### Return Value

Type: [ConnectApi.​​UnreadConversationCount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_UnreadMessageCount.htm "Unread count for a conversation.")

If there are fewer than 50 unread conversations, ConnectApi.UreadConversationCount returns the exact number of unread conversations and the hasMore property is false. If there are more than 50 unread conversations, ConnectApi.UreadConversationCount returns 50 unread conversations and the hasMore property is true.

#### Example

```

```

### getUnreadCount(communityId)

Get the number of conversations that are marked unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UnreadConversationCount getUnreadCount(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​​UnreadConversationCount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_UnreadMessageCount.htm "Unread count for a conversation.")

If there are fewer than 50 unread conversations, ConnectApi.UreadConversationCount returns the exact number of unread conversations and the hasMore property is false. If there are more than 50 unread conversations, ConnectApi.UreadConversationCount returns 50 unread conversations and the hasMore property is true.

### markConversationRead(conversationId, read)

Mark a conversation as read or unread.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationSummary markConversationRead(String conversationId, Boolean read)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

read

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify whether the conversation is read (true) or not (false).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm "Chatter conversation summary.")

### markConversationRead(communityId, conversationID, read)

Mark a conversation as read or unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationSummary markConversationRead(String communityId, String conversationID, Boolean read)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

read

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify whether the conversation is read (true) or not (false).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm "Chatter conversation summary.")

### replyToMessage(text, inReplyTo)

Reply to a message.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage replyToMessage(String text, String inReplyTo)

#### Parameters

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

inReplyTo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the message that is being responded to.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

### replyToMessage(communityId, text, inReplyTo)

Reply to a message in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage replyToMessage(String communityId, String text, String inReplyTo)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

inReplyTo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the message that is being responded to.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

### searchConversation(conversationId, q)

Get a conversation that matches the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation searchConversation(String conversationId, String q)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### searchConversation(conversationId, pageParam, pageSize, q)

Get a conversation with a page of messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation searchConversation(String conversationId, String pageParam, Integer pageSize, String q)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### searchConversation(communityId, conversationId, q)

Get a conversation with messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation searchConversation(String communityId, String conversationId, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### searchConversation(communityId, conversationId, pageParam, pageSize, q)

Get a conversation with a page of messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation searchConversation(String communityId, String conversationId, String pageParam, Integer pageSize, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")

### searchConversations(q)

Get conversations in which member names and messages match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage searchConversations(String q)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### searchConversations(pageParam, pageSize, q)

Get a page of conversations in which member names and messages match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage searchConversations(String pageParam, Integer pageSize, String q)

#### Parameters

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### searchConversations(communityId, q)

Get conversations in which member names and messages match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage searchConversations(String communityId, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### searchConversations(communityId, pageParam, pageSize, q)

Get a page of conversations in which member names and messages match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage searchConversations(String communityId, String pageParam, Integer pageSize, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

### searchMessages(q)

Get messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage searchMessages(String q)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### searchMessages(pageParam, pageSize, q)

Get a page of messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage searchMessages(String pageParam, Integer pageSize, String q)

#### Parameters

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### searchMessages(communityId, q)

Get messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage searchMessages(String communityId, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### searchMessages(communityId, pageParam, pageSize, q)

Get a page of messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage searchMessages(String communityId, String pageParam, Integer pageSize, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

### sendMessage(text, recipients)

Send a message to a list of recipients.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage sendMessage(String text, String recipients)

#### Parameters

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

recipients

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Up to nine comma-separated IDs of the users receiving the message.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

### sendMessage(communityId, text, recipients)

Send a message to a list of recipients in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage sendMessage(String communityId, String text, String recipients)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

recipients

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Up to nine comma-separated IDs of users to receive the message.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")

## Code Examples

```
ConnectApi.UnreadConversationCount unread = ConnectApi.ChatterMessages.getUnreadCount();
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- ChatterFeeds Class (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- getConversation(conversationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversation(conversationId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversation(communityId, conversationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversation(communityId, conversationId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversations() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversations(pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversations(communityId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
- getConversations(communityId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm)
