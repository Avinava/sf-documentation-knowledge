---
title: "ChatterAnswersSettings"
domain: metadata-api
topic: chatteranswerssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.075Z
keywords: [ChatterAnswersSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ChatterAnswersSettings

# ChatterAnswersSettings

Represents the metadata used to manage settings for Chatter Answers.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Chatter Answers settings are stored in a single file named ChatterAnswers.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ChatterAnswersSettings is available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| emailFollowersOnBestAnswer | boolean | Indicates whether users are notified when a best answer is selected for a question that they’re following (true) or not (false). |
| emailFollowersOnReply | boolean | Indicates whether users are notified when other users reply to questions that they’re following (true) or not (false). |
| emailOwnerOnPrivateReply | boolean | Indicates whether users are notified when customer support responds to their questions privately (true) or not (false). |
| emailOwnerOnReply | boolean | Indicates whether users are notified when other users reply to their questions (true) or not (false). |
| enableAnswerViaEmail | boolean | Indicates whether users can post answers by replying to email notifications (true) or not (false). This field is available in API version 29.0 and later. |
| enableChatterAnswers | boolean | Indicates whether the Chatter Answers feature is enabled in the organization (true) or not (false). |
| enableFacebookSSO | boolean | Indicates whether users can sign in to your Chatter Answers forums with their Facebook logins (true) or not (false). To enable this feature, you must define and enable a Facebook authentication provider in your organization’s security controls and enable Auth Providers in your organization. |
| enableInlinePublisher | boolean | Indicates whether users can filter search results by articles or questions before they post a question to any of your Chatter Answers forums (true) or not (false). Also, adds Title and Body fields to questions for easier text input and scanning. This field is available in API version 29.0 and later. |
| enableReputation | boolean | Indicates whether user reputations appear as hover text on their profile pictures (true) or not (false).  Reputation is enabled across all zones. To enable the reputation setting, you must enable Reputation in your organization. |
| enableRichTextEditor | boolean | Indicates whether the rich text editor is enabled for users to format text and upload images when posting questions (true) or not (false). To enable rich text editor, you must enable Optimize Question Flow. |
| facebookAuthProvider | string | The name of an existing Facebook authentication provider. To implement Facebook Single Sign On for your Chatter Answers forums, you must choose a Facebook authentication provider. |
| showInPortals | boolean | Indicates whether Chatter Answers can be added as a tab to your Customer portal or partner portal (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example chatteranswers.settings metadata file:

```

```

The following is an example package.xml manifest that references the ChatterAnswersSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").