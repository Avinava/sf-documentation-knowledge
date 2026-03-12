---
title: "ExperienceBundleSettings"
domain: metadata-api
topic: experiencebundlesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.479Z
estimatedTokens: 762
keywords: [ExperienceBundleSettings, Represents, org, setting, enables, ExperienceBundle, metadata, Aura, sites, Experience, Cloud., doesn’t, affect, LWR, which, default., extends, Metadata, inherits, its]
---

# ExperienceBundleSettings

> Represents the org setting that enables the ExperienceBundle
      metadata type for Aura sites in Experience Cloud. The setting doesn’t affect LWR sites, which
      use ExperienceBundle by default. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ExperienceBundleSettings

Represents the org setting that enables the ExperienceBundle metadata type for Aura sites in Experience Cloud. The setting doesn’t affect LWR sites, which use ExperienceBundle by default. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

ExperienceBundle is a text-based code structure of the settings and site components, such as pages, branding sets, and themes, that make up an Experience Builder site. Developers can quickly update and deploy one or more Experience Builder sites programmatically using their preferred development tools.

## File Suffix and Directory Location

ExperienceBundleSettings values are stored in a single file named ExperienceBundle.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ExperienceBundleSettings is available in API version 46.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableExperienceBundleMetadata | boolean | Indicates whether the ExperienceBundle metadata type is enabled for Aura sites. Default is false. LWR sites use ExperienceBundle by default. |

## Declarative Metadata Sample Definition

Here’s an example of ExperienceBundle.settings that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ExperienceBundle](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundle.htm "Represents a text-based code structure of the settings and site components, such as pages, branding sets, and themes that make up an Experience Builder site. Developers can quickly update and deploy Experience Builder sites programmatically using their preferred development tools. This type extends the Metadata metadata type and inherits its fullName field.")

## Code Examples

```
<ExperienceBundleSettings xmlns="http://soap.sforce.com/2006/04/metadata">
        <enableExperienceBundleMetadata>true</enableExperienceBundleMetadata>
</ExperienceBundleSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ExperienceBundle (atlas.en-us.api_meta.meta/api_meta/meta_experiencebundle.htm)
