---
title: "EntitlementSettings"
domain: metadata-api
topic: entitlementsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.292Z
keywords: [EntitlementSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# EntitlementSettings

# EntitlementSettings

Represents an organization’s entitlement settings.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EntitlementSettings values are stored in the Entitlements.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EntitlementSettings is available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetLookupLimitedToActiveEntitlementsOnAccount | boolean | Indicates whether entitlements-related lookup filters on cases return only the assets related to the active entitlements on the case’s account (true) or not (false). |
| assetLookupLimitedToActiveEntitlementsOnContact | boolean | Indicates whether entitlements-related lookup filters on cases return only the assets related to the active entitlements on the case’s contact (true) or not (false). |
| assetLookupLimitedToSameAccount | boolean | Indicates whether entitlements-related lookup filters on cases return only the assets related to the case’s account (true) or not (false). |
| assetLookupLimitedToSameContact | boolean | Indicates whether entitlements-related lookup filters on cases return only the assets related to the case’s contact (true) or not (false). |
| enableEntitlements | boolean | Indicates whether entitlements are enabled (true) or not (false). |
| enableEntitlementVersioning | boolean | Indicates whether entitlement versioning is enabled (true) or not (false).This field is available in API version 28.0 and later. |
| enableMilestoneFeedItem | boolean | When set to true, indicates whether to post to the feed and the record owner’s profile page when a milestone is completed or violated. When set to false, indicates that no post occurs when a milestone is completed or violated.This field is available in API version 47.0 and later. |
| enableMilestoneStoppedTime | boolean | Indicates whether to show the Stopped Time and Actual Elapsed Time fields on an entitlement milestone (true) or not (false).This field is available in API version 47.0 and later. |
| entitlementLookupLimitedToActiveStatus | boolean | Indicates whether entitlements-related lookup filters on cases return only active entitlements (true) or not (false). |
| entitlementLookupLimitedToSameAccount | boolean | Indicates whether entitlements-related lookup filters on cases return only the entitlements related to the case’s account (true) or not (false). |
| entitlementLookupLimitedToSameAsset | boolean | Indicates whether entitlements-related lookup filters on cases return only the entitlements related to the case’s asset (true) or not (false). |
| entitlementLookupLimitedToSameContact | boolean | Indicates whether entitlements-related lookup filters on cases return only the entitlements related to the case’s contact (true) or not (false). |
| ignoreMilestoneBusinessHours | boolean | Indicates whether to show the time remaining on an event milestone in actual hours (true) or business hours (false).This field is available in API version 47.0 and later. |

## Declarative Metadata Sample Definition

This is a sample entitlements settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").