---
title: "ApexSettings"
domain: metadata-api
topic: apexsettings
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T15:45:50.551Z
keywords: [ApexSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ApexSettings

# ApexSettings

Represents Apex-related org settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ApexSettings values are stored in the Apex.settings file in the settings directory of the corresponding package directory. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

ApexSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| DefaultQueueableDelay | integer | Indicates the admin-controlled minimum delay (in seconds) that applies to all enqueued jobs that were scheduled without a delay parameter. The minimum delay is one second and the maximum is 600 seconds. The default behavior, when the setting is omitted, is no delay in scheduling enqueued jobs. |
| enableAggregateCodeCoverageOnly | boolean | Indicates whether aggregate (not detailed) totals are tracked for Apex test coverage data (true) or not (false). The default value is false. |
| enableApexAccessRightsPref | boolean | Deprecated. |
| enableApexApprovalLockUnlock | boolean | Indicates whether approval process lock and unlock operations from Apex code are allowed (true) or not (false). The default value is false. |
| enableApexCtrlImplicitWithSharingPref | boolean | Indicates whether the Use with sharing for @AuraEnabled Apex Controllers with Implicit Sharing critical update is activated (true) or not (false). For more details, see the Winter ’20 Release Notes. |
| enableApexPropertyGetterPref | boolean | Indicates whether the Enforce Access Modifiers on Apex Properties in Lightning Component Markup critical update is activated (true) or not (false). For more details, see the Winter ’20 Release Notes. |
| enableAuraApexCtrlAuthUserAccessCheckPref | boolean | Indicates whether the Restrict Access to @AuraEnabled Apex Methods for Authenticated Users Based on User Profile critical update is activated (true) or not (false). For more details, see the Winter ’20 Release Notes. |
| enableAuraApexCtrlGuestUserAccessCheckPref | boolean | Indicates whether the Restrict Access to @AuraEnabled Apex Methods for Guest and Portal Users Based on User Profile critical update is activated (true) or not (false). For more details, see the Winter ’20 Release Notes. |
| enableCompileOnDeploy | boolean | Indicates whether Apex code is automatically recompiled (true) or not (false). When set to true, code is recompiled before completing a metadata deployment, change set deployment, package installation, or package upgrade. For production orgs and full sandboxes, the default value is true. For all other orgs, the default value is false.NoteThis setting can’t be disabled in production orgs. |
| enableDisableParallelApexTesting | boolean | Indicates whether Apex tests are serially executed (true) or not (false). The default value is false.NoteEven when parallel testing is enabled by setting this value to false, tests that are run during deployments are always run serially. |
| enableDebugLogsDuringDeployment | boolean | Indicates whether debug logs are enabled during metadata deployment (true) or not (false), in conjunction with an active debug log trace flag. If this setting is true but the trace flag is not active, debug logs are not enabled during metadata deployment. The default value is false.NoteEnabling the debug log in the DebuggingHeader overrides this setting. |
| enableGaplessTestAutoNum | boolean | Indicates whether autonumbering gaps are prevented by Apex test executions not incrementing autonumber fields for non-test records (true) or not (false). The default value is true. |
| enableMngdCtrlActionAccessPref | boolean | Indicates whether the Disable Access to Non-global Apex Controller Methods in Managed Packages critical update is activated (true) or not (false). For more details, see the Winter ’20 Release Notes. |
| enableNonCertifiedApexMdCrud | boolean | Indicates whether Apex classes can access metadata, public or protected, through classes in the Metadata namespace (true) or not (false). The default value is false. |
| enableRestrictCommunityExecAnon | boolean | Indicates whether guest users are restricted from executing anonymous Apex. The restriction applies regardless of whether the Author Apex permission is set. The default value is true. |
| enableSecureNoArgConstructorPref | boolean | Not used. Critical update is automatically enforced. See Restrict Reflective Access to Non-Global Constructors in Packages (Critical Update). |
| enableTestSetupSkipTestResults | boolean | Indicates whether Apex test results are generated for @TestSetup methods (false) or not (true). Available in API version 61.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of ApexSettings components.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").