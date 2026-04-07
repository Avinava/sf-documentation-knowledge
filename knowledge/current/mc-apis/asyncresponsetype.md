---
title: "AsyncResponseType"
domain: mc-apis
topic: asyncresponsetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.385Z
estimatedTokens: 155
keywords: [AsyncResponseType, async]
---

> The AsyncResponseType object specifies type of async response for a given async request.

# AsyncResponseType

The AsyncResponseType object specifies type of async response for a given async request.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| email | Enumeration | Default email address for object. Indicates if subscriber information can be used for email sends. |
| FTP | Enumeration | Reserved for future use. |
| HTTPPost | Enumeration | Indicates that the response is sent using the Post method of the HTTP protocol to the URL specified in the call when the asynchronous API call completes processing. |
| None | Enumeration | Default response type for AsyncResponseType. |
