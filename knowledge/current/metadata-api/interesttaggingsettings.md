---
title: "InterestTaggingSettings"
domain: metadata-api
topic: interesttaggingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.126Z
estimatedTokens: 724
keywords: [InterestTaggingSettings, settings, Interest, Tags, users, add, client, records, capture, needs, interests, prospecting, opportunities, Parent, Manifest]
---

# InterestTaggingSettings

> Represents settings for Interest Tags, which your users
			can add to client records to capture client needs, interests, and prospecting
			opportunities.

# InterestTaggingSettings

Represents settings for Interest Tags, which your users can add to client records to capture client needs, interests, and prospecting opportunities.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

InterestTaggingSettings values are stored in the InterestTagging.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

InterestTaggingSettings components are available in API version 54.0 and later.

## Special Access Rules

Before you enable Interest Tags, you must enable Topics for Financial Services Cloud objects and assign Interest Tags permissions to users. See [Interest Tags](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_interest_tags.htm).

## Fields

| Field Name | Description |
| --- | --- |
| enableInterestTagging | Field TypebooleanDescriptionEnables Interest Tags in your org when set to true. |

## Declarative Metadata Sample Definition

The following is an example of an InterestTaggingSettings component.

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
<InterestTaggingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableInterestTagging>true</enableInterestTagging>
</InterestTaggingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>InterestTagging</members>
        <name>Settings</name>
    </types>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
