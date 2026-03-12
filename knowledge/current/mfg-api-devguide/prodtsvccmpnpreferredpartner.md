---
title: "ProdtSvcCmpnPreferredPartner"
domain: mfg-api-devguide
topic: prodtsvccmpnpreferredpartner
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.889Z
estimatedTokens: 970
keywords: [ProdtSvcCmpnPreferredPartner, appropriate, partner, execute, product, service, campaign, specific, geographic, area, Helps, map, allocate, providers, minimize]
---

# ProdtSvcCmpnPreferredPartner

> Represents information about the most appropriate partner to execute a
         product service campaign within a specific geographic area. Helps to map and allocate
         service providers to minimize costs and turnaround time,facilitating efficient execution of
         the product service campaign. This object is available in API version 65.0 and later.

# ProdtSvcCmpnPreferredPartner

Represents information about the most appropriate partner to execute a product service campaign within a specific geographic area. Helps to map and allocate service providers to minimize costs and turnaround time,facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the product service campaign preferred partner.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe point of contact for the product service campaign preferred partner.This field is a relationship field.Relationship NameContactRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of the product service campaign preferred partner.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product service campaign preferred partner. |
| PartnerPrefOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order of preference for the product service campaign preferred partner. |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign associated with the product service campaign preferred partner.This field is a relationship field.Relationship NameProductServiceCampaignRelationship TypeMaster-detailRefers ToProductServiceCampaign (the master object) |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the product service campaign preferred partner, such as a supplier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtSvcCmpnPreferredPartnerChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProdtSvcCmpnPreferredPartnerHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProdtSvcCmpnPreferredPartnerChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProdtSvcCmpnPreferredPartnerHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
