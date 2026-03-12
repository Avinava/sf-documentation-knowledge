---
title: "ChatterEmailsMDSettings"
domain: metadata-api
topic: chatteremailsmdsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.414Z
estimatedTokens: 936
keywords: [ChatterEmailsMDSettings, org’s, settings, Chatter, email, enabled, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# ChatterEmailsMDSettings

> Represents an org’s settings for Chatter email when
      Chatter is enabled. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ChatterEmailsMDSettings

Represents an org’s settings for Chatter email when Chatter is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

The ChatterEmailsMDSettings component appears in the ChatterEmailsMD.settings file, and is stored in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

ChatterEmailsMDSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableChatterDigestEmailsApiOnly | boolean | Indicates whether Chatter digests can be sent via the API, rather than according to the regular schedule, for your org (true) or not (false). |
| enableChatterEmailAttachment | boolean | Indicates whether attachments can be included on posts to chatter feeds via email replies (true) or not (false). |
| enableCollaborationEmail | boolean | Indicates whether collaboration email notifications can be sent (true) or not (false). |
| enableDisplayAppDownloadBadges | boolean | Indicates whether iOS and Android app download badges display in Chatter notifications (true) or not (false). |
| enableEmailReplyToChatter | boolean | Indicates whether users can reply to chatter notifications through an email response (true) or not (false). |
| enableEmailToChatter | boolean | Indicates whether users can post to chatter feeds via email (true) or not (false). |
| noQnOwnNotifyOnCaseCmt | boolean | Indicates whether a user is notified when a question is posted on their case comment (false) or not (true). |
| noQnOwnNotifyOnRep | boolean | Indicates whether a user is notified when a reply is posted on their question (false) or not true. |
| noQnSubNotifyOnBestR | boolean | Indicates whether a user is notified when a best reply is selected on a question they follow (false) or not (true). |
| noQnSubNotifyOnRep | boolean | Indicates whether a user is notified when a reply is posted on a question they follow (false) or not (true). |

## Declarative Metadata Sample Definition

The following is an example of a chatteremailmd.settings metadata file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ChatterEmailsMDSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableChatterDigestEmailsApiOnly>false</enableChatterDigestEmailsApiOnly>
    <enableChatterEmailAttachment>false</enableChatterEmailAttachment>
    <enableCollaborationEmail>true</enableCollaborationEmail>
    <enableDisplayAppDownloadBadges>true</enableDisplayAppDownloadBadges>
    <enableEmailReplyToChatter>false</enableEmailReplyToChatter>
    <enableEmailToChatter>true</enableEmailToChatter>
    <noQnOwnNotifyOnCaseCmt>false</noQnOwnNotifyOnCaseCmt>
    <noQnOwnNotifyOnRep>false</noQnOwnNotifyOnRep>
    <noQnSubNotifyOnBestR>false</noQnSubNotifyOnBestR>
    <noQnSubNotifyOnRep>false</noQnSubNotifyOnRep>

</ChatterEmailsMDSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
