---
title: "ExternalCredential"
domain: metadata-api
topic: externalcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:39.225Z
estimatedTokens: 2683
namespace: CreatedByNamespace
keywords: [ExternalCredential, how, Salesforce, authenticates, external, system, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# ExternalCredential

> Represents the details of how Salesforce authenticates to the
			external system.

**Namespace:** `CreatedByNamespace`

# ExternalCredential

Represents the details of how Salesforce authenticates to the external system.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme have been migrated to the new framework.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExternalCredential components have the suffix .externalCredential and are stored in the externalCredentials folder.

## Version

ExternalCredential components are available in API version 56.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| authenticationProtocol | Field TypeAuthenticationProtocol (enumeration of type string)DescriptionRequired.The authentication protocol that’s required to access the external system. Valid values are:AwsSv4BasicCustom — User-created authentication. Specify the permission set, sequence number, and authentication parameters. Each authentication parameter requires a name and value.Jwt — Reserved for future useJwtExchange — Reserved for future useNoAuthentication —Reserved for future useOauthPassword — Reserved for future useFor connections to Amazon Web Services using Signature Version 4, use AwsSv4.For connections using a direct token system, select Jwt.For Simple URL data sources, select Custom with no parameters.For cloud-based Files Connect external systems, select Oauth. For on-premises systems, select Password. |
| description | Field TypestringDescriptionA meaningful description of the external credential. |
| externalCredentialParameters | Field TypeExternalCredentialParameter[]DescriptionOne or more sets of parameters that further configure the external credential. |
| label | Field TypestringDescriptionRequired.Name of the external credential. |

## ExternalCredentialParameter

Represents the parameters that configure an external credential. External credential parameters are used to configure external credential callouts through a combination of the type, name, and value and lookup fields. Available in API version 56.0 and later.

These parameters are used internally to provide a flexible architecture and are exposed here for packaging reasons.

| Field Name | Description |
| --- | --- |
| authProvider | Field TypestringDescriptionReference to an authentication provider that the AuthProvider component represents, which defines the service that provides the login process and approves access to the external system. |
| certificate | TypestringDescriptionIf the value of parameterType is SigningCertificate, then this field references the certificate. |
| description | Field TypestringDescriptionA human-readable description of this external credential parameter. |
| externalAuthIdentityProvider | Field TypestringDescriptionReference to an external authentication identity provider that the externalAuthIdentityProvider component represents. The externalAuthIdentityProvider defines the service that provides the login process and approves access to the external system.To simplify the configuration process for the authentication providers used by your named credentials, use an externalAuthIdentityProvider instead of an authProvider. Link the external auth identity provider to an external credential. |
| parameterGroup | Field TypestringDescriptionGroups a parameter along with its respective principal. For example, with dynamic scopes, the user can apply a scope AuthParameter only when authenticated against a specific principal with a matching parameterGroup value.If a value for parameterGroup isn’t provided, parameterGroup defaults to the parameterName value for PER_USER and NAMED_PRINCIPAL. For all other parameters parameterGroup defaults to DEFAULT_GROUP. |
| parameterName | Field TypestringDescriptionRequired.The name of the external credential parameter. |
| parameterType | Field TypeExternalCredentialParamType (enumeration of type string)DescriptionRequired.The type of external credential parameter. The value of this field drives the behavior of the parameter. Valid values are:AdditionalRefreshStatusCode: Allows the user to specify 4xx, 6xx, 7xx, 8xx, and 9xx HTTP status codes that trigger Salesforce to refresh expired or invalid access tokens, in addition to the standard 401 HTTP status code response.AuthHeader: Allows the user to specify custom authentication headers to be added to the callout at run time. When using AuthHeader, the parameterName field must be the header name as a string, and parameterValue must be a formula of a header value that is evaluated at run time. sequenceNumber determines the order in which headers are sent out in the callout. Headers with lower numbers are sent out first.AuthParameter: Allows the user to add additional authentication settings. parameterName defines the parameter to set. For example, AwsRegion sets the AWS Region parameter to apply for an AWS Signature V4 authentication protocol and parameterValue is the value for the AWS Region.AuthProtocolVariant: Used to specify a variant of an authentication protocol. For example, Aws Sts as a variant when the ParameterName is AwsSv4 and the ParameterValue is AwsSv4_STS.AuthProvider: Specifies that this parameter configures an authentication provider referenced by the authProvider field.AuthProviderUrl: Specifies the authentication endpoint URL. For example, if the authentication type is OAuth with JWT Bearer Flow, then parameterValue is an authentication token endpoint.AuthProviderUrlQueryParameter: Allows the user to specify custom query parameters to be added to the callout to the authentication provider at run time. Currently, supported only for AWS Signature V4 with STS. The allowed AuthProviderUrlQueryParameter values are AwsExternalId and AwsDuration, used with AWS STS.AwsStsPrincipal: Configures AWS Signature V4 along with STS. parameterName is AwsStsPrincipal and parameterValue isn’t specified.CreatedByNamespace: Reserved for internal use.ExternalAuthIdentityProvider: Specifies that this parameter configures an authentication provider referenced by the externalAuthIdentityProvider field.GlobalNamedPrincipal: Reserved for internal use.JwtBodyClaim: Specifies a JWT (JSON Web Token) body claim, where parameterName is the key and parameterValue is the value. For example, the parameter name for a JWT audience is aud.JwtHeaderClaim: Specifies a JWT header claim, where parameterName is the key and parameterValue is the value. For example, the parameter name for a JWT key identifier is kid.ManagedByComponent: Reserved for internal use.ManagedByFeature: Reserved for internal use.NamedPrincipal: Specifies that the parameter uses the same set of user credentials for all users who access the external system.PerUserPrincipal: Provides access control at the individual user level.SfHttpRequestExtensionName: Reserved for internal use.SigningCertificate: Specifies the certificate used for an authentication signature. Use the certificate field to specify the certificate name. Used for OAuth with JWT Bearer Flow and AwsSv4 STS with RolesAnywhere authentication.SystemUserPrincipal: Reserved for internal use. |
| parameterValue | Field TypestringDescriptionIf the parameterType field describes a literal value then the literal value is stored in this field. |
| principal | Field TypestringDescriptionIf the value of the parameterType field is either NamedPrincipal or PerUserPrincipal, this field points to a permission set. That value then determines the set of users that are allowed to use credentials provided by the credential provider. The value of the parameterName field specifies the name of this principal.First available in API version 56.0, this field is removed in API version 58.0 and later. |
| sequenceNumber | Field TypeintDescriptionSpecifies the order of principals to apply when a user participates in more than one principal. For example, a user could be part of multiple permission sets that are applicable for a credential provider. Priority is from lower to higher numbers.You can set this field only when parameterType is NamedPrincipal. |

## Declarative Metadata Sample Definition

The following is an example of an ExternalCredential component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

#### See Also

-   [NamedCredential](atlas.en-us.api_meta.meta/api_meta/meta_namedcredential.htm "Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.")

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
<ExternalCredential xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>SampleExternalCredential</label>
    <authenticationProtocol>AwsSv4</authenticationProtocol>
    <externalCredentialParameters>
        <parameterName>Principal</parameterName>
        <parameterType>NamedPrincipal</parameterType>
        <sequenceNumber>1</sequenceNumber>
    </externalCredentialParameters>
    <externalCredentialParameters>
        <parameterName>AwsService</parameterName>
        <parameterValue>iam</parameterValue>
        <parameterType>AuthParameter</parameterType>
    </externalCredentialParameters>
    <externalCredentialParameters>
        <parameterName>AwsRegion</parameterName>
        <parameterValue>us-east-1</parameterValue>
        <parameterType>AuthParameter</parameterType>
    </externalCredentialParameters>
</ExternalCredential>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExternalCredential</name>
    </types>
    <version>56.0</version>
</Package>
```

## Related Topics

- NamedCredential (atlas.en-us.api_meta.meta/api_meta/meta_namedcredential.htm)
