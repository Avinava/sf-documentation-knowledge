---
title: "RespondWhen"
domain: mc-apis
topic: respondwhen
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.320Z
estimatedTokens: 237
keywords: [RespondWhen, via, email, HTTP, post, asynchronous, call, send, separate, URLs, different, actions, necessary]
---

# RespondWhen

> The RespondWhen object sends a response via email or HTTP post for an asynchronous call. You can send to separate URLs for different actions as necessary.

# RespondWhen

The RespondWhen object sends a response via email or HTTP post for an asynchronous call. You can send to separate URLs for different actions as necessary.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Always | Enumeration | Always send the response. The response sends whether the processing completes successfully or with an error status. |
| Never | Enumeration | Specifies that a response is never sent for an asynchronous process. |
| OnCallComplete | Enumeration | Specifies that a response is sent when an asynchronous call is complete. |
| OnConversationComplete | Enumeration | Specifies that a response is sent when an asynchronous conversation is complete. |
| OnConversationError | Enumeration | Specifies that a response is sent when an asynchronous conversation returns an error. |
| OnError | Enumeration | Specifies that a response is sent when an asynchronous process returns an error. |
