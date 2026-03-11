---
title: "AccountSettings"
domain: metadata-api
topic: accountsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.277Z
keywords: [AccountSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Example, Package, Manifest, Wildcard, Support]
---

# AccountSettings

# AccountSettings

Represents an org’s account settings for account teams, account owner report, and the **View Hierarchy** link.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

AccountSettings values are stored in the Account.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AccountSettings is available in API versions 29.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAccountDiscovery | boolean | When true, sets up Einstein Account Management dashboards and installs the related CRM Analytics and Customer Insights apps. The dashboards give users access to account health analytics including metrics on open pipeline, risk, and engagement scores.Einstein Account Management is part of Revenue Intelligence, which is available for an additional cost.Available in API version 57.0 and later. |
| enableAccountHistoryTracking | boolean | Indicates whether history tracking is enabled for accounts (true) or not (false). The default value is false. If history tracking is disabled, the History related list is removed from account page layouts. However, history data is still available for reporting up to the date and time when tracking was disabled. Available in API version 47.0 and later. |
| enableAccountInsightsInMobile | boolean | Deprecated in API version 59.0 and later because the feature is no longer available. Indicates whether users can see Einstein Account Insights on their mobile device (true) or not (false). Insights appear in the Einstein Insights component, which is on account records and the Home page.To use this feature, users must have the Einstein Account Insights permission.Available in API version 47.0 to 58.0. |
| enableAccountOwnerReport | boolean | Indicates whether the Account Owner Report can (true) or can’t (false) be run by all users. |
| enableAccountTeams | boolean | Indicates whether account teams are enabled (true) or not (false).The Metadata API can’t be used to disable account teams. |
| enableContactHistoryTracking | boolean | Indicates whether history tracking is enabled for contacts (true) or not (false). Available in API version 46.0 and later. |
| enableRelateContactToMultipleAccounts | boolean | Indicates whether users can relate a contact to multiple accounts (true) or only one account (false). The default value is false. If this feature (Contacts to Multiple Accounts) is disabled, secondary contact–account relationships created while the feature was enabled are deleted. Available in API version 47.0 and later.Avoid using the Metadata API to enable this feature. Use the Account Settings page in Setup to enable Contacts to Multiple Accounts. |
| enableReportsToOnPersonAccount | boolean | Indicates whether the Reports To field on Person Account, which corresponds to the PersonReportsToId field on the Account object, is enabled. The field allows users to associate person accounts and contacts with other person accounts or contacts that they report to.Available in API version 62.0 and later. |
| showViewHierarchyLink | boolean | Indicates whether the default View Hierarchy link on all business account detail pages is visible (true) or hidden (false). |

## Declarative Metadata Sample Definition

The following is an example of the Account.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Account settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").