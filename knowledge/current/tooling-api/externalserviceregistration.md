---
title: "ExternalServiceRegistration"
domain: tooling-api
topic: externalserviceregistration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.556Z
estimatedTokens: 1649
keywords: [ExternalServiceRegistration, Represents, external, service, configuration, org., API, version, 39.0, later., Important, Supported, SOAP, Calls, REST, HTTP, Fields]
---

# ExternalServiceRegistration

> Represents the external service
            configuration for an org. Available in API version 39.0 and later.

# ExternalServiceRegistration

Represents the external service configuration for an org. Available in API version 39.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP Calls

create(), delete(), query(), retrieve(),update(), upsert()

## Supported REST HTTP Methods

GET, PUT, POST, and DELETE

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description for the external service, defined when the service is created. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe developer’s internal name for the external data source used in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| Language | TypestringPropertiesCreate, DefaultedOnCreate, Filter, Group, Nillable, RestrictedPicklist, Sort, UpdateDescriptionThe language of the external service configuration.Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the external service. |
| NamedCredential | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name reference of the named credential to be used for the service. |
| NamedCredentialReferenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe name reference of the named credential to be used for the service. References NamedCredential. Available in API version 52.0 and later.Relationship NameNamedCredentialReferenceRelationship TypeLookupRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the external service is a part. |
| ProviderAssetEndpoint | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLocation or ID of the latest schema or metadata at an external site. Currently applies only to MuleSoft assets. Available in API version 57.0 and later. |
| RegistrationProvider | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA reference to the registration provider.If the registrationProviderType is ExternalConnector, this field contains the external connector name.If the registrationProviderType is Heroku, this field contains the HerokuAppLink ID.For any other registrationProviderType value, this field is blank and reserved for future use. |
| RegistrationProviderAsset | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA polymorphic foreign key field that contains the name of the asset related to the external service registration.For an external service registration created for a named query, this field contains the named query API name.For an external service registration created for an Apex class that has methods exposed as REST resources or methods that are aura-enabled, this field contains the Apex class name.Available in API version 66.0 and later. |
| RegistrationProviderType | TypestringPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of schema provider used to create this external service. Valid values are:AgentActionOutputsAgentToAgentAnypointApexRestAuraEnabledContextDefCustomCustomExternalConnectorDocumentProcessingExternalConnectorHerokuMuleSoftNamedQuerySchemaInferredStandardFor API version 56.0 and later. |
| Schema | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the OpenAPI 2.0 or OpenAPI 3.0 schema in JSON or YAML format. |
| SchemaAbsoluteUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe full, absolute URL to the schema. For API version 56.0 and later, populated when a user selects Absolute URL during registration. |
| SchemaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, RestrictedPicklist, Sort, UpdateDescriptionID format of the schema. For API version 48.0 and later, the valid value is OpenApi.For API version 47.0 and earlier, the valid values are InteragentHyperSchema and OpenApi. |
| SchemaUploadFileExtension | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe file's extension. For API version 56.0 and later, populated when a user selects Upload from local during registration. |
| SchemaUploadFileName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe file's name without the file extension. For API version 56.0 and later, populated when a user selects Upload from local during registration. |
| SchemaUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe schema's URL defined when registering a service. The path must begin with “/” and be a relative path. |
| ServiceBinding | TypestringPropertiesNillableDescriptionMaps non-supported media types for this external service registration to supported media types. For API version 53.0 and later. |
| ServiceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the cataloged API service that this external service registration belongs to. Available in API version 63.0 and later. This field was removed in API version 65.0. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, RestrictedPicklist, SortDescriptionIndicates whether the service registration is finished. Valid values are complete and incomplete. |
| SystemVersion | TypeintegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the external service registration revision. For valid values, see ExternalServiceRegistation in the Metadata API Developer Guide. |
