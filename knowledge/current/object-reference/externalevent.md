---
title: "ExternalEvent"
domain: object-reference
topic: externalevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.932Z
estimatedTokens: 587
keywords: [ExternalEvent, Holds, native, iOS, Android, calendar, event, Salesforce, Today, feature, mobile, app, API, version, 35.0]
---

# ExternalEvent

> Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

# ExternalEvent

Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The Salesforce Today app is available in Salesforce for Android and Salesforce for iOS. It’s not available in the Salesforce desktop site. Access to Today is available only if you grant Calendar permission to the Salesforce mobile app.

## Fields

| Field | Details |
| --- | --- |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external event. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe site where the external event takes place. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the external event’s organizer. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the external event. |
| Time | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time the external event is held. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the external event. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExternalEventChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- ExternalEventChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
