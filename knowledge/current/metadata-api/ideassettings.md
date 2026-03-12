---
title: "IdeasSettings"
domain: metadata-api
topic: ideassettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.890Z
estimatedTokens: 871
keywords: [IdeasSettings, metadata, manage, settings, Ideas, File, Suffix, Directory, Location, Version, Declarative, Sample, Definition, Wildcard, Support]
---

# IdeasSettings

> Represents the metadata used to manage settings for Ideas.

# IdeasSettings

Represents the metadata used to manage settings for Ideas.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

IdeasSettings is stored in one file named Ideas.settings in the settings folder of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IdeasSettings is available in API version 27.0 and later.

## Ideas

Represents settings for Ideas and Idea Themes.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableIdeaThemes | boolean | Indicates whether Idea Themes is enabled (true) or not (false). |
| enableIdeas | boolean | Indicates whether Ideas is enabled (true) or not (false). |
| enableIdeasReputation | boolean | Indicates whether Reputation is enabled (true) or not (false). You can’t enable IdeasReputation without enabling the Ideas Reputation permission in your organization. This field is available in API version 28.0 and later. |
| enableChatterProfile | boolean | Indicates that the Chatter user profile is used for Ideas user profiles. If enableChatterProfile is true, the ideasProfilePage value must not be specified. If enableChatterProfile is false, then specify a ideasProfilePage value, otherwise the Ideas zone profile is used. This field is available in API version 29.0 and later. |
| ideasProfilePage | string | The name of the Visualforce page to use for a custom Ideas user profile, if enableChatterProfile is false. If enableChatterProfile is false, then specify a ideasProfilePage value, otherwise the Ideas zone profile is used. This field is available in API version 29.0 and later. |
| halfLife | double | Indicates how quickly old ideas drop in ranking on the Popular Ideas subtab. The half-life setting determines how the number of days after which old ideas drop in ranking on the Popular Ideas subtab, to make room for ideas with more recent votes. A shorter half-life moves older ideas down the page faster than a longer half-life. |

## Declarative Metadata Sample Definition

The following is an example ideas.settings metadata file:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IdeasSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <enableIdeaThemes>true</enableIdeaThemes>
   <enableIdeas>true</enableIdeas>
   <enableIdeasReputation>true</enableIdeasReputation>
   <enableChatterProfile>false</enableChatterProfile>
   <ideasProfilePage>name of Visualforce page</ideasProfilePage>
   <halfLife>2.6</halfLife>
</IdeasSettings>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
