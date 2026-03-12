---
title: "RegulatoryCode"
domain: psc-api
topic: regulatorycode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.466Z
estimatedTokens: 856
keywords: [RegulatoryCode, regulation, code, enforced, regulatory, API, version, 49.0, later, Calls, Associated, Objects]
---

# RegulatoryCode

> Represents the regulation code enforced by the regulatory body. This object is available in API version 49.0 and later.

# RegulatoryCode

Represents the regulation code enforced by the regulatory body. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the regulatory code. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate from which the code is effective. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate till which the code is effective. |
| ExternalUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of an external reference for the regulatory code.Available in API version 61.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the code is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the code. |
| ParentCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent code. |
| RegulatoryAuthorityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the authority that governs the code. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSubject of the code. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the code.Possible values are:ChapterSectionTitle |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RegulatoryCodeChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 58.0)

Change events are available for the object.

[RegulatoryCodeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[RegulatoryCodeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- RegulatoryCodeChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- RegulatoryCodeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryCodeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
