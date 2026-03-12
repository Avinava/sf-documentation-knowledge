---
title: "CareProviderFacilitySpecialty"
domain: psc-api
topic: careproviderfacilityspecialty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.752Z
estimatedTokens: 1330
keywords: [CareProviderFacilitySpecialty, specialties, practitioner, location, physician, board-certified, spine, neuro, may, provide, services, another, Calls, Special, Access]
---

# CareProviderFacilitySpecialty

> Represents all the specialties that the practitioner provides at a given
         location. For example, a physician who is board-certified in both spine and neuro may
         provide spine services at one location and neuro services at another.

# CareProviderFacilitySpecialty

Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this record is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this record is no longer effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| IsPrimarySpecialty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this specialty is the practitioner's primary specialty at this facility, or the facility's primary specialty. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the specialty provided at this provider facility. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner facility associated with this provider facility specialty record. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| SpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the specialty associated with this provider facility specialty record |
| SpecialtyRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRole of the specialty for the provider or practitioner. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProviderFacilitySpecialtyChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareProviderFacilitySpecialtyFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProviderFacilitySpecialtyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareProviderFacilitySpecialtyOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareProviderFacilitySpecialtyShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareProviderFacilitySpecialtyChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- CareProviderFacilitySpecialtyFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CareProviderFacilitySpecialtyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CareProviderFacilitySpecialtyOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- CareProviderFacilitySpecialtyShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
