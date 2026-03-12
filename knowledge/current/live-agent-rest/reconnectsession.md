---
title: "ReconnectSession"
domain: live-agent-rest
topic: reconnectsession
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.311Z
estimatedTokens: 955
keywords: [ReconnectSession, Reconnect, customer’s, chat, session, new, server, interrupted, original, unavailable, Testing]
---

# ReconnectSession

> Reconnect a customer’s chat session on a new server if the session is interrupted
  and the original server is unavailable.

# ReconnectSession

Reconnect a customer’s chat session on a new server if the session is interrupted and the original server is unavailable.

This request should only be made if you receive a 503 response status code, indicating that the affinity token has changed for your Chat session. When you receive a 503 response status code, you must cancel any existing inbound or outbound requests.

The data in outbound requests will be temporarily stored and resent once the session is reestablished. Upon receiving the response for the ReconnectSession request, you can start polling for messages.

The first response will be a ChasitorSessionData message containing the data from the previous session that will be restored once the session is reestablished. After receiving that message, you can proceed to send the existing messages that were canceled upon receiving the 503 response status code.

## Syntax

URI

https://hostname/chat/rest/System/ReconnectSession

Available since release

This resource is available in API versions 37.0 and later.

Formats

JSON

HTTP methods

GET

Request headers

X-LIVEAGENT-API-VERSION

X-LIVEAGENT-AFFINITY

X-LIVEAGENT-SESSION-KEY

Request parameters

| Name | Type | Description |
| --- | --- | --- |
| ReconnectSession.offset | Number | The event offset from the most recent Messages request that your client received. |

Query parameters

None

Request body

None

Response body

ReconnectSession

## Example

Your REST client can get a 503 Invalid Affinity Token response, for example, to a long poll request (/chat/rest/System/Messages).

No matter which kind of request gets the 503 response, you must send a /chat/rest/System/ReconnectSession request to finish the handover process.

```

```

The ReconnectSession.offset query parameter has to be set to the “offset” parameter of the most recent long poll response that actually contained messages. Empty long poll responses don’t come with an “offset”.

The response to this ReconnectSession request looks like this:

```

```

The resetSequence is always set to true. Therefore, reset the sequence number of the next request and store the value in affinityToken to use in the X-LIVEAGENT-AFFINITY header for all future requests. Once another handover process occurs the resetSequence is updated again.

## Testing

To test that your client handles this process correctly, check that your client sends a ReconnectSession request when it receives a 503 response from the server. You can use a proxy tool of your choice to mimic the 503 response or you can wait until the Salesforce server sends one. When the proxy tool sends a 503 response, you can test that your client sends the ReconnectSession request and reconnects the chat session to a new server, as expected. To get an actual 503 response from the server, you can leave a session connected and wait until the server is restarted during scheduled maintenance. Then see if the chat session reconnects to a new server. However, the maintenance schedule is not announced in advance.

#### See Also

-   [Status Codes and Error Responses](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm "Each request returns a status code or error response to indicate whether the request was successful.")

-   [ChasitorSessionData](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm "Returns the current chat session data for the chat visitor. This request is used to restore the session data for a chat visitor’s chat session after a ReconnectSessionrequest is sent.")

-   [ChasitorResyncState](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorResyncState.htm "Reestablishes the chat visitor’s state, including the details of the chat, after a ReconnectSessionrequest is completed.")

## Code Examples

```
Method: GET
      URL:
      <!-- Change the live agent pool to the correct one for your org. -->
      https://LiveAgentPool.salesforceliveagent.com/chat/rest/System/
      ReconnectSession?ReconnectSession.offset=54647226
      Headers:
      X-LIVEAGENT-AFFINITY:
      null [the literal string “null”]
      X-LIVEAGENT-API-VERSION:
      42
      X-LIVEAGENT-SESSION-KEY:
      4eb90106-3410-4dd0-8f04-c4facf90a929!1519169434766!IbjEwmJkIIyqalZS3YBU8WO3nSM=
```

```
{
  "messages": [
    {
      "type": "ReconnectSession",
      "message": {
        "resetSequence": true, [This may be undefined]
        "affinityToken": "efae1fa0"
      }
    }
  ]
}
```

## Related Topics

- Status Codes and Error Responses (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm)
- ChasitorSessionData (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm)
- ChasitorResyncState (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorResyncState.htm)
