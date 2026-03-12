---
title: "OauthTokenExchangeHandler"
domain: object-reference
topic: oauthtokenexchangehandler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.324Z
estimatedTokens: 1137
namespace: NamespacePrefix
keywords: [OauthTokenExchangeHandler, token, exchange, handler, consists, Apex, OAuth, 2.0, flow, validate, tokens, external, identity, provider, map]
---

# OauthTokenExchangeHandler

> Represents a token exchange handler. The token exchange handler also consists
         of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is
         used to validate tokens from an external identity provider and to map users to
         Salesforce. This object is available in API version 60.0 and later.

**Namespace:** `NamespacePrefix`

# OauthTokenExchangeHandler

Represents a token exchange handler. The token exchange handler also consists of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is used to validate tokens from an external identity provider and to map users to Salesforce. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA description for your token exchange handler. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name for the handler. |
| IsContactCreationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor internal use only. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the handler is enabled for the token exchange flow.The default value is false. |
| IsUserCreationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the handler can set up new users. During the token exchange flow, the Apex handler maps users from the identity provider to Salesforce. If the IsUserCreationAllowed field is true, the canCreateUser boolean in the getUserForTokenSubject method is true, and the user doesn’t exist in Salesforce, the handler sets up a new User object, which Salesforce automatically inserts to finish creating the user.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the language used in the org where the token exchange handler was created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the token exchange handler record. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SupportedTokenTypesAccessToken | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the handler supports opaque access tokens from the identity provider. |
| SupportedTokenTypesIdToken | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the handler supports OpenID Connect ID tokens from the identity provider. |
| SupportedTokenTypesJwt | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the handler supports tokens from the identity provider that are in JWT format, such as JWT-based access tokens. |
| SupportedTokenTypesRefreshToken | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the handler supports OAuth 2.0 refresh tokens from the identity provider. |
| SupportedTokenTypesSaml2 | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the handler supports SAML 2.0 assertions from the identity provider. |
| TokenHandlerApexId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Apex class associated with the token exchange handler. The class contains methods to validate the token and map users to Salesforce. It must extend the Oauth2TokenExchangeHandler Apex class.This field is a relationship field.Relationship NameTokenHandlerApexRelationship TypeLookupRefers ToApexClass |
