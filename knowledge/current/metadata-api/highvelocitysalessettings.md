---
title: "HighVelocitySalesSettings"
domain: metadata-api
topic: highvelocitysalessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:40.372Z
estimatedTokens: 1252
keywords: [HighVelocitySalesSettings, Represents, org’s, Sales, Engagement, settings., inside, sales, team, effective, possible., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample]
---

# HighVelocitySalesSettings

> Represents an org’s Sales Engagement settings.
      With Sales Engagement, you can make your inside sales team as effective as possible.

# HighVelocitySalesSettings

Represents an org’s Sales Engagement settings. With Sales Engagement, you can make your inside sales team as effective as possible.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

HighVelocitySalesSettings values are stored in a single file named HighVelocitySales.settings in the settings directory of the corresponding package directory.

## Version

HighVelocitySalesSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableACAutoSendEmail | boolean | Indicates whether a cadence step of type Automated Send can be created (true) or not (false). Allowing Salesforce to automatically send an email to a prospect can make your sales team more efficient, because reps don’t have to send the email themselves.Default value is true.Available in API version 48.0 and later. |
| enableACChangeTargetAssignee | boolean | Indicates whether target assignees, target owners, and users with access to related cadences can update target assignees (true) or not (false).Available in API version 50.0 and later. |
| enableACSkipWeekends | boolean | Indicates whether Skip Weekends is enabled (true) or not (false).Available in API version 48.0 and later. |
| enableBusinessHours | boolean | Indicates whether Business Hours is enabled in Sales Engagement (true) or not (false).Available in API version 58.0 and later. |
| enableCadenceVariantTestingPref | boolean | Indicates whether AB testing for cadence steps is enabled (true) or not (false).Available in API version 53.0 and later. |
| enableChgTgtAssigneeUsrPermPref | boolean | Indicates whether the change target assignee action is controlled by user permission (true) or not (false).Available in API version 51.0 and later. |
| enableDispositionCategory | boolean | Indicates whether Call Outcomes For Branching is enabled in Sales Engagement (true) or not (false). Use Call Outcomes For Branching to group calls into different outcome categories such as "Left Voicemail" or "Not Interested." You can see the outcomes in a report, or use them to determine how cadences are branched. enableHighVelocitySales must be true to use Sales Engagement.Default value is false. |
| enableEngagementWaveAnalyticsPref | boolean | Indicates whether you can see engagement statistics in CRM Analytics (true) or not (false). Use CRM Analytics to analyze information about calls, engagement, and how each sales rep moves through their cadence steps. |
| enableHighVelocitySales | boolean | Indicates whether Sales Engagement is enabled (true) or not (false). If enabled, it turns on the features required for the product and makes the app available to users.Default value is false. |
| enableHighVelocitySalesSetup | boolean | Indicates whether Sales Engagement is enabled (true) or not (false).Default value is false. |
| enableInvoiceAttributionPref | boolean | Indicates whether Invoice Attribution is enabled (true) or not (false).Available in API version 56.0 and later. |
| enableLogACallForCTIPref | boolean | Indicates whether Log a Call appears to CTI users by default (true) or not (false).Available in API version 54.0 and later. |
| enableLogTasksForLinkedInPref | boolean | Indicates whether users can log standard tasks upon completion of a LinkedIn step (true) or not (false).Available in API version 54.0 and later. |
| enableMultipleCadencesPref | boolean | Indicates whether targets can be assigned to multiple cadences (true) or not (false).Available in API version 57.0 and later. |
| enableOpportunityAttributionPermPref | boolean | Indicates whether Opportunity Attribution is enabled (true) or not (false).Available in API version 51.0 and later. |
| enableQuickCadenceAutoSendEmail | boolean | Indicates whether Automated Email send is enabled for Sales Engagement quick cadences (true) or not (false).Available in API version 57.0 and later. |
| enableTaskLoggingPref | boolean | Indicates whether users can log tasks after manual completion of a cadence step (true) or not (false).Available in API version 56.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of the HighVelocitySales.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the HighVelocitySalesSettings settings metadata:

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<HighVelocitySalesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableACAutoSendEmail>false</enableACAutoSendEmail>
  <enableACChangeTargetAssignee>false</enableACChangeTargetAssignee>
  <enableACSkipWeekends>false</enableACSkipWeekends>
  <enableBusinessHours>false</enableBusinessHours>
  <enableCadenceVariantTestingPref>false</enableCadenceVariantTestingPref>
  <enableChgTgtAssigneeUsrPermPref>false</enableChgTgtAssigneeUsrPermPref>
  <enableDispositionCategory>true</enableDispositionCategory>
  <enableEngagementWaveAnalyticsPref>true</enableEngagementWaveAnalyticsPref>
  <enableHighVelocitySales>true</enableHighVelocitySales>
  <enableHighVelocitySalesSetup>true</enableHighVelocitySalesSetup>
  <enableInvoiceAttributionPref>false</enableInvoiceAttributionPref>
  <enableLogACallForCTIPref>false</enableLogACallForCTIPref>
  <enableLogTasksForLinkedInPref>false</enableLogTasksForLinkedInPref>
  <enableMultipleCadencesPref>false</enableMultipleCadencesPref>
  <enableOpportunityAttributionPermPref>false</enableOpportunityAttributionPermPref>
  <enableQuickCadenceAutoSendEmail>false</enableQuickCadenceAutoSendEmail>
  <enableTaskLoggingPref>true</enableTaskLoggingPref>
</HighVelocitySalesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>HighVelocitySalesSettings</members>
		<name>Settings</name>
	</types>
	<version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
