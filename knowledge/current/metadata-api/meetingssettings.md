---
title: "MeetingsSettings"
domain: metadata-api
topic: meetingssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.498Z
keywords: [MeetingsSettings, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# MeetingsSettings

# MeetingsSettings

Represents the settings to enable Salesforce Meetings and the integration with Zoom video conferencing.

## Version

MeetingsSettings components are available in API version 51.0 and later.

## Special Access Rules

The MeetingsSettings type isn’t available in scratch orgs.

## Fields

| Field Name | Description |
| --- | --- |
| enableSalesforceMeetings | Field TypebooleanDescriptionIndicates whether the Salesforce Meetings feature is enabled (true) or not (false). When set to true, Salesforce admins can assign the Salesforce Meetings user permission to grant users access to the Meeting Digest and other Salesforce Meetings features. The default value is false. |
| enableSalesforceMeetingsSyncCheck | Field TypebooleanDescriptionIndicates whether your company uses an activity sync solution (true) or hasn’t made that indication (false). Indicating your company uses an activity solution such as Einstein Activity Capture is required to enable Salesforce Meetings. The default value is false. |
| enableZoomVideoConference | Field TypebooleanDescriptionIndicates whether users can connect their company Zoom accounts to Salesforce (true) or not (false). When set to true, Zoom can be added as a recording in Einstein Conversation Insights. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a MeetingsSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").