---
title: "blng__RevenueAdjustment__c"
domain: blng-dev
topic: blngrevenueadjustmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.625Z
estimatedTokens: 1170
keywords: [blng__RevenueAdjustment__c, adjustment, increase, decrease, transfer, balance, revenue, schedules, actual, differs, initial, schedule, blng, _RevenueAdjustment, Calls]
---

# blng__RevenueAdjustment__c

> Represents the adjustment to increase, decrease, or transfer the available
         balance between revenue schedules when actual revenue differs from the initial revenue
         schedule.

# blng\_\_RevenueAdjustment\_\_c

Represents the adjustment to increase, decrease, or transfer the available balance between revenue schedules when actual revenue differs from the initial revenue schedule.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue adjustment when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the revenue adjustment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue adjustment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue adjustment record. If this value is null, it’s possible that the user only accessed the revenue adjustment record or a related list view (LastReferencedDate), but not viewed the revenue adjustment record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the revenue adjustment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent account that’s inherited from the order product.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__AdjustmentAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount contributed to either increase or decrease the available balance on a revenue schedule. |
| blng__AdjustmentGroup__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA collection of revenue adjustments. |
| blng__Amount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAll revenue for a revenue adjustment that’s available to be adjusted or distributed.This field is a calculated field. |
| blng__FinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book that records transactions related to the revenue adjustment.This field is a relationship field.Relationship Nameblng__FinanceBook__rRefers Toblng__FinanceBook__c |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period in which the revenue adjustment transactions are complete.This field is a relationship field.Relationship Nameblng__FinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the revenue adjustment with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue adjustment. |
| blng__RelatedRevenueAdjustment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total changes created through revenue adjustments based on related revenue adjustments.This field is a relationship field.Relationship Nameblng__RelatedRevenueAdjustment__rRefers Toblng__RevenueAdjustment__c |
| blng__RevenueAdjustmentDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the changes to the revenue adjustment line must be incorporated. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the revenue adjustment. Valid values are:DraftPostedThe default value is Draft. |
| blng__Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe types of revenue changes supported by the revenue adjustment. Valid values are:AdjustmentTransferThe default value is Adjustment. |
