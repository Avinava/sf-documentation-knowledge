---
title: "IndustriesManufacturingSettings"
domain: automotive-cloud
topic: industriesmanufacturingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.724Z
estimatedTokens: 980
keywords: [IndustriesManufacturingSettings, settings, enabling, features, Partner, Lead, Management, Performance, Visit, Fleet, access, Advanced, Account, Forecasts, Manager]
---

# IndustriesManufacturingSettings

> Represents the settings for enabling
      features like Partner Lead Management, Partner Performance Management, Partner Visit
      Management, and Fleet Management. You also get access to settings for enabling features like
      Advanced Account Forecasts, Account Forecasts, Account Manager Targets, Manufacturing
      Programs, and Sales Agreements.

# IndustriesManufacturingSettings

Represents the settings for enabling features like Partner Lead Management, Partner Performance Management, Partner Visit Management, and Fleet Management. You also get access to settings for enabling features like Advanced Account Forecasts, Account Forecasts, Account Manager Targets, Manufacturing Programs, and Sales Agreements.

This type extends the Metadata metadata type and inherits its fullName field. In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesManufacturingSettings values are stored in a single file named IndustriesManufacturing.settings in the settings directory.

## Version

IndustriesManufacturingSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableIndManufacturing | boolean | Indicates whether the Sales Agreements feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgAccountForecast | boolean | Indicates whether the Account Forecasts feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgAdvForecast | boolean | Indicates whether the Advanced Account Forecasting feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgIAS | boolean | Indicates whether the Default Analytics Dashboards setting, available with the Sales Agreements feature, of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false.NoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |
| enableIndustriesMfgProgram | boolean | Indicates whether the Manufacturing Programs (program-based business) feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 54.0 and later. |
| enableIndustriesMfgTargets | boolean | Indicates whether the Account Manager Targets feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 49.0 and later. |
| enablePartnerLeadManagement | boolean | Indicates whether the Partner Lead Management feature is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 56.0 and later. |
| enablePartnerPerformanceManagement | boolean | Indicates whether the Partner Performance Management feature is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 56.0 and later. |
| enablePartnerVisitManagement | boolean | Indicates whether the Partner Visit Management feature is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 56.0 and later. |
| enableFleetManagement | boolean | Indicates whether the Fleet Management feature is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 59.0 and later. |
| enableFundingWorkbench | boolean | Indicates whether the Funding Workbench feature of Automotive cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 66.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesManufacturingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesManufacturingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableIndustriesMfgAccountForecast>false</enableIndustriesMfgAccountForecast>
  <enableIndManufacturing>false</enableIndManufacturing>
  <enableIndustriesMfgTargets>false</enableIndustriesMfgTargets>
  <enableIndustriesMfgIAS>false</enableIndustriesMfgIAS>
  <enableIndustriesMfgAdvForecast>false</enableIndustriesMfgAdvForecast>
  <enableIndustriesMfgProgram>false</enableIndustriesMfgProgram>
  <enablePartnerLeadManagement>false</enablePartnerLeadManagement>
  <enablePartnerPerformanceManagement>false</enablePartnerPerformanceManagement>
  <enablePartnerVisitManagement>false</enablePartnerVisitManagement>
  <enableFleetManagement>false</enableFleetManagement>
  <enableFundingWorkbench>false</enableFundingWorkbench>
</IndustriesManufacturingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesManufacturing</members>
    <name>Settings</name>
  </types>
  <version>56.0</version>
</Package>
```
