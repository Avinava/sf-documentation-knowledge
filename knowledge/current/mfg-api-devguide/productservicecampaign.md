---
title: "ProductServiceCampaign"
domain: mfg-api-devguide
topic: productservicecampaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.056Z
estimatedTokens: 930
keywords: [ProductServiceCampaign, activities, performed, product, service, campaign, recall, products, due, potential, safety, hazards, upgrade, comply, legal]
---

# ProductServiceCampaign

> Represents a set of activities to be performed for a product service
         campaign. For example, a recall of products due to potential safety hazards or an upgrade
         of products to comply with legal regulations. This object is available in API version
      61.0 and later.

# ProductServiceCampaign

Represents a set of activities to be performed for a product service campaign. For example, a recall of products due to potential safety hazards or an upgrade of products to comply with legal regulations. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actionable list of the assets that are a part of a product service campaign.This field is a relationship field.Relationship NameActionableListRelationship TypeLookupRefers ToActionableList |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product service campaign. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the product service campaign ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the product service campaign. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the product service campaign.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductServiceCampaignName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product service campaign. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the product service campaign starts. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the product service campaign.Possible values are:In ProgressNewThe default value is New. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category of a status value. StatusCategory field has eight default values: seven values that are identical to the default Status values, and None for statuses without a status category.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Waiting for Response value, add it the On Hold category.Possible values are:CanceledCannotComplete—Cannot CompleteClosedCompletedInProgress—In ProgressNewNoneOnHold—On HoldThe default value is None. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the product service campaign.Possible values are:ModificationNewRecallServiceUpgrade |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the product service campaign.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |
