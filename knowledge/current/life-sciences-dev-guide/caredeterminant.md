---
title: "CareDeterminant"
domain: life-sciences-dev-guide
topic: caredeterminant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.244Z
estimatedTokens: 852
keywords: [CareDeterminant, determinants, health, patient, availability, safe, housing, adequate, employment, local, food, markets, API, version, 45.0]
---

# CareDeterminant

> Represents the determinants of health for a patient such as
			availability of safe housing, adequate employment, or local food markets. Available
		in API version 45.0 and later.

# CareDeterminant

Represents the determinants of health for a patient such as availability of safe housing, adequate employment, or local food markets. Available in API version 45.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field Name | Details |
| --- | --- |
| CareDeterminantTypeId | TypereferencePropertiesFilter, Group, SortDescriptionCare determinant for the patient or member.This is a relationship field.Relationship NameCareDeterminantTypeRelationship TypeLookupRefers ToCareDeterminantType |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this care determinant is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the care determinant. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatientId | TypereferencePropertiesFilter, Group, SortDescriptionIdentifier for the patient or member.This is a relationship field.Relationship NamePatientRelationship TypeLookupRefers ToAccount |
| Priority | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionPriority of the determinant such as Low or High. |
| SurveyResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSurvey response related to the determinant. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareDeterminantChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 58.0)

Change events are available for the object.

[CareDeterminantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareDeterminantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareDeterminantOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareDeterminantShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
