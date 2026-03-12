---
title: "ProdtSvcCmpnWorkType"
domain: mfg-api-devguide
topic: prodtsvccmpnworktype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.898Z
estimatedTokens: 747
keywords: [ProdtSvcCmpnWorkType, eligible, work, associated, product, service, campaign, Helps, identify, track, impacted, items, facilitating, efficient, execution]
---

# ProdtSvcCmpnWorkType

> Represents information about the eligible work types that can be associated
         with a product service campaign. Helps to identify and track the work types related to the
         impacted items, facilitating efficient execution of the product service campaign. This
      object is available in API version 65.0 and later.

# ProdtSvcCmpnWorkType

Represents information about the eligible work types that can be associated with a product service campaign. Helps to identify and track the work types related to the impacted items, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign work type. |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign associated with the product service campaign work type.This field is a relationship field.Relationship NameProductServiceCampaignRelationship TypeMaster-detailRefers ToProductServiceCampaign (the master object) |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe work type associated with the product service campaign work type.This field is a relationship field.Relationship NameWorkTypeRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnWorkTypeChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnWorkTypeHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnWorkTypeChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnWorkTypeHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
