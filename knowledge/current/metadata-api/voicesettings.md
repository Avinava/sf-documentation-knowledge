---
title: "VoiceSettings"
domain: metadata-api
topic: voicesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.293Z
keywords: [VoiceSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# VoiceSettings

# VoiceSettings

Represents an org’s Sales Dialer settings, such as call recording, conferencing, and voicemail.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

VoiceSettings values are stored in the Voice.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

VoiceSettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCallDisposition | boolean | Indicates whether call disposition is enabled (true) or not (false). With call disposition, also called Call Result, sales reps can track whether a call was connected and how it went.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableConsentReminder | boolean | Indicates whether the consent reminder is enabled (true) or not (false). With the consent reminder, prior to recording a call, users see a prompt reminding them not to record phone calls without consent.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableDefaultRecording | boolean | Indicates whether the default recording is enabled (true) or not (false). With default recording, sales reps can record calls automatically in the Sales Dialer.Default value is false. This field is available in API version 54.0 and later. |
| enableVoiceCallList | boolean | Indicates whether Call List is enabled (true) or not (false). Sales reps can use call list to keep a running list of the calls they want to make.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableVoiceCallRecording | boolean | Indicates whether Call Recording is enabled (true) or not (false). Sales reps can record important calls directly from the call panel in Sales Dialer.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableVoiceCoaching | boolean | Indicates whether Call Monitoring is enabled (true) or not (false). Using the Monitor tab in the call panel, managers can listen to the calls of their sales reps for personalized coaching.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableVoiceConferencing | boolean | Reserved for future use. |
| enableVoiceLocalPresence | boolean | Indicates whether Local Presence is enabled (true) or not (false). Local Presence displays phone numbers with the same area code as the prospects your reps are calling, so more calls are answered.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableVoiceMail | boolean | Indicates whether voicemail is enabled (true) or not (false). Sales reps can receive and store up to 20 personal voicemail messages in Salesforce.Default value is false. To use this feature, enable Dialer in Lightning Experience. |
| enableVoiceMailDrop | boolean | Indicates whether Voicemail Drop is enabled (true) or not (false). Sales reps can “drop” (or send) prerecorded messages to recipients’ voicemail boxes.Default value is false. To use this feature, enable Dialer in Lightning Experience. |

## Declarative Metadata Sample Definition

The following is an example of the package file.

```

```

The package file references the following Voice.settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").