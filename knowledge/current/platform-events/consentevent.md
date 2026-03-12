---
title: "ConsentEvent"
domain: platform-events
topic: consentevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.435Z
estimatedTokens: 628
keywords: [ConsentEvent, Notifies, subscribers, changes, consent, contact, core, objects, API, version, 50.0, later, Calls, Subscription, Channel]
---

# ConsentEvent

> Notifies subscribers of changes to consent fields or contact
			information on all core objects. This object is available in API version 50.0 and
		later.

# ConsentEvent

Notifies subscribers of changes to consent fields or contact information on all core objects. This object is available in API version 50.0 and later.

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

/event/ConsentEvent

## Special Access Rules

Users with ReadAllData or PrivacyDataAccess permissions have read access.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| AssociatedIds | TypestringPropertiesNillableDescriptionA list of IDs associated with the changed record.Possible IDs are:globalPartyIdindividualleadcontactpersonAccountusercontactPointcontactPointConsentcontactPointTypeConsent |
| ChangeInitiator | TypestringPropertiesNillableDescriptionThe ID of the user who changed the record. |
| ChangeTimestamp | TypedateTimePropertiesNillableDescriptionIndicates the date and time the change event occurred. |
| ChangeType | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates the type of change made to the record.Possible values are:CreateDeleteUndeleteUnknownUpdate |
| ConsentCaptureSource | TypestringPropertiesNillableDescriptionIndicates how consent was captured. For example, if the ConsentCaptureType is a website, the ConsentCaptureSource is the website URL. |
| ConsentCaptureType | TypestringPropertiesNillableDescriptionIndicates the type of source consent was captured through. For example, a website or online form. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| NewValues | TypestringPropertiesNillableDescriptionIndicates new values that were added to the object, if relevant. |
| ObjectName | TypestringPropertiesNillableDescriptionThe name of the object for which the change event was captured. |
| RecordId | TypestringPropertiesNillableDescriptionThe ID of the record that was changed. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
