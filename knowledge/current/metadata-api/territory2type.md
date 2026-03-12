---
title: "Territory2Type"
domain: metadata-api
topic: territory2type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.157Z
estimatedTokens: 688
keywords: [Territory2Type, Represents, metadata, category, territories, Sales, Territories., Every, Territory2, must, Territory2Type., extends, Metadata, inherits, its, fullName, field., Territories, enabled., File]
---

# Territory2Type

> Represents the metadata for a category of territories
      in Sales Territories. Every Territory2 must have a Territory2Type. This type extends the Metadata metadata type and inherits its
                        fullName field. Available if Sales
    Territories has been enabled.

# Territory2Type

Represents the metadata for a category of territories in Sales Territories. Every Territory2 must have a Territory2Type. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. Available if Sales Territories has been enabled.

## File Suffix and Directory Location

Territory2Type components have the suffix territory2Type and are stored in the territory2Types folder.

## Version

Territory2Type components are available in API version 32.0 and later.

## Special Access Rules

The Manage Territories permission is required for the deploy() operation, but not retrieve(). The retrieve() operation retrieves all the Territory2Type components in the org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A description of the territory type. |
| name | string | Required. The user interface label for the territory type. |
| priority | int | Required. Used for Filter-Based Opportunity Territory Assignment (Pilot in Spring ’15 / Metadata API version 33). Lets you specify a priority for a territory type. For opportunity assignments, the filter examines all territories assigned to the account that the opportunity is assigned to. The account-assigned territory whose territory type priority is highest is then assigned to the opportunity. The priority field value on each territory type must be unique. Further, if there are multiple territories with the same territory type, and therefore the same priority, assigned to the account, no territory is not assigned to the opportunity. |

## Declarative Metadata Sample Definition

The following example shows the definition of a Territory2Type component.

```

```

## Usage

Sales Territories components don’t support packaging or change sets and aren’t supported in [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.").

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Territory2Type xmlns="http://soap.sforce.com/2006/04/metadata">
    <name>Geo</name>
    <description>Geographic allocation</description>
</Territory2Type>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- CRUD
            calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
