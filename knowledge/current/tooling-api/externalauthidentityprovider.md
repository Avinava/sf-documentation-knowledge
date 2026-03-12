---
title: "ExternalAuthIdentityProvider"
domain: tooling-api
topic: externalauthidentityprovider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.482Z
estimatedTokens: 1441
namespace: CreatedByNamespace
keywords: [ExternalAuthIdentityProvider, Represents, external, authentication, auth, identity, provider., provider, links, credential, obtains, OAuth, tokens, outbound, callouts, systems., Important, Supported, SOAP, API]
---

# ExternalAuthIdentityProvider

> Represents an external authentication (auth) identity provider. An external
         auth identity provider links to an external credential and obtains OAuth tokens for
         outbound callouts to external systems.

**Namespace:** `CreatedByNamespace`

# ExternalAuthIdentityProvider

Represents an external authentication (auth) identity provider. An external auth identity provider links to an external credential and obtains OAuth tokens for outbound callouts to external systems.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Only users with the Customize Application permission or the Manage Named Credentials permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| AuthenticationFlow | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionAuthentication flow to get tokens to call protected APIs.Possible values are:AuthorizationCodeClientCredentialsSalesforceDefined |
| AuthenticationProtocol | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe authentication protocol that’s required to access the external system.Possible values are:OAuthSalesforceDefined |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA meaningful description of the external auth identity provider. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique internal name for the named credential used in the API.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated type in Tooling API. The full name can include a namespace prefix. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the external auth identity provider. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the external auth identity provider. In the UI, this field is Label. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated metadata type and related fields in Tooling API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |

## ExternalAuthIdentityProviderParameter

Represents the parameters that configure an external auth identity provider.

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA human-readable description of the external auth identity provider parameter. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| ParameterName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the external auth identity provider parameter. |
| ParameterType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of external auth identity provider parameter. The value of this field drives the behavior of the parameter.Possible values are:AuthorizeRequestQueryParameterAuthorizeUrlClientAuthenticationCreatedByNamespaceIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterStandardExternalIdentityProviderTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameterTokenUrlUserInfoUrl |
| ParameterValue | TypetextareaPropertiesNillableDescriptionIf the parameterType field describes a literal value then the literal value is stored in this field. |
| SequenceNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers (for example, 1 is the highest priority). |
