---
title: "blng__TaxRule__c"
domain: blng-dev
topic: blngtaxrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.794Z
estimatedTokens: 571
keywords: [blng__TaxRule__c, how, Salesforce, Billing, processes, tax, transactions, products, billed, require, lookup, rule, blng, _TaxRule, Calls]
---

# blng__TaxRule__c

> Represents how Salesforce Billing processes tax for the transactions.
         All products that must be billed require a lookup to a tax rule.

# blng\_\_TaxRule\_\_c

Represents how Salesforce Billing processes tax for the transactions. All products that must be billed require a lookup to a tax rule.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the tax rule record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax rule record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax rule record. If this value is null, it’s possible that the user only accessed the tax rule record or a related list view (LastReferencedDate), but not viewed the tax rule record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tax rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the tax rule is active (true) or not (false). To deactivate the tax rule, clear the Active checkbox. This setting won't affect past or existing transactions or assignments.The default value is true. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the tax rule. |
| blng__TaxableYesNo__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether the products associated with a tax rule are subject to taxation.Valid values are:NoYesThe default value is Yes. |
