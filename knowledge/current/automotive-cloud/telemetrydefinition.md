---
title: "TelemetryDefinition"
domain: automotive-cloud
topic: telemetrydefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.774Z
estimatedTokens: 431
keywords: [TelemetryDefinition, definition, structure, telemetry, signal, sent, connected, asset, vehicle, Parent, File, Suffix, Directory, Location, Version, API, version, 65.0, later, Calls]
---

# TelemetryDefinition

> Represents the definition of the structure of a telemetry
			signal sent from a connected asset or vehicle.

# TelemetryDefinition

Represents the definition of the structure of a telemetry signal sent from a connected asset or vehicle.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

TelemetryDefinition components have the suffix .TelemetryDefinition and are stored in the TelemetryDefinitions folder.

## Version

TelemetryDefinition components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the telemetry definition. |
| developerName | Field TypestringDescriptionThe developer’s internal name for the API.For example, if you create a record with MyCustomRecord name, you cannot create another record with that same name. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| isTemplate | Field TypebooleanDescriptionRequired.Indicates whether the telemetry definition is a template (true) or not (false).The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for TelemetryDefinition, which is defined when the TelemetryDefinition is created. |
| usageType | Field TypeTelemetryDefinitionUsageType (enumeration of type string)DescriptionThe usage type of the telemetry definition.Possible values are:ConnectedAsset—Connected AssetConnectedVehicle—Connected Vehicle |

## Declarative Metadata Sample Definition

The following is an example of a TelemetryDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TelemetryDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Telemetry definition for monitoring vehicle engine parameters including temperature, RPM, and fuel consumption</description>
    <developerName>VehicleEngineMonitoring</developerName>
    <isProtected>false</isProtected>
    <isTemplate>false</isTemplate>
    <masterLabel>VehicleEngineMonitoring</masterLabel>
    <usageType>ConnectedVehicle</usageType>
</TelemetryDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>TelemetryDefinition</name>
    </types>
    <version>65.0</version>
</Package>
```
