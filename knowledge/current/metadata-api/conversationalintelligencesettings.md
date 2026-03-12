---
title: "ConversationalIntelligenceSettings"
domain: metadata-api
topic: conversationalintelligencesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.718Z
estimatedTokens: 1333
keywords: [ConversationalIntelligenceSettings, org's, Einstein, Conversation, Insights, settings, whether, enabled, lets, analyze, rep's, call, recordings, gives, optimize]
---

# ConversationalIntelligenceSettings

> Represents the org's Einstein Conversation Insights
      settings, such as whether Einstein Conversation Insights is enabled. Einstein Conversation
      Insights lets you analyze your rep's call recordings, and gives you the insights you need to
      optimize every call.

# ConversationalIntelligenceSettings

Represents the org's Einstein Conversation Insights settings, such as whether Einstein Conversation Insights is enabled. Einstein Conversation Insights lets you analyze your rep's call recordings, and gives you the insights you need to optimize every call.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

ConversationalIntelligenceSettings values are stored in the ConversationalIntelligence.settings file in the settings folder.

## Version

ConversationalIntelligenceSettings components are available in API version 49.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableCallCoaching | Field TypebooleanDescriptionIndicates whether Einstein Conversation Insights is enabled (true) or not (false). The default value is false. Available in API version 49.0 and later. |
| enableCallCoachingZoom | Field TypebooleanDescriptionIndicates whether Zoom video calls are enabled for Einstein Conversation Insights (true) or not (false). The default value is false. Available in API version 51.0 and later. |
| enableCallExplorer | Field TypebooleanDescriptionIndicates whether Call Explorer is enabled (true) or not (false). The default value is false. Available in API version 60.0 and later. |
| enableCallSummarization | Field TypebooleanDescriptionIndicates whether Call Summary is enabled (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| enableConversationMining | Field TypebooleanDescriptionIndicates whether Einstein Conversation Mining is enabled (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| enableDiarizationPref | Field TypebooleanDescriptionIndicates whether optimal speaker separation is enabled (true) or not (false). The default value is false. Available in API version 58.0 and later.Optimal speaker separation lets Einstein Conversation Insights use acoustic features of speaker voices to separate an audio stream into separate segments. |
| enableECIOOTBFlows | Field TypebooleanDescriptionIndicates whether the out-of-the-box (OOTB) flow templates for Einstein Conversation Insights are enabled (true) or not (false). The default value is false. Available in API version 65.0 and later.These flow templates provide examples of how to use ECI-generated transcripts and insights for common actions, such as drafting follow-up emails or creating next steps. |
| enableGenerativeConvInsights | Field TypebooleanDescriptionIndicates whether Generative Conversation Insights is enabled (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| enableManualUpload | Field TypebooleanDescriptionIndicates whether Video Call Upload is enabled (true) or not (false). The default value is false. Available in API version 62.0 and later.Reserved for future use. |
| enableOpptyMatching | Field TypebooleanDescriptionIndicates whether voice and video calls are related to opportunities automatically (true) or not (false). The default value is false. Available in API version 53.0 and later. |
| enableRealtimeInsights | Field TypebooleanDescriptionIndicates whether Realtime Insights is enabled (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| enableUnifiedActivities | Field TypebooleanDescriptionIndicates whether Activity 360 Reporting is enabled (true) or not (false). The default value is false. Available in API version 58.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a ConversationalIntelligenceSettings component.

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
<ConversationalIntelligenceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableCallCoaching>true</enableCallCoaching>
</ConversationalIntelligenceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>ConversationalIntelligence</members>
		<name>Settings</name>
	</types>
	<version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
