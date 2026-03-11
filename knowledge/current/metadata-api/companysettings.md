---
title: "CompanySettings"
domain: metadata-api
topic: companysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.210Z
keywords: [CompanySettings, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, FiscalYearSetting, Sample, Definition, Fiscal, Year, Setting, Wildcard, Support, Manifest]
---

# CompanySettings

# CompanySettings

Represents global settings that affect multiple features in your organization. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Declarative Metadata File Suffix and Directory Location

CompanySettings values are stored in a single file named Company.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Company Profile Settings are available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCustomFiscalYear | boolean | If a custom fiscal period is set up, this field is used to determine whether the custom fiscal period is used for forecasts. If true, the custom fiscal period is used. If false (default), standard periods are used. Available in API version 47.0 and later. |
| fiscalYear | FiscalYearSetting | The organization’s fiscal year setting based on year and start month. Not available if Custom Fiscal Year or Forecasts (Classic) is enabled. When changing fiscal year settings, quotas and adjustments can be purged. For example changing your start month results in purging this data. |

## FiscalYearSetting

Represents your organization’s fiscal year setting.

| Field | Field Type | Description |
| --- | --- | --- |
| fiscalYearNameBasedOn | string | This field is used to determine the fiscal year name. Valid values are endingMonth or startingMonth. For example, if your fiscal year starts in April 2012 and ends in March 2013, and this value is:endingMonth, then 2013 is used for the fiscal year name.startingMonth, then 2012 is used for the fiscal year name. |
| startMonth | string | The month on which the fiscal year is based. |

## Declarative Metadata Sample Definition — Fiscal Year Setting

A sample XML definition of a fiscal year setting is shown below. Note that this example is supported in API version 27.0 and later.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").