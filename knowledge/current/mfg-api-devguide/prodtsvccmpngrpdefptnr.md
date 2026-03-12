---
title: "ProdtSvcCmpnGrpDefPtnr"
domain: mfg-api-devguide
topic: prodtsvccmpngrpdefptnr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.883Z
estimatedTokens: 1022
keywords: [ProdtSvcCmpnGrpDefPtnr, coordinating, partner, supplier, distributor, needs, communicated, regarding, particular, product, service, campaign, Stores, granular, channel]
---

# ProdtSvcCmpnGrpDefPtnr

> Represents information about the coordinating partner, such as a supplier or
         a distributor, that needs to be communicated regarding a particular product service
         campaign. Stores the granular details related to the partner, such as the channel of
         communication with them, facilitating efficient execution of the product service
         campaign. This object is available in API version 65.0 and later.

# ProdtSvcCmpnGrpDefPtnr

Represents information about the coordinating partner, such as a supplier or a distributor, that needs to be communicated regarding a particular product service campaign. Stores the granular details related to the partner, such as the channel of communication with them, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated account of the partner.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel of communication with the partner.This field is a relationship field.Relationship NameEngagementChannelTypeRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign group definition partner. |
| PointOfContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe point of contact for the partner.This field is a relationship field.Relationship NamePointOfContactRefers ToContact |
| ProductSvcCampaignGrpDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign group definition associated with the product service campaign group definition partner.This field is a relationship field.Relationship NameProductSvcCampaignGrpDefRelationship TypeMaster-detailRefers ToProductSvcCampaignGrpDef (the master object) |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated product service campaign definition and product service campaign group definition cause records.This field is a polymorphic relationship field.Relationship NameRelatedRecordRefers ToProdtSvcCmpnGrpDefCausalItm, ProductSvcCampaignDef |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the partner, such as a manufacturer, supplier, or dealer. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnGrpDefPtnrChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnGrpDefPtnrHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnGrpDefPtnrChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnGrpDefPtnrHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
