---
title: "TaxEngineProvider"
domain: object-reference
topic: taxengineprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.775Z
estimatedTokens: 592
keywords: [TaxEngineProvider, general, service, manages, tax, engine, adapter, Apex, Salesforce, engine’s, prefix, providers, one-to-many, relationship, engines]
---

# TaxEngineProvider

> Represents general information about a service that manages a tax engine,
         such as the ID of the tax adapter Apex class in Salesforce, and the engine’s namespace
         prefix. Tax engine providers have a one-to-many relationship with tax engines, where the
         tax engine record represents a specific configuration of a tax engine that can be assigned
         to multiple order items. This object is available in API version 55.0 and later.

# TaxEngineProvider

Represents general information about a service that manages a tax engine, such as the ID of the tax adapter Apex class in Salesforce, and the engine’s namespace prefix. Tax engine providers have a one-to-many relationship with tax engines, where the tax engine record represents a specific configuration of a tax engine that can be assigned to multiple order items. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_taxengineprovider.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ApexAdapterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Id of the Apex adapter used by this tax provider. This field is unique within your organization.This field is a relationship field.Relationship NameApexAdapterRelationship TypeLookupRefers ToApexClass |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the tax engine provider. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name for the record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used by this tax engine provider. Values appear based on their language codes in Salesforce, such as da for Danish or th for Thai. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel used for the tax engine’s API in Salesforce. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionApex namespace prefix of the API used for the tax engine. In a packaging context, a namespace prefix is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. |
