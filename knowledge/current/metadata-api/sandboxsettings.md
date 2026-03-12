---
title: "SandboxSettings"
domain: metadata-api
topic: sandboxsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.973Z
estimatedTokens: 533
keywords: [SandboxSettings, Sandbox, settings, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample, Definition]
---

# SandboxSettings

> Represents Sandbox settings. This type extends the Metadata metadata type and inherits its
                        fullName field.

# SandboxSettings

Represents Sandbox settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SandboxSettings values are stored in the Sandbox.settings file in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

SandboxSettings are available in API version 56.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| disableSandboxExpirationEmails | boolean | Indicates whether to disable sandbox expiration email notifications for the source (production) org: true or false. When disabled in the source (production) org, users no longer receive email notifications for impending deletions of sandboxes that have been inactive for 180 days or longer. |

## Declarative Metadata Sample Definition

The following is an example of a SandboxSettings component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SandboxSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <disableSandboxExpirationEmails>true</disableSandboxExpirationEmails>
</SandboxSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
