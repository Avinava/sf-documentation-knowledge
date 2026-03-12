---
title: "AppraisalItemProviderVal"
domain: automotive-cloud
topic: appraisalitemproviderval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.009Z
estimatedTokens: 584
keywords: [AppraisalItemProviderVal, valuation, item, appraised, API, version, 63.0, later, Calls, Associated, Objects]
---

# AppraisalItemProviderVal

> Represents a valuation of the item that is appraised. This object is available in API
      version 63.0 and later.

# AppraisalItemProviderVal

Represents a valuation of the item that is appraised. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppraisalItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe appraisal item that's associated with the appraisal source valuation.This field is a relationship field.Relationship NameAppraisalItemRelationship TypeMaster-detailRefers ToAppraisalItem (the master object) |
| AverageConditionValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the item if it's average condition. |
| CleanConditionValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the item if it's in clean condition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autopopulated name of Appraisal Item Provider Valuation record. |
| ProviderName | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the provider that gives the valuation of the item. |
| RoughConditionValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the item if it's in rough condition. |
| ValuationDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the source gives the valuation of the item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppraisalItemProviderValChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
