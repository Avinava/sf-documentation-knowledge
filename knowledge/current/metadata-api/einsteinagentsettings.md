---
title: "EinsteinAgentSettings"
domain: metadata-api
topic: einsteinagentsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.759Z
estimatedTokens: 554
keywords: [EinsteinAgentSettings, settings, Einstein, classification, apps, Case, Wrap-Up, org, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# EinsteinAgentSettings

> Represents settings for Einstein
      classification apps, Einstein Case Classification and Einstein Case Wrap-Up, in an org. 
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EinsteinAgentSettings

Represents settings for Einstein classification apps, Einstein Case Classification and Einstein Case Wrap-Up, in an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EinsteinAgentSettings values are stored in the EinsteinAgent.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EinsteinAgentSettings components are available in API version 52.0 and later. In API version 52.0, we renamed CaseClassificationSettings components to EinsteinAgentSettings components to reflect how we consolidated settings for Einstein Case Classification and Einstein Case Wrap-Up. CaseClassificationSettings components are available in API version 47.0 through 51.0.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| einsteinAgentRecommendations | boolean | Indicates whether Einstein classification apps are enabled in your org. The default value is false. |
| reRunAttributeBasedRules | boolean | If true, skills-based routing rules are run after Einstein Case Classification automatically updates field values. The default value is false. |
| runAssignmentRules | boolean | If true, assignment rules are run after Einstein Case Classification automatically updates field values. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a EinsteinAgentSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EinsteinAgentSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <einsteinAgentRecommendations>true</einsteinAgentRecommendations>
    <reRunAttributeBasedRules>true</reRunAttributeBasedRules>
    <runAssignmentRules>true</runAssignmentRules>
</EinsteinAgentSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>EinsteinAgent</members>
        <name>Settings</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
