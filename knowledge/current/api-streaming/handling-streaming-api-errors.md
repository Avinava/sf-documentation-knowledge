---
title: "Handling Streaming API Errors"
domain: api-streaming
topic: handling-streaming-api-errors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.483Z
estimatedTokens: 1347
keywords: [Handling, Streaming, API, Errors, common, how, handle, client, Authentication, Unknown, Error, Resource, Limit, Validation, Handshake]
---

# Handling Streaming API Errors

> Learn about some common errors and how to handle them in your streaming
  client.

# Handling Streaming API Errors

Learn about some common errors and how to handle them in your streaming client.

## 401 Authentication Errors

Client authentication can sometimes become invalid, for example, when the OAuth token is revoked or a Salesforce admin revokes the Salesforce session. An admin can revoke an OAuth token or delete a Salesforce session to prevent a client from receiving events. Sometimes a client can inadvertently invalidate its authentication by logging out from a Salesforce session. Streaming API regularly validates the OAuth token or session ID while the client is connected. If client authentication isn’t valid, the client is notified with an error. A Bayeux message is sent on the /meta/connect channel with an error value of 401::Authentication invalid and an advice field containing reconnect=none. After receiving the error notification in the channel listener, the client must reauthenticate and reconnect to receive new events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

If the OAuth or session token isn’t sent in the request header, the 401 error message text is 401::Request requires authentication.

The error response message that is sent on the /meta/connect channel looks similar to the following.

```

```

If the client is required to perform a new handshake request due to a failed connection, the authentication error is sent on the /meta/handshake channel. The handshake request fails with a 403::Handshake denied error in the response. The 401::Authentication invalid error is nested in the ext property in the response.

The error response message that is sent on the /meta/handshake channel looks similar to the following.

```

```

For a code example about reauthentication, see the [AuthFailureListener class](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/EmpConnector.java "HTML (New Window)") in the EMPConnector GitHub project.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

Invalidated client authentication doesn’t include Salesforce session expiration. The Salesforce session never expires in a CometD client. Salesforce keeps extending the timeout interval as long as the client stays connected.

## 403 Unknown Client Error

If a long-lived connection is lost due to unexpected network disruption, the CometD server times out the client and deletes the client state. The CometD client attempts to reconnect but the connection is rejected with the 403::Unknown client error because the client state doesn’t exist anymore. The error response returned when the client attempts to reconnect after a timeout looks similar to the following message.

```

```

When the client receives the 403::Unknown client error with the "reconnect":"handshake" advice field, the client must perform a new handshake. If the handshake is successful, the client must resubscribe to the channel in the handshake listener.

For more information, see [Clients and Timeouts](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_timeouts.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The 403::Unknown client error is sometimes returned when using more than one CometD connection. You can have only one CometD connection in one browser. If you have more than one connection because you have multiple clients or another app is using one CometD connection, your client fails to connect. In this event, ensure to turn off the other client or share the CometD connection between clients.

## 403 Resource Limit and Validation Errors for Handshake Requests

After a client sends a handshake request, Streaming API checks the client’s API version and resource limits to ensure that the client can perform a successful connection. The following validations are performed.

-   API Version
-   Maximum concurrent clients (subscribers) across all streaming channels
-   Simultaneous connections limit on the Salesforce app servers. This limit protects against denial of service attacks.

If the client fails the validation, the response contains 403::Handshake denied in the error field, and the cause of the error is returned in the nested ext/sfdc/failureReason field. For example, the following response message is returned when the number of simultaneous connections has been exhausted.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The maximum daily event usage is checked when the client subscribes.

## 503 Server Too Busy Error

If the Salesforce servers don’t have available resources to process your Streaming API request, a 503 error is returned in the ext/sfdc/failureReason field. This error is returned for Streaming API requests, including a handshake, connection, or subscribe request. For example, this response shows the 503 error on the /meta/connect channel. The error field represents the error returned by the operation that was in progress when the 503 error occurred.

```

```

If you get the 503 error, try your request after a small delay of a few minutes, or try to execute your requests serially. This error is temporary and your request will be successful when the Salesforce app servers are available again.

## Code Examples

```
{
  "clientId": "1q1ib66fvm7kli1gfoauu95i78g", 
  "advice": {
    "reconnect": "none", 
    "interval": 0
  }, 
  "channel": "/meta/connect", 
  "id": 7, 
  "error": "401::Authentication invalid", 
  "successful": false
}
```

```
{ 
  "ext": { 
    "sfdc": { 
      "failureReason": "401::Authentication invalid" 
    } 
  }, 
  "advice": { 
    "reconnect": "none" 
  }, 
  "channel": "/meta/handshake", 
  "error": "403::Handshake denied", 
  "successful": false 
}
```

```
{
  "error":"403::Unknown client",
  "successful":false,
  "advice":{"interval":0,"reconnect":"handshake"}
}
```

```
{
  "channel" : "/meta/handshake",
  "id" : "1",
  "error" : "403::Handshake denied",
  "successful" : false,
  "advice" : {
    "reconnect" : "none"
  },
  "ext" : {
    "sfdc" : {
      "failureReason" : "403::To protect all customers from excessive use and Denial of
         Service attacks, we limit the number of simultaneous connections per server.  
         Your request has been denied because this limit has been exceeded.  
         Please try your request again later."
    },
    "replay" : true,
    "payload.format" : true
  }
}
```

```
{
  "channel" : "/meta/connect",
  "id" : "6",
  "error" : "401::Authentication invalid",
  "successful" : false,
  "ext" : {
    "sfdc" : {
      "failureReason" : "503::Server is too busy.  Please try your request again later."
    }
  },
  "clientId" : "b1unwa43ckd43m16v60gs6v2yv7",
  "advice" : {
    "reconnect" : "none",
    "interval" : 0
  }
}
```

## Related Topics

- Clients and Timeouts (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_timeouts.htm)
