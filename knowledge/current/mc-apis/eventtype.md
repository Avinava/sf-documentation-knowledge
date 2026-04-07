---
title: "EventType"
domain: mc-apis
topic: eventtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.741Z
estimatedTokens: 371
keywords: [EventType, event, recorded, distinguish, hard, soft, bounce, retrieving, BounceEvent]
---

# EventType

> The EventType object specifies the type of event that is recorded. Use this object to distinguish between hard, soft, and other bounce types when retrieving a BounceEvent.

# EventType

The EventType object specifies the type of event that is recorded. Use this object to distinguish between hard, soft, and other bounce types when retrieving a BounceEvent.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Click | Enumeration | The event associated with a subscriber clicking on a link. |
| DeliveredEvent | Enumeration | Indicates a message was delivered successfully. |
| ForwardedEmail | Enumeration | Indicates that a subscriber forwarded the message using the Forward To A Friend feature. |
| ForwardedEmailOptIn | Enumeration | Tracking event signifying an opt-in from a subscriber-forwarded email via the Forward To A Friend feature. |
| HardBounce | Enumeration | Indicates the message sent to a subscriber encountered a hard bounce. |
| NotSent | Enumeration | Indicates a message was not sent to a subscriber. |
| Open | Enumeration | Indicates a message was opened by a subscriber. |
| OtherBounce | Enumeration | Indicates a message sent to a subscriber encountered an Other-type bounce. |
| Sent | Enumeration | Indicates number of messages sent. Indicates the message was sent to a subscriber. |
| SoftBounce | Enumeration | Indicates the message sent to a subscriber encountered a soft bounce. |
| Survey | Enumeration | Indicates a subscriber answered a survey question included in a message. |
| Unsubscribe | Enumeration | Indicates a subscriber unsubscribed from further communication via a link in a message. |
