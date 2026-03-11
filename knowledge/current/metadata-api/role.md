---
title: "Role"
domain: metadata-api
topic: role
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.464Z
keywords: [Role, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition, Wildcard, Support, Manifest]
---

# Role

# Role

Represents a role in your organization.

## Declarative Metadata File Suffix and Directory Location

The file suffix for role components is .role and components are stored in the roles directory of the corresponding package directory.

## Version

Role components are available in API version 24.0 and later.

## Fields

This metadata type extends to subtype [RoleOrTerritory](atlas.en-us.api_meta.meta/api_meta/meta_roleorterritory.htm#meta_roleorterritory "Represents the common base type and valid values for role or territory.").

| Field Name | Field Type | Description |
| --- | --- | --- |
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. Corresponds to Role Name in the user interface. |
| parentRole | string | The role above this role in the hierarchy. |

## Declarative Metadata Sample Definition

The following is the definition of a role.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").