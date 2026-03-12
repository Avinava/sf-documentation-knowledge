---
title: "TaxEngineProvider"
domain: revenue-cloud
topic: taxengineprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.559Z
estimatedTokens: 530
keywords: [TaxEngineProvider, general, service, manages, tax, engine, providers, one-to-many, relationship, engines, record, specific, configuration, assigned, multiple]
---

# TaxEngineProvider

> Represents general information about a service that manages a tax
         engine. Tax engine providers have a one-to-many relationship with tax engines, where the
         tax engine record represents a specific configuration of a tax engine that can be assigned
         to multiple order items. This object is available in API version 62.0 and
      later.

# TaxEngineProvider

Represents general information about a service that manages a tax engine. Tax engine providers have a one-to-many relationship with tax engines, where the tax engine record represents a specific configuration of a tax engine that can be assigned to multiple order items. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ApexAdapterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Apex adapter used by the tax provider. This field is unique within your organization.This field is a relationship field.Relationship NameApexAdapterRefers ToApexClass |
| CustomMetadataTypeApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the custom metadata type that defines field mappings for tax callout requests and responses. The custom metadata type name is referenced by the tax engine provider to identify the metadata configuration to use. Available in API version 65.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the tax engine provider. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The API name for the tax engine provider record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used by the tax engine provider. Values appear based on their language codes in Salesforce, such as da for Danish or th for Thai. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The label used for the tax engine’s API in Salesforce. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Apex namespace prefix of the API used for the tax engine. |
