---
title: "IndustriesSettings"
domain: automotive-cloud
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.730Z
estimatedTokens: 639
keywords: [IndustriesSettings, settings, enabling, features, Criteria-Based, Search, Filter, that’s, vehicle, inventory, visibility, File, Suffix, Directory, Location]
---

# IndustriesSettings

> Represents the settings for enabling features like
   Criteria-Based Search and Filter that’s used for vehicle inventory visibility.

# IndustriesSettings

Represents the settings for enabling features like Criteria-Based Search and Filter that’s used for vehicle inventory visibility.

This type extends the [Metadata](atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_metadata_api_types.htm "Metadata API enables you to access some types and feature settings that you can customize in the user interface. For more information about Metadata API and to find a complete reference of existing metadata types, see Metadata API Developer Guide.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=automotive_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_metadata_api_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type. For more information, see Settings.") for more details.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings are available in API version 47.0 and later.

## Special Access Rules

Settings are specific to an industry vertical and are only available to customers with org editions where the vertical is enabled.

## Fields for Automotive Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCriteriaBasedSearchAndFilter | boolean | Indicates whether Criteria-Based Search and Filter is enabled (true) or disabled (false) for your org. The default value is false. This field is available in editions where Automotive Cloud is enabled. |
| enableAppraisalMgmt | boolean | Indicates whether Appraisal Management is enabled (true) or disabled (false) for your org.. The default value is false. This field is available in editions where Automotive Cloud is enabled and from API version 63.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an Industries.Settings metadata component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCriteriaBasedSearchAndFilter>true</enableCriteriaBasedSearchAndFilter>
    <enableAppraisalMgmt>true</enableAppraisalMgmt>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Industries</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_metadata_api_types.htm)
- Settings (atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_metadata_api_settings.htm)
