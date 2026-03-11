---
title: "LightningOnboardingConfig"
domain: metadata-api
topic: lightningonboardingconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.333Z
keywords: [LightningOnboardingConfig, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# LightningOnboardingConfig

# LightningOnboardingConfig

Represents the feedback provided when users switch from Lightning Experience to Salesforce Classic. Admins can customize the question, how frequently the form appears, and where the feedback is stored in Chatter from the Adoption Assistance page in Lightning Experience Setup. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

LightningOnboardingConfig components have the suffix .lightningOnboardingConfig and are stored in the LightningOnboardingConfigs folder.

## Version

LightningOnboardingConfig components are available in API version 49.0 and later.

## Special Access Rules

See [Switch to Salesforce Classic Feedback Form](https://help.salesforce.com/articleView?id=lex_encourage_work_feedback.htm&language=en_US) in Salesforce Help for details.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| collaborationGroup | string | Required. The ID of the Chatter Group where the user feedback is posted. |
| customQuestion | string | Text of the custom question added by the admin. Maximum of 1,000 characters. |
| feedbackFormDaysFrequency | int | Required. The number of days between showing the feedback form when a user switches between Lightning Experience and Salesforce Classic. A value of 0 indicates that the form is shown for every switch. Maximum of 30. |
| isCustom | boolean | Required. Indicates if a feedback form includes a custom question ( true) or not (false). |
| masterLabel | string | Required. The label of the in-app guidance. Maximum of 80 characters. |
| promptDelayTime | int | Required. Indicates the amount of time, in seconds, to delay between instances of all in-app content, both custom content created by org and standard content created by Salesforce. Minimum of 0 hours and 0 minutes. Maximum of 99 hours and 59 minutes. |
| sendFeedbackToSalesforce | boolean | Required. Indicates if the user feedback can be shared with Salesforce (true) or not (false). Even if the feedback isn’t shared with Salesforce, the feedback is shared in the Chatter Group chosen when customizing the feedback form. The default is false. |

## Declarative Metadata Sample Definition

The following is an example of a LightningOnboardingConfig component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").