---
title: "UserEngagementSettings"
domain: metadata-api
topic: userengagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.512Z
estimatedTokens: 2478
keywords: [UserEngagementSettings, Represents, metadata, associated, various, feature, settings, around, Lightning, Experience, transition, adoption, user, engagement, assistance, apps., Parent, File, Suffix, Directory]
---

# UserEngagementSettings

> Represents the metadata associated with various
      feature settings around Lightning Experience transition and adoption, user engagement and
      adoption assistance, and adoption apps.

# UserEngagementSettings

Represents the metadata associated with various feature settings around Lightning Experience transition and adoption, user engagement and adoption assistance, and adoption apps.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

UserEngagementSettings components have the suffix .settings and are stored in the settings folder.

## Version

Prompt components are available in API version 47.0 and later.

## Special Access Rules

See related Salesforce Help for each feature for permission and edition requirements.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canUseAdoptionApps | boolean | Indicates whether an org can access Lightning Experience transition tools (true) or not (false). Examples of these tools are Salesforce Optimizer, Lightning Experience Transition Assistant, and the Lightning Experience Readiness Report. The default is false. This field applies only to orgs with the External Application Settings page in Setup. Otherwise, this field has no effect. Available in API version 62.0 and later. |
| doesScheduledSwitcherRunDaily | boolean | Indicates where users are automatically switched from Salesforce Classic to Lightning Experience every day (true) or weekly (false). If false, then users are switched weekly. The default is false. See Encourage Users to Stay in Lightning Experience in Salesforce Help. |
| enableCustomHelpGlobalSection | boolean | Indicates whether a custom section has been added to the Lightning Experience Help Menu (true) or not (false). The default is false. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableHelpMenuShowFeedback | boolean | Indicates whether the Give Feedback to Salesforce link in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableHelpMenuShowHelp | boolean | Indicates whether the Help For This Page section in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information.Available in API version 64.0 and earlier. |
| enableHelpMenuShowNewUser | boolean | Indicates whether the Getting Started section in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information.Available in API version 64.0 and earlier. |
| enableHelpMenuShowSearch | boolean | Indicates whether the Search Documentation link in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information.Available in API version 64.0 and earlier. |
| enableHelpMenuShowSfdcContent | boolean | Indicates whether any Salesforce-created help resources in Lightning Experience Help Menu are visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableHelpMenuShowShortcut | boolean | Indicates whether the View Keyboard Shortcuts link in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableHelpMenuShowSupport | boolean | Indicates whether the Go to Salesforce Help link in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableHelpMenuShowTrailhead | boolean | Indicates whether the Go to Trailhead link in the Lightning Experience Help Menu is visible to users (true) or not (false). The default is true. Even if false, admins always see all links in the Help Menu. See Define Custom Help for the Lightning Experience Help Menu in Salesforce Help for more information. |
| enableIBILOptOutDashboards | boolean | Indicates whether the It’s Better in Lightning prompt about Dashboards is hidden from users (true) or not (false). The default is true. Deprecated in API version 51.0 and later. |
| enableIBILOptOutEvents | boolean | Indicates whether the It’s Better in Lightning prompt about Events/Calendar is hidden from users (true) or not (false). The default is true. Deprecated in API version 51.0 and later. |
| enableIBILOptOutReports | boolean | Indicates whether the It’s Better in Lightning prompt about Reports is hidden from users (true) or not (false). The default is true. Deprecated in API version 51.0 and later. |
| enableIBILOptOutTasks | boolean | Indicates whether the It’s Better in Lightning prompt about Tasks is hidden from users (true) or not (false). The default is true. Deprecated in API version 51.0 and later. |
| enableLexToClassicFeedbackEnable | boolean | Indicates whether the Switch to Salesforce Classic Feedback Form is shown to users (true) or not (false). The default is false. See Switch to Salesforce Classic Feedback Form in Salesforce Help for more information. |
| enableOrchestrationInSandbox | boolean | Indicates whether adoption assistance and other in-app guidance is shown to users in sandbox orgs (true) or not (false). The default is false. See Define Prompts in Lightning Experience in Salesforce Help for more information. |
| enableOrgUserAssistEnabled | boolean | Indicates whether all custom in-app guidance created by an org is shown to users (true) or not (false). Doesn’t affect active status. The default is true. See Define Prompts in Lightning Experience in Salesforce Help for more information. |
| enableScheduledSwitcher | boolean | Indicates whether users are automatically switched from Salesforce Classic to Lightning Experience (true) or not (false). The default is true. See Encourage Users to Stay in Lightning Experience in Salesforce Help. |
| enableSfdcProductFeedbackSurvey | boolean | Indicates whether the Salesforce Product Feedback Form is shown to users (true) or not (false). The default is true. See Salesforce Product Feedback Form in Salesforce Help for more information. |
| enableShowSalesforceUserAssist | boolean | Indicates whether all standard in-app guidance created by Salesforce is shown to users (true) or not (false). Doesn’t affect active status. The default is true. See Define Prompts in Lightning Experience in Salesforce Help for more information. |
| isCrucNotificationDisabled | boolean | Indicates whether all notifications about the Winter ’20 Turn on Lightning Experience critical update are hidden from admins (true) or not (false). The default is false. |
| isLEXWelcomeMatDisabled | boolean | Indicates whether the Lightning Experience welcome mat is hidden from users the first time they log into the user interface (true) or not (false). The default is false. See Lightning Experience Welcome Mat in Salesforce Help for more information. |
| isMeetTheAssistantDisabledInClassic | boolean | Indicates whether all notifications about the Lightning Experience Transition Assistant are hidden from admins in Salesforce Classic (true) or not (false). The default is false. |
| isMeetTheAssistantDisabledInLightning | boolean | Indicates whether all notifications about the Lightning Experience Transition Assistant are hidden from admins in Lightning Experience (true) or not (false). The default is false. |
| optimizerAppEnabled | boolean | Indicates whether Salesforce Optimizer is turned on in the org (true) or not (false). The default is false. See Improve Your Implementation with Salesforce Optimizer in Salesforce Help. |
| suggestedForYou | boolean | Indicates whether Suggested For You is turned on in the org (true) or not (false). The default is true. See Suggested For You in Salesforce Help. |

## Declarative Metadata Sample Definition

The following is an example of a UserEngagementSettings component.

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
<UserEngagementSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <canUseAdoptionApps>false</canUseAdoptionApps>
   <doesScheduledSwitcherRunDaily>true</doesScheduledSwitcherRunDaily>
   <enableCustomHelpGlobalSection>true</enableCustomHelpGlobalSection>
   <enableHelpMenuShowSfdcContent>true</enableHelpMenuShowSfdcContent>
   <enableHelpMenuShowShortcut>true</enableHelpMenuShowShortcut>
   <enableHelpMenuShowSupport>true</enableHelpMenuShowSupport>
   <enableHelpMenuShowTrailhead>true</enableHelpMenuShowTrailhead>
   <enableIBILOptOutDashboards>true</enableIBILOptOutDashboards>
   <enableIBILOptOutEvents>true</enableIBILOptOutEvents>
   <enableIBILOptOutReports>true</enableIBILOptOutReports>
   <enableIBILOptOutTasks>true</enableIBILOptOutTasks>
   <enableLexToClassicFeedbackEnable>true</enableLexToClassicFeedbackEnable>
   <enableOrgUserAssistEnabled>true</enableOrgUserAssistEnabled>
   <enableScheduledSwitcher>true</enableScheduledSwitcher>
   <enableSfdcProductFeedbackSurvey>true</enableSfdcProductFeedbackSurvey>
   <enableOrchestrationInSandbox>true</enableOrchestrationInSandbox>
   <enableShowSalesforceUserAssist>true</enableShowSalesforceUserAssist>
   <isCrucNotificationDisabled>false</isCrucNotificationDisabled>
   <isLEXWelcomeMatDisabled>false</isLEXWelcomeMatDisabled>
   <isMeetTheAssistantDisabledInClassic>false</isMeetTheAssistantDisabledInClassic>
   <isMeetTheAssistantDisabledInLightning>false</isMeetTheAssistantDisabledInLightning>
   <optimizerAppEnabled>true</optimizerAppEnabled>
</UserEngagementSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>UserEngagement</members>
      <name>Settings</name>
   </types>
   <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
