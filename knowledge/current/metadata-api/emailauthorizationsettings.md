---
title: "EmailAuthorizationSettings"
domain: metadata-api
topic: emailauthorizationsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-10T00:40:04.844Z
estimatedTokens: 688
keywords: [EmailAuthorizationSettings, org’s, email, authorization, settings, extends, MetadataForSettings, metadata, inherits, fullName, File, Suffix, Directory, Location, Declarative, Sample, Definition, Wildcard, Support, Manifest]
---

> Represents your org’s email authorization
      settings. This type extends the MetadataForSettings metadata type and inherits its
      fullName field.

# EmailAuthorizationSettings

Represents your org’s email authorization settings. This type extends the MetadataForSettings metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EmailAuthorizationSettings values are stored in the EmailAuthorization.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

EmailAuthorizationSettings components are available in API version 66.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableSubstituteFromAddress | Field TypebooleanDescriptionIf true , Salesforce substitutes the From address to send outbound emails with unverified email domains. The outbound email uses the From address email@UniqueId.sfcustomeremail.com, where UniqueId is your org ID or Experience Cloud site ID. If false, Salesforce users and automations can send messages from Salesforce only when the email domain is verified. The default is false.This field applies only to outbound email that requires domain-level verification. For more information, including exemptions to domain-level verification, see Requirements to Send Email from Salesforce in Salesforce Help. |

## Declarative Metadata Sample Definition

The following is an example of an EmailAuthorizationSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmailAuthorizationSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableSubstituteFromAddress>true</enableSubstituteFromAddress>
</EmailAuthorizationSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>EmailAuthorization</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
