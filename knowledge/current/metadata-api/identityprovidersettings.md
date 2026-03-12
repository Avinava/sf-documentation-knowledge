---
title: "IdentityProviderSettings"
domain: metadata-api
topic: identityprovidersettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.895Z
estimatedTokens: 678
keywords: [IdentityProviderSettings, settings, enable, disable, Salesforce, SAML, identity, provider, sign-on, SSO, Parent, Manifest, Access, File, Suffix]
---

# IdentityProviderSettings

> Represents the settings used to enable or disable
			Salesforce as a SAML identity provider for single sign-on (SSO).

# IdentityProviderSettings

Represents the settings used to enable or disable Salesforce as a SAML identity provider for single sign-on (SSO).

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

IdentityProviderSettings values are stored in the IdentityProvider.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

IdentityProviderSettings components are available in API version 57.0 and later.

## Special Access Rules

To access IdentityProviderSettings, a user must have the Customize Application user permission.

## Fields

| Field Name | Description |
| --- | --- |
| certificateName | Field TypestringDescriptionRequired.The certificate that Salesforce uses to communicate with SAML SSO service providers, such as third-party service providers or another Salesforce org acting as a service provider. You can enter the name of a self-signed certificate or a certificate signed by a certificate authority. |
| enableIdentityProvider | Field TypebooleanDescriptionRequired.Indicates whether Salesforce can be used as a SAML identity provider (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of an IdentityProviderSettings component. In this example, Salesforce is enabled as a SAML identity provider.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IdentityProviderSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <certificateName>Certificate Name</certificateName>
    <enableIdentityProvider>true</enableIdentityProvider>
</IdentityProviderSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IdentityProvider</members>
        <name>Settings</name>
    </types>
    <version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
