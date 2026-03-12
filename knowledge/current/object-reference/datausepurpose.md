---
title: "DataUsePurpose"
domain: object-reference
topic: datausepurpose
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.097Z
estimatedTokens: 1059
keywords: [DataUsePurpose, reason, contacting, prospect, customer, billing, marketing, surveys, API, version, 45.0, later, Calls, Special, Access]
---

# DataUsePurpose

> Represents the reason for contacting a prospect or customer, such as
			for billing, marketing, or surveys. This object is available in API version 45.0
		and later.

# DataUsePurpose

Represents the reason for contacting a prospect or customer, such as for billing, marketing, or surveys. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Data Protection and Privacy is enabled.

## Fields

| Field Name | Details |
| --- | --- |
| CanDataSubjectOptOut | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the customer can decline contact for the described purpose. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the purpose for contacting a customer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LegalBasisId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the legal basis record associated with the data use purpose.This is a relationship field.Relationship NameLegalBasisRelationship TypeLookupRefers ToDataUseLegalBasis |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Identifies the reason for contacting a customer. For example, billing or marketing. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PurposeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of an object containing data specific to the data use purpose.This is a polymorphic relationship field.Relationship NamePurposeRelationship TypeLookupRefers ToAsset, CareProgram, CareRegisteredDevice, or Product2 |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[DataUsePurposeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[DataUsePurposeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DataUsePurposeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DataUsePurposeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DataUsePurposeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- DataUsePurposeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- DataUsePurposeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DataUsePurposeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
