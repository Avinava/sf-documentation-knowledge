---
title: "ServiceItsmIntelligenceUddSettings"
domain: agentforce
topic: serviceitsmintelligenceuddsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.212Z
estimatedTokens: 1038
keywords: [ServiceItsmIntelligenceUddSettings, Represents, settings, enabling, Service, Management, ITSM, Intelligence, features, including, Proactive, Assistance, Einstein, Incident, Agent, capabilities., Parent, Manifest, Access, File]
---

# ServiceItsmIntelligenceUddSettings

> Represents the settings for enabling IT Service
			Management (ITSM) Intelligence features, including Proactive Assistance, Einstein for
			Incident Management, and IT Service Agent capabilities.

# ServiceItsmIntelligenceUddSettings

Represents the settings for enabling IT Service Management (ITSM) Intelligence features, including Proactive Assistance, Einstein for Incident Management, and IT Service Agent capabilities.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

ServiceItsmIntelligenceUddSettings values are stored in the ServiceItsmIntelligenceUddSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

ServiceItsmIntelligenceUddSettings components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableCheckIncAttrProactvAsst | Field TypebooleanDescriptionIndicates whether the Check Incident Attributes Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableEinsteinAssignGrpInc | Field TypebooleanDescriptionIndicates whether the Assign Incidents with Einstein feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableEinsteinProbmCreationInc | Field TypebooleanDescriptionIndicates whether the Create Problems with Einstein feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncAsgntProactvAsst | Field TypebooleanDescriptionIndicates whether the Incident Assignment Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncPrpsRsolSumProactvAsst | Field TypebooleanDescriptionIndicates whether the Propose Resolution Summary for Incident Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncRootCseSumProactvAsst | Field TypebooleanDescriptionIndicates whether the Create Incident Root Cause Summary Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncSmlrRecProactvAsst | Field TypebooleanDescriptionIndicates whether the Associate Similar Incidents to Incident Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncSrvcPlanProactvAsst | Field TypebooleanDescriptionIndicates whether the Create Service Plan for Incident Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableIncSummaryProactvAsst | Field TypebooleanDescriptionIndicates whether the Summarize Incident Proactive Assistance feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableItSrvcsEmployeeAgent | Field TypebooleanDescriptionIndicates whether the IT Service Employee Agent feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableItSrvcsFulfillerAgent | Field TypebooleanDescriptionIndicates whether the IT Service Fulfiller Agentforce Agent feature is enabled (true) or disabled (false) for your org. The default value is false. |
| enableProactvAsstforItSrvcs | Field TypebooleanDescriptionIndicates whether the Proactive Assistance for Incidents feature is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a ServiceItsmIntelligenceUddSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ServiceItsmIntelligenceUddSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCheckIncAttrProactvAsst>true</enableCheckIncAttrProactvAsst>
    <enableEinsteinAssignGrpInc>true</enableEinsteinAssignGrpInc>
    <enableEinsteinProbmCreationInc>true</enableEinsteinProbmCreationInc>
    <enableIncAsgntProactvAsst>true</enableIncAsgntProactvAsst>
    <enableIncPrpsRsolSumProactvAsst>true</enableIncPrpsRsolSumProactvAsst>
    <enableIncRootCseSumProactvAsst>true</enableIncRootCseSumProactvAsst>
    <enableIncSmlrRecProactvAsst>true</enableIncSmlrRecProactvAsst>
    <enableIncSrvcPlanProactvAsst>true</enableIncSrvcPlanProactvAsst>
    <enableIncSummaryProactvAsst>true</enableIncSummaryProactvAsst>
    <enableItSrvcsEmployeeAgent>true</enableItSrvcsEmployeeAgent>
    <enableItSrvcsFulfillerAgent>true</enableItSrvcsFulfillerAgent>
    <enableProactvAsstforItSrvcs>true</enableProactvAsstforItSrvcs>
</ServiceItsmIntelligenceUddSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ServiceItsmIntelligenceUdd</members>
        <name>Settings</name>
    </types>
    <version>65.0</version>
</Package>
```
