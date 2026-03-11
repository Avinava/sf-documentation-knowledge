---
title: "SamlSsoConfig"
domain: metadata-api
topic: samlssoconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.485Z
keywords: [SamlSsoConfig, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# SamlSsoConfig

# SamlSsoConfig

Represents a SAML Single Sign-On configuration. This type extends the Metadata metadata type and inherits its fullName field. Single sign-on (SSO) is an authentication method that enables users to access multiple applications with one login and one set of credentials. For example, after users log in to your org, they can automatically access all apps from the App Launcher. You can set up your Salesforce org to trust a third-party identity provider to authenticate users. Or you can configure a third-party app to rely on your org for authentication.

## File Suffix and Directory Location

SamlSsoConfig components have the suffix .samlssoconfig and are stored in the samlssoconfigs folder.

## Version

SamlSsoConfig components are available in API version 28.0 and later.

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission or both the Customize Application and Modify All Data permissions can access this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| attributeNameIdFormat | string | For SAML 2.0, only and when identityLocation is set to Attribute. Possible values include unspecified, emailAddress, or persistent. All legal values can be found in the “Name Identifier Format Identifiers” section of the Assertions and Protocols SAML 2.0 specification. |
| attributeName | string | The name of the identity provider’s application. Get this name from your identity provider. |
| decryptionCertificate | string | The name of the certificate to use for decrypting incoming SAML assertions. This certificate is saved in the organization’s Certificate and Key Management list. Available in API version 30.0 and later. |
| errorUrl | string | When there's an error during login, specify the URL of the page where users are directed. It must be publicly accessible, such as a public site Visualforce page. The URL can be absolute or relative. |
| executionUserId | string | The user that runs the Apex handler class. The user must have the Manage Users permission. If you specify a SAML JIT handler class, a user is required. |
| identityLocation | SamlIdentityLocationType (enumeration of type string) | The location in the assertion where a user is identified. Valid values are:SubjectNameId — The identity is in the <Subject> statement of the assertion.Attribute — The identity is specified in an <AttributeValue>, located in the <Attribute> of the assertion. |
| identityMapping | SamlIdentityType (enumeration of type string) | The identifier the service provider uses for the user during Just-in-Time user provisioning. Valid values are:Username — The user’s Salesforce username.FederationId — The federation ID from the user object; the identifier used by the service provider for the user.UserId — The user ID from the user’s Salesforce organization. |
| issuer | string | The identification string for the Identity Provider. |
| loginUrl | string | For SAML 2.0 only: The URL where Salesforce sends a SAML request to start the login sequence. |
| logoutUrl | string | For SAML 2.0 only: The URL to direct the user to when they click the Logout link. The default is https://salesforce.com. |
| name | string | The unique name used by the API and managed packages. The name must begin with a letter and use only alphanumeric characters and underscores. The name cannot end with an underscore or have two consecutive underscores. |
| oauthTokenEndpoint | string | For SAML 2.0 only: The ACS URL used with enabling Salesforce as an identity provider in the web single sign-on OAuth assertion flow. |
| redirectBinding | boolean | Choose the binding mechanism your identity provider requests for your SAML messages. Values are:HTTP POST — HTTP POST binding sends SAML messages using base64-encoded HTML forms.HTTP Redirect — HTTP Redirect binding sends base64-encoded and URL-encoded SAML messages within URL parameters. |
| requestSignatureMethod | string | The method that’s used to sign the SAML request. Valid values are RSA-SHA1 and RSA-SHA256. |
| requestSigningCertId | string | The 18-digit ID for the certificate used to generate the signature on a SAML request to the identity provider. The certificate is saved in the Certificate and Key Management page in Setup. |
| salesforceLoginUrl | string | The URL associated with login for the web single sign-on flow.NoteWhen encryption is enabled, the URL has a parameter containing the ID of the SAML configuration, sc=samlSsoConfigId. For example, https://mycompany.my.salesforce.com?sc=0LEB0000000CCC. This change applies to API Version 47.0 and later. |
| samlEntityId | string | The issuer in SAML requests generated by Salesforce, and is also the expected audience of any inbound SAML Responses. Salesforce recommends that you use your My Domain login URL. |
| samlJitHandlerId | string | The name of an existing Apex class that implements the Auth.SamlJitHandler interface. |
| samlVersion | SamlType (enumeration of type string) | The SAML version in use. Valid values are:SAML1_1 — SAML 1.1SAML2_0 — SAML 2.0 |
| singleLogoutBinding | SamlSpSLOBinding (enumeration of type string) | The HTTP binding type. This value determines where to put the LogoutRequest or LogoutResponse in the SAML request during single logout (SLO). The value is base64 encoded. Valid values are:RedirectBinding — Sent in the query string, deflated.PostBinding — Sent in the POST body, not deflated. |
| singleLogoutUrl | string | The SAML single logout endpoint. This URL is the endpoint where Salesforce sends LogoutRequests (when Salesforce initiates a logout), or LogoutResponses (when the identity provider initiates a logout). |
| useConfigRequestMethod | boolean | If true, applies the selected Request Signature Method (RSM) during single logout. If false, the default RSM (RSA-SHA1) is applied. |
| useSameDigestAlgoForSigning | boolean | If true, uses a digest algorithm based on the selected Request Signature Method (RSM). For example, if the selected RSM is RSA-SHA256, the digest algorithm is set to SHA-256.If false, uses the default digest algorithm (SHA-1), regardless of the selected RSM.This field is available in API version 55.0 and later. You can edit this field only for legacy SAML configurations created before Spring ’22. For configurations created after Spring ’22, this field is true by default. |
| userProvisioning | boolean | If true, Just-in-Time user provisioning is enabled, which creates users the first time they log in. Specify Federation ID for the identityMapping value to use this feature. |
| validationCert | string | The certificate used to validate the request. Get this certificate from your identity provider. |

## Declarative Metadata Sample Definition

The following is an example of a SamlSsoConfig component. The validation certificate string has been truncated for readability.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").