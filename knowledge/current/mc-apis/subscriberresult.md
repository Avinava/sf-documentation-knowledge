---
title: "SubscriberResult"
domain: mc-apis
topic: subscriberresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.295Z
estimatedTokens: 152
keywords: [SubscriberResult, failure, send, specific, subscriber]
---

# SubscriberResult

> The SubscriberResult object contains information on failure of the send for a specific subscriber.

# SubscriberResult

The SubscriberResult object contains information on failure of the send for a specific subscriber.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ErrorCode | xsd:string | Identifies the error of an API request via a numeric code. |
| ErrorCodeID | xsd:int | Identifies the error code of an API request via a numeric code. |
| ErrorDescription | xsd:string | Contains a human-readable description of the error that occurred |
| Ordinal | xsd:int | Indicates position of object within an array |
| Subscriber | Subscriber | Identifies subscriber used in call. |
