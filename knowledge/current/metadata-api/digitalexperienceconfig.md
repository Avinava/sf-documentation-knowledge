---
title: "DigitalExperienceConfig"
domain: metadata-api
topic: digitalexperienceconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.604Z
estimatedTokens: 602
keywords: [DigitalExperienceConfig, organization’s, workspaces, site, label, URL, path, prefix, workspace, Parent, File, Suffix, Directory, Location, Version]
---

# DigitalExperienceConfig

> Represents details for your organization’s workspaces, such
			as the site label, site URL path prefix, and workspace type.

# DigitalExperienceConfig

Represents details for your organization’s workspaces, such as the site label, site URL path prefix, and workspace type.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DigitalExperienceConfig components have the suffix .digitalExperienceConfig and are stored in the digitalExperienceConfigs folder.

## Version

DigitalExperienceConfig components are available in API version 56.0 and later.

## Special Access Rules

You can use DigitalExperienceConfig for enhanced LWR sites created after the Winter ’23 release.

## Fields

| Field Name | Description |
| --- | --- |
| label | Field TypestringDescriptionRequired.The name of the site. |
| site | Field TypeSiteDescriptionRequired.Contains site-related settings, such as the site’s URL path prefix. |
| space | Field TypestringDescriptionRequired.References the workspace that contains the site’s content items such as brandingSets, themes, views, and routes. |

## Site

Represents site-related information, such as the URL path prefix.

| Field Name | Description |
| --- | --- |
| urlPathPrefix | Field TypestringDescriptionThe first part of the path on the site's URL that distinguishes this site from other sites. For example, if your site URL is MyDomainName.my.site.com/partners, then partners is the urlPathPrefix. |

## Declarative Metadata Sample Definition

The following is an example of a DigitalExperienceConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

To retrieve and deploy DigitalExperienceConfig, use legacy sfdx commands.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DigitalExperienceConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Capricorn_Coffee</label>
    <site>
        <urlPathPrefix>CapricornCoffee</urlPathPrefix>
    </site>
    <space>site/Capricorn_Coffee1</space>
</DigitalExperienceConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Capricorn_Coffee1</members>
        <name>DigitalExperienceConfig</name>
    </types>
    <version>56.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
