---
title: "OauthTokenExchangeHandler"
domain: metadata-api
topic: oauthtokenexchangehandler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:53.762Z
keywords: [OauthTokenExchangeHandler, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, OauthTokenExchHandlerApp, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# OauthTokenExchangeHandler

# OauthTokenExchangeHandler

Represents a token exchange handler. The token exchange handler also consists of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is used to validate tokens from an external identity provider and to map users to Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OauthTokenExchangeHandler components have the suffix .oauthtokenexchangehandler and are stored in the oauthtokenexchangehandlers folder.

## Version

OauthTokenExchangeHandler components are available in API version 60.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionRequired. A description for your token exchange handler. |
| developerName | Field TypestringDescriptionRequired. The API name for the handler. |
| enablements | Field TypeOauthTokenExchHandlerApp[]DescriptionThe enablement settings for the token exchange handler, including the execution user who runs the Apex class, the connected apps or external client apps for which it’s enabled, and whether or not it’s the default handler. |
| isAccessTokenSupported | Field TypebooleanDescriptionRequired. Indicates whether the handler supports OAuth 2.0 access tokens from the identity provider, including opaque access tokens and JSON Web Token (JWT)-based access tokens. |
| isContactCreationAllowed | Field TypebooleanDescriptionFor internal use only. |
| isEnabled | Field TypebooleanDescriptionRequired. Indicates whether the handler is enabled. To complete enablement, add an enablements field that specifies the enablement settings. |
| isIdTokenSupported | Field TypebooleanDescriptionRequired. Indicates whether the handler supports OpenID Connect ID tokens from the identity provider. |
| isJwtSupported | Field TypebooleanDescriptionRequired. Indicates whether the handler supports tokens from the identity provider that are in JWT format, such as JWT-based access tokens. |
| isProtected | Field TypebooleanDescriptionIndicates whether the handler can be linked to or referenced by components created in a subscriber org. See Protected Components in Managed Packages. |
| isRefreshTokenSupported | Field TypebooleanDescriptionRequired. Indicates whether the handler supports OAuth 2.0 refresh tokens from the identity provider. |
| isSaml2Supported | Field TypebooleanDescriptionRequired. Indicates whether the handler supports SAML 2.0 assertions from the identity provider. |
| isUserCreationAllowed | Field TypebooleanDescriptionRequired. Indicates whether the handler can set up new users. During the token exchange flow, the Apex handler maps users from the identity provider to Salesforce. If the isUserCreationAllowed field is true, the canCreateUser boolean in the getUserForTokenSubject method is true, and the user doesn’t exist in Salesforce, the handler sets up a new User object, which Salesforce automatically inserts to finish creating the user. |
| masterLabel | Field TypestringDescriptionRequired. The label of the token exchange handler record. |
| tokenHandlerApex | Field TypestringDescriptionRequired. The Apex class associated with the token exchange handler. The class contains methods to validate the token and map users to Salesforce. It must extend the Oauth2TokenExchangeHandler Apex class. |

## OauthTokenExchHandlerApp

Represents the settings for a specific Salesforce connected app or external client app that’s enabled for the token exchange handler. A handler can be enabled for multiple apps.

| Field Name | Description |
| --- | --- |
| apexExecutionUser | Field TypestringDescriptionRequired. A user who runs the Apex token exchange handler. We recommend that you use an integration user. |
| connectedApp | Field TypestringDescriptionThe API name of the connected app that’s being used to integrate with Salesforce. |
| externalClientApp | Field TypestringDescriptionThe API name of the external client app that’s being used to integrate with Salesforce. |
| isDefault | Field TypebooleanDescriptionRequired. Indicates whether the token exchange handler is the default handler for this app. During the token exchange flow, in the token request, you can optionally include a token_handler parameter with the name of a specific handler’s Apex class. If you don’t include this parameter, Salesforce defaults to the default handler. |

## Declarative Metadata Sample Definition

The following is an example of an OauthTokenExchangeHandler component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").