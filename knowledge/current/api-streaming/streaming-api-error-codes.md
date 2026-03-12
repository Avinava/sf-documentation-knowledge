---
title: "Streaming API Error Codes"
domain: api-streaming
topic: streaming-api-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.478Z
estimatedTokens: 1868
keywords: [Streaming, API, Error, Codes, errors, troubleshoot, client, Generic, Streaming-only]
---

# Streaming API Error Codes

> Learn about the errors that Streaming API can return to troubleshoot your streaming
    client.

# Streaming API Error Codes

Learn about the errors that Streaming API can return to troubleshoot your streaming client.

| Error Code | Error Message | Error Description |
| --- | --- | --- |
| 400 | API version in the URI is mandatory. URI format: '/cometd/66.0' | The API version information isn’t in the URI. Include the API version at the end of the URI. For example, /cometd/66.0. |
| 400 | Unsupported API version. Only API versions '37.0' and later are supported. URI format: '/cometd/66.0' | The supplied API version in the URI is not supported. Only API version 37.0 and later are supported. The URI format is /cometd/xx.x. |
| 400 | Invalid connection type {connection_type} | An invalid transport type was used. Only long-polling is supported, but another connection type was requested, such as WebSocket or callback long-polling. |
| 400 | The channel you requested to subscribe to doesn’t exist {channel_name} | The streaming channel requested to subscribe to doesn’t exist. Ensure that the channel is created before subscribing. |
| 400 | Channel name not specified | The channel name wasn’t specified. Specify a valid channel name to subscribe to. |
| 400 | Channel subscriptions must start with a leading '/' | The channel name format is invalid. Channel names must start with a leading slash (/). |
| 400 | Query fields {query_fields} do not exist on the topic entity | The supplied query fields don’t exist on the Salesforce object specified in the PushTopic. |
| 400 | Client client_name has established a session, but no cookie_name cookie present | No cookie was found after the client established a session. Ensure that the streaming client accepts cookies. |
| 400 | The replayId {replay_id} you provided was invalid. Please provide a valid ID, -2 to replay all events, or -1 to replay only new events. | The supplied replay ID is invalid. Ensure that the replay ID corresponds to an event that is within the retention window and that has not been deleted. Alternatively, provide -2 to replay all events or -1 to replay only new events. |
| 400 | Authenticated user id does not match the session's user id | The CometD session in the browser is associated with more than on user. This error can occur if you're using the Lightning Emp API component and logged in as another user using system admin login as feature. See Log In as Another User in Salesforce Help. For more details, see this knowledge article. |
| 401 | Authentication invalid. | The supplied authentication token or session ID is not valid. This error is returned on the /meta/handshake or the /meta/connect channel. On the /meta/handshake channel, the error is in the failureReason response field, which is nested under the ext/sfdc field. On the /meta/connect channel, the error is in the error field. |
| 401 | Request requires authentication. | No authentication token or session ID was supplied in the request header. The client must send authentication information. This error is returned in the handshake error response (on the /meta/handshake channel) in the failureReason response field, which is nested under the ext/sfdc field. The error field in the response also contains the following error: 403::Handshake denied. |
| 403 | Cannot create channel {channel_name} | The subscription channel can’t be created, which can be due to insufficient permissions. |
| 403 | Subscriber does not have access to the entity in this topic | The subscriber doesn’t have access to the Salesforce object in the PushTopic. |
| 403 | Subscriber does not have access to all fields referenced in the where clause of the PushTopic | The subscriber doesn’t have access to all fields referenced in the WHERE clause of the PushTopic. |
| 403 | Handshake denied | The handshake request was denied. The cause of this error is provided in the failureReason field in the response, which is nested under the ext/sfdc field. |
| 403 | Client has not completed handshake | The client has not completed a handshake. The client must perform a handshake before subscribing. |
| 403 | Organization concurrent user limit exceeded | The maximum number of concurrent clients across all channels has been exceeded. This error applies to any type of event, including PushTopic, generic, platform, and Change Data Capture events. |
| 403 | Organization total events daily limit exceeded | The maximum number of delivered event notifications within a 24-hour period to all CometD clients has been exceeded. This error applies to any type of event, including PushTopic, generic, platform, and Change Data Capture events. |
| 403 | Restricted channel | The user doesn’t have the required permissions to subscribe to the streaming channel. |
| 403 | User not enabled for streaming | The user doesn’t have read permission on the PushTopic. |
| 403 | User not allowed to subscribe CDC without View All Data permissions | The user must have the View All Data permission to subscribe to Change Data Capture. |
| 403 | Subscription limit exceeded for this topic | The maximum number of concurrent clients per topic for PushTopic and generic events has been exceeded. This error doesn’t apply to platform events. |
| 403 | Unknown client | The server deleted the client CometD session due to a timeout, which can be caused by a network failure or by Hyperforce’s auto-scaling processes as part of elastic computing. The client must perform a new handshake and reconnect. |
| 403 | To protect all customers from excessive use and Denial of Service attacks, we limit the number of simultaneous connections per server. Your request has been denied because this limit has been exceeded. Please try your request again later. | Salesforce app servers enforce a limit on simultaneous connections per server to protect from excessive use and denial of service attacks. Your request has been denied because this limit has been exceeded. Try your request again later. This error is returned in a handshake response (on the /meta/handshake channel) in the failureReason response field, which is nested under the ext/sfdc field. The response also contains an error in the error field: 403::Handshake denied. |
| 413 | Maximum Request Size Exceeded | The maximum request size of 32,768 bytes has been exceeded. |
| 503 | Server is too busy. Please try your request again later. | The server can’t process your request because it is too busy. Try your request again later, or try to execute your requests serially. This error is returned in the failureReason response field, which is nested in the ext/sfdc field on channels, such as the /meta/handshake, /meta/connect, or /meta/subscribe channels. The error field in the response contains another error alongside this error. |

## Generic Streaming-only Errors

The following errors are returned for generic streaming events only.

| Error Code | Error Message | Error Description |
| --- | --- | --- |
| 403 | Unable to create channel dynamically, maximum channel limit has been exceeded | The maximum number of generic streaming channels has been exceeded. |
| 403 | No access on channel | The generic streaming channel can’t be accessed because the user doesn’t have permissions on the StreamingChannel object. |
| 404 | channel names may not vary only by case | The generic streaming channel exists with a different case. Generic streaming channel names are case-sensitive. |
| 404 | Unknown channel | The generic streaming channel isn’t found or can’t be created dynamically. |
