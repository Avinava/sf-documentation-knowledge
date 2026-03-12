---
title: "PathAssistantSettings"
domain: metadata-api
topic: pathassistantsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.659Z
estimatedTokens: 735
keywords: [PathAssistantSettings, Represents, Path, preference, setting., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location, Version, Fields, Declarative, Sample]
---

# PathAssistantSettings

> Represents the Path preference setting.
            This type extends the Metadata metadata type and inherits its
                        fullName field.

# PathAssistantSettings

Represents the Path preference setting. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PathAssistantSettings components have the suffix .settings and are stored in the settings folder.

## Version

PathAssistantSettings components are available in API version 34.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canOverrideAutoPathCollapseWithUserPref | boolean | Keeps a user's path expanded to show guidance and key fields on all their records. A user's path stays expanded until the user collapses it. To use this preference, Path must be enabled.Default value is false for all editions. When set to false, the user’s path is collapsed when the page loads.Available in API version 47.0 and later. |
| pathAssistantEnabled | boolean | Determines whether the preference is enabled for Path. Default value is true for Enterprise Edition and false for other editions. Available in API version 35.0 and later. |
| pathAssistantForOpportunityEnabled | boolean | Determines whether the preference is enabled for Path in Opportunity or not.Available in API version 34.0 and earlier. |
|  |  |  |

## Declarative Metadata Sample Definition

The following is an example of a PathAssistantSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PathAssistantSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <pathAssistantEnabled>true</pathAssistantEnabled>
    <canOverrideAutoPathCollapseWithUserPref>true</canOverrideAutoPathCollapseWithUserPref>
</PathAssistantSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>PathAssistant</members>
        <name>Settings</name>
    </types>
    <version>API</version>
</Package
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
