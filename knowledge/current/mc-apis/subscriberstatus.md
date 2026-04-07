---
title: "SubscriberStatus"
domain: mc-apis
topic: subscriberstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.538Z
estimatedTokens: 307
keywords: [SubscriberStatus, status, subscriber]
---

> The SubscriberStatus object specifies the status of a subscriber.

# SubscriberStatus

The SubscriberStatus object specifies the status of a subscriber.

You can continue to send emails to a subscriber with a Bounced status until the subscriber changes to a Held status.

If a subscriber is being retrieved from a list, a Deleted status indicates that they have been deleted from the list. If a subscriber is being retrieved from the system and not a particular list, a Deleted status indicates that they have been deleted from the system.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Active | Enumeration | Indicates a subscriber can be sent emails. Allow a TriggeredSendDefinition to receive and send TriggeredSends. |
| Bounced | Enumeration | Specifies if email to a subscriber has returned with a bounce notification. |
| Deleted | Enumeration | SubscriberStatus: The subscriber has been deleted. TriggeredSendStatusEnum: SendDefinitionStatusEnum: |
| Held | Enumeration | Specifies if a subscriber has a status of held. The triggered send is held if three or more sequential message attempts bounced and the first and last sequential bounces were more than 14 days apart. |
| Unsubscribed | Enumeration | Indicates a subscriber has unsubscribed from a list. |
