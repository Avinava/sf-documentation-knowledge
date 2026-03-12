---
title: "RealTimeEventSettings"
domain: metadata-api
topic: realtimeeventsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.130Z
estimatedTokens: 726
keywords: [RealTimeEventSettings, Represents, list, Real-Time, Event, entities, want, enable, disable., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# RealTimeEventSettings

> Represents the list of Real-Time Event entities
            that you want to enable or disable.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# RealTimeEventSettings

Represents the list of Real-Time Event entities that you want to enable or disable. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Real-Time Event settings are stored in a single file named RealTimeEvent.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

RealTimeEventSettings is available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| realTimeEvents | RealTimeEvent[] | Represents the list of Real-Time Event entities that you want to enable or disable. |

## RealTimeEvent

Represents one of the Real-Time Event entities that you want to enable or disable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| entityName | string | The storage or streaming entity name that you want to modify. For example: ApiEvent or ApiEventStream. |
| isEnabled | boolean | Indicates whether you want the storage or streaming capability to be enabled (true) or disabled (false). |

## Declarative Metadata Sample Definition

The following is an example RealTimeEvent.settings metadata file:

```

```

The following is an example package.xml manifest that references the RealTimeEventSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version=“1.0” encoding=“UTF-8"?>
<RealTimeEventSettings xmlns=“http://soap.sforce.com/2006/04/metadata”/>
  <realTimeEvents>
    <entityName>ApiEventStream</entityName>
    <isEnabled>true</isEnabled>
  </realTimeEvents>
  <realTimeEvents>
    <entityName>ApiEvent</entityName>
    <isEnabled>true</isEnabled>
  </realTimeEvents>
</RealTimeEventSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>RealTimeEvent</members>
        <name>Settings</name>
    </types>
    <version>51.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
