---
title: "ConferenceNumber"
domain: object-reference
topic: conferencenumber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.738Z
estimatedTokens: 724
keywords: [ConferenceNumber, Holds, telephone, number, external, event, shown, Salesforce, Today, feature, mobile, app, API, version, 35.0]
---

# ConferenceNumber

> Holds the telephone number for an external event shown in the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

# ConferenceNumber

Holds the telephone number for an external event shown in the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The Salesforce Today app is available in Salesforce for Android and Salesforce for iOS. It’s not available in the Salesforce desktop site. Access to Today is available only if you grant Calendar permission to the Salesforce mobile app.

## Fields

| Field | Details |
| --- | --- |
| AccessCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the access code to enter in order to validate identity and join the call. |
| ExternalEventId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external event associated with the conference number.This field is a relationship field.Relationship NameExternalEventRefers ToExternalEvent |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReturns true if the conference number is locked, or false if it’s not.The default value is false. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the conference number. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortIndicates whether the conference number can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the conference call’s organizer. |
| Number | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number used to connect to the conference call. |
| Vendor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vendor or company associated with the conference number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ConferenceNumberChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

## Related Topics

- ConferenceNumberChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
