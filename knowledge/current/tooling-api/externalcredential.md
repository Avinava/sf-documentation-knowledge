---
title: "ExternalCredential"
domain: tooling-api
topic: externalcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.863Z
keywords: [ExternalCredential, Important, Note, Supported, SOAP, API, Calls, REST, Methods, Fields, ExternalCredentialParameter, See]
---

# ExternalCredential

# ExternalCredential

Represents the details of how Salesforce authenticates to the external system. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. 

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme have been migrated to the new framework.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AuthenticationProtocol | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired.The authentication protocol that’s required to access the external system. Valid values are:AwsSv4 — AWS Signature Version 4Basic — Authentication using a static username and passwordCustom — User-created authentication. Specify the permission set, sequence number, and authentication parameters. Each authentication parameter requires a name and value.Jwt — Reserved for future useJwtExchange— Reserved for future useNoAuthentication — Reserved for future useOauth — Oauth 2.0Password — Reserved for future useFor connections to Amazon Web Services using Signature Version 4, use AwsSv4.For connections using a direct token system, use Jwt. If using an intermediary authorization provider to process JWTs and return access tokens, use JwtExchange.For Simple URL data sources, select NoAuthentication.For connections using a static username and password, use Basic.For cloud-based Files Connect external systems, select Oauth. For on-premises systems, select Password. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA meaningful description of the external credential. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the external credential object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| ExternalCredentialParameters | TypeExternalCredentialParameter[]PropertiesNillableDescriptionOne or more sets of parameters that further configure the external credential. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of ExternalCredential in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the external credential. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe main label for the external credential. In the UI, this field is Label. |
| Metadata | TypeExternalCredentialPropertiesCreate, Nillable, UpdateDescriptionThe external credential’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |

## ExternalCredentialParameter

Represents the parameters that configure an external credential. External credential parameters are used to configure external credential callouts through a combination of the type, name, and value/lookup fields. Available in API version 56.0 and later.

These parameters are used internally to provide a flexible architecture and are exposed here for packaging reasons.

| Field | Description |
| --- | --- |
| AuthProvider | TypestringDescriptionReference to an authentication provider that the AuthProvider component represents, which defines the service that provides the login process and approves access to the external system. |
| Certificate | TypestringDescriptionIf the value of the ParameterType field is SigningCertificate, then this field references the certificate. |
| Description | TypestringDescriptionA human-readable description of this external credential parameter. |
| ExtlAuthIdentityProvider | Field TypestringDescriptionReference to an external authentication identity provider that the ExternalAuthIdentityProvider component represents. The ExternalAuthIdentityProvider defines the service that provides the login process and approves access to the external system.To simplify the configuration process for the authentication providers used by your named credentials, use an ExternalAuthIdentityProvider instead of an AuthProvider. Link the external auth identity provider to an external credential. |
| ParameterGroup | TypestringDescriptionGroups a parameter along with its respective principal. For example, with dynamic scopes the user can apply a scope AuthParameter only when authenticated against a specific principal with a matching ParameterGroup value.If a value for ParameterGroup isn’t provided, ParameterGroup defaults to the ParameterName value for PER_USER and NAMED_PRINCIPAL. For all other parameters ParameterGroup defaults to DEFAULT_GROUP. |
| ParameterName | TypestringDescriptionRequired.The name of the external credential parameter. |
| ParameterType | TypeExternalCredentialParamType (enumeration of type string)DescriptionRequired.The type of external credential parameter. The value of this field drives the behavior of the parameter. Valid values are:AdditionalRefreshStatusCode: Allows the user to specify 4xx, 6xx, 7xx, 8xx, and 9xx HTTP status codes that trigger Salesforce to refresh expired or invalid access tokens, in addition to the standard 401 HTTP status code response.AuthHeader: Allows the user to specify custom authentication headers to be added to the callout at run time. When using AuthHeader, the ParameterName field must be the header name as a string, and ParameterValue must be a formula of a header value that is evaluated at run time. SequenceNumber determines the order in which headers are sent out in the callout. Headers with lower numbers are sent out first.AuthParameter: Allows the user to add additional authentication settings. ParameterName defines the parameter to set. For example, AwsRegion sets the AWS Region parameter to apply for an AWS Signature V4 authentication protocol and ParameterValue is the value for the AWS Region.AuthProtocolVariant: Used to specify a variant of an authentication protocol. For example, Aws Sts as a variant when the ParameterName is AwsSv4 and the ParameterValue is AwsSv4_STS.AuthProvider: Specifies that this parameter configures an authentication provider referenced by the AuthProvider field.AuthProviderUrl: Specifies the authentication endpoint URL. For example, if the authentication type is OAuth with JWT Bearer Flow, then ParameterValue is an authentication token endpoint.AuthProviderUrlQueryParameter: Allows the user to specify custom query parameters to be added to the callout to the authentication provider at run time. Currently, supported only for AWS Signature V4 with STS. The allowed AuthProviderUrlQueryParameter values are AwsExternalId and AwsDuration, used with AWS STS.AwsStsPrincipal: Configures AWS Signature V4 along with STS. ParameterName is AwsStsPrincipal and ParameterValue isn’t specified.CreatedByNamespace: Reserved for internal use.ExternalAuthIdentityProvider: Specifies that this parameter configures an authentication provider referenced by the ExtlAuthIdentityProvider field.GlobalNamedPrincipal: Reserved for internal use.JwtBodyClaim: Specifies a JWT (JSON Web Token) body claim, where ParameterName is the key and ParameterValue is the value. For example, the parameter name for a JWT audience is aud.JwtHeaderClaim: Specifies a JWT header claim, where ParameterName is the key and ParameterValue is the value. For example, the parameter name for a JWT key identifier is kid.ManagedByComponent: Reserved for internal use.ManagedByFeature: Reserved for internal use.NamedPrincipal: Specifies that the parameter uses the same set of user credentials for all users who access the external system.PerUserPrincipal: Provides access control at the individual user level.SfHttpRequestExtensionName: Reserved for internal use.SigningCertificate: Specifies the certificate used for an authentication signature. Use the Certificate field to specify the certificate name. Used for OAuth with JWT Bearer Flow and AwsSv4 STS with RolesAnywhere authentication.SystemUserPrincipal: Reserved for internal use. |
| ParameterValue | TypestringDescriptionIf the ParameterType field describes a literal value then the literal value is stored in this field. |
| Principal | TypestringDescriptionIf the value of the ParameterType field is either NamedPrincipal or PerUserPrincipal, this field points to a permission set. That value then determines the set of users that are allowed to use credentials provided by the credential provider. The value of the ParameterName field specifies the name of this principal.First available in API version 56.0, this field is removed in API version 58.0 and later. |
| SequenceNumber | TypeintDescriptionSpecifies the order of principals to apply when a user participates in more than one principal. For example, a user could be part of multiple permission sets that are applicable for a credential provider. Priority is from lower to higher numbers.You can set this field only when ParameterType is NamedPrincipal. |

#### See Also

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")
    
-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with Named
    Credentials - HTML (New Window)")
    
-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential API
    Links - HTML (New Window)")
    
-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm " Apex Developer Guide: Invoking Callouts Using
    Apex - html (New Window)")
    
-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm " Apex Developer Guide: Named Credentials as Callout
    Endpoints - HTML (New Window)")