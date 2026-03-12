---
title: "ProdtSvcCmpnGrpDefCausalItm"
domain: mfg-api-devguide
topic: prodtsvccmpngrpdefcausalitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.875Z
estimatedTokens: 1284
keywords: [ProdtSvcCmpnGrpDefCausalItm, impacted, item, caused, service, campaign, initiated, airbag, needs, repaired, replaced, Stores, granular, causal, facilitating]
---

# ProdtSvcCmpnGrpDefCausalItm

> Represents information about the impacted item that caused the service
         campaign to be initiated, such as an airbag that needs to be repaired or replaced. Stores
         the granular details related to the causal item, facilitating efficient execution of the
         product service campaign. This object is available in API version 65.0 and later.

# ProdtSvcCmpnGrpDefCausalItm

Represents information about the impacted item that caused the service campaign to be initiated, such as an airbag that needs to be repaired or replaced. Stores the granular details related to the causal item, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessBrandId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the business brand on the product record related to the product service campaign group definition causal item.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the product service campaign group definition causal item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MakeName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the make name on the product record related to the product service campaign group definition causal item. |
| ModelName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model name on the product record related to the product service campaign group definition causal item. |
| ModelYear | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model year on the product record related to the product service campaign group definition causal item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign group definition causal item. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe faulty product that is the cause of a product service campaign.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSvcCampaignGrpDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign group definition associated with the product service campaign group definition causal item.This field is a relationship field.Relationship NameProductSvcCampaignGrpDefRelationship TypeMaster-detailRefers ToProductSvcCampaignGrpDef (the master object) |
| RemediationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe remediation plan for a product service campaign, such as replacement or repair.Possible values are:NotationRepairReplace |
| ReplacementRqstType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of replacement requested for a product service event, such as product return for credit or receiving credit without returning the product.Possible values are:RequestACreditWithoutProductReturn—Choose the ‘Request a Credit without Product Return’ option to scrap the causal parts without returning them and still receive credit from your supplier or original equipment manufacturerRequestAProductReturnWithCredit—Choose the ‘Request a Product Return with Credit’ option to return causal parts to your supplier or original equipment manufacturer and receive credit from them |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnGrpDefCausalItmChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnGrpDefCausalItmHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnGrpDefCausalItmChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnGrpDefCausalItmHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
