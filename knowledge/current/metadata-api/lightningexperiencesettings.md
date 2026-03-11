---
title: "LightningExperienceSettings"
domain: metadata-api
topic: lightningexperiencesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.319Z
keywords: [LightningExperienceSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# LightningExperienceSettings

# LightningExperienceSettings

Represents the settings that modify an org’s Lightning Experience configuration. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

A LightningExperienceSettings component has the suffix .settings and is stored in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

LightningExperienceSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| activeThemeName | string | If specified, indicates the API name of the custom LightningExperienceTheme that’s currently active in the org. If the field isn’t specified, then the org uses one of the built-in themes that Salesforce provides. Custom themes are available in API version 48.0 and later. |
| enableAccessCheckCrucPref | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableApiUserLtngOutAccessPref | boolean | Deprecated in API version 48.0 and later because the feature is no longer available. This field corresponds to the API Only Users Can Access Only Salesforce APIs critical update, which was enforced in Spring ’20. If a user has the API Only User permission, they can access Salesforce only via APIs, regardless of their other permissions. This restriction already applied to other Salesforce features, but the critical update enforced the restriction in Lightning Out also. |
| enableAuraBoxcarReductionPref |  | If true, dynamic boxcar optimization for the Aura framework is disabled. With dynamic boxcar optimization, a limited number of server-side Aura actions are grouped in a single network request, which improves the performance of Lightning components and apps. For more information, see Boxcar Grouping and Optimization in the Lightning Aura Components Developer Guide.The default value is false. |
| enableAuraCDNPref | boolean | Indicates whether Lightning Experience and other apps use a content delivery network (CDN) to serve the static content for Lightning Component framework. A CDN generally speeds up page load time, but it also changes the source domain that serves the files. If your company has IP range restrictions for content served from Salesforce, test thoroughly before enabling this setting. The default is true. |
| enableAuraDepAccessChksCRUCPref | boolean | Removed in API version 51.0 and later because the feature is no longer available. |
| enableAuraSecStaticResCRUCPref | boolean | Indicates whether the Enable Secure Static Resources for Lightning Components release update is enforced (true) or not (false). To improve security, this update serves all static resources from the visualforce domain instead of the lightning domain. This change prevents a script included in a static resource from accessing the document in the lightning domain due to the same-origin security policy. This field is available in API version 50.0 and later. |
| enableDeferRenderingWorkspacePage | boolean | Indicates whether the “Defer loading inactive console workspace pages” setting is enabled (true) or not (false). The default value is true. This field is available in API version 64.0 and later. See Defer Loading Inactive Lightning Console Workspace Pages in Salesforce Help. |
| enableErrorExperienceEnabled | boolean | Reserved for future use. |
| enableFeedbackInMobile | boolean | Indicates whether users can send feedback to Salesforce from the mobile app. The default is false. |
| enableGoogleSheetsForSfdcEnabled | boolean | Reserved. Do not use. |
| enableIE11DeprecationMsgHidden | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableIE11LEXCrucPref | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableInAppLearning | boolean | Indicates whether Learning Paths is enabled (true) or not (false). The default is true. If false, you can’t assign learning items to users, and users can’t view assigned learning items in the Guidance Center or access Learning Home. This field is available in API version 54.0 and later. See Learning Paths in Salesforce Help. |
| enableInAppTooltips | boolean | Indicates whether users see onboarding tips in the mobile app. The default is false. |
| enableLEXOnIpadEnabled | boolean | Indicates whether Lightning Experience is turned on for iPad Browsers (true) or not (false). The default is false. See Give Users Access to Lightning Experience on iPad Browsers (Beta) in Salesforce Help. |
| enableLexEndUsersNoSwitching | boolean | Indicates whether Salesforce Classic is turned off for your org (true) or not (false). Removes the Switcher for all users in the org. The default is false. See Turn Off Salesforce Classic for Your Org in Salesforce Help. This field is similar to enableUsersAreLightningOnly. If either field is set to true, users are blocked from switching to Salesforce Classic. |
| enableLightningPreviewPref | boolean | Indicates whether Local Dev is turned on for your org (true) or not (false). The default value is false. See Preview Components with Local Dev in Salesforce Developers. This field is available in API version 62.0 and later. |
| enableNavPersonalizationOptOut | boolean | Indicates whether users are blocked from personalizing the Lightning Experience navigation bar (true) or not (false). The default is false (that is, users can personalize the navigation bar by default). Salesforce recommends disabling personalization at the app level, not the org level. See Configure User Interface Settings in Salesforce Help. |
| enableNoBackgroundNavigations | boolean | Indicates whether consecutive API navigation calls in Visualforce pages are allowed (false) or blocked (true). The default is false. |
| enableQuip | boolean | Indicates whether Quip is available for your org. This field is available in API version 51.0 and later. |
| enableRemoveThemeBrandBanner | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableS1BannerPref | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableS1BrowserEnabled | boolean | Indicates whether all users can access the Salesforce mobile web view from a supported mobile browser (true) or not (false). If false, then users must access the Salesforce mobile full site view from a mobile browser. Full site view doesn’t have the full functionality of mobile web view. Salesforce Classic and Lightning Experience aren’t supported on mobile browsers. |
| enableS1DesktopEnabled | boolean | Indicates whether Lightning Experience is turned on in the org (true) or not (false). After it’s enabled, this setting can’t be disabled via the user interface or the API. See Turn on Lightning Experience for Your Org in Salesforce Help. |
| enableS1UiLoggingEnabled | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableSidToken3rdPartyAuraApp | boolean | Reserved for internal use. |
| enableSkypeChatEnabled | boolean | Deprecated in API version 50.0 and later because the feature is no longer available. |
| enableSparkAllUsers | boolean | Deprecated in API version 50.0 and later because the feature is no longer available. |
| enableSparkConversationEnabled | boolean | Deprecated in API version 50.0 and later because the feature is no longer available. |
| enableSplitViewOnStandard | boolean | Removed in API version 52.0 and later because the feature is no longer available. |
| enableStackedModalManagerEnabled | boolean | Indicates whether the Enable LWC Stacked Modals release update is enabled (true) or not (false). For orgs created before Summer ’24, the default value is false. For orgs created in Summer ’24 and later, the default value is true. This field is available in API version 61.0 and later. |
| enableTryLightningOptOut | boolean | Indicates whether the Try Lightning Experience Now prompt is hidden from users (true) or not (false). The default is false. See Try Lightning Experience Now Prompt in Salesforce Help. |
| enableUseS1AlohaDesktop | boolean | Deprecated in API version 47.0 and later because the feature is no longer available. |
| enableUsersAreLightningOnly | boolean | Indicates whether Salesforce Classic is turned off for your org (true) or not (false). Removes the Switcher for all users in the org. The default is false. This field is similar to enableLexEndUsersNoSwitching. If either field is set to true, users are blocked from switching to Salesforce Classic. |
| enableWebExEnabled | boolean | Deprecated in API version 50.0 and later because the feature is no longer available. |
| enableWebexAllUsers | boolean | Deprecated in API version 50.0 and later because the feature is no longer available. |
| isLEXExtensionComponentCustomizationOff | boolean | Indicates whether all users can enable the Lightning Extension Component Customization feature. If false, the feature is disabled for all users, even users who had it enabled. See Try New Features with the Lightning Extension for Chrome. This field is available in API version 48.0 and later. |
| isLEXExtensionDarkModeOff | boolean | Indicates whether all users can enable the Lightning Extension Dark Mode feature. If false, the feature is disabled for all users, even users who had it enabled. This field is available in API version 48.0 and later. |
| isLEXExtensionLinkGrabberOff | boolean | Indicates whether all users can enable the Lightning Extension Link Grabber feature. If false, the feature is disabled for all users, even users who had it enabled. This field is available in API version 48.0 and later. |
| isLEXExtensionOff | boolean | Indicates whether all users can enable the Lightning Extension for your org. If false, your users can’t enable the Lightning Extension, even if they already have it installed. This field is available in API version 48.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a LightningExperienceSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").