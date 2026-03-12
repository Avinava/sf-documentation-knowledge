---
title: "blng__TaxTreatment__c"
domain: blng-dev
topic: blngtaxtreatmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.803Z
estimatedTokens: 839
keywords: [blng__TaxTreatment__c, how, Salesforce, external, engines, calculate, taxes, tax, engine, calculation, blng, _TaxTreatment, Calls]
---

# blng__TaxTreatment__c

> Represents how Salesforce and external engines calculate taxes, and the tax
         engine to use for tax calculation.

# blng\_\_TaxTreatment\_\_c

Represents how Salesforce and external engines calculate taxes, and the tax engine to use for tax calculation.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the tax treatment record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax treatment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax treatment record. If this value is null, it’s possible that the user only accessed the tax treatment record or a related list view (LastReferencedDate), but not viewed the tax treatment record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tax treatment. |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the tax treatment is active (true) or not (false). To deactivate the legal entity, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the tax treatment. |
| blng__TaxCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated to a tax treatment. |
| blng__TaxGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule associated with the tax treatment.This field is a relationship field.Relationship Nameblng__TaxGLRule__rRefers Toblng__GLRule__c |
| blng__TaxIntegration__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The tax integration record associated with tax treatment.This field is a relationship field.Relationship Nameblng__TaxIntegration__rRelationship TypeMaster-detailRefers Toblng__TaxIntegration__c (the master object) |
| blng__TaxLegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the tax treatment.This field is a relationship field.Relationship Nameblng__TaxLegalEntity__rRefers Toblng__LegalEntity__c |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The tax rule associated with the tax treatment.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeMaster-detailRefers Toblng__TaxRule__c (the detail object) |
