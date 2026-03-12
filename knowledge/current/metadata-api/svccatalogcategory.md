---
title: "SvcCatalogCategory"
domain: metadata-api
topic: svccatalogcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.051Z
estimatedTokens: 461
keywords: [SvcCatalogCategory, Represents, grouping, individual, catalog, items, Service, Catalog., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# SvcCatalogCategory

> Represents the grouping of individual catalog items in
      Service Catalog.

# SvcCatalogCategory

Represents the grouping of individual catalog items in Service Catalog.

## File Suffix and Directory Location

SvcCatalogCategory components have the suffix category and are stored in the svcCatalogCategories folder.

## Version

SvcCatalogCategory components are available in API version 53.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| image | Field TypestringDescriptionThe developer name of a content document to be displayed in the Service Catalog for this category. |
| isActive | Field TypebooleanDescriptionIndicates if a catalog category is active. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value. This value currently has no impact. |
| masterLabel | Field TypestringDescriptionRequired. The primary label for the catalog category record. |
| parentCategory | Field TypestringDescriptionIf provided, the name of another SvcCatalogCategory that this category should appear under. The parent category in this field can’t have its own parent category. Categories can’t have more than one level of nesting. |
| sortOrder | Field TypeintDescriptionDisplays a set order for catalog category entities. |

## Declarative Metadata Sample Definition

The following is an example of a SvcCatalogCategory component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SvcCatalogCategory xmlns="http://soap.sforce.com/2006/04/metadata">
    <image>AdobeStock_287068722</image>
    <isActive>true</isActive>
    <isProtected>false</isProtected>
    <masterLabel>Workplace Services</masterLabel>
    <sortOrder>4</sortOrder>
</SvcCatalogCategory>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
