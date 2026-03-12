---
title: "IndustriesManufacturingSettings"
domain: mfg-api-devguide
topic: industriesmanufacturingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.249Z
estimatedTokens: 1060
keywords: [IndustriesManufacturingSettings, settings, enabling, Manufacturing, cloud, features, Account, Forecasts, Manager, Targets, Programs, program-based, business, Sales, Agreements]
---

# IndustriesManufacturingSettings

> Represents the settings for enabling
      Manufacturing cloud features like Account Forecasts, Account Manager Targets, Manufacturing
      Programs (program-based business), and Sales Agreements.

# IndustriesManufacturingSettings

Represents the settings for enabling Manufacturing cloud features like Account Forecasts, Account Manager Targets, Manufacturing Programs (program-based business), and Sales Agreements.

This type extends the Metadata metadata type and inherits its fullName field.In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesManufacturingSettings values are stored in a single file named IndustriesManufacturing.settings in the settings directory.

## Version

IndustriesManufacturingSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableConnectedAssetSrvcsCmpnt | boolean | Indicates whether the predefined components for Connected Asset Services feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 61.0 and later. |
| enableIndManufacturing | boolean | Indicates whether the Sales Agreements feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgAccountForecast | boolean | Indicates whether the Account Forecasts feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgAdvForecast | boolean | Indicates whether the Advanced Account Forecasting feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIndustriesMfgIAS | boolean | Indicates whether the Default Analytics Dashboards setting, available with the Sales Agreements feature, of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false.NoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |
| enableIndustriesMfgProgram | boolean | Indicates whether the Manufacturing Programs (program-based business) feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. Available in API version 54.0 and later. |
| enableIndustriesMfgTargets | boolean | Indicates whether the Account Manager Targets feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 49.0 and later. |
| enableMfgAgents | boolean | Indicates whether the Manufacturing Agents feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 64.0 and later. |
| enableMfgAgentsPilot | boolean | Reserved for future use. |
| enablePtnrLeadMgmtMappings | boolean | Indicates whether the Vehicle And Asset Finance feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 60.0 and later. |
| enableVehAndAstLending | boolean | Indicates whether the Vehicle and Asset Lending feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 62.0 and later. |
| enableVehicleAndAssetFinance | boolean | Indicates whether the Vehicle And Asset Finance feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 60.0 and later. |
| enableVehAssetFinAddtnlCmpnts | boolean | Indicates whether the predefined components for Vehicle And Asset Finance feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 60.0 and later. |

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
  <enableConnectedAssetSrvcsCmpnt>true</enableConnectedAssetSrvcsCmpnt>
  <enableIndManufacturing>false</enableIndManufacturing>
  <enableIndustriesMfgAccountForecast>false</enableIndustriesMfgAccountForecast>
  <enableIndustriesMfgAdvForecast>false</enableIndustriesMfgAdvForecast>
  <enableIndustriesMfgIAS>false</enableIndustriesMfgIAS>
  <enableIndustriesMfgProgram>false</enableIndustriesMfgProgram>
  <enableIndustriesMfgTargets>false</enableIndustriesMfgTargets>
  <enableMfgAgents>false</enableMfgAgents>
  <enablePtnrLeadMgmtMappings>false</enablePtnrLeadMgmtMappings>
  <enableVehAndAstLending>true</enableVehAndAstLending>
  <enableVehAssetFinAddtnlCmpnts>true</enableVehAssetFinAddtnlCmpnts>
  <enableVehicleAndAssetFinance>true</enableVehicleAndAssetFinance>
</IndustriesManufacturingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesManufacturing</members>
    <name>Settings</name>
  </types>
  <version>47.0</version>
</Package>
```
