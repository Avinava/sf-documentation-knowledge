---
title: "SubscriptionManagementSettings"
domain: metadata-api
topic: subscriptionmanagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.762Z
keywords: [SubscriptionManagementSettings, Parent, Type, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# SubscriptionManagementSettings

# SubscriptionManagementSettings

Represents the settings used to manage recurring subscriptions.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

SubscriptionManagementSettings values are stored in the subscriptionmanagement.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

SubscriptionManagementSettings components are available in API version 55.0 and later.

## Special Access Rules

This metadata type is available with Subscription Management.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableBillingDocGen | boolean | Indicates whether document generation is enabled in the org (true) or not (false). The default value is false. |
| enableConvert​NegativeInvoiceLines​ToCreditMemo​AndApply | boolean | Indicates whether to convert negative invoice lines into a credit note (true) or not (false). This credit note holds a positive balance that you can later use to apply against future invoices. The default value is false. |
| enableInvHeaderLvlSettlement | boolean | Indicates whether payments can be applied on the whole invoice (true) or only on invoice lines (false). The default value is false. |
| enablePaymentScheduleAutomation | boolean | Indicates whether the payment schedule and payment schedule item are created automatically (true) or not (false). The default value is false. |
| enableRefundAutomation | boolean | Indicates whether refunds are processed automatically (true) or not (false). The default value is false. |
| enableRevSubMgmtBlngOptOut | boolean | Indicates whether the billing schedules in Subscription Management are disabled (true) or not (false). The default value is false. |
| enableSubscriptionManagement | boolean | Indicates whether Subscription Management is enabled (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

This example shows a sample SubscriptionManagementSettings component.

```

```

This example shows a sample package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").