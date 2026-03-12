---
title: "blng__RevenueAdjustmentLine__c"
domain: blng-dev
topic: blngrevenueadjustmentlinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.636Z
estimatedTokens: 1208
keywords: [blng__RevenueAdjustmentLine__c, revenue, schedule, balance, change, multiple, adjustment, lines, target, different, blng, _RevenueAdjustmentLine, Calls]
---

# blng__RevenueAdjustmentLine__c

> Represents a type of revenue schedule balance change. You can have multiple
         adjustment lines that each target a different revenue schedule.

# blng\_\_RevenueAdjustmentLine\_\_c

Represents a type of revenue schedule balance change. You can have multiple adjustment lines that each target a different revenue schedule.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue adjustment line when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the revenue adjustment line. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the revenue adjustment line. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent account that’s inherited from the order product.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__AdjustmentAmount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total amount added through revenue adjustments to the revenue adjustment line. |
| blng__FinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book that records transactions related to the revenue adjustment line.This field is a relationship field.Relationship Nameblng__FinanceBook__rRefers Toblng__FinanceBook__c |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period in which the revenue adjustment line transactions are complete.This field is a relationship field.Relationship Nameblng__FinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accounting treatment for financial transactions, including which general ledger accounts to debit and credit.This field is a relationship field.Relationship Nameblng__GLRule__rRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger treatment defines how a financial transaction is recorded in the general ledger, specifying the accounts and the nature of the entries.This field is a relationship field.Relationship Nameblng__GLTreatment__rRefers Toblng__GLTreatment__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the revenue adjustment line with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue adjustment line. |
| blng__RevenueAdjustmentDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the changes to the revenue adjustment line must be incorporated. |
| blng__RevenueAdjustment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The total changes created through revenue adjustments to this revenue adjustment line.This field is a relationship field.Relationship Nameblng__RevenueAdjustment__rRelationship TypeMaster-detailRefers Toblng__RevenueAdjustment__c (the master object) |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the revenue adjustment line. Valid values are:DraftPostedThe default value is Draft. |
| blng__TargetRevenueSchedule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The total revenue that is to be allocated.This field is a relationship field.Relationship Nameblng__TargetRevenueSchedule__rRelationship TypeMaster-detailRefers Toblng__RevenueSchedule__c (the detail object) |
| blng__Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe types of revenue changes supported by the revenue adjustment line. Valid values are:AdjustmentTransferThe default value is Adjustment. |
