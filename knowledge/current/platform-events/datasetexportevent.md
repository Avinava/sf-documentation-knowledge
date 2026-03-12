---
title: "DatasetExportEvent"
domain: platform-events
topic: datasetexportevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.539Z
estimatedTokens: 494
keywords: [DatasetExportEvent, Notifies, subscribers, export, Analytics, dataset, API, version, 41.0, later, Calls, Subscription, Channel, Special, Access]
---

# DatasetExportEvent

> Notifies subscribers on the export of an Analytics dataset. This
		object is available in API version 41.0 and later.

# DatasetExportEvent

Notifies subscribers on the export of an Analytics dataset. This object is available in API version 41.0 and later.

## Supported Calls

create(), describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/DatasetExportEvent

## Special Access Rules

DatasetExportEvent is available only if the CRM Analytics license is enabled.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| DataflowInstanceId | TypestringPropertiesCreate, NillableDescriptionThe ID of the dataflow instance for the dataset. |
| DataflowExportId | TypestringPropertiesCreate, NillableDescriptionThe ID of the dataset export. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| Message | TypestringPropertiesCreate, NillableDescriptionThe message for the dataset export. |
| Owner | TypestringPropertiesCreate, NillableDescriptionThe owner of the dataset export. |
| PublisherInfo | TypestringPropertiesCreate, NillableDescriptionThe publisher information for the dataset export. |
| PublisherType | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionThe publisher type for the dataset export. Values include:EinsteinDiscovery |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Status | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionThe status the dataset export. Values include:CancelledCompletedFailedInProgessNew |
