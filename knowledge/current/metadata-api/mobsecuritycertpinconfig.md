---
title: "MobSecurityCertPinConfig"
domain: metadata-api
topic: mobsecuritycertpinconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.736Z
estimatedTokens: 985
keywords: [MobSecurityCertPinConfig, authentication, server, certificate, pin, configuration, Salesforce, mobile, app, Enhanced, Security, Parent, File, Suffix, Directory]
---

# MobSecurityCertPinConfig

> Represents the authentication server
			certificate pin configuration on the Salesforce mobile app with
			Enhanced Mobile Security.

# MobSecurityCertPinConfig

Represents the authentication server certificate pin configuration on the Salesforce mobile app with Enhanced Mobile Security.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MobSecurityCertPinConfig components have the suffix .mobSecurityCertPinConfig and are stored in the mobSecurityCertPinConfigs folder.

## Version

MobSecurityCertPinConfig components are available in API version 53.0 and later.

## Special Access Rules

The Enhanced Mobile App Security add-on subscription and the Enforce Enhanced Mobile App Security user permission are required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| certificateHash | Field TypestringDescriptionRequired. The unique identifier for the certificate. |
| domainName | Field TypestringDescriptionRequired.The name of the domain for the server that you want to pin the certificate to. For example, https://MyDomainName.my.salesforce.com. |
| isEnabled | Field TypebooleanDescriptionRequired. Indicates whether authentication server certificate pinning is enabled. The default value is false, which means that certificate pinning is disabled. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| isSubdomainIncluded | Field TypebooleanDescriptionRequired. Indicates whether subdomains use the same certificate pinning configuration as the specified domainName. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. ​A user-friendly name for MobSecurityCertPinConfig, which is defined when the MobSecurityCertPinConfig component is created. |
| mobilePlatform | Field TypeMobileSecurityMobilePlatform (enumeration of type string)DescriptionThe mobile operating system.Values are:AndroidiOS |
| mobileSecurityAssignment | Field TypestringDescriptionThe name of the mobile security assignment associated with the mobile security policy. See MobileSecurityAssignment. |
| severityLevel | Field TypeMobileSecurityPolicySeverityLevel (enumeration of type string)DescriptionRequired. The severity level of the mobile security policy.Values are:Critical— Wipes app data and logs user outError—Blocks access to the app until the issue is resolved, but doesn’t log user outInfo— Blocks prohibited action or logs user action and informs userWarn—Notifies the user of the violation and recommends how to resolve, but user is able to continue using the app |
| type | Field TypeMobileSecurityCertPinType (enumeration of type string)DescriptionRequired. The type of pin.Values are:AuthServerResource |

## Declarative Metadata Sample Definition

The following is an example of a MobSecurityCertPinConfig component.

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
<MobileSecurityCertPinConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <certificateHash>AaBbCcDdEeFfGg</certificateHash>
    <domainName>login.salesforce.com</domainName>
    <isEnabled>true</isEnabled>
    <isProtected>false</isProtected>
    <masterLabel>AuthenticationServerCertificatePinning</masterLabel>
    <mobilePlatform>Android</mobilePlatform>
    <mobileSecurityAssignment>MyMobileSecurityAssignment</mobileSecurityAssignment>
    <severityLevel>info</severityLevel>
    <type>AuthServer</type>
</MobileSecurityCertPinConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>MobileSecurityCertPinConfig</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- MobileSecurityAssignment (atlas.en-us.api_meta.meta/api_meta/meta_mobilesecurityassignment.htm)
- Deploying and Retrieving Metadata
					with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
