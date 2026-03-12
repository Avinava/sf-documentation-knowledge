---
title: "SearchOrgWideObjectConfig"
domain: metadata-api
topic: searchorgwideobjectconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.629Z
estimatedTokens: 863
keywords: [SearchOrgWideObjectConfig, Represents, search, index., index, contains, org-wide, settings, created, Search, Manager., includes, searchable, fields, protected, field-level, security, search., Important, Parent]
---

# SearchOrgWideObjectConfig

> Represents an object in the search index. The search
			index contains org-wide search settings created in Search Manager. Each object in the
			search index includes searchable fields and fields protected by field-level security in
			search.

# SearchOrgWideObjectConfig

Represents an object in the search index. The search index contains org-wide search settings created in Search Manager. Each object in the search index includes searchable fields and fields protected by field-level security in search.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SearchOrgWideObjectConfig components have the suffix .searchOrgWideObjectConfig and are stored in the searchOrgWideConfiguration folder.

## Version

SearchOrgWideObjectConfig components are available in API version 61.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired.The name of the configuration. |
| objectReference | Field TypestringDescriptionRequired.The API name of the object. |
| searchOrgWideFieldConfig | Field TypeSearchOrgWideFieldConfig[]DescriptionA list of field configurations. |

## SearchOrgWideFieldConfig

Represents the configuration in the search index for a field in an object.

| Field Name | Description |
| --- | --- |
| fieldReference | Field TypestringDescriptionRequired.The API name of the field. |
| isSearchable | Field TypebooleanDescriptionIndicates if the field is searchable (true) or not (false). If true, the field is shown in search results and used to match results. |
| isSecure | Field TypebooleanDescriptionIndicates if the field is protected by field-level security in search (true) or not (false). If true, the search engine uses this field to match results only for users with permissions. If false, the search engine uses this field to match results even if the user doesn’t have permissions to view this field. |

## Declarative Metadata Sample Definition

The following is an example of a SearchOrgWideObjectConfig component.

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
<SearchOrgWideObjectConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>CustomerLabel</masterLabel>
    <objectReference>Customer</objectReference>
    <searchOrgWideFieldConfig>
        <fieldReference>Custom_Field_1__c</fieldReference>
        <isSearchable>false</isSearchable>
        <isSecure>false</isSecure>
    </searchOrgWideFieldConfig>
    <searchOrgWideFieldConfig>
        <fieldReference>Custom_Field_2__c</fieldReference>
        <isSearchable>true</isSearchable>
        <isSecure>true</isSecure>
    </searchOrgWideFieldConfig>
</SearchOrgWideObjectConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SearchOrgWideObjectConfig</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
