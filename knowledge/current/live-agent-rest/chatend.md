---
title: "ChatEnd"
domain: live-agent-rest
topic: chatend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.271Z
estimatedTokens: 213
keywords: [ChatEnd, chat, visitor, ended]
---

# ChatEnd

> Indicates that a chat visitor has ended the chat.

# ChatEnd

Indicates that a chat visitor has ended the chat.

## Syntax

URI

https://hostname/chat/rest/Chasitor/ChatEnd

Available since release

This resource is available in API versions 29.0 and later.

Formats

JSON

HTTP methods

POST

Request headers

X-LIVEAGENT-API-VERSION

X-LIVEAGENT-AFFINITY

X-LIVEAGENT-SESSION-KEY

X-LIVEAGENT-SEQUENCE

Request parameters

None

Query parameters

None

Request body

ChatEndReason—Include the ChatEndReason parameter in the request body of your request to specify the reason that the chat ended. This parameter is required. For example: {reason: “client”}.

Response properties

attachedRecords—Includes attached record IDs. You can use this Visualforce component to display the attached record IDs in the post-chat page: <apex:outputText value=”{!$CurrentPage.parameters.attachedRecords}”/><br />.
