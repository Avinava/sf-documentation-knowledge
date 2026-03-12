---
title: "ProgramRebateTypeBenefit"
domain: channel-revenue-management-dev-guide
topic: programrebatetypebenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.574Z
estimatedTokens: 576
keywords: [ProgramRebateTypeBenefit, benefit, matrix, rebate, $200, API, version, 51.0, later, Calls, Usage]
---

# ProgramRebateTypeBenefit

> Defines the benefit matrix for the rebate type. For example, 5% or $200.
    This object is available in API version 51.0 and later.

# ProgramRebateTypeBenefit

Defines the benefit matrix for the rebate type. For example, 5% or $200. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRebate benefit at a level. For example, 3%, $3000. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the program rebate type benefit is effective. If the date does not match a payout period end date, it isn’t picked. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the program rebate type benefit is effective. If the date does not match a payout period start date, it isn’t picked. |
| MaximumMeasureFieldValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCap the measure value at a certain figure. For example, pay 1% on $100,000 even when the members do more than that. |
| MaximumQualifyingValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUpper limit of quantity or revenue at a level. |
| MinimumQualifyingValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionMinimum quantity or revenue required to qualify to a level. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the qualification. For example, Tier 1/2/3, Gold/Silver. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUse this if the benefits vary by products. For example, Product A has a tier from 1- 100 units for $20 and Product B has 1-100 units at $19.To use product or any dimension to the benefits, add that field in benefit mapping |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the program rebate type benefit.Possible values are:ActiveInactive |

## Usage

The benefit table can be extended with custom columns, for example, Region. The benefits can then be configured as: APAC 3%, USA 2%, and so on.
