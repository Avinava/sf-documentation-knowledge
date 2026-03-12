---
title: "ClaimCovReserveAdjustment"
domain: financial-services-cloud-object-reference
topic: claimcovreserveadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.760Z
estimatedTokens: 809
keywords: [ClaimCovReserveAdjustment, amount, adjusted, claim, coverage, reserve, changed, payments, made, API, version, 52.0, later, Calls, Associated]
---

# ClaimCovReserveAdjustment

> Represents the amount adjusted on a claim coverage reserve as the reserve is changed and payments are made. This object is available in API version 52.0 and later.

# ClaimCovReserveAdjustment

Represents the amount adjusted on a claim coverage reserve as the reserve is changed and payments are made. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount after adjustments are made in account for deductibles, copay, or coinsurance. |
| AdjustmentReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the claim coverage reserve adjustment. |
| ClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Claim Coverage associated with the Claim Coverage Reserve Adjustment.This field is a relationship field.Relationship NameClaimCoverageRelationship TypeLookupRefers ToClaimCoverage |
| ClaimCoverageReserveDetailId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim Coverage Reserve Detail associated with the Claim Coverage Reserve Adjustment.This field is a relationship field.Relationship NameClaimCoverageReserveDetailRelationship TypeLookupRefers ToClaimCoverageReserveDetail |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:AED—UAE DirhamCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim coverage reserve adjustment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimCovReserveAdjustmentChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

## Related Topics

- ClaimCovReserveAdjustmentChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
