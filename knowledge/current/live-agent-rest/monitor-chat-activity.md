---
title: "Monitor Chat Activity"
domain: live-agent-rest
topic: monitor-chat-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.384Z
estimatedTokens: 456
keywords: [Monitor, Chat, Activity, requests, indicate, certain, activities, occurred, session]
---

# Monitor Chat Activity

> Chat requests indicate when certain activities occurred during a chat
  session.

# Monitor Chat Activity

Chat requests indicate when certain activities occurred during a chat session.

-   **[ChasitorNotTyping](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorNotTyping.htm)**
    Indicates that the chat visitor is not typing in the chat window.
-   **[ChasitorSneakPeek](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSneakPeek.htm)**
    Provides a chat visitor’s message that was viewable through Sneak Peek.
-   **[ChasitorTyping](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorTyping.htm)**
    Indicates that a chat visitor is typing a message in the chat window.
-   **[ChatEnd](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnd.htm)**
    Indicates that a chat visitor has ended the chat.
-   **[ChasitorIdleTimeoutWarningEvent](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorIdleTimeoutWarningEvent.htm)**
    Informs the server when a warning is shown or cleared so that a transcript event can be created.
-   **[ChatMessage](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatMessage_request.htm)**
    Returns the body of the chat message sent by the chat visitor.
-   **[CustomEvent](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_CustomEvent_request.htm)**
    Indicates a custom event was sent from the chat visitor during the chat.
-   **[Messages](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm)**
    Returns all messages that were sent between agents and chat visitors during a chat session.
-   **[MultiNoun](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_MultiNoun.htm)**
    Batches multiple POST requests together if you’re sending multiple messages at the same time.

## Related Topics

- ChasitorNotTyping (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorNotTyping.htm)
- ChasitorSneakPeek (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSneakPeek.htm)
- ChasitorTyping (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorTyping.htm)
- ChatEnd (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnd.htm)
- ChasitorIdleTimeoutWarningEvent (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorIdleTimeoutWarningEvent.htm)
- ChatMessage (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatMessage_request.htm)
- CustomEvent (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_CustomEvent_request.htm)
- Messages (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm)
- MultiNoun (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_MultiNoun.htm)
