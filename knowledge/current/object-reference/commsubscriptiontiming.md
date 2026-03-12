---
title: "CommSubscriptionTiming"
domain: object-reference
topic: commsubscriptiontiming
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.715Z
estimatedTokens: 996
keywords: [CommSubscriptionTiming, customer's, timing, preferences, receiving, communication, subscription, API, version, 48.0, later, Calls, Associated, Objects]
---

# CommSubscriptionTiming

> Represents a customer's timing preferences for receiving a
      communication subscription. This object is available in API version 48.0 and
    later.

# CommSubscriptionTiming

Represents a customer's timing preferences for receiving a communication subscription. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommSubscriptionConsentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the associated communication subscription consent record.This is a relationship field.Relationship NameCommSubscriptionConsentRelationship TypeLookupRefers ToCommSubscriptionConsent |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. Name of the communication subscription timing record. |
| Offset | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of time before or after an event or the specific day of the week to communicate with the contact point. Set the unit of time in the Unit field.For example, if you set Unit as Week and Offset as -4, communicate with the contact point four weeks before the event. If you set Offset as 4, communicate with the contact point four weeks after the event. |
| PreferredTimeEnd | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd of the preferred time span in which to reach the customer. |
| PreferredTimeStart | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart of the preferred time span in which to reach the customer. |
| PreferredTimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTime zone of the preferred time span. |
| Unit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of time that works with the Offset field to determine the communication timing.Possible values are:DayDayOfWeekHourMonthWeek |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CommSubscriptionTimingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[CommSubscriptionTimingFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommSubscriptionTimingHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CommSubscriptionTimingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommSubscriptionTimingFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommSubscriptionTimingHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
