---
title: "RebateProgram"
domain: channel-revenue-management-dev-guide
topic: rebateprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.703Z
estimatedTokens: 676
keywords: [RebateProgram, rebate, program, organization, runs, account, accounts, specific, API, version, 51.0, later, Calls]
---

# RebateProgram

> The rebate program your organization runs with a single account, all
      accounts, or specific list of accounts. This object is available in API version 51.0 and
    later.

# RebateProgram

The rebate program your organization runs with a single account, all accounts, or specific list of accounts. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the rebate program. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe end date of the rebate program. |
| Frequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe frequency of rebate program.Possible values are:AnnuallyBiannuallyCustomPeriodsMonthlyOnDemandProgramStartAndEndDateQuarterly |
| GracePeriodDayCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days from end date of an instance of a payout period. Transactions submitted until this day are considered for rebate calculation. For example, a value of 5 implies that channel partners can submit transactions for a monthly period before the 5th of the next month. This isn’t enforced in the system but can be used as information for channel partners. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the rebate program. |
| PayoutCalculationDayCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days from period end date. The payment will be calculated after this date. For example, a payout calculation day count of 14 means 14 days after period end date. |
| ProgramReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference number assigned to this rebate program. This field is unique within your organization. This field is available in API version 52.0 and later. |
| RebateProgramUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL of the rebate program. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of rebate program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible states of rebate program.Possible values are:ActiveDraftInactive |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the rebate program. Available in API version 58.0 and later.Possible values are:ShipAndDebitStandardThe default value is Standard. |
