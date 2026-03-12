---
title: "EnergyServiceAgreement"
domain: eu-developer-guide
topic: energyserviceagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.205Z
estimatedTokens: 709
keywords: [EnergyServiceAgreement, services, commodities, purchased, customer, product, optionally, linked, Contract, Contracted, physical, goods, appliances, commodity, electricity]
---

# EnergyServiceAgreement

> The services or commodities purchased by a customer, for a specified product
         and optionally linked to a Contract. Contracted Services can be physical goods (eg.
         appliances), commodity services (eg. electricity, gas or water) or other miscellaneous
         services (eg. homeowner insurance, boiler maintenance contract). This object is
      available in API version 62.0 and later.

# EnergyServiceAgreement

The services or commodities purchased by a customer, for a specified product and optionally linked to a Contract. Contracted Services can be physical goods (eg. appliances), commodity services (eg. electricity, gas or water) or other miscellaneous services (eg. homeowner insurance, boiler maintenance contract). This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Account object associated with the energy service agreement. This account is financially responsible for the energy service agreement.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActivationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this service was activated |
| BillingSchedule | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the frequency at which bills are generated such as Monthly, Quarterly or Weekly.Possible values are:MonthlyQuarterlyWeekly |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contract object associated with the energy service agreement.This field is a relationship field.Relationship NameContractRefers ToContract |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the service agreement ends for a customer |
| ExternalContractIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal identifier of the contract that governs the energy service agreement |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product2 object associated with the energy service agreement.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date that the service agreement starts for a customer |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the service.Possible values are:ActiveSuspendedTerminated |
| StatusChangeDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the status last changed |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe details describing the status of the service |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of service.Possible values are:ElectricityGasWater |
