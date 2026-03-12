---
title: "ProductSvcCampaignDef"
domain: mfg-api-devguide
topic: productsvccampaigndef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.076Z
estimatedTokens: 1323
keywords: [ProductSvcCampaignDef, product, part, impacted, service, campaign, Stores, granular, faults, facilitating, efficient, execution, API, version, 65.0]
---

# ProductSvcCampaignDef

> Represents information about the product or part that is impacted in a
         product service campaign. Stores the granular details related to product faults,
         facilitating efficient execution of the product service campaign. This object is
      available in API version 65.0 and later.

# ProductSvcCampaignDef

Represents information about the product or part that is impacted in a product service campaign. Stores the granular details related to product faults, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessBrandId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the business brand on the product record related to the product service campaign definition.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the product service campaign definition. |
| EndingSerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe serial number of the last impacted item in a serialized batch of items associated with a product service campaign. |
| ImpactedUnitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual number of units impacted of the product service campaign definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MakeName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the make name on the product record related to the product service campaign definition. |
| ManufacturerLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of the manufacturer associated with the product service campaign definition.This field is a relationship field.Relationship NameManufacturerLocationRefers ToLocation |
| ModelName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model name on the product record related to the product service campaign definition. |
| ModelYear | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model year on the product record related to the product service campaign definition. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign definition. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe impacted product of a product service campaign.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSvcCampaignGrpDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign group definition associated with the product service campaign definition.This field is a relationship field.Relationship NameProductSvcCampaignGrpDefRelationship TypeMaster-detailRefers ToProductSvcCampaignGrpDef (the master object) |
| ProductionEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when a manufacturer ended production for a faulty product associated with a product service campaign. |
| ProductionStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when a manufacturer began production for a faulty product associated with a product service campaign. |
| StartingSerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe serial number of the first impacted item in a serialized batch of items associated with a product service campaign. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductSvcCampaignDefChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProductSvcCampaignDefHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductSvcCampaignDefChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProductSvcCampaignDefHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
