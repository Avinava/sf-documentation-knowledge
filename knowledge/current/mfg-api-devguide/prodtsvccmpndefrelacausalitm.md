---
title: "ProdtSvcCmpnDefRelaCausalItm"
domain: mfg-api-devguide
topic: prodtsvccmpndefrelacausalitm
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.867Z
estimatedTokens: 791
keywords: [ProdtSvcCmpnDefRelaCausalItm, cause, associated, product, service, campaign, definition, Helps, efficiently, identify, map, faulty, parts, products, repaired]
---

# ProdtSvcCmpnDefRelaCausalItm

> Represents information about the cause associated with a product service
         campaign definition. Helps to efficiently identify and map faulty parts to the products
         that need to be repaired or replaced through the product service campaign. This object
      is available in API version 65.0 and later.

# ProdtSvcCmpnDefRelaCausalItm

Represents information about the cause associated with a product service campaign definition. Helps to efficiently identify and map faulty parts to the products that need to be repaired or replaced through the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign definition related causal item. |
| ProdtSvcCmpnGrpDefCausalItmId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product service campaign group definition cause associated with the product service campaign definition related causal item.This field is a relationship field.Relationship NameProdtSvcCmpnGrpDefCausalItmRefers ToProdtSvcCmpnGrpDefCausalItm |
| ProductSvcCampaignDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign definition associated with the product service campaign definition related causal item.This field is a relationship field.Relationship NameProductSvcCampaignDefRelationship TypeMaster-detailRefers ToProductSvcCampaignDef (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnDefRelaCausalItmChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnDefRelaCausalItmHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnDefRelaCausalItmChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnDefRelaCausalItmHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
