---
title: "AdOpportunityLineItem"
domain: media-developer-guide
topic: adopportunitylineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.436Z
estimatedTokens: 920
keywords: [AdOpportunityLineItem, line, item, advertisement, opportunity, API, version, 63.0, later, Calls]
---

# AdOpportunityLineItem

> Represents a line item in an advertisement opportunity. This
      object is available in API version 63.0 and later.

# AdOpportunityLineItem

Represents a line item in an advertisement opportunity. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdOpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ad opportunity associated with the ad opportunity line item.This field is a relationship field.Relationship NameAdOpportunityRelationship TypeMaster-detailRefers ToAdOpportunity (the master object) |
| AdRequestedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units of the product requested. |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ad space specification associated with the ad opportunity line item.This field is a relationship field.Relationship NameAdSpaceSpecificationRefers ToAdSpaceSpecification |
| CalendarType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of calendar based on which revenue schedules are generated for the ad opportunity line item. This field is available in API version 65.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the record. Available only for organizations with the multicurrency feature enabled.Possible values are:ARS—Argentine PesoCNY—Chinese YuanKRW—Korean WonRUB—Russian RoubleUSD—U.S. DollarThe default value is USD. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the ad opportunity line item. This field is available in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media type of the ad opportunity line item.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad opportunity line item. |
| OpportunityLineItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the opportunity line item associated with the ad opportunity line item.This field is a relationship field.Relationship NameOpportunityLineItemRefers ToOpportunityLineItem |
| PricingModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the pricing model of the ad opportunity line item. |
| RevenueDistributionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the method in which revenue is distributed across the revenue schedules. This field is available in API version 65.0 and later. |
| RevenueSchedulePeriodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the period type of the revenue schedule generated for the ad opportunity line item. This field is available in API version 65.0 and later. |
