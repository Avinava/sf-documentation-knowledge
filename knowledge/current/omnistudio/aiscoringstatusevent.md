---
title: "AIScoringStatusEvent"
domain: omnistudio
topic: aiscoringstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.328Z
estimatedTokens: 539
keywords: [AIScoringStatusEvent, Notifies, subscribers, scoring, job, started, services, data, release, version, connect, aiaccelerator, predictions, REST, request, executed, asynchronous, mode, complete., API]
---

# AIScoringStatusEvent

> Notifies subscribers when the scoring job started by the
			/services/data/{release version}/connect/aiaccelerator/predictions REST request,
			executed in asynchronous mode, is complete. This object is available in API version
		55.0 and later.

# AIScoringStatusEvent

Notifies subscribers when the scoring job started by the /services/data/{release version}/connect/aiaccelerator/predictions REST request, executed in asynchronous mode, is complete. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Streaming API (CometD) |  |

## Streaming API Subscription Channel

/event/AIScoringStatusEvent

## Special Access Rules

The AIScoringStatusEvent object is available only when AI Accelerator and Communications Cloud are enabled. The Salesforce org must also have the CRM Plus and CRM for Comms licenses enabled.

| Field | Details |
| --- | --- |
| AIScoringRequestResponse | TypestringPropertiesCreateDescriptionA unique ID of the scoring request. |
| EventUuid | TypestringPropertiesCreateDescriptionRequired. A universally unique identifier (UUID) that identifies a platform event message. |
| PrimaryResponseRecordList | TypetextareaPropertiesNillableDescriptionThe list of the primary object’s records that store the scoring response based on the specified field mapping. |
| ReplayId | TypestringPropertiesCreate, NillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SecondaryResponseRecordList | TypetextareaPropertiesCreate, NillableDescriptionThe list of the secondary object’s records that store the scoring response based on the specified field mapping. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Restricted picklistDescriptionRequired. Specifies the status of the scoring request response.Possible values are:FAILUREIN_PROGRESSNEWQUEUEDSUCCESSThe default value is NEW. |
| StatusDescription | TypestringPropertiesCreate, NillableDescriptionThe message with the details of the request’s latest status. |
