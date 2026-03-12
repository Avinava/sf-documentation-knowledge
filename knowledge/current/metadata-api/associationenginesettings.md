---
title: "AssociationEngineSettings"
domain: metadata-api
topic: associationenginesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.855Z
estimatedTokens: 581
keywords: [AssociationEngineSettings, record, association, builder, settings, org, extends, Metadata, inherits, fullName, Parent, Manifest, Access, File, Suffix]
---

# AssociationEngineSettings

> Represents the record association builder settings for an org. This type extends the Metadata metadata type and inherits its
                        fullName field.

# AssociationEngineSettings

Represents the record association builder settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm) for more details.

## File Suffix and Directory Location

AssociationEngineSettings values are stored in the AssociationEngine.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

AssociationEngineSettings components are available in API version 52.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| enableAssociationEngine | Field TypebooleanDescriptionAutomatically associates new accounts with the user’s current branch by creating branch unit customer records. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an AssociationEngineSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AssociationEngineSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableAssociationEngine>true</enableAssociationEngine>
</AssociationEngineSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>AssociationEngine</members>
    <name>Settings</name>
  </types>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
