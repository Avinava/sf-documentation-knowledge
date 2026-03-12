---
title: "Create a Chat Visitor Session"
domain: live-agent-rest
topic: create-a-chat-visitor-session
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.334Z
estimatedTokens: 216
keywords: [Chat, Visitor, Session, reestablish, REST, API, certain, requests]
---

# Create a Chat Visitor Session

> To create or reestablish a chat visitor session using the Chat REST API, you must
  make certain requests.

# Create a Chat Visitor Session

To create or reestablish a chat visitor session using the Chat REST API, you must make certain requests.

-   **[ChasitorInit](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorInit.htm)**
    Initiates a new chat visitor session. The ChasitorInit request is always required as the first POST request in a new chat session.
-   **[ReconnectSession](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm)**
    Reconnect a customer’s chat session on a new server if the session is interrupted and the original server is unavailable.
-   **[ChasitorResyncState](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorResyncState.htm)**
    Reestablishes the chat visitor’s state, including the details of the chat, after a ReconnectSessionrequest is completed.

## Related Topics

- ChasitorInit (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorInit.htm)
- ReconnectSession (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm)
- ChasitorResyncState (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorResyncState.htm)
