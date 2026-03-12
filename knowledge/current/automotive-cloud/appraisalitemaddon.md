---
title: "AppraisalItemAddOn"
domain: automotive-cloud
topic: appraisalitemaddon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.001Z
estimatedTokens: 485
keywords: [AppraisalItemAddOn, add-on, product, accessory, enhances, complements, appraised, item, API, version, 63.0, later, Calls, Associated, Objects]
---

# AppraisalItemAddOn

> Represents an add-on product, such as an accessory, that enhances or complements the
      appraised item. This object is available in API version 63.0 and later.

# AppraisalItemAddOn

Represents an add-on product, such as an accessory, that enhances or complements the appraised item. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppraisalItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe appraisal item that's associated with the appraisal item add-on.This field is a relationship field.Relationship NameAppraisalItemRelationship TypeMaster-detailRefers ToAppraisalItem (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appraisal item add-on. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the appraisal item add-on.Possible values are:Advanced DashboardInfortainmentPremium Leather |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe unit price of the appraisal item add-on. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppraisalItemAddOnChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
