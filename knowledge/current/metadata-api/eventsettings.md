---
title: "EventSettings"
domain: metadata-api
topic: eventsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:39.029Z
estimatedTokens: 1193
keywords: [EventSettings, org's, platform, event, settings, Monitoring, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# EventSettings

> Represents an org's platform event settings for Event
      Monitoring.

# EventSettings

Represents an org's platform event settings for Event Monitoring.

## File Suffix and Directory Location

EventSettings components have the suffix .settings and are stored in the settings folder.

## Version

EventSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| bypassMeteringBlock | boolean | Determines the behavior of metering service protection for Transaction Security policies. When true, metering occurs but doesn't block the user operation that triggered the policy. When false and a policy can't be handled within three seconds, metering occurs and the user's action is blocked. Default value is false. |
| enableDeleteMonitoringData | boolean | Allows (true) or disallows (false) users to delete event log files and LoginEvent data. Users require the Delete Event Monitoring Records user permission, which is available when this setting is enabled. Default value is false. |
| enableDynamicStreamingChannel | boolean | Enables (true) or disables (false) the dynamic creation of a streaming channel when you subscribe to generic streaming. Default value is false. |
| enableEventLogGeneration | boolean | Enables (true) or disables (false) the generation of event monitoring log files. Default value is false. |
| enableEventLogWaveIntegration | boolean | Enables (true) or disables (false) the integration of event monitoring log files and Analytics apps. Analytics apps help you visualize your user’s activity. Default value is false. |
| enableLightningLoggerEvents | boolean | Enables (true) or disables (false) the generation of Lightning Logger events. Lightning Logger events track information about custom Lightning web components. Default value is false. Requires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |
| enableLoginForensics | boolean | Enables (true) or disables (false) the Login Forensics feature. Login Forensics helps you track and audit your org's user login activity. Default value is false. Available in API versions 47.0–49.0.TipIn versions 50.0 and later, enable LoginEvent on the Event Manager Setup page. |
| enableStreamingApi | boolean | Enables (true) or disables (false) Streaming API in the org. Default value is true. |
| enableTerminateOldestSession | boolean | Determines the behavior of legacy transaction security policies that trigger an end-session action during an API-based login (a login that doesn’t come through the UI.) An end-session action occurs when a user exceeds the maximum number of allowed Salesforce sessions.When true, and a user triggers an end-session action, Salesforce terminates the user’s oldest session until the user is in compliance. When set to false, Salesforce blocks the most recent user’s attempt to log in and doesn’t allow a new user session. Default value is false. Available in API versions 47.0–49.0.NoteAs of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| enableTransactionSecurityPolicies | boolean | Enables (true) or disables (false) the ability to create and use transaction security policies in the Salesforce UI. Default value is false. |
| enableApexLimitEvents | boolean | The Apex Limit Events (Pilot) feature is discontinued. Don’t use this field. |
| eventLogRetentionDuration | integer | Specifies the number of days (between 30 and 365) that your event log file data is retained for. If this value is not set, your event log file data is retained for your org's default retention period. |

## Declarative Metadata Sample Definition

The following is an example of an EventSettings.settings file.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Event settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EventSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableDeleteMonitoringData>true</enableDeleteMonitoringData>
    <enableDynamicStreamingChannel>false</enableDynamicStreamingChannel>
    <enableEventLogWaveIntegration>true</enableEventLogWaveIntegration>
    <enableStreamingApi>true</enableStreamingApi>
    <enableTransactionSecurityPolicies>true</enableTransactionSecurityPolicies>
</EventSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>Event</members>
       <name>Settings</name>
   </types>
   <version>47.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
