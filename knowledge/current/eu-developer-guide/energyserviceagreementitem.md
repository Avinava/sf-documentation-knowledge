---
title: "EnergyServiceAgreementItem"
domain: eu-developer-guide
topic: energyserviceagreementitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.215Z
estimatedTokens: 892
keywords: [EnergyServiceAgreementItem, Energy, Service, Agreement, time, location, pricing, API, version, 62.0, later, Calls]
---

# EnergyServiceAgreementItem

> Represents the details of the Energy Service Agreement object such as the
         time, location, and pricing information.  This object is available in API version 62.0
      and later.

# EnergyServiceAgreementItem

Represents the details of the Energy Service Agreement object such as the time, location, and pricing information. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Asset object associated with the energy service agreement item.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| BillingAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Billing Profile object associated with the energy service agreement item. The billing profile corresponds to the billing entity in the legacy billing application, and is responsible for billing charges for this service.This field is a relationship field.Relationship NameBillingAccountRefers ToBillingAccount |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the energy service agreement ends for a customer |
| EnergyServiceAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Energy Service Agreement object associated with the energy service agreement item.This field is a relationship field.Relationship NameEnergyServiceAgreementRelationship TypeMaster-detailRefers ToEnergyServiceAgreement (the master object) |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Location object associated with the energy service agreement.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| OneTimePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe one-time price for a service |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product2 object associated with the energy service agreement line item.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| RecurringPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe recurring price for a service |
| RecurringPriceFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the recurring charge for a service.Possible values are:AnnuallyDailyMonthly |
| ServicePointId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Service Point object associated with the energy service agreement.This field is a relationship field.Relationship NameServicePointRefers ToServicePoint |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date that the energy service agreement starts for a customer |
| UsagePeriod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration over which the estimated usage has occuredPossible values are:AnnualDailyWeekly |
| UsagePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated usage price of a service |
| UsageQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe estimated usage quantity used to determine the usage price for this service |
| UsageUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure used to determine the estimated usage pricePossible values are:DaysThermskWH |
