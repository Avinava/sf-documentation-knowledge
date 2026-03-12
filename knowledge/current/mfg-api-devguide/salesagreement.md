---
title: "SalesAgreement"
domain: mfg-api-devguide
topic: salesagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.176Z
estimatedTokens: 2392
keywords: [SalesAgreement, long-term, agreement, buyer, seller, negotiate, price, volume, products.This, API, version, 47.0, later, Calls, Associated]
---

# SalesAgreement

> Represents a long-term agreement between a buyer and a seller to negotiate
      price and volume of products.This object is available in API version 47.0 and
    later.

# SalesAgreement

Represents a long-term agreement between a buyer and a seller to negotiate price and volume of products.This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the referenced account.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time on which the sales agreement is activated. |
| ActualMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total actual margin amount as a percentage of total actual amount. |
| ActualsCalculationMode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe mode used by the application to calculate actual quantities for a sales agreement.Possible values are:DataProcessingEngine—Using a Data Processing Engine DefinitionManual—Manually using API uploadOrders—Automatically from direct ordersOrdersThroughContracts—Automatically from orders through contracts |
| AgreementType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThis field is deprecated. We recommend not adding it to the page layout. Type of the sales agreement. Currently, a sales agreement is always volume-based. |
| ApprovedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user who approves the sales agreement.This field is a relationship field.Relationship NameApprovedByRelationship TypeLookupRefers ToUser |
| ApprovedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time on which the sales agreement was approved. |
| CancellationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time on which the sales agreement was canceled. |
| CancellationReason | TypepicklistPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionReason for canceling the sales agreement. Values can be customized. Examples include low profit, unavailability of products, and so on. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of a contact associated with the sales agreement account.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| DecimalScale | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe number of decimal places applied to values in a sales agreement. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser-defined context and information about the sales agreement. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate and time on which the sales agreement expires. |
| FutureActCalcSchedules | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of future schedules to include in actuals calculations in the sales agreement. |
| LastActualsCalculatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time on which actuals were last calculated either by the automated daily job or by the ad-hoc action performed by an individual user. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-defined name of the sales agreement. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PlannedMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total planned margin amount as a percentage of total planned amount. |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price adjustment schedule that's associated with the sales agreement. Available in API version 59.0 and later.This field is a relationship field.Relationship NamePriceAdjustmentScheduleRefers ToPriceAdjustmentSchedule |
| PricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated price book.Relationship NamePricebookRelationship TypeLookupRefers ToPricebook2 |
| ProductLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLevel of the products associated with the sales agreement.Possible values are:ProductProductCategory—CategoryThe default value is Product. |
| ReferenceFieldId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program associated with the sales agreement. Available in API version 57.0 and later.This field is a relationship field.Relationship NameReferenceFieldRefers ToManufacturingProgram |
| RenewedFromAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the immediate parent from which the sales agreement is renewed.This field is a relationship field.Relationship NameRenewedFromAgreementRelationship TypeLookupRefers ToSalesAgreement |
| RenewedToAgreementId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the renewed sales agreement.This field is a relationship field.Relationship NameRenewedToAgreementRelationship TypeLookupRefers ToSalesAgreement |
| ScheduleCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionNumber of schedules in the sales agreement. |
| ScheduleFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionFrequency at which schedules occur in the sales agreement.Possible values are:MonthlyOnetime—One-TimeQuarterlyWeeklyYearlyThe default value is Weekly. |
| ShouldUserSpecPlnQuantity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user specifies the planned quantity of products in a sales agreement (true) or the initial planned quantity of each product is automatically distributed across all schedules (false).The default value is false. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate on which the sales agreement must get activated. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus of the sales agreement. The values can be customized but must map to at least one of the predefined status codes.Possible values are:ActivatedApprovedCancelledDraftExpiredRejectedUnderRevisionThe default value is Draft. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSet of five predefined status codes that determine at which stage is the sales agreement in.Possible values are:ActivatedApprovedCancelledDraftExpiredRejectedUnderRevisionThe default value is Draft. |
| TotalActualAgreementAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the total actual amounts across all products in a sales agreement.This field is a calculated field. |
| TotalActualCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the total actual cost amounts across all products in a sales agreement.This field is a calculated field. |
| TotalActualMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the total actual margin amounts across all products in a sales agreement.This field is a calculated field. |
| TotalAgreementAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal value of the sales agreement.This field is a calculated field. |
| TotalPlannedCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the total planned cost amounts across all products in a sales agreement.This field is a calculated field. |
| TotalPlannedMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the total planned margin amounts across all products in a sales agreement.This field is a calculated field. |
| TotalProposedAgreementAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal value of the sales agreement when the sales agreement is under revision.This field is a calculated field. |

## Associated Object

This object has the following associated object. Unless noted, it is available in the same API version as this object.

[SalesAgreementChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- SalesAgreementChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
