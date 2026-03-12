---
title: "ExternalEventMapping"
domain: object-reference
topic: externaleventmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.939Z
estimatedTokens: 548
keywords: [ExternalEventMapping, Holds, native, iOS, Android, calendar, event, Salesforce, Today, feature, mobile, app, API, version, 35.0]
---

# ExternalEventMapping

> Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

# ExternalEventMapping

Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The Salesforce Today app is available in Salesforce for Android and Salesforce for iOS. It’s not available in the Salesforce desktop site. Access to Today is available only if you grant Calendar permission to the Salesforce mobile app.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the external event ends. |
| EventId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Salesforce event created by the external event.This field is a relationship field.Relationship NameEventRefers ToEvent |
| ExternalId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the external event. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReturns true if the external event is locked, or false if it’s not.The default value is false. |
| IsRecurring | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the external event is recurring (true) or not (fales).The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortIndicates whether the external event can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the external event’s organizer. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the creator of the external event.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the external event begins. |
