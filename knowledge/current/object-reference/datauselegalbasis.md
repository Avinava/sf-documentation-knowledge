---
title: "DataUseLegalBasis"
domain: object-reference
topic: datauselegalbasis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.090Z
estimatedTokens: 894
keywords: [DataUseLegalBasis, legal, basis, contacting, customer, billing, contract, API, version, 45.0, later, Calls, Special, Access, Rules]
---

# DataUseLegalBasis

> Represents the legal basis for contacting a customer, such as billing
			or contract. This object is available in API version 45.0 and later.

# DataUseLegalBasis

Represents the legal basis for contacting a customer, such as billing or contract. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Data Protection and Privacy is enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the data use legal basis. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionSpecifies a name for the legal basis. For example, “billing” or “contract”. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Source | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the source of the legal basis. For example, the URL of a contract. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DataUseLegalBasisChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[DataUseLegalBasisHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DataUseLegalBasisOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DataUseLegalBasisShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DataUseLegalBasisChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- DataUseLegalBasisHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- DataUseLegalBasisOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DataUseLegalBasisShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
