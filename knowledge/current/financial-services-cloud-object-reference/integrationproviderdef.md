---
title: "IntegrationProviderDef"
domain: financial-services-cloud-object-reference
topic: integrationproviderdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.829Z
estimatedTokens: 1070
keywords: [IntegrationProviderDef, definition, that's, applicable, integration, provider, API, version, 57.0, later, Calls]
---

# IntegrationProviderDef

> Represents the definition that's applicable to an integration provider.
      This object is available in API version 57.0 and later.

# IntegrationProviderDef

Represents the definition that's applicable to an integration provider. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe apex class that's associated with the definition.This field is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| CanUseInIntegrationOrch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the integration definition can be used in an integration orchestration (true) or not (false).The default value is false. Available in API version 61.0 and later. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description about the integration provider definition. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the integration provider definition. |
| ExternalServiceOperationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external service registration that's associated with the integration provider. |
| FileBasedApexClass | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the file-based apex class. |
| InputDataProcessorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe input data processor that's associated with the integration provider.This field is a relationship field.Relationship NameInputDataProcessorRelationship TypeLookupRefers ToOmniIntegrationProcConfig |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the integration provider is active (true) or inactive (false).The default value is false. |
| IsManual | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the integration definition mode is manual (true) or automatic (false).The default value is false. Available in API version 61.0 and later. |
| IsServiceTypeIntegration | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the integration definition mode is Service Type (True) or Process Type (False).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the integration provider definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique name of the integration provider definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. |
| OmniUiCardConfigId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe FlexCard component associated with the integration provider. Available in API version 61.0 and later.This field is a relationship field.Relationship NameOmniUiCardConfigRelationship TypeLookupRefers ToOmniUiCardConfig |
| OutputDataProcessorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe output data processor that's associated with the integration provider.This field is a relationship field.Relationship NameOutputDataProcessorRelationship TypeLookupRefers ToOmniIntegrationProcConfig |
| StorePayload | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the JSON payload from the request and response must be saved in logs.Valid values are:DontPersistPayload—The request and response samples aren’t saved in logs.PersistPayload—The request and response samples are saved in logs.The default value is DontPersistPayload. Available in API version 61.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of definition that's defined for an integration provider.Possible values are:ApexLowCode—Low Code |
