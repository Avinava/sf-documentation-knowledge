---
title: "SurveySettings"
domain: metadata-api
topic: surveysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.027Z
estimatedTokens: 647
keywords: [SurveySettings, Represents, org’s, survey, settings., component, enable, Salesforce, Surveys, Customer, Lifecycle, Maps, choose, whether, owner, manage, responses., Parent, Manifest, Access]
---

# SurveySettings

> Represents an org’s survey settings. Use the SurveySettings
            component to enable Salesforce Surveys, enable Customer
            Lifecycle
            Maps, and choose whether the owner of a survey can manage the
        responses.

# SurveySettings

Represents an org’s survey settings. Use the SurveySettings component to enable Salesforce Surveys, enable Customer Lifecycle Maps, and choose whether the owner of a survey can manage the responses.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

SurveySettings values are stored in a single file named Survey.settings in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

SurveySettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableGenerativeAISurveys | boolean | Indicates whether AI-Generated Surveys is enabled for your org (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| enableIndustriesCxmEnabled | boolean | Indicates whether Customer Lifecycle Maps is enabled for your org (true) or not (false). The default value is false. |
| enableSurvey | boolean | Indicates whether Surveys is enabled for your org (true) or not (false). The default value is false. |
| enableSurveyOwnerCanManageResponse | boolean | Indicates whether the owner of a survey can manage its responses. The default value is false. |

## Declarative Metadata Sample Definition

This example shows a sample SurveySettings component.

```

```

This example shows a sample package.xml file that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SurveySettingsxmlns="http://soap.sforce.com/2006/04/metadata">
<enableIndustriesCxmEnabled>false</enableIndustriesCxmEnabled>
<enableSurvey>true</enableSurvey>
<enableSurveyOwnerCanManageResponse>false</enableSurveyOwnerCanManageResponse>
<enableGenerativeAISurveys>false</enableGenerativeAISurveys>
</SurveySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Survey</members>
        <name>Settings</name>
    </types>
    <version>61.0</version>
</Package>
```
