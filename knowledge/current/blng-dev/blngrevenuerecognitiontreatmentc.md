---
title: "blng__RevenueRecognitionTreatment__c"
domain: blng-dev
topic: blngrevenuerecognitiontreatmentc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.700Z
estimatedTokens: 1548
keywords: [blng__RevenueRecognitionTreatment__c, how, revenue, product, recognized, blng, _RevenueRecognitionTreatment, Calls]
---

# blng__RevenueRecognitionTreatment__c

> Represents how and where the revenue of a product is
      recognized.

# blng\_\_RevenueRecognitionTreatment\_\_c

Represents how and where the revenue of a product is recognized.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue recognition treatment when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue recognition treatment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue recognition treatment record. If this value is null, it’s possible that the user only accessed the revenue recognition treatment record or a related list view (LastReferencedDate), but not viewed the revenue recognition treatment record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the revenue recognition treatment. |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the revenue recognition rule is active (true) or not (false). To deactivate the revenue recognition rule, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__FlatAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fixed amount to be paid for the revenue recognition treatment. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue recognition treatment. |
| blng__Percentage__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total percentage applied to the revenue recognition treatment and is null if the line is nontaxable. |
| blng__ProcessingOrder__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. If you have multiple revenue recognition treatments targeting a single order product, you can give each of them a value here. The treatments are applied starting with the lowest number. |
| blng__RevenueAgreementAssociation__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe option for associating the revenue schedule to the revenue agreement.Valid values are:ManualNew AgreementNot ApplicableRevised Order ProductThe default value is Not Applicable. |
| blng__RevenueDistributionMethod__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The revenue distribution method used for assigning review across periods.This field is a relationship field.Relationship Nameblng__RevenueDistributionMethod__rRefers Toblng__RevenueDistributionMethod__c |
| blng__RevenueFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. All transactions processed through this treatment record entries in this finance book record.This field is a relationship field.Relationship Nameblng__RevenueFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__RevenueGLRule__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. All transactions processed through this treatment record journal entries based on this general ledger rule.This field is a relationship field.Relationship Nameblng__RevenueGLRule__rRefers Toblng__GLRule__c |
| blng__RevenueLegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis treatment applies to all order products that were considered under the parent revenue recognition rule and have a matching legal entity.This field is a relationship field.Relationship Nameblng__RevenueLegalEntity__rRefers Toblng__LegalEntity__c |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The revenue recognition rule associated with the revenue recognition treatment.This field is a relationship field.Relationship Nameblng__RevenueRecognitionRule__rRelationship TypeMaster-detailRefers Toblng__RevenueRecognitionRule__c (the master object) |
| blng__RevenueScheduleAmount__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of revenue recognition used in the revenue schedule.Valid values are:Bookings AmountRevenue Allocation AmountRevenue Expected AmountRevenue Liability AmountTransaction AmountThe default value is Transaction Amount. |
| blng__RevenueScheduleCreationAction__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The event that triggers the creation of the revenue schedule.Valid values are:Credit Note PostingDebit Note PostingInvoice PostingOrder ActivationOther |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The method for calculating the revenue recognition treatment amount.Valid values are:Flat AmountPercentageRemainder |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identification number associated with this invoice. This field is unique within your organization. |
| blng__ValidateResult__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outcome of the validation checks performed during the revenue recognition treatment process. |
