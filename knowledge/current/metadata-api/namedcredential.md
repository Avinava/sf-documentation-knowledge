---
title: "NamedCredential"
domain: metadata-api
topic: namedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:40.806Z
estimatedTokens: 4248
namespace: AllowedManagedPackageNamespaces
keywords: [NamedCredential, named, credential, URL, callout, endpoint, authentication, definition, simplify, setup, authenticated, callouts, Parent, File, Suffix]
---

# NamedCredential

> Represents a named credential, which specifies the URL of a callout endpoint and its
		required authentication parameters in one definition. A named credential can be specified as
		an endpoint to simplify the setup of authenticated callouts.

**Namespace:** `AllowedManagedPackageNamespaces`

# NamedCredential

Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme have been migrated to the new framework.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

NamedCredential components have the suffix .namedCredential and are stored in the namedCredentials folder.

## Version

NamedCredential components are available in API version 33.0 and later.

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this type.

## Fields

| Field Name | Description |
| --- | --- |
| allowMergeFieldsInBody | Field TypebooleanDescriptionSpecifies whether Apex code can use merge fields to populate the HTTP request body with org data when a callout is made. Corresponds to Allow Merge Fields in HTTP Body in the user interface. Defaults to false.This field is available in API version 41.0 and later. |
| allowMergeFieldsInHeader | Field TypebooleanDescriptionSpecifies whether Apex code can use merge fields to populate the HTTP header with org data when a callout is made. Corresponds to Allow Merge Fields in HTTP Header in the user interface. Defaults to false.This field is available in API version 41.0 and later. |
| authProvider | Field TypestringDescriptionThe authentication provider that the AuthProvider component represents.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| authTokenEndpointUrl | Field TypestringDescriptionThe URL where JWTs are exchanged for access tokens.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| awsAccessKey | Field TypestringDescriptionFirst part of the access key used to sign programmatic requests to AWS. Use when AWS Signature Version 4 is your authentication protocol.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| awsAccessSecret | Field TypestringDescriptionThe second part of the access key that's used to sign programmatic requests to AWS. Use when AWS Signature Version 4 is your authentication protocol.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| awsRegion | Field TypestringDescriptionSpecifies which AWS Region the named credential accesses.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| awsService | Field TypestringDescriptionSpecifies which AWS resource the named credential accesses.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| calloutStatus | Field TypecalloutStatus (enumeration of type string)DescriptionSpecifies whether the named credential is enabled for callouts. Valid values are:Disabled: The named credential is disabled for callouts.Enabled: The named credential is enabled for callouts.This field is available in API version 59.0 and later. |
| certificate | Field TypestringDescriptionIf you specify a certificate, your Salesforce org supplies it when establishing each two-way SSL connection with the external system. The certificate is used for digital signatures, which verify that requests are coming from your Salesforce org.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| description | Field TypestringDescriptionA meaningful description of the named credential. |
| endpoint | Field TypestringDescriptionThe URL or root URL of the callout endpoint. Corresponds to URL in the user interface.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| generateAuthorizationHeader | Field TypebooleanDescriptionSpecifies whether Salesforce generates an authorization header and applies it to each callout that references the named credential. Corresponds to Generate Authorization Header in the user interface. Defaults to true.This field is available in API version 41.0 and later. |
| jwtAudience | Field TypestringDescriptionExternal service or other allowed recipients for the JWT. Written as JSON, with a quoted string for a single audience and an array of quoted strings for multiple audiences. Single audience example: “aud1” Multiple audiences example: [“aud1”, “aud2”, “aud3”].This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| jwtFormulaSubject | Field TypestringDescriptionFormula string calculating the Subject of the JWT. API names and constant strings, in single quotes, can be included. Allows a dynamic Subject unique per user requesting the token. For example, 'User='+$User.Id. Use this field when principalType is set to PerUser. Corresponds to Per User Subject in the user interface.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| jwtIssuer | Field TypestringDescriptionSpecify who issued the JWT using a case-sensitive string.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| jwtSigningCertificate | Field TypestringDescriptionCertificate verifying the JWT’s authenticity to external sites.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| jwtTextSubject | Field TypestringDescriptionStatic text, without quotes, that specifies the JWT Subject. Use this field when principalType is set to NamedUser. Corresponds to Named Principal Subject in the user interface.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| jwtValidityPeriodSeconds | Field TypeintDescriptionSpecify the number of seconds that the token is valid.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 46.0, this field is deprecated in API version 56.0 and later. |
| label | Field TypestringDescriptionRequired.A user-friendly name for the named credential that appears in the Salesforce user interface, such as in list views. |
| namedCredentialParameters | Field TypeNamedCredentialParameter[]DescriptionReference to the (one or more) NamedCredentialParameter used to configure a named credential.This field is available in API version 56.0 and later. |
| namedCredentialType | Field TypeNamedCredentialType (enumeration of type string)DescriptionSpecifies the type or behavior of this named credential. Valid values are:Legacy: The named credential is a legacy type, which means that it doesn’t use the schema introduced in the Winter ‘23 release. Used for backward compatibility.PrivateEndpoint: The named credential sends traffic through a private connection, bypassing the public internet. If the credential type is PrivateEndpoint, you must specify the value of OutboundNetworkConnection.SecuredEndpoint: The named credential is extensible and uses external credentials to control authentication and permissions.Standard: Reserved for internal use.This field is available in API version 56.0 and later. |
| oauthRefreshToken | Field TypestringDescriptionThe OAuth refresh token. Used to obtain a new access token for an end user when a token expires.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| oauthScope | Field TypestringDescriptionSpecifies the scope of permissions to request for the access token. Corresponds to Scope in the user interface.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| oauthToken | Field TypestringDescriptionThe access token that’s issued by your authorization server.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| outboundNetworkConnection | Field TypestringDescriptionSpecifies the outbound network connection that uses the named credential to send callouts to AWS.This field is valid only when NamedCredentialType is set to Legacy.First available in API version 49.0, this field is deprecated in API version 56.0 and later. |
| password | Field TypestringDescriptionThe password to be used by your org to access the external system. Ensure that the credentials have adequate privileges to access the external system. Depending on how you set up access, you might need to provide the administrator password.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| principalType | Field TypeExternalPrincipalType (enumeration of type string)DescriptionDetermines whether you're using one set or multiple sets of credentials to access the external system. Corresponds to Identity Type in the user interface. Values are:AnonymousNamedUserPerUserThis field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| protocol | Field TypeAuthenticationProtocol (enumeration of type string)DescriptionThe authentication protocol that’s required to access the external system. Valid values are:AwsSv4JwtJwtExchangeNoAuthenticationOauthPasswordFor connections to Amazon Web Services using Signature Version 4, use AwsSv4.For connections using a direct token system, select Jwt. If using an intermediary authorization provider to process JWTs and return access tokens, use JwtExchange.For Simple URL data sources, select NoAuthentication.For cloud-based Files Connect external systems, select Oauth. For on-premises systems, select Password.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| username | Field TypestringDescriptionThe username to be used by your org to access the external system. Ensure that the credentials have adequate privileges for performing callouts to the external system. Depending on how you set up access, you might need to provide the administrator username.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |

## NamedCredentialParameter

Represents the parameters that configure a named credential. Named credential parameters are used to configure Named Credential callouts through a combination of the type, name, and value/lookup fields. Available in API version 56.0 and later.

These parameters are used internally to provide a flexible architecture and are exposed here for packaging reasons.

| Field Name | Description |
| --- | --- |
| certificate | Field TypestringDescriptionIf the value of the parameterType field is ClientCertificate then this field references the certificate. |
| description | Field TypestringDescriptionA human-readable description of this named credential parameter. |
| externalCredential | Field TypestringDescriptionIf the value of the parameterType field is Authentication, then this field references an external credential that in turn references a set of authenticated user credentials. |
| globalNamedPrincipalCredential | Field TypebooleanDescriptionReserved for internal use. |
| managedFeatureEnabledCallout | Field TypebooleanDescriptionReserved for internal use. |
| outboundNetworkConnection | Field TypestringDescriptionThe lookup field for the OutboundNetworkConnection parameter type. Used when namedCredentialType is PrivateEndpoint. |
| parameterName | Field TypestringDescriptionRequired.The name of the named credential parameter. |
| parameterType | Field TypeNamedCredentialParamType (enumeration of type string)DescriptionRequired.The type of the named credential parameter. Valid values are:AllowedManagedPackageNamespaces: Allows managed packages identified by specified namespaces to use the named credential and make callouts through it.Authentication: Specifies that this parameter configures authentication using the credentials specified in the external credential, referenced by the externalCredential field.ClientCertificate: Specifies that this parameter configures a client certificate, referenced by the certificate field.ConnectionStatus: Reserved for internal use.CreatedByNamespace: Reserved for internal use.CustomParameter: Reserved for internal use.HttpHeader: Allows the user to specify custom headers to be added to the callout at run time. When using HttpHeader, the parameterName field must be the header name as a string, and parameterValue must be a formula of a header value that is evaluated at run time.ManagedByComponent: Reserved for internal use.ManagedByFeature: Reserved for internal use.ManagedByNamespace: Specifies the manageability capabilities for a packaged named credential. The parameterValue indicates whether the named credential uses subscriber-controlled or developer-controlled manageability.NamedCredentialOptions: Reserved for internal use.OutboundNetworkConnection: Specifies a lookup to an outbound network connection. When using this parameter type, the outboundNetworkConnection field is a string representing the lookup. Used when namedCredentialType is PrivateEndpoint.SfHttpRequestExtensionName: Reserved for internal use.StandardNamedCredentialType: Reserved for internal use.Url: Specifies that this parameter configures the URL of the endpoint. Store the actual URL in the parameterValue field. |
| parameterValue | Field TypestringDescriptionIf the parameterType field describes a literal value, such as Url, then the literal value is stored in this field, such as https://iam.amazonaws.com/. |
| readOnlyNamedCredential | Field TypebooleanDescriptionReserved for internal use. |
| sequenceNumber | Field TypeintDescriptionUsed to order HttpHeader parameters. |
| systemUserNamedCredential | Field TypebooleanDescriptionReserved for internal use. |

## Declarative Metadata Sample Definition

The following is an example of a NamedCredential component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

#### See Also

-   [ExternalCredential](atlas.en-us.api_meta.meta/api_meta/meta_externalcredential.htm "Represents the details of how Salesforce authenticates to the external system.")

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with
    Named Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential
    API Links - HTML (New Window)")

-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm " Apex Developer Guide: Invoking Callouts Using
    Apex - html (New Window)")

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm " Apex Developer Guide: Named Credentials as Callout
    Endpoints - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<NamedCredential xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>SampleNamedCredential</label>
    <namedCredentialType>SecuredEndpoint</namedCredentialType>
    <namedCredentialParameters>
        <description>IAM Endpoint</description>
        <parameterName>DefaultEndpoint</parameterName>
        <parameterType>Url</parameterType>
        <parameterValue>https://iam.amazonaws.com/</parameterValue>
    </namedCredentialParameters>
    <namedCredentialParameters>
        <description>AWS Auth</description>
        <parameterName>DefaultAuth</parameterName>
        <parameterType>Authentication</parameterType>
        <externalCredential>SampleExternalCredential</externalCredential>
    </namedCredentialParameters>
    <namedCredentialParameters>
        <description>Cert</description>
        <parameterName>DefaultCert</parameterName>
        <parameterType>ClientCertificate</parameterType>
        <certificate>MyCertificate</certificate>
    </namedCredentialParameters>
    <allowMergeFieldsInBody>true</allowMergeFieldsInBody>
    <allowMergeFieldsInHeader>true</allowMergeFieldsInHeader>
    <generateAuthorizationHeader>true</generateAuthorizationHeader>
</NamedCredential>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>NamedCredential</name>
    </types>
    <version>56.0</version>
</Package>
```

## Related Topics

- ExternalCredential (atlas.en-us.api_meta.meta/api_meta/meta_externalcredential.htm)
