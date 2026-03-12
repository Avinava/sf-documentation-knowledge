---
title: "blng__RevenueRecognitionRule__c"
domain: blng-dev
topic: blngrevenuerecognitionrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.678Z
estimatedTokens: 660
keywords: [blng__RevenueRecognitionRule__c, creation, revenue, schedule, invoiced, order, product, invoice, line, blng, _RevenueRecognitionRule, Calls]
---

# blng__RevenueRecognitionRule__c

> Represents the creation of a revenue schedule for an invoiced order product
         or invoice line.

# blng\_\_RevenueRecognitionRule\_\_c

Represents the creation of a revenue schedule for an invoiced order product or invoice line.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue recognition rule when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue recognition rule record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue recognition rule record. If this value is null, it’s possible that the user only accessed the revenue recognition rule record or a related list view (LastReferencedDate), but not viewed the revenue recognition rule record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the revenue recognition rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the revenue recognition rule is active (true) or not (false). To deactivate the revenue recognition rule, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__CreateRevenueSchedule__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The corresponding revenue schedule created for the revenue recognition rule. Valid values are:NoYes |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue recognition rule. |
