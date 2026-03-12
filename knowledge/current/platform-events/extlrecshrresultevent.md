---
title: "ExtlRecShrResultEvent"
domain: platform-events
topic: extlrecshrresultevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.564Z
estimatedTokens: 542
keywords: [ExtlRecShrResultEvent, Tracks, data, result, export, external, record, share, published, vendor, partner, system, Connect, API, version]
---

# ExtlRecShrResultEvent

> Tracks the data and the result of the export or update of the
			external
			record share published between a vendor and partner system for
			Partner Connect. This object is available in API version 62.0 and
		later.

# ExtlRecShrResultEvent

Tracks the data and the result of the export or update of the external record share published between a vendor and partner system for Partner Connect. This object is available in API version 62.0 and later.

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

/event/ExtlRecShrResultEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors in Setup. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| EventType | TypepicklistPropertiesCreate, Restricted picklistDescriptionEvent type of the external record share update or the result of an update or export.Possible values are:RecordDataResultRecordDataUpdate |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ObjectData | TypetextareaPropertiesCreate, NillableDescriptionData of fields and field values of the records included in this update or result of this update or export. |
| PublishingSystem | TypestringPropertiesCreate, NillableDescriptionID of the system publishing the record update or result of an update or export. If the system is a Salesforce org, this value is the org ID. The vendor system is always a Salesforce org. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
