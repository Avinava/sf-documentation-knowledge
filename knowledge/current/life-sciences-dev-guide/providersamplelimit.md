---
title: "ProviderSampleLimit"
domain: life-sciences-dev-guide
topic: providersamplelimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.969Z
estimatedTokens: 837
keywords: [ProviderSampleLimit, sample, limits, remaining, quantity, applied, account, product, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProviderSampleLimit

> Represents sample limits and remaining quantity applied to a given account
         and product. This object is available in API version 65.0 and later.

# ProviderSampleLimit

Represents sample limits and remaining quantity applied to a given account and product. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The account that's linked to the sample limit.This field is a relationship field.Relationship NameAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code associated with the currency values in the provider sample limit.Possible values are:USD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the provider visit sample limit record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that's linked to the sample limit.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| PrvdSampleLmtTemplateId | TypereferenceDescriptionRequired. The provider sample limit template that's associated with provider sample limit.This field is a relationship field.Relationship NamePrvdSampleLimitTemplateRefers ToProviderSampleLimitTemplate |
| PrvdSampleLmtTemplateName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The provider sample limit template associated with the provider sample limit. |
| Rule | TypetextareaPropertiesCreate, UpdateDescriptionRequired. Stores the rules for allocating sample limits to the linked account. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderSampleLimitHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProviderSampleLimitHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
