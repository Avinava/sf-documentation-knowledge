---
title: "AsgnRsrcApptSchdEvent"
domain: platform-events
topic: asgnrsrcapptschdevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.298Z
estimatedTokens: 442
keywords: [AsgnRsrcApptSchdEvent, assigned, resources, part, various, platform, events, included, streamed, notification, received, channels, parent, can’t, subscribe]
---

# AsgnRsrcApptSchdEvent

> Represents the assigned resources that are part of various platform events.
      This object is included in a streamed notification received on the channels for the parent
      platform events. You can’t subscribe to the AsgnRsrcApptSchdEvent channel directly. This
    object is available in API version 50.0 and later.

# AsgnRsrcApptSchdEvent

Represents the assigned resources that are part of various platform events. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the AsgnRsrcApptSchdEvent channel directly. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects()

## Parent Platform Events

-   AppointmentSchedulingEvent
-   ServiceAppointmentEvent

## Fields

| Field | Details |
| --- | --- |
| AssignedResourceId | TypestringPropertiesNillableDescriptionID of the assigned resource. |
| ChangedFields | TypecomplexvaluePropertiesNillableDescriptionA list of fields that changed. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| IsPrimaryResource | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the resource is primary. |
| IsRequiredResource | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the resource is required. |
| ServiceResourceId | TypestringPropertiesNillableDescriptionID of the service resource assigned to the event. |
| ServiceResourceUserEmail | TypestringPropertiesNillableDescriptionEmail of the service resource user assigned to the event. |
| ServiceResourceUserId | TypestringPropertiesNillableDescriptionID of the user record associated with the service resource assigned to the event. |
| ServiceResourceUserName | TypestringPropertiesNillableDescriptionUsername as per the user record associated with the service resource assigned to the event. |

## Example

This example shows the assigned resources associated with the event.

```

```

## Code Examples

```
{
  "IsPrimaryResource": true,
  "ServiceResourceUserName": "Rachel Adams",
  "ServiceResourceUserId": "005xx000001X7dl",
  "AssignedResourceId": "03rxx0000004gLc",
  "ServiceResourceId": "0Hnxx0000004C92",
  "ServiceResourceUserEmail": "ra@example.com",
  "IsRequiredResource": true
}
```
