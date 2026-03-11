---
title: "MapAndLocationSettings"
domain: metadata-api
topic: mapandlocationsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.447Z
keywords: [MapAndLocationSettings, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition, Wildcard, Support, Manifest]
---

# MapAndLocationSettings

# MapAndLocationSettings

Represents an org’s map and location settings.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Declarative Metadata File Suffix and Directory Location

MapAndLocationSettings values are stored in a single file named Mapandlocation.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Map and location settings are available in API version 46.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| enableAddressAutoComplete | boolean | Indicates whether auto-complete is enabled on address fields (true) or not (false). |
| enableMapsAndLocation | boolean | Indicates whether the maps and location services are enabled (true) or not (false) |

## Declarative Metadata Sample Definition

This is a sample mapandlocation.settings metadata file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").