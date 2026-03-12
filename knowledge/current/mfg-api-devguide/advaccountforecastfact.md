---
title: "AdvAccountForecastFact"
domain: mfg-api-devguide
topic: advaccountforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.488Z
estimatedTokens: 1289
keywords: [AdvAccountForecastFact, generated, advanced, account, forecast, records, API, version, 53.0, later, Calls]
---

# AdvAccountForecastFact

> Represents information about the generated advanced account forecast
         records. This object is available in API version 53.0 and later.

# AdvAccountForecastFact

Represents information about the generated advanced account forecast records. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the advanced account forecast record.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AdvAcctForecastSetPartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account forecast set partner for which the advanced account forecast records are generated.This is a relationship field.Relationship NameAdvAcctForecastSetPartnerRelationship TypeLookupRefers ToAdvAcctForecastSetPartner |
| AdvAcctForecastSetUseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advanced account forecast set use that's associated with the advanced account forecast fact record. Available in API version 57.0 and later.This field is a relationship field.Relationship NameAdvAcctForecastSetUseRefers ToAdvAcctForecastSetUse |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency used for the forecast values. |
| ForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total forecasted quantity for the generated advanced account forecast set records. |
| ForecastedRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total forecasted revenue for the generated advanced account forecast set records. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LastYearOrderQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe previous year order quantity for the generated advanced account forecast set records. |
| LastYearOrderRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe previous year order revenue for the generated advanced account forecast set records. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the advanced account forecast fact. |
| OpportunityQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe opportunity quantity for the generated advanced account forecast set records. |
| OpportunityRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe opportunity revenue for the generated advanced account forecast set records. |
| OrderQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order quantity for the generated advanced account forecast set records. |
| OrderRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order revenue for the generated advanced account forecast set records. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this advanced account forecast fact.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe period for which the advanced account forecast records are generated.This is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| PeriodStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the period for which the advanced account forecast fact records are generated. Available in API version 54.0 and later. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product for which the advanced account forecast records are generated.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| SalesAgreementQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Sales Agreement quantity for the generated advanced account forecast set records. |
| SalesAgreementRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Sales Agreement revenue for the generated advanced account forecast set records. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the forecast set associated with the advanced account forecast record.Possible values are:ActiveInactiveThe default value is 'Active'. |
