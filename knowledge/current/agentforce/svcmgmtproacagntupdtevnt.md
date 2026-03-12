---
title: "SvcMgmtProacAgntUpdtEvnt"
domain: agentforce
topic: svcmgmtproacagntupdtevnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.176Z
estimatedTokens: 460
keywords: [SvcMgmtProacAgntUpdtEvnt, event, updated, proactive, agent, action, record, user, refreshes, stores, source, triggered, message, detals, stored]
---

# SvcMgmtProacAgntUpdtEvnt

> Represents an event that gets the updated details from the response of a
         proactive agent action and sends the updated details to be displayed on a record page when
         the user refreshes the action. The event stores details such as the source record for which
         the action is triggered, the message type for which detals are stored, and the status of
         the response. This object is available in API version 65.0 and later.

# SvcMgmtProacAgntUpdtEvnt

Represents an event that gets the updated details from the response of a proactive agent action and sends the updated details to be displayed on a record page when the user refreshes the action. The event stores details such as the source record for which the action is triggered, the message type for which detals are stored, and the status of the response. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Streaming API (CometD) |  |

## Special Access Rules

The SvcMgmtProacAgntUpdtEvnt object is available only when Incident Actor Agent and Service Cloud are enabled.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| MessageType | TypestringPropertiesNillableDescriptionRequired. The type of message associated with proactive agents for which details are shared by the event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ResponseStatus | TypepicklistPropertiesNillable, Restricted picklistDescriptionRequired. The status of the response received by the event from a proactive agent.Possible values are:FailureInProgress—In ProgressSuccess |
| SourceRecord | TypestringPropertiesNillableDescriptionRequired. The record for which a proactive agent is triggered. |
