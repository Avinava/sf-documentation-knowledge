---
title: "Territory"
domain: metadata-api
topic: territory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:42.452Z
estimatedTokens: 556
keywords: [Territory, Declarative, Metadata, File, Suffix, Directory, Location, Version, Sample, Definition, Wildcard, Support, Manifest]
---

# Territory

> Represents a territory.

# Territory

Represents a territory.

## Declarative Metadata File Suffix and Directory Location

The file suffix for territory components is .territory and components are stored in the territories directory of the corresponding package directory.

## Version

Territory components are available in API version 24.0 and later.

## Fields

This metadata type extends to subtype [RoleOrTerritory](atlas.en-us.api_meta.meta/api_meta/meta_roleorterritory.htm#meta_roleorterritory "Represents the common base type and valid values for role or territory.").

| Field Name | Field Type | Description |
| --- | --- | --- |
| accountAccessLevel | string | Specifies whether users in this territory can access accounts that are assigned to this territory and are otherwise inaccessible. Valid values are:ReadEditAllIf your organization’s sharing model for accounts is Public Read/Write, valid values are only Edit and All.If no value is set for this field, this field value uses the default access level that is specified in the Manage Territory page in Setup.This field is available in API version 31.0 and later. |
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. Corresponds to Territory Name in the user interface. |
| parentTerritory | string | The territory above this territory in the territory hierarchy. |

## Declarative Metadata Sample Definition

The following is the definition of a territory.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Territory xmlns="http://soap.sforce.com/2006/04/metadata">
    <accountAccessLevel>Edit</accountAccessLevel>
    <caseAccessLevel>Edit</caseAccessLevel>
    <contactAccessLevel>Edit</contactAccessLevel>
    <description>Sample Territory</description>
    <mayForecastManagerShare>false</mayForecastManagerShare>
    <name>T22name</name>
    <opportunityAccessLevel>Read</opportunityAccessLevel>
</Territory>
```

## Related Topics

- RoleOrTerritory (atlas.en-us.api_meta.meta/api_meta/meta_roleorterritory.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
