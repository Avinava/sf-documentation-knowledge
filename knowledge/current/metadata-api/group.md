---
title: "Group"
domain: metadata-api
topic: group
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:40.359Z
estimatedTokens: 579
keywords: [Group, Represents, set, groups, which, users, roles, groups., Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Note]
---

# Group

> Represents a set of public groups, which can have users,
            roles, and other groups.

# Group

Represents a set of public groups, which can have users, roles, and other groups.

## Declarative Metadata File Suffix and Directory Location

The file suffix for group components is .group and components are stored in the groups directory of the corresponding package directory.

## Version

Group components are available in API version 24.0 and later.

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users can access this type.

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Members of the public group are not migrated when you deploy the group type.

This metadata type represents the valid values that define a group:

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description for the group. Available in API version 62.0 and later. |
| doesIncludeBosses | boolean | Indicates whether records shared with users in this group are also shared with users higher in the role hierarchy (true) or not (false). This field is only available for public groups. This field corresponds to the Grant Access Using Hierarchies checkbox in Setup. |
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. Corresponds to Group Name in the user interface. |
| name | string | Required. The name of the group. Corresponds to Label in the user interface. |

## Declarative Metadata Sample Definition

The following is the definition of a group.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Group xmlns="http://soap.sforce.com/2006/04/metadata">
    <doesIncludeBosses>true</doesIncludeBosses>
    <fullName>admin</fullName>
    <name>test</name>
</Group>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
