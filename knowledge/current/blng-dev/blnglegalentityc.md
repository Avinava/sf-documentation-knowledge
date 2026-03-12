---
title: "blng__LegalEntity__c"
domain: blng-dev
topic: blnglegalentityc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.412Z
estimatedTokens: 884
keywords: [blng__LegalEntity__c, way, organization, structured, legal, entity, comprise, blng, _LegalEntity, Calls]
---

# blng__LegalEntity__c

> Represents the way an organization is structured. An organization can be a single
      legal entity or it can comprise more than one legal entity.

# blng\_\_LegalEntity\_\_c

Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the legacy entity when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the legal entity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the legal entity is active (true) or not (false). To deactivate the legal entity, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__City__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the company that this legal entity represents. |
| blng__Country__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the company that this legal entity represents. |
| blng__County__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe county of the company that this legal entity represents. |
| blng__LegalEntityNumber__c | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system generated unique number for a legal entity. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies any additional notes and information from a user. |
| blng__State__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the company that this legal entity represents. |
| blng__Street1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary street of the company that this legal entity represents. |
| blng__Street2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAny additional street details of the company that this legal entity represents. |
| blng__ZipPostalCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ZIP code or postal code of the company that this legal entity represents. |
