---
title: "ExternalAuthIdentityProvider"
domain: metadata-api
topic: externalauthidentityprovider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:39.589Z
estimatedTokens: 1020
namespace: CreatedByNamespace
keywords: [ExternalAuthIdentityProvider, Represents, external, authentication, auth, identity, provider., provider, links, credential, obtains, OAuth, tokens, outbound, callouts, systems., Parent, File, Suffix, Directory]
---

# ExternalAuthIdentityProvider

> Represents an external authentication (auth)
			identity provider. An external auth identity provider links to an external credential
			and obtains OAuth tokens for outbound callouts to external systems.

**Namespace:** `CreatedByNamespace`

# ExternalAuthIdentityProvider

Represents an external authentication (auth) identity provider. An external auth identity provider links to an external credential and obtains OAuth tokens for outbound callouts to external systems.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExternalAuthIdentityProvider components have the suffix .externalAuthIdentityProvider and are stored in the externalAuthIdentityProviders folder.

## Version

ExternalAuthIdentityProvider components are available in API version 62.0 and later.

## Special Access Rules

Only users with the Customize Application permission or the Manage Named Credentials permission can access this type.

## Fields

| Field Name | Description |
| --- | --- |
| authenticationFlow | Field TypeIdentityProviderAuthFlow (enumeration of type string)DescriptionRequired.Authentication flow to get tokens to call protected APIs. Values are:AuthorizationCodeClientCredentialsSalesforceDefined |
| authenticationProtocol | Field TypeIdentityProviderAuthProtocol (enumeration of type string)DescriptionRequired.The authentication protocol that’s required to access the external system. Values are:OAuthSalesforceDefined |
| description | Field TypestringDescriptionA meaningful description of the external auth identity provider. |
| externalAuthIdentityProviderParameters | Field TypeExternalAuthIdentityProviderParameter[]DescriptionOne or more sets of parameters that further configure the external auth identity provider. |
| label | Field TypestringDescriptionRequired.Name of the external auth identity provider. |

## ExternalAuthIdentityProviderParameter

Represents the parameters that configure an external auth identity provider.

These parameters are used internally to provide a flexible architecture and are exposed here for packaging reasons.

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA human-readable description of this external auth identity provider parameter. |
| parameterName | Field TypestringDescriptionRequired.The name of the external auth identity provider parameter. |
| parameterType | Field TypeExtlIdentityProviderParmType (enumeration of type string)DescriptionRequired.The type of external auth identity provider parameter. The value of this field drives the behavior of the parameter. Values are:AuthorizeRequestQueryParameterAuthorizeUrlClientAuthenticationCreatedByNamespaceIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterStandardExternalIdentityProviderTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameterTokenUrlUserInfoUrl |
| parameterValue | Field TypestringDescriptionIf the parameterType field describes a literal value, then this field stores the literal value. |
| sequenceNumber | Field TypeintDescriptionSpecifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers (for example, 1 is the highest priority). |

## Declarative Metadata Sample Definition

The following is an example of an ExternalAuthIdentityProvider component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalAuthIdentityProvider xmlns="http://soap.sforce.com/2006/04/metadata">
    <authenticationFlow>AuthorizationCode</authenticationFlow>
    <authenticationProtocol>OAuth</authenticationProtocol>
    <description>OAuth Browser flow for connected app</description>
    <externalAuthIdentityProviderParameter>
        <parameterName>TokenUrl</parameterName>
        <parameterType>TokenUrl</parameterType>
        <parameterValue>https://localhost:6101/services/oauth2/token</parameterValue>
        <sequenceNumber>1</sequenceNumber>
    </externalAuthIdentityProviderParameter>
    <externalAuthIdentityProviderParameter>
        <parameterName>AuthorizeUrl</parameterName>
        <parameterType>AuthorizeUrl</parameterType>
        <parameterValue>https://localhost:6101/services/oauth2/authorize</parameterValue>
        <sequenceNumber>2</sequenceNumber>
    </externalAuthIdentityProviderParameter>
    <label>exampleExtlIdp</label>
</ExternalAuthIdentityProvider>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExternalAuthIdentityProvider</name>
    </types>
    <version>62.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
