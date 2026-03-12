---
title: "EACSettings"
domain: metadata-api
topic: eacsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.085Z
estimatedTokens: 1803
keywords: [EACSettings, Represents, Einstein, Activity, Capture, metadata, type., add, emails, events, Microsoft, Google, account, activity, timeline, related, Salesforce, records., Automatically, sync]
---

# EACSettings

> Represents the Einstein Activity Capture metadata type.
    Use Einstein Activity Capture to add emails and events from your Microsoft or Google account to
    the activity timeline of related Salesforce records. Automatically sync contact and event data
    between your Microsoft or Google account and Salesforce. This type extends the Metadata metadata type and inherits its
                        fullName field.

# EACSettings

Represents the Einstein Activity Capture metadata type. Use Einstein Activity Capture to add emails and events from your Microsoft or Google account to the activity timeline of related Salesforce records. Automatically sync contact and event data between your Microsoft or Google account and Salesforce. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EACSettings components have the suffix EAC and are stored in the Settings folder.

## Version

EACSettings components are available in API version 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| addRcCompToFlexiPages | boolean | Indicates whether the Recommended Connections component is automatically added (true) to standard contact, lead, and person account Lightning record pages or not (false).Default value is false.Available in API version 53.0 and later. |
| autoContactCreationPref | boolean | Indicates whether Automatic Contact Creation is enabled (true) or not (false).Default value is false.Available in API version 61.0 and later. |
| autoContactEnrichmentPref | boolean | Indicates whether Automatic Contact Enhancements is enabled (true) or not (false).Default value is false.Available in API version 61.0 and later. |
| automatedEmailFilter | boolean | Indicates whether the setting to prevent automated emails from being shared is on (true) or not (false).Available in API version 54.0 and later. |
| autoPopulateGoogleMeetLinks | boolean | Indicates whether the details to join with Google Meet are added (true) to the Google version of the event or not (false) when sales reps create events in Salesforce. The Google Meet details don’t sync back to Salesforce.Default value is false.Available in API version 53.0 and later. |
| enableActivityAnalyticsPref | boolean | Indicates whether the Activities dashboard is enabled (true) or not (false).For orgs that enable Einstein Activity Capture after the Summer ‘21 release, the default value is false.Available in API version 53.0 and later. |
| enableActivityCapture | boolean | Indicates whether Einstein Activity Capture is enabled (true) or not (false). provisionProductivityFeatures must be true to use this feature. To ensure that your org's requirements for handling sensitive data are met, see Einstein Activity Capture Considerations.Default value is false. |
| enableActivityMetrics | boolean | Indicates whether Activity Metrics are enabled (true) or not (false). enableActivityCapture must be true to use this feature. Before enabling this feature, see Considerations for Using Activity Metrics.Default value is false. |
| enableActivitySyncEngine | boolean | Indicates whether combined sync and capture is enabled for events, contacts, and emails (true) or not (false).Default value is false. |
| enableEACForEveryonePref | boolean | Indicates whether users who have the enableActivityCapture set to false can still see emails and events in their Salesforce timeline (true) or not (false).Default value is true. |
| enableEnforceEacSharingPref | boolean | Indicates whether new Einstein Activity Capture users are required to keep their activity sharing setting as Don’t Share (true) or not (false). Users can still share individual emails and events, and respond to sharing requests from other users. |
| enableInboxActivitySharing | boolean | Indicates whether the default activity sharing for new users is set to Everyone (true) or not (false).For example, if enableInboxActivitySharing is true, then new Einstein Activity Capture users have their activity sharing set to Everyone by default. This setting does not affect the activity sharing setting of existing users.Default value is true. |
| enableInsightsInTimeline | boolean | Indicates whether Email Insights is enabled (true) or not (false).Default value is true. |
| enableInsightsInTimelineEacStd | boolean | Indicates whether Email Insights is enabled for users with an Einstein Activity Capture Standard permission set (true) or not (false). For more information, see "Turn On Einstein Email Insights" in Salesforce Help.Default value is false. |
| provisionProductivityFeatures | boolean | Indicates whether your org is ready for productivity features to be enabled (true) or not (false).Default value is false. |
| relationshipGraphPref | boolean | Indicates whether Buyer Relationship Map is enabled (true) or not (false).Default value is true.Available in API version 61.0 and later. |
| salesforceEventsOnlyPref | boolean | Indicates whether the activity timeline shows only events that are Salesforce records (true) or not (false). For more information, see Guidelines for Using Events with Einstein Activity CaptureAvailable in API version 53.0 and later. |
| sensitiveEmailFilter | boolean | Indicates whether the setting to prevent sensitive emails from being shared is on (true) or not (false).Available in API version 54.0 and later. |
| syncInternalEvents | boolean | Indicates whether internal events sync between the connected account and Salesforce (true) or not (false). Events are internal when all attendees are part of the internal domain.Available in API version 53.0 and later. |
| s2XSvcAccEmail | boolean | Indicates whether a warning email has be sent to the customer if they're using Service Account OAuth on Exchange Online (true) or not (false).Default value is false.Available in API version 62.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of the EAC.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the EAC settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EACSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableActivityCapture>true</enableActivityCapture>
	<enableActivityMetrics>true</enableActivityMetrics>
	<enableActivitySyncEngine>true</enableActivitySyncEngine>
	<enableEACForEveryonePref>true</enableEACForEveryonePref>
	<enableInboxActivitySharing>true</enableInboxActivitySharing>
	<enableInsightsInTimeline>true</enableInsightsInTimeline>
	<enableInsightsInTimelineEacStd>true</enableInsightsInTimelineEacStd>
	<provisionProductivityFeatures>true</provisionProductivityFeatures>
</EACSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>EAC</members>
		<name>Settings</name>
	</types>
	<version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
