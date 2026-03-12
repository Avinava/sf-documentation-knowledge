---
title: "CodeBuilderSettings"
domain: metadata-api
topic: codebuildersettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.509Z
estimatedTokens: 550
keywords: [CodeBuilderSettings, Code, Builder, settings, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample]
---

# CodeBuilderSettings

> Represents Code Builder settings. This type
      extends the Metadata metadata type and inherits its fullName field.

# CodeBuilderSettings

Represents Code Builder settings. This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

CodeBuilderSettings values are stored in the CodeBuilder.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

CodeBuilderSettings is available in API versions 58.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCodeBuilder | boolean | Indicates whether Code Builder is enabled (true) or not (false). When enabled, you can install and use the generally available (GA) Code Builder package in the org. |

## Declarative Metadata Sample Definition

The following is an example of the CodeBuilder.settings file:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CodeBuilderSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCodeBuilder>true</enableCodeBuilder>
</CodeBuilderSettings>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
