---
title: "BotSettings"
domain: metadata-api
topic: botsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.084Z
estimatedTokens: 510
keywords: [BotSettings, organization’s, Einstein, Bot, settings, whether, Bots, enabled, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# BotSettings

> Represents an organization’s Einstein Bot settings, such
            as whether or not Einstein Bots is enabled.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# BotSettings

Represents an organization’s Einstein Bot settings, such as whether or not Einstein Bots is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Bot components have the suffix .bot and are stored in the bot folder.

## Version

Bot components are available in API version 46.0 and later.

## Special Access Rules

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableBots | boolean | Indicates whether Einstein Bots is enabled (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a BotSetting. This example has been trimmed to make it easier to read.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<BotSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableBots>true</enableBots>
</BotSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Bot</members>
        <name>Settings</name>
    </types>
    <version>46.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
