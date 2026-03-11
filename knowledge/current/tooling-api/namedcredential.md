---
title: "NamedCredential"
domain: tooling-api
topic: namedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.335Z
keywords: [NamedCredential, Important, Note, Supported, SOAP, API, Calls, REST, Methods, Fields, NamedCredentialParameter, See]
---

# NamedCredential

# NamedCredential

Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted for using the previous encryption scheme have been migrated to the new framework.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AllowMergeFieldsinBody | Field TypebooleanDescriptionSpecifies whether Apex code can use merge fields to populate the HTTP request body with org data when a callout is made. Corresponds to Allow Merge Fields in HTTP Body in the user interface. Defaults to false. |
| AllowMergeFieldsinHeader | Field TypebooleanDescriptionSpecifies whether Apex code can use merge fields to populate the HTTP header with org data when a callout is made. Corresponds to Allow Merge Fields in HTTP Header in the user interface. Defaults to false. |
| AuthProviderId | TypestringPropertiesNillableDescriptionThe authentication provider that the AuthProviderId component represents.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| AuthTokenEndpointUrl | TypetextareaPropertiesNillableDescriptionThe URL where JSON Web Tokens (JWTs) are exchanged for access tokens.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| AwsAccessKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFirst part of the access key used to sign programmatic requests to Amazon Web Services (AWS). Use when AWS Signature Version 4 is your authentication protocol.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| AwsAccessSecret | TypetextareaPropertiesNillableDescriptionThe second part of the access key that's used to sign programmatic requests to AWS. Use when AWS Signature Version 4 is your authentication protocol.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| AwsRegion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies which AWS Region the named credential accesses.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| AwsService | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies which AWS resource the named credential accesses.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| CalloutStatus | Field TypeCalloutStatus (enumeration of type string)DescriptionSpecifies whether the named credential is enabled for callouts.Valid values are:Disabled: The named credential is disabled for callouts.Enabled: The named credential is enabled for callouts.This field is available in API version 59.0 and later. |
| CertificateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf you specify a certificate, your Salesforce org supplies it when establishing each two-way SSL connection with the external system. The certificate is used for digital signatures, which verify that requests are coming from your Salesforce org.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0.Relationship NameCertificateRelationship TypeLookupRefers ToCertificate |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the named credential used in the API.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Endpoint | TypetextareaPropertiesNillableDescriptionThe URL or root URL of the callout endpoint. Corresponds to URL in the user interface.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated type in Tooling API. The full name can include a namespace prefix. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| GenerateAuthorizationHeader | Field TypebooleanDescriptionSpecifies whether Salesforce generates an authorization header and applies it to each callout that references the named credential. Corresponds to Generate Authorization Header in the user interface. Defaults to true.This field is available in API version 41.0 and later. |
| JwtAudience | TypetextareaPropertiesNillableDescriptionExternal service or other allowed recipients for the JWT. Written as JSON, with a quoted string for a single audience and an array of quoted strings for multiple audiences. Single audience example: “aud1”. Multiple audiences example: [“aud1”, “aud2”, “aud3”].This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| JwtFormulaSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFormula string calculating the Subject of the JWT. API names and constant strings, in single quotes, can be included. Allows a dynamic Subject unique per user requesting the token. For example, 'User='+$User.Id. Use this field when principalType is set to PerUser. Corresponds to Per User Subject.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| JwtIssuer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecify who issued the JWT using a case-sensitive string.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| JwtSigningCertificateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionCertificate verifying the JWT’s authenticity to external sites.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0.Relationship NameJwtSigningCertificateRelationship TypeLookupRefers ToCertificate |
| JwtTextSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStatic text, without quotes, that specifies the JWT Subject. Use this field when principalType is set to NamedUser. Corresponds to Named Principal Subject in the user interface.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| JwtValidityPeriodSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSpecify the number of seconds that the token is valid.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLabel for the MasterLabel. In the UI, this field is Label. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionImportantWhere possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. The main label for the named credential. This display value is the internal label that doesn’t get translated. |
| Metadata | TypeNamedCredentialPropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated metadata type and related fields in Tooling API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamedCredentialParameters | TypeNamedCredentialParameter[]PropertiesNillableDescriptionReference to the (one or more) NamedCredentialParameter used to configure a named credential.This field is available in API version 56.0 and later. |
| NamedCredentialType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type or behavior of this named credential. Valid values are:Legacy: The named credential is a legacy type, which means that it doesn’t use the schema introduced in the Winter ‘23 release. Used for backward compatibility.PrivateEndpoint: The named credential sends traffic through a private connection, bypassing the public internet. If the credential type is PrivateEndpoint, you must specify the value of OutboundNetworkConnection.SecuredEndpoint: The named credential is extensible and uses external credentials to control authentication and permissions.Standard: Reserved for internal use.This field is available in API version 56.0 and later. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| OauthRefreshToken | TypetextareaPropertiesNillableDescriptionThe OAuth refresh token. Used to obtain a new access token for an end user when a token expires.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| OauthScope | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the scope of permissions to request for the access token. Corresponds to Scope in the user interface.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| OauthToken | TypetextareaPropertiesNillableDescriptionThe access token that’s issued by your authorization server.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| OutboundNetworkConnectionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the outbound network connection that uses the named credential to send callouts to AWS.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0.Relationship NameOutboundNetworkConnectionRelationship TypeLookupRefers ToOutboundNetworkConnection |
| Password | TypetextareaPropertiesNillableDescriptionThe password to be used by your org to access the external system. Ensure that the credentials have adequate privileges to access the external system. Depending on how you set up access, you might need to provide the administrator password.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| PrincipalType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDetermines whether you're using one set or multiple sets of credentials to access the external system. Corresponds to Identity Type in the user interface. Valid values are:AnonymousNamedUserPerUserThis field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| Protocol | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe authentication protocol that’s required to access the external system. Valid values are:AwsSv4JwtJwtExchangeNoAuthenticationOauthPasswordFor connections to Amazon Web Services using Signature Version 4, use AwsSv4.For connections using a direct token system, select Jwt. If using an intermediary authorization provider to process JWTs and return access tokens, use JwtExchange.For Simple URL data sources, select NoAuthentication.For cloud-based Files Connect external systems, select Oauth. For on-premises systems, select Password.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username to be used by your org to access the external system. Ensure that the credentials have adequate privileges for performing callouts to the external system. Depending on how you set up access, you might need to provide the administrator username.This field is valid only when NamedCredentialType is set to Legacy.This field is deprecated in API version 56.0. |

## NamedCredentialParameter

Represents the parameters that configure a named credential. Named credential parameters are used to configure Named Credential callouts through a combination of the type, name, and value/lookup fields.

These parameters are used internally to provide a flexible architecture and are exposed here for packaging reasons.

| Field | Description |
| --- | --- |
| Certificate | TypestringPropertiesNillableDescriptionIf the value of the ParameterType field is ClientCertificate then this field references the certificate.Relationship NameCertificateRelationship TypeLookupRefers ToCertificate |
| Description | TypestringPropertiesNillableDescriptionA human-readable description of this named credential parameter. |
| ExternalCredential | TypestringPropertiesNillableDescriptionIf the value of the ParameterType field is Authentication, then this field references an external credential that in turn references a set of authenticated user credentials. |
| OutboundNetworkConnection | TypestringPropertiesNillableDescriptionThe lookup field for the OutboundNetworkConnection parameter type. Used when namedCredentialType is PrivateEndpoint. |
| ParameterSettingsGlobalNamedPrincipalCredential | Field TypebooleanDescriptionReserved for internal use. |
| ParameterSettingsManagedFeatureEnabledCallout | Field TypebooleanDescriptionReserved for internal use. |
| ParameterSettingsReadOnlyNamedCredential | Field TypebooleanDescriptionReserved for internal use. |
| ParameterSettingsSystemUserNamedCredential | Field TypebooleanDescriptionReserved for internal use. |
| ParameterName | TypestringPropertiesNillableDescriptionRequired.The name of the named credential parameter. |
| ParameterType | TypeNamedCredentialParamType (enumeration of type string)PropertiesNillableDescriptionRequired.The type of the named credential parameter.Valid values are:AllowedManagedPackageNamespaces: Allows managed packages identified by specified namespaces to use the named credential and make callouts through it.Authentication: Specifies that this parameter configures authentication using the credentials specified in the external credential, referenced by the ExternalCredential field.ClientCertificate: Specifies that this parameter configures a client certificate, referenced by the Certificate field.ConnectionStatus: Reserved for internal use.CreatedByNamespace: Reserved for internal use.CustomParameter: Reserved for internal use.HttpHeader: Allows the user to specify custom headers to be added to the callout at run time. When using HttpHeader, the ParameterName field must be the header name as a string, and ParameterValue must be a formula of a header value that is evaluated at run time.ManagedByComponent: Reserved for internal use.ManagedByFeature: Reserved for internal use.ManagedByNamespace: Specifies the manageability capabilities for a packaged named credential. The ParameterValue field indicates whether the named credential uses subscriber-controlled or developer-controlled manageability.NamedCredentialOptions: Reserved for internal use.OutboundNetworkConnection: Specifies a lookup to an outbound network connection. When using this parameter type, the OutboundNetworkConnection field is a string representing the lookup. Used when namedCredentialType is PrivateEndpoint.SfHttpRequestExtensionName: Reserved for internal use.StandardNamedCredentialType: Reserved for internal use.Url: Specifies that this parameter configures the URL of the endpoint. Store the actual URL in the ParameterValue field. |
| ParameterValue | TypestringPropertiesNillableDescriptionIf the ParameterType field describes a literal value, such as Url, then the literal value is stored in this field, such as https://iam.amazonaws.com/. |
| SequenceNumber | TypeintPropertiesNillableDescriptionUsed to order HttpHeader parameters. |

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