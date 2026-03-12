---
title: "Status Codes and Error Responses"
domain: live-agent-rest
topic: status-codes-and-error-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.367Z
estimatedTokens: 725
keywords: [Status, Codes, Error, Responses, code, indicate, whether, successful]
---

# Status Codes and Error Responses

> Each request returns a status code or error response to indicate whether the request was
  successful.

# Status Codes and Error Responses

Each request returns a status code or error response to indicate whether the request was successful.

When an error occurs or when a response is successful, the response header contains an HTTP code, and the response body usually contains:

-   The HTTP response code
-   The message accompanying the HTTP response code

| HTTP response code | Description |
| --- | --- |
| 200 | “OK” success code. |
| 202 | “Accepted” success code, for POST request. |
| 204 | “No Content” success code for Message request; resend the request as part of the message loop. |
| 400 | The request couldn’t be understood, usually because the JSON body contains an error. |
| 403 | The request has been refused because the session isn’t valid. |
| 404 | The requested resource couldn’t be found. Check the URI for errors. |
| 405 | The method specified in the Request-Line isn’t allowed for the resource specified in the URI. |
| 409 | A duplicate long poll using the same session ID has caused the chat to terminate. Reestablish the chat in a new session. |
| 500 | An error has occurred within the Chat server, so the request couldn’t be completed. Contact Customer Support. |
| 503 | The affinity token has changed. Make a ReconnectSession request to get a new affinity token, then make a ChasitorSessionData request to reestablish the chat visitor’s data within the new session. |

#### See Also

-   [Your Message Long Polling Loop](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm "Message long polling notifies you of events that occur on the Chat server for your Chat session.")

-   [ReconnectSession](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm "Reconnect a customer’s chat session on a new server if the session is interrupted and the original server is unavailable.")

-   [ChasitorSessionData](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm "Returns the current chat session data for the chat visitor. This request is used to restore the session data for a chat visitor’s chat session after a ReconnectSessionrequest is sent.")

-   [Response Bodies for Chat REST API](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm "A request to a Chat REST API resource returns a response code. The successful execution of a resource request can also return a response body in JSON format.")

-   [Chat REST API Data Types](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm "A request to a Chat REST API resource returns a response code. The successful execution of a resource request can also return a response body in JSON format. Some response bodies return data types that contain their own properties. All property values that refer to a name of an entity or field are case-sensitive.")

## Related Topics

- Your Message Long Polling Loop (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm)
- ReconnectSession (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm)
- ChasitorSessionData (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm)
- Response Bodies for Chat REST API (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm)
- Chat REST API Data Types (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
