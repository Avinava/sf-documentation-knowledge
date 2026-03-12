---
title: "How the Client Connects"
domain: api-streaming
topic: how-the-client-connects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.508Z
estimatedTokens: 1460
keywords: [How, Client, Connects, Streaming, API, uses, HTTP, 1.1, request-response, model, Bayeux, protocol, CometD, implementation, multiple]
---

# How the Client Connects

> Streaming API uses the HTTP/1.1 request-response model and the Bayeux protocol (CometD
    implementation). A Bayeux client connects to Streaming API in multiple stages.

# How the Client Connects

Streaming API uses the HTTP/1.1 request-response model and the Bayeux protocol (CometD implementation). A Bayeux client connects to Streaming API in multiple stages.

1.  CometD sends a handshake request.
2.  After a successful handshake, your custom listener on the /meta/handshake channel sends a subscription request to a channel.
3.  CometD maintains the connection by using [long polling](http://en.wikipedia.org/wiki/Push_technology "HTML (New Window)").

![Client connection sequence to Salesforce using CometD](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_cometd_connection_sequence.png&folder=api_streaming)

The client receives events from the server while it maintains a long-lived connection. CometD performs the handshake, connection, and reconnection requests. Your custom code performs other operations, such as subscription. The client reconnects for the following conditions.

After Receiving Events

If the client receives events, the client must reconnect immediately using CometD to receive the next set of events. If the reconnection doesn't occur within 40 seconds, the server expires the subscription, and the connection closes. The client must start over with a handshake and subscribe again using your custom /meta/handshake channel listener.

When No Events Are Received

If no events are generated while the client is waiting and the server closes the connection, CometD must reconnect within 110 seconds. The Bayeux server sends a response to the client that contains the reconnect deadline of 110 seconds in the advice field. If the client doesn't reconnect within the expected time, the server removes the client's CometD session.

After a Network Failure

If a long-lived connection is lost due to unexpected network disruption, CometD attempts to reconnect. If this reconnection is successful, clients must resubscribe, because this new connection has gone through a rehandshake that removes previous subscribers. Clients can listen to the /meta/handshake meta channel to receive notifications when a connection is lost and reestablished. For more information, see [Short Network Failures](https://docs.cometd.org/current/reference/#_short_network_failures "HTML (New Window)") and [Long Network Failures or Server Failures](https://docs.cometd.org/current/reference/#_long_network_failures_or_server_failures "HTML (New Window)") in the [CometD Reference Documentation](https://docs.cometd.org/current/reference/ "HTML (New Window)").

After a Disconnect Message is Received

If the client disconnects the subscription, it receives a response on the /meta/disconnect channel. The response includes the successful field with a value of true or false, which indicates whether the client request was successfully processed or not. The client can add a listener to the /meta/disconnect channel to process the response.

In Streaming API version 64.0 and later, the server can sometimes send a disconnect message to the client. The disconnects, which happen more frequently when using a Hyperforce instance, are due to infrastructure auto-scaling. To keep the subscription active, the client must reconnect to the Streaming API endpoint. To reconnect, the client must add a listener for the /meta/disconnect channel and reconnect after receiving a disconnect message. For details, see the [CometD reference documentation](https://docs.cometd.org/current/reference/).

After Invalid Authentication

Client authentication can sometimes become invalid, for example, when the OAuth token is revoked or the Salesforce session is invalidated by a Salesforce admin. Streaming API regularly validates the OAuth token or session ID while the client is connected. If client authentication is not valid, the client is notified with the 401::Authentication invalid error and an advice field containing reconnect=none. After receiving the error notification in the channel listener, the client must reauthenticate and reconnect to receive new events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

Invalidated client authentication doesn’t include Salesforce session expiration. The Salesforce session never expires in a CometD client. Salesforce keeps extending the timeout interval as long as the client stays connected.

This diagram shows how a CometD client connects to Salesforce after it encounters an authentication error.

![Client connection sequence to Salesforce with error handling using CometD](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_cometd_connection_sequence_reauth.png&folder=api_streaming)

For details about these steps, see [Bayeux Protocol, CometD, and Long Polling](atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm "Streaming API uses the Bayeux protocol and CometD for long polling.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The maximum size of the HTTP request post body that the server can accept from the client is 32,768 bytes, for example, when you call the CometD subscribe or connect methods. If the request message exceeds this size, the following error is returned in the response: 413 Maximum Request Size Exceeded. To keep requests within the size limit, avoid sending multiple messages in a single request.

#### See Also

-   [Handling Streaming API Errors](atlas.en-us.api_streaming.meta/api_streaming/streaming_handling_errors.htm "Learn about some common errors and how to handle them in your streaming client.")

-   [Streaming API Error Codes](atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm "Learn about the errors that Streaming API can return to troubleshoot your streaming client.")

## Related Topics

- Bayeux Protocol, CometD, and Long Polling (atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm)
- Handling Streaming API Errors (atlas.en-us.api_streaming.meta/api_streaming/streaming_handling_errors.htm)
- Streaming API Error Codes (atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm)
