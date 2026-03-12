---
title: "blng__GLRule__c"
domain: blng-dev
topic: blngglrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.292Z
estimatedTokens: 483
keywords: [blng__GLRule__c, how, transactions, recorded, categorized, General, Ledger, blng, _GLRule, Calls]
---

# blng__GLRule__c

> Represents how transactions are recorded and categorized in the General
         Ledger (GL).

# blng\_\_GLRule\_\_c

Represents how transactions are recorded and categorized in the General Ledger (GL).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the GL when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a GL rule record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a GL rule record. If this value is null, it’s possible that the user only accessed the GL rule record or a related list view (LastReferencedDate), but not viewed the GL rule record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the GL rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the GL rule is active (true) or not (false). To deactivate the GL rule, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the GL rule. |
