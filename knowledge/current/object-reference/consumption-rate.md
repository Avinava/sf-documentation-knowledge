---
title: "Consumption Rate"
domain: object-reference
topic: consumption-rate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.758Z
estimatedTokens: 658
keywords: [Consumption, Rate, rates, describe, billing, range, usage, schedule, schedules, require, least, order, product, API, version]
---

# Consumption Rate

> Consumption rates describe the billing rate for a range of usage within a
      consumption schedule. All consumption schedules require at least one consumption rate in order
      to rate usage on a usage product. This object is available in API version 45.0 and later.

# Consumption Rate

Consumption rates describe the billing rate for a range of usage within a consumption schedule. All consumption schedules require at least one consumption rate in order to rate usage on a usage product. This object is available in API version 45.0 and later.

The consumption rate sets a quantity-based boundary for usage and defines how much your product costs when its usage falls within that boundary. Consumption rates price usage at a per-unit fee or a flat fee across the entire range of usage.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConsumptionScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe consumption schedule that contains the consumption rate.This is a relationship field.Relationship NameConsumptionScheduleRelationship TypeLookupRefers ToConsumptionSchedule |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled.Possible values are:AUD—Australian DollarCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the consumption rate. |
| LowerBound | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lowest quantity of usage for the consumption rate. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. Default name of this record. Label is Product Name. |
| Price | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe price for usage that falls within the consumption rate’s bounds. |
| PricingMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionHow Salesforce applies the consumption rate’s price to the total quantity of usage within a usage summary.Possible values are:FlatFee—Salesforce applies the rate’s price to the entire quantity of usage.PerUnit—Salesforce applies the rate’s price to each individual quantity of usage within the usage summary. |
| ProcessingOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order for processing the usage rate across multiple rates. Consumption rates are evaluated beginning with the lowest processing order. |
| UpperBound | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest quantity of usage for the consumption rate. |
