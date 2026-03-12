---
title: "TelemetryDefinitionVersion"
domain: mfg-api-devguide
topic: telemetrydefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.382Z
estimatedTokens: 494
keywords: [TelemetryDefinitionVersion, version, structure, telemetry, signal, sent, connected, asset, vehicle, Parent, File, Suffix, Directory, Location, Declarative]
---

# TelemetryDefinitionVersion

> Represents a version of the structure of a telemetry
			signal sent from a connected asset or vehicle.

# TelemetryDefinitionVersion

Represents a version of the structure of a telemetry signal sent from a connected asset or vehicle.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

TelemetryDefinitionVersion components have the suffix .TelemetryDefinitionVersion and are stored in the TelemetryDefinitionVersions folder.

## Version

TelemetryDefinitionVersion components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the telemetry definition version. |
| developerName | Field TypestringDescriptionThe developer’s internal name for the API.For example, if you create a record with MyCustomRecord name, you cannot create another record with that same name. |
| isActive | Field TypebooleanDescriptionIndicates whether the telemetry definition version is active (true) or not (false).The default value is false. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for TelemetryDefinitionVersion, which is defined when the TelemetryDefinitionVersion is created. |
| telemetryComponentStructure | Field TypestringDescriptionThe structure of the components in the telemetry definition that send signals, represented in a JSON format. |
| telemetryDefinition | Field TypestringDescriptionRequired.The telemetry definition that's associated with the telemetry definition version. |
| versionNumber | Field TypeintDescriptionRequired.The version number of the telemetry definition version. |

## Declarative Metadata Sample Definition

The following is an example of a TelemetryDefinitionVersion component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TelemetryDefinitionVersion xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Initial version of vehicle engine monitoring telemetry definition</description>
    <developerName>VehicleEngineMonitoringv1</developerName>
    <isActive>false</isActive>
    <isProtected>false</isProtected>
    <masterLabel>Vehicle Engine Monitoring v1.0</masterLabel>
    <telemetryComponentStructure>ewogICAgIlZlaGljbGUiOiB7CiAgICAgICAgImNoaWxkcmVuIjogewogICAgICAgICAgICAiQm9keSI6IHsKICAgICAgICAgICAgICAgICJjaGlsZHJlbiI6IHsKICAgICAgICAgICAgICAgICAgICAiSG9vZCI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgImNoaWxkcmVuIjogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgIlBvc2l0aW9uIjogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJjb21tZW50IjogIi4iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkYXRhdHlwZSI6ICJ1aW50OCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImRlc2NyaXB0aW9uIjogIkl0ZW0gcG9zaXRpb24uIDAgPSBTdGFydCBwb3NpdGlvbiAxMDAgPSBFbmQgcG9zaXRpb24uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibWF4IjogMTAwLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJtaW4iOiAwLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIjogImFjdHVhdG9yIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidW5pdCI6ICJwZXJjZW50IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJTd2l0Y2giOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImFsbG93ZWQiOiBbCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJJTkFDVElWRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJDTE9TRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJPUEVOIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIk9ORV9TSE9UX0NMT1NFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIk9ORV9TSE9UX09QRU4iCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGF0YXR5cGUiOiAic3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVzY3JpcHRpb24iOiAic2xpZGluZyBhY3Rpb24gc3VjaCBhcyB3aW5kb3cuIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJhY3R1YXRvciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgImNvbW1lbnQiOiAiIiwKICAgICAgICAgICAgICAgICAgICAgICAgImRlc2NyaXB0aW9uIjogIkhvb2Qgc3RhdHVzIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiOiAiYnJhbmNoIgogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAiZGVzY3JpcHRpb24iOiAiQWxsIGJvZHkgY29tcG9uZW50cy4iLAogICAgICAgICAgICAgICAgInR5cGUiOiAiYnJhbmNoIgogICAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICAiZGVzY3JpcHRpb24iOiAiSGlnaC1sZXZlbCB2ZWhpY2xlIGRhdGEuIiwKICAgICAgICAidHlwZSI6ICJicmFuY2giCiAgICB9Cn0=</telemetryComponentStructure>
    <telemetryDefinition>VehicleEngineMonitoring</telemetryDefinition>
    <versionNumber>1</versionNumber>
</TelemetryDefinitionVersion>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>TelemetryDefinitionVersion</name>
    </types>
    <version>65.0</version>
</Package>
```
