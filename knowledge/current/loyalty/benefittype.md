---
title: "BenefitType"
domain: loyalty
topic: benefittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.895Z
estimatedTokens: 857
keywords: [BenefitType, benefits, Support, loyalty, program, member, API, version, 51.0, later, Calls, Associated, Objects]
---

# BenefitType

> Represents information about the type of benefits such as Support Benefits
      available to the loyalty program member. This object is available in API version 51.0 and
    later.

# BenefitType

Represents information about the type of benefits such as Support Benefits available to the loyalty program member. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The category of the benefit type. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of benefit type. |
| ImageSource | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe source of the image that represents the benefit type. This field is available in API version 62.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty program.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The process type associated with the loyalty benefit type.Possible values are:LoyaltyRebate |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitTypeChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[BenefitTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[BenefitTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- BenefitTypeChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
