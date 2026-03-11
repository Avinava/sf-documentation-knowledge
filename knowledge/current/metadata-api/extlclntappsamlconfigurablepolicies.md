---
title: "ExtlClntAppSamlConfigurablePolicies"
domain: metadata-api
topic: extlclntappsamlconfigurablepolicies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.610Z
keywords: [ExtlClntAppSamlConfigurablePolicies, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ExtlClntAppSamlConfigurablePoliciesAttribute, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExtlClntAppSamlConfigurablePolicies

# ExtlClntAppSamlConfigurablePolicies

Represents SAML configuration policies for an external client app. Use this type to configure Salesforce as an identity provider for SAML single sign-on (SSO). In this type of SSO configuration, users log in to a third-party service provider, such as Google, using their Salesforce credentials.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppSamlConfigurablePolicies components have the suffix .ecaSamlPlcy and are stored in the extlClntAppSamlConfigurablePolicies folder.

## Version

ExtlClntAppSamlConfigurablePolicies components are available in API version 63.0 and later.

## Special Access Rules

To use the ExtlClntAppSamlConfigurablePolicies type, you must have the View all External Client Apps, view their settings, and edit their policies user permission.

This type must be related to a parent [ExternalClientApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externalclientapplication.htm). Because external client apps with SAML configurations can't be packaged, the distributionState for the parent external client app must be set to Local.

The parent external client app must also have an associated [ExtlClntAppConfigurablePolicies](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_extlclntappconfigurablepolicies.htm) metadata type where the isSamlPluginEnabled field is set to true.

## Fields

| Field Name | Description |
| --- | --- |
| acsUrl | Field TypestringDescriptionRequired. The assertion consumer service (ACS) URL from the third-party service provider. The ACS URL is the endpoint where the service provider receives SAML responses from Salesforce. |
| certificate | Field TypestringDescriptionA security certificate that the third-party service provider uses to sign SAML requests. Include this field only if your service provider signs SAML requests and you also want to use a service provider-initiated SAML flow.If you include a certificate, Salesforce requires that all SAML requests from the service provider are signed. If you don't include a certificate, Salesforce accepts all SAML requests, whether or not they're signed. |
| commaSeparatedPermissionSet | Field TypestringDescriptionA comma-separated list of permission set IDs that defines the user permissions required for an end user to use the SAML SSO flow. The permission sets that you specify here apply to the entire app, not just its SAML configuration. |
| commaSeparatedProfile | Field TypestringDescriptionA comma-separated list of profile IDs that defines the profiles required for an end user to use the SAML SSO flow. Like permission sets, profiles define user permissions. The profiles that you specify here apply to the entire app, not just its SAML configuration. We recommend that you use permission sets to manage user permissions instead of profiles. |
| customAttributes | Field TypeExtlClntAppSamlConfigurablePoliciesAttribute[]DescriptionCustom attributes that you can use to send more information about the user in SAML responses. For example, send information about the user's country. The service provider can use the information to validate the user's identity. |
| encryptionCertificate | Field TypestringDescriptionA certificate that's used to encrypt SAML assertions that Salesforce sends to the service provider. Use an X.509 certificate that's saved in your Certificate and Key Management settings. To get the certificate, work with a certificate provider. If you include an encryptionCertificate, make sure that your service provider is configured to decrypt SAML assertions. |
| encryptionType | Field TypeExtlClntAppSamlEncryptTypeDescriptionIf you include an encryptionCertificate to encrypt SAML assertions, the encryptionType field specifies the encryption method. When the service provider receives SAML assertions from Salesforce, it detects this method and decrypts it.These values are valid.AES_128—Advanced Encryption Standard (AES) encryption algorithm with a 128-bit cryptographic key.AES_256—AES encryption algorithm with a 256-bit cryptographic key.For more information about AES encryption from the National Institute of Standards and Technology, see https://www.nist.gov/publications/advanced-encryption-standard-aes-0. |
| entityUrl | Field TypestringDescriptionRequired. The entity ID from the third-party service provider. The entity ID is a globally unique ID that Salesforce uses to recognize the service provider. |
| externalClientApplication | Field TypestringDescriptionRequired. The label for the parent ExternalClientApplication. |
| issuer | Field TypestringDescriptionSpecifies the URI from which Salesforce sends SAML responses. The service provider uses this value to confirm that the response came from Salesforce. If you don't include this field, Salesforce uses your My Domain by default. Include this field to specify a different value, such as an Experience Cloud site URL. |
| label | Field TypestringDescriptionA name for your external client app SAML policies configuration. |
| nameIdFormat | Field TypeExtlClntAppNameIdFormatTypeDescriptionSpecifies the format of the user's SSO identifier (dictated by the value of the subjectType field) in SAML messages. So that the service provider can recognize the user, the name ID format that Salesforce uses for SAML responses must match the format that the service provider uses. Get this value from your service provider.These values are valid.Unspecified (default)—No format.EmailAddress—The user's identifier is formatted as an email address.Persistent—The user's identifier is in an opaque format. Only Salesforce and the service provider can recognize it. The identifier doesn't change based on context.Transient—Like the Persistent identifier, the user's identifier is in an opaque format. But Transient identifiers are temporary values that can change. |
| signingAlgorithmType | Field TypeExtlClntAppSamlSignAlgoTypeDescriptionThe signing algorithm that Salesforce uses to secure SAML messages. The signing algorithm generates a signature by hashing the private key that's stored in the certificate. Salesforce includes this signature in the SAML response—in both the response body and in the SAML assertion. When the service provider receives SAML responses, it validates the signature. Salesforce also applies this algorithm to single logout requests and responses.These values are valid.SHA1—Secure Hash Algorithm (SHA) 1 algorithm, which generates a 160-bit hash value.SHA256—SHA-256 algorithm,which generates a 256-bit hash value. |
| singleLogoutBindingType | Field TypeExtlClntAppSamlBindingTypeDescriptionThe SAML HTTP binding type that the service provider uses when it initiates single logout. The binding type determines how the service provider transfers HTTP information to Salesforce. These values are valid.PostBinding–The service provider uses POST requests for single logout.RedirectBinding—The service provider sends single logout requests through the browser via GET requests. |
| singleLogoutUrl | Field TypestringDescriptionThe SAML single logout endpoint on the service provider. When Salesforce initiates single logout, it sends logout requests to this endpoint. |
| startUrl | Field TypestringDescriptionA URL where users are directed after they authenticate. For example, direct users to a specific page in the service provider app.Deprecated. Use the startUrl field on the ExtlClntAppConfigurablePolicies metadata type instead. |
| subjectCustomAttribute | Field TypestringDescriptionIf the subjectType is CustomAttribute, specify which field you want to use to identify the user. Choose an existing field on the User object, or create a custom User field. |
| subjectType | Field TypeExtlClntAppSamlSubjectTypeDescriptionSpecifies the user's SSO identifier. These values are valid.Username—The user's Salesforce username.FederationId—The user's federation ID, which maps to the FederationIdentifier—A field on the User object. The federation ID can be any value as long as both Salesforce and the service provider can recognize it. For example, get a value from the service provider and then specify it in Salesforce.UserId—The user's 15-character Salesforce user ID.CustomAttribute—An identifier that's taken from a custom field value. Specify the custom field in the subjectCustomAttribute field.PersistentId—An opaque identifier that only Salesforce and the service provider recognize. |

## ExtlClntAppSamlConfigurablePoliciesAttribute

Represents custom attributes that provide more information about the user. The attributes are included in SAML assertions in SAML responses that Salesforce sends to the service provider.

| Field Name | Description |
| --- | --- |
| formula | Field TypestringDescriptionRequired.A field that stores the user information that you want to send. Format the value as $<object name>.<field>.For example: $Organization.Country to indicate the Country field on the Organization object. |
| key | Field TypestringDescriptionRequired.A unique name for the attribute to help you and the service provider recognize it in SAML responses. |

## Declarative Metadata Sample Definition

The following is an example of an ExtlClntAppSamlConfigurablePolicies component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").