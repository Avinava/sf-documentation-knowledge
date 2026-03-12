---
title: "blng__GLTreatment__c"
domain: blng-dev
topic: blnggltreatmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.300Z
estimatedTokens: 893
keywords: [blng__GLTreatment__c, lookups, credit, General, Ledger, account, debit, establish, relationship, transaction, accounts, blng, _GLTreatment, Calls]
---

# blng__GLTreatment__c

> Represents the lookups to a credit General Ledger (GL) account and a debit GL
         account. These lookups establish a relationship between your transaction and your GL
         accounts.

# blng\_\_GLTreatment\_\_c

Represents the lookups to a credit General Ledger (GL) account and a debit GL account. These lookups establish a relationship between your transaction and your GL accounts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the General Ledger (GL) treatment when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a GL treatment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a GL treatment record. If this value is null, it’s possible that the user only accessed the GL treatment record or a related list view (LastReferencedDate), but not viewed the GL treatment record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the GL treatment. |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the GL treatment is active (true) or not (false). To deactivate the GL treatment, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__CreditGLAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit GL account transactions associated with the GL treatment.This field is a relationship field.Relationship Nameblng__CreditGLAccount__rRefers Toblng__GLAccount__c |
| blng__DebitGLAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe debit GL account transactions associated with the GL treatment.This field is a relationship field.Relationship Nameblng__DebitGLAccount__rRefers Toblng__GLAccount__c |
| blng__GLLegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the GL treatment.This field is a relationship field.Relationship Nameblng__GLLegalEntity__rRefers Toblng__LegalEntity__c |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Specifies how Salesforce Billing logs transactional data to the finance books. A GL rule includes a list of GL treatments.This field is a relationship field.Relationship Nameblng__GLRule__rRelationship TypeMaster-detailRefers Toblng__GLRule__c (the master object) |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the GL treatment. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identification number associated with the general ledger treatment record. This field is unique within your organization. |
