---
title: "ExtlRecShrEvent"
domain: platform-events
topic: extlrecshrevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.559Z
estimatedTokens: 591
keywords: [ExtlRecShrEvent, Tracks, record, data, published, vendor’s, Salesforce, org, connected, partner’s, Partner, Connect, API, version, 62.0]
---

# ExtlRecShrEvent

> Tracks the record data published from a
			vendor’s
			Salesforce org to a connected
			partner’s
			org for Partner Connect. This object is available in API version 62.0 and
		later.

# ExtlRecShrEvent

Tracks the record data published from a vendor’s Salesforce org to a connected partner’s org for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/ExtlRecShrEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

To see this object, enable Partner Connect in Setup. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| EventOrderInBatch | TypeintPropertiesCreate, NillableDescriptionOrder number of the external record share event in the export batch. |
| EventType | TypepicklistPropertiesCreate, Restricted picklistDescriptionEvent type of the external record sharing event.Possible values are:RecordDataExport |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ObjectData | TypetextareaPropertiesCreate, NillableDescriptionFields and field values of records included in this export. |
| ObjectType | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionObject type of the exported records.Possible values are:ExtlRecShrLeadExtlRecShrOpportunityLeadOpportunity |
| PublishBatch | TypestringPropertiesCreate, NillableDescriptionID of the batch being published. |
| PublishBatchSize | TypeintPropertiesCreate, NillableDescriptionNumber of records for all events in the batch being published. |
| PublishingSystem | TypestringPropertiesCreate, NillableDescriptionID of the system exporting the records. If the system is a Salesforce org, this value is the org ID. The vendor system is always a Salesforce org. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
