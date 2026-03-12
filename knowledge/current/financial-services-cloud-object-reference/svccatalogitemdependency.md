---
title: "SvcCatalogItemDependency"
domain: financial-services-cloud-object-reference
topic: svccatalogitemdependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.679Z
estimatedTokens: 316
keywords: [SvcCatalogItemDependency, collection, records, indicate, dependencies, service, process, API, version, 57.0, later, Calls]
---

# SvcCatalogItemDependency

> Represents a collection of records that indicate the dependencies of a
         service process. This object is available in API version 57.0 and later.

# SvcCatalogItemDependency

Represents a collection of records that indicate the dependencies of a service process. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DependencyReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object that's associated with the dependency.This field is a polymorphic relationship field.Relationship NameDependencyReferenceRelationship TypeLookupRefers ToApexClass, IntegrationProviderDef, OmniScriptConfig |
| ProcessStepName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the step in the creation process of the service process definition.Valid values are:FulfillmentFlowIntegrationDefinitionPreprocessorRequestFormAvailable in API version 62.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of dependency.Possible values are:FlowDefinition—Flow DefinitionIntegrationProviderDef—Integration Provider DefinitionOmniScriptConfig—Omni Script ConfigurationPreprocessorApexClass—Preprocessor Apex Class |
