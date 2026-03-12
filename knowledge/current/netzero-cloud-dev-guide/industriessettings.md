---
title: "IndustriesSettings"
domain: netzero-cloud-dev-guide
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.895Z
estimatedTokens: 1626
keywords: [IndustriesSettings, settings, Net, Zero, Cloud, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative, Metadata]
---

# IndustriesSettings

> Represents settings for Net Zero Cloud.

# IndustriesSettings

Represents settings for Net Zero Cloud.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings for Net Zero Cloud are available in API version 54.0 and later.

## Special Access Rules

Users need Net Zero Cloud permissions to access the settings available in editions with the Net Zero Cloud Starter and Net Zero Cloud Growth licenses.

## Fields for Net Zero Cloud

| Field Name | Description |
| --- | --- |
| enableGnrcDisclsFrmwrk | Field TypebooleanDescriptionIndicates whether the Industries Disclosure and Compliance Hub feature is enabled (true) or not (false) for your org. The default is false. Available in API version 57.0 and later in editions where Disclosure and Compliance Hub is enabled. |
| enableInformationLibrary | Field TypebooleanDescriptionIndicates whether the Information Library feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Disclosure and Compliance Hub is enabled. |
| enableMaterialityAssessment | Field TypebooleanDescriptionIndicates whether the Manage Materiality Assessments feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Net Zero Cloud is enabled. |
| enableNZCMngEsgPgm | Field TypebooleanDescriptionIndicates whether the Manage Environmental, Social, and Governance Programs feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCAssignFootprint | Field TypebooleanDescriptionIndicates whether the Assign Carbon Footprint to Energy Use Records feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCBEIEnabled | Field TypebooleanDescriptionIndicates whether the Manage Building Energy Intensity feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCarbonAccounting | Field TypebooleanDescriptionIndicates whether the Manage Carbon Accounting feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCarbonCreditAlloc | Field TypebooleanDescriptionIndicates whether the Allocate Carbon Credits to offset the unavoidable emissions feature is enabled for your org. The default is false. Available in API version 56.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCreateFootprint | Field TypebooleanDescriptionIndicates whether the Auto-Create Carbon Footprints feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCDGF | Field TypebooleanDescriptionIndicates whether the Manage Data Gaps feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCExpansionUseCase | Field TypebooleanDescriptionIndicates whether the Manage Carbon Accounting for Extended Organizational Boundaries feature is enabled for your org. The default is false. Available in API version 57.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCExternalEngMgmt | Field TypebooleanDescriptionIndicates whether the Manage Supplier Sustainability Data feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCEmssnsForecasting | Field TypebooleanDescriptionIndicates whether the Manage Carbon Emissions Forecast feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCSNGManagement | Field TypebooleanDescriptionIndicates whether the Manage Social and Governance feature is enabled for your org. The default is false. Available in API version 57.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCScope3HubEnabled | Field TypebooleanDescriptionIndicates whether the Manage Scope 3 Procurement Hub feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCTargetSetting | Field TypebooleanDescriptionIndicates whether the Manage Emissions Target feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCWasteManagement | Field TypebooleanDescriptionIndicates whether the Manage Waste-Related Data feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCWaterManagement | Field TypebooleanDescriptionIndicates whether the Manage Water-Related Data feature is enabled for your org. For example, water consumption, withdrawal, and discharge. The default is false. Available in API version 56.0 and later in editions where Net Zero Cloud is enabled. |
| enableSustainabilityCloud | Field TypebooleanDescriptionIndicates whether the Net Zero Cloud feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |

## Declarative Metadata Sample Definition

The following is an example of a Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

#### See Also

-   [*Set Up and Maintain Net Zero Cloud*: Enable Net Zero Cloud Settings](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_enable_add_netzero_settings.htm&type=5&language=en_US "Set Up and Maintain Net Zero Cloud: Enable Net Zero Cloud Settings - HTML (New Window)")

-   [*Set Up and Maintain Net Zero Cloud*: Enable the Disclosure and Compliance Hub](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_enable_disclosure_and_compliance_hub.htm&language=en_US "Set Up and Maintain Net Zero Cloud: Enable the Disclosure and Compliance
    Hub - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <enableGnrcDisclsFrmwrk>false</enableGnrcDisclsFrmwrk>
   <enableMaterialityAssessment>false</enableMaterialityAssessment>
   <enableNZCMngEsgPgm>false</enableNZCMngEsgPgm>
   <enableSCAssignFootprint>true</enableSCAssignFootprint>
   <enableSCBEIEnabled>true</enableSCBEIEnabled>
   <enableSCDGF>true</enableSCDGF>
   <enableSCCarbonAccounting>true</enableSCCarbonAccounting>
   <enableSCCarbonCreditAlloc>true</enableSCCarbonCreditAlloc>
   <enableSCCreateFootprint>true</enableSCCreateFootprint>
   <enableSCScope3HubEnabled>true</enableSCScope3HubEnabled>
   <enableSCEmssnsForecasting>true</enableSCEmssnsForecasting>
   <enableSCTargetSetting>true</enableSCTargetSetting>
   <enableSCExternalEngMgmt>true</enableSCExternalEngMgmt>
   <enableSCWasteManagement>true</enableSCWasteManagement>
   <enableSCWaterManagement>true</enableSCWaterManagement>
   <enableSustainabilityCloud>true</enableSustainabilityCloud>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>Industries</members>
       <name>Settings</name>
   </types>
   <version>54.0</version>
</Package>
```
