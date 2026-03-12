---
title: "ProgramProduct"
domain: object-reference
topic: programproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.547Z
estimatedTokens: 648
keywords: [ProgramProduct, junction, Program, Product2, hold, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ProgramProduct

> Represents a junction between Program and Product2. This will hold Product2 values related to a Program. This object is available in API version 58.0 and later.

# ProgramProduct

Represents a junction between Program and Product2. This will hold Product2 values related to a Program. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with the EAndU Cloud Program Access permission set.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ProgramProduct object. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product2 object associated with the Program.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Program parent object associated with the record.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the ProgramProduct object.Possible values are:ActiveInactivePending For Approval |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramProductChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ProgramProductFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramProductHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramProductOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ProgramProductShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
