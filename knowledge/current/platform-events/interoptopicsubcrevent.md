---
title: "InteropTopicSubcrEvent"
domain: platform-events
topic: interoptopicsubcrevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.721Z
estimatedTokens: 449
keywords: [InteropTopicSubcrEvent, structure, interoperability, topic, subscription, event, that's, sent, publisher, Mulesoft, API, version, 64.0, later, Calls]
---

# InteropTopicSubcrEvent

> Represents the structure of the interoperability topic subscription event
         that's sent from the publisher to Mulesoft. This object is available in API version
      64.0 and later.

# InteropTopicSubcrEvent

Represents the structure of the interoperability topic subscription event that's sent from the publisher to Mulesoft. This object is available in API version 64.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| FilterParameterInfo | TypetextareaPropertiesCreate, NillableDescriptionThe filter parameter specified for the associated interoperability topic. |
| InteropTopicId | TypereferencePropertiesCreateDescriptionThe associated interoperability topic.This field is a relationship field.Relationship NameInteropTopicRefers ToInteropTopic |
| InteropTopicSubscriptionId | TypereferencePropertiesCreate, NillableDescriptionThe associated interoperability topic subscription.This field is a relationship field.Relationship NameInteropTopicSubscriptionRefers ToInteropTopicSubscription |
| NotificationPayload | TypetextareaPropertiesCreate, NillableDescriptionThe payload sent with the notification. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ResourceIdentifier | TypestringPropertiesCreateDescriptionThe identifier of the resource related to the interoperability topic subscription event. |
| ResourceName | TypestringPropertiesCreateDescriptionThe name of the resource related to the interoperability topic subscription event. |
