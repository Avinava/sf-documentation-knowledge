---
title: "AcctMgrPeriodicTargetDstr"
domain: mfg-api-devguide
topic: acctmgrperiodictargetdstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.057Z
estimatedTokens: 2473
keywords: [AcctMgrPeriodicTargetDstr, target, period, account, manager, foreign, key, either, distribution, twelve, periods, corresponding, hold, API, version]
---

# AcctMgrPeriodicTargetDstr

> Represents the target value of each period of an account manager target. It is
      a foreign key to either an account manager target and an account manager target distribution.
      It has twelve fields for periods and twelve corresponding fields to hold the target value.
     This object is available in API version 49.0 and later.

# AcctMgrPeriodicTargetDstr

Represents the target value of each period of an account manager target. It is a foreign key to either an account manager target and an account manager target distribution. It has twelve fields for periods and twelve corresponding fields to hold the target value. This object is available in API version 49.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| AcctMgrTargetDstrId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of an AcctMgrTargetDstr object.This field is a relationship field.Relationship NameAcctMgrTargetDstrRefers ToAcctMgrTargetDstr |
| AcctMgrTargetId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of an account manager target.This field is a relationship field.Relationship NameAcctMgrTargetRelationship TypeMaster-detailRefers ToAcctMgrTarget (the master object) |
| FiscalPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the fiscal year for an account manager target.This field is a relationship field.Relationship NameFiscalPeriodRefers ToPeriod |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe user-defined name of an account manager target. |
| Period10Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the 10th period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod10Refers ToPeriod |
| Period10TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 10th period of an account manager target distribution that has the measure type as Currency. |
| Period10TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 10th period of an account manager target distribution that has the measure type as Other. |
| Period11Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the 11th period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod11Refers ToPeriod |
| Period11TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 11th period of an account manager target distribution that has the measure type as Currency. |
| Period11TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 11th period of an account manager target distribution that has the measure type as Other. |
| Period12Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the 12th period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod12Refers ToPeriod |
| Period12TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 12th period of an account manager target distribution that has the measure type as Currency. |
| Period12TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the 12th period of an account manager target distribution that has the measure type as Other. |
| Period1Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the first period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod1Refers ToPeriod |
| Period1TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the first period of an account manager target distribution that has the measure type as Currency. |
| Period1TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the first period of an account manager target distribution that has the measure type as Other. |
| Period2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the second period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod2Refers ToPeriod |
| Period2TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the second period of an account manager target distribution that has the measure type as Currency. |
| Period2TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the second period of an account manager target distribution that has the measure type as Other. |
| Period3Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the third period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod3Refers ToPeriod |
| Period3TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the third period of an account manager target distribution that has the measure type as Currency. |
| Period3TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the third period of an account manager target distribution that has the measure type as Other. |
| Period4Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the fourth period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod4Refers ToPeriod |
| Period4TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the fourth period of an account manager target distribution that has the measure type as Currency. |
| Period4TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the fourth period of an account manager target distribution that has the measure type as Other. |
| Period5Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the fifth period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod5Refers ToPeriod |
| Period5TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the fifth period of an account manager target distribution that has the measure type as Currency. |
| Period5TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the fifth period of an account manager target distribution that has the measure type as Other. |
| Period6Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the sixth period of an account manager target distribution. |
| Period6TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the sixth period of an account manager target distribution that has the measure type as Currency. |
| Period6TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the sixth period of an account manager target distribution that has the measure type as Other. |
| Period7Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the seventh period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod7Refers ToPeriod |
| Period7TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the seventh period of an account manager target distribution that has the measure type as Currency. |
| Period7TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the seventh period of an account manager target distribution that has the measure type as Other. |
| Period8Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the eighth period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod8Refers ToPeriod |
| Period8TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the eighth period of an account manager target distribution that has the measure type as Currency. |
| Period8TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the eighth period of an account manager target distribution that has the measure type as Other. |
| Period9Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ninth period of an account manager target distribution.This field is a relationship field.Relationship NamePeriod9Refers ToPeriod |
| Period9TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the ninth period of an account manager target distribution that has the measure type as Currency. |
| Period9TargetValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe value of the ninth period of an account manager target distribution that has the measure type as Other. |

## Associated Object

This object has the following associated object. Unless noted, it is available in the same API version as this object.

[AcctMgrPeriodicTargetDstrHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcctMgrPeriodicTargetDstrHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
