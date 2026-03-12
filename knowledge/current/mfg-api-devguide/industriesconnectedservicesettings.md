---
title: "IndustriesConnectedServiceSettings"
domain: mfg-api-devguide
topic: industriesconnectedservicesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.233Z
estimatedTokens: 448
keywords: [IndustriesConnectedServiceSettings, settings, enabling, Manufacturing, cloud, feature, Telemetry, Definition, Action, Management, Parent, Manifest, Access, File, Suffix]
---

# IndustriesConnectedServiceSettings

> Represents the settings for enabling
			Manufacturing cloud feature Telemetry Definition and Action Management.

# IndustriesConnectedServiceSettings

Represents the settings for enabling Manufacturing cloud feature Telemetry Definition and Action Management.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm) for more details.

## File Suffix and Directory Location

IndustriesConnectedServiceSettings values are stored in the IndustriesConnectedServiceSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

IndustriesConnectedServiceSettings components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enablePrebuiltCmpntTlmtryMgmt | Field TypebooleanDescriptionIndicates whether the prebuilt components for Telemetry Definition and Action Managements feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |
| enableTelemetryDefActnMgmt | Field TypebooleanDescriptionIndicates whether the Telemetry Definition and Action Management feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an IndustriesConnectedServiceSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesConnectedServiceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enablePrebuiltCmpntTlmtryMgmt>false</enablePrebuiltCmpntTlmtryMgmt>
    <enableTelemetryDefActnMgmt>true</enableTelemetryDefActnMgmt>
</IndustriesConnectedServiceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesConnectedService</members>
        <name>Settings</name>
    </types>
    <version>65.0</version>
</Package>
```
