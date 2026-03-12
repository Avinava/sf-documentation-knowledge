---
title: "Accreditation"
domain: psc-api
topic: accreditation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.647Z
estimatedTokens: 1343
keywords: [Accreditation, professional, accreditations, facility, joint, commission, accredits, general, acute, care, hospital, Calls, Associated, Objects]
---

# Accreditation

> Represents the professional accreditations of a facility. For
			example, a joint commission accredits a facility as a general acute care
		hospital.

# Accreditation

Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare facility (Account) that this accreditation is associated with. |
| AccreditationRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRating system used by the accrediting body. |
| AccreditingBody | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization that provided the accreditation. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this accreditation is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this accreditation is no longer effective. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare provider that this accreditation is associated with.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| LastFullSurveyDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last full survey completed by accrediting body. |
| LastOnsiteSurveyDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate that accrediting body was last onsite. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the accreditation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner that this accreditation is associated with. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccreditation status. |
| SubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubtype of the accreditation. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of accreditation. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AccreditationChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[AccreditationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccreditationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AccreditationOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AccreditationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AccreditationChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- AccreditationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- AccreditationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- AccreditationOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- AccreditationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
