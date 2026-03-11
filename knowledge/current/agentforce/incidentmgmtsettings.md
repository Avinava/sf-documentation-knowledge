---
title: "IncidentMgmtSettings"
domain: agentforce
topic: incidentmgmtsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:08:17.721Z
keywords: [IncidentMgmtSettings, Parent, Type, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# IncidentMgmtSettings

# IncidentMgmtSettings

Represents settings for Customer Service Incident Management and Broadcast Communications.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

IncidentMgmtSettings values are stored in the IncidentMgmt.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

IncidentMgmtSettings components are available in API version 54.0 and later.

## Special Access Rules

IncidentMgmtSettings requires a Service Cloud license.

## Fields

| Field Name | Description |
| --- | --- |
| enableAiKnowledgeCreation | Field TypebooleanDescriptionIndicates whether the ITSM Knowledge Creation feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableAlertBroadcastType | Field TypebooleanDescriptionIndicates whether broadcast communication alerts are enabled (true) or disabled (false) for your org. Lets incident managers send disruptive in-app notifications when an incident occurs. The default value is false. Available in API version 57.0 and later. |
| enableAutoClosureOfChildIncident | Field TypebooleanDescriptionIndicates whether the Automatically Close Child Incidents feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableAutoCreationOfProblem | Field TypebooleanDescriptionIndicates whether the automatic creation of problem record feature is enabled (true) or disabled (false) for your org. This setting automates creation of a problem record when an incident is approved as a major incident. The default value is false. Available in API version 64.0 and later. |
| enableChangePriorityMatrix | Field TypebooleanDescriptionIndicates whether the Automatic Priority Assignment for IT Service feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableChangePriorityOverride | Field TypebooleanDescriptionIndicates whether the Manual Priority Override feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableChangeRequestValidations | Field TypebooleanDescriptionIndicates whether the Change Request Validations feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableChatToIncidentAi | Field TypebooleanDescriptionIndicates whether the Chat and Voice to Incident with Al feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableCnfgItemCopyForRecords | Field TypebooleanDescriptionIndicates whether the feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableDedupE2IncidentAttachment | Field TypebooleanDescriptionIndicates whether the delete duplicate email attachments feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableEmailBroadcastType | Field TypebooleanDescriptionIndicates whether broadcast communication emails are enabled (true) or disabled (false) for your org. Lets users send an email with critical information to impacted customers. The default value is false. Available in API version 56.0 and later. |
| enableEmailToIncident | Field TypebooleanDescriptionIndicates whether the Email-to-Incident feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableEmailToIncidentAi | Field TypebooleanDescriptionIndicates whether the Email-to-Incident with Al feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableITSMChangeMgmt | Field TypebooleanDescriptionIndicates whether the ITSM Change Management feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 63.0 and later. |
| enableITSMIncidentMgmt | Field TypebooleanDescriptionIndicates whether the ITSM Incident Management feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 63.0 and later. |
| enableITSMMajorIncParent | Field TypebooleanDescriptionIndicates whether the Major Incident Management Parent Incident feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableITSMProblemMgmt | Field TypebooleanDescriptionIndicates whether the ITSM Problem Management feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 63.0 and later. |
| enableIncPriorityMatrix | Field TypebooleanDescriptionIndicates whether the Automatic Priority Assignment for IT Service feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableIncPriorityOverride | Field TypebooleanDescriptionIndicates whether the Manual Priority Override for Incident feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableIncidentMgmt | Field TypebooleanDescriptionIndicates whether Customer Service Incident Management is enabled (true) or disabled (false) for your org. Customer Service Incident Management is a Service Cloud solution that helps your teams track large-scale disruptions and delegate tasks to the right experts to ensure that your business delivers on customer expectations. The default value is true. Available in API version 54.0 and later. |
| enableIncidentValidations | Field TypebooleanDescriptionIndicates whether the Incident Field Validations feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableProbPriorityMatrix | Field TypebooleanDescriptionIndicates whether the Automatic Priority Assignment for IT Service feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableProbPriorityOverride | Field TypebooleanDescriptionIndicates whether the Manual Priority Override feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 65.0 and later. |
| enableProblemValidations | Field TypebooleanDescriptionIndicates whether the Problem Field Validations feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableRiskAssessment | Field TypebooleanDescriptionIndicates whether the Risk Assessment feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableSaveE2IncidentAttachment | Field TypebooleanDescriptionIndicates whether the Save Email to Incident Attachment feature is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 64.0 and later. |
| enableSiteBannerBroadcastType | Field TypebooleanDescriptionIndicates whether broadcast communication for site banners is enabled (true) or disabled (false) for your org. Lets users add a banner with critical information to your Aura and LWR sites. The default value is false. Available in API version 56.0 and later. |
| enableSlackBroadcastType | Field TypebooleanDescriptionIndicates whether broadcast communication Slack messages are enabled (true) or disabled (false) for your org. Lets incident managers send broadcasts to Slack when an incident occurs. The default value is false. Available in API version 57.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an IncidentMgmtSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.