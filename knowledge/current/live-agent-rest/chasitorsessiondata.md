---
title: "ChasitorSessionData"
domain: live-agent-rest
topic: chasitorsessiondata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.265Z
estimatedTokens: 284
keywords: [ChasitorSessionData, current, chat, session, data, visitor, restore, visitor’s, ReconnectSessionrequest, sent]
---

# ChasitorSessionData

> Returns the current chat session data for the chat visitor. This request is used to
  restore the session data for a chat visitor’s chat session after a  ReconnectSessionrequest is sent.

# ChasitorSessionData

Returns the current chat session data for the chat visitor. This request is used to restore the session data for a chat visitor’s chat session after a ReconnectSessionrequest is sent.

The ChasitorSessionData request is the first message sent after a ReconnectSession request is delivered.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

No messages should be sent after a 503 status code is encountered until this message is processed.

## Syntax

Available since release

This resource is available in API versions 29.0 and later.

Response body

ChasitorSessionData request

#### See Also

-   [ReconnectSession](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm "Reconnect a customer’s chat session on a new server if the session is interrupted and the original server is unavailable.")

-   [Status Codes and Error Responses](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm "Each request returns a status code or error response to indicate whether the request was successful.")

## Related Topics

- ReconnectSession (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm)
- Status Codes and Error Responses (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm)
