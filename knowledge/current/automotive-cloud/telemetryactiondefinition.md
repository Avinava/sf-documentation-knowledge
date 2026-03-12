---
title: "TelemetryActionDefinition"
domain: automotive-cloud
topic: telemetryactiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.751Z
estimatedTokens: 515
keywords: [TelemetryActionDefinition, action, taken, telemetry, signal, sent, connected, asset, vehicle, getting, current, status, component, sending, perform]
---

# TelemetryActionDefinition

> Represents the action taken on a telemetry signal sent
			from a connected asset or vehicle, such as getting the current status of a vehicle or
			its component, or sending a request to perform a remote action on the vehicle or its
			component.

# TelemetryActionDefinition

Represents the action taken on a telemetry signal sent from a connected asset or vehicle, such as getting the current status of a vehicle or its component, or sending a request to perform a remote action on the vehicle or its component.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

TelemetryActionDefinition components have the suffix .TelemetryActionDefinition and are stored in the TelemetryActionDefinitions folder.

## Version

TelemetryActionDefinition components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| actionName | Field TypestringDescriptionRequired.The full name of the action related to a telemetry definition. |
| description | Field TypestringDescriptionThe description of the telemetry action definition. |
| developerName | Field TypestringDescriptionThe developer’s internal name for the API.For example, if you create a record with MyCustomRecord name, you cannot create another record with that same name. |
| executionProcedure | Field TypestringDescriptionThe execution procedure that's used to fulfill telemetry action related processes. |
| isActive | Field TypebooleanDescriptionIndicates whether the telemetry definition version is active (true) or not (false).The default value is false. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for TelemetryActionDefinition, which is defined when the TelemetryActionDefinition is created. |
| telemetryDefinitionVersion | Field TypestringDescriptionRequired.The telemetry definition version related to the action. |

## Declarative Metadata Sample Definition

The following is an example of a TelemetryActionDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TelemetryActionDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionName>HoodStatusControl</actionName>
    <description>Action to monitor and control vehicle hood open/close status and switch operations</description>
    <developerName>HoodStatusControl</developerName>
    <executionProcedure>HoodControlFlow</executionProcedureIdentifier>
    <isActive>true</isActive>
    <isProtected>false</isProtected>
    <masterLabel>Hood Status Control</masterLabel>
    <telemetryDefinitionVersion>VehicleBodyMonitoringv1</telemetryDefinitionVersion>
</TelemetryActionDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>TelemetryActionDefinition</name>
    </types>
    <version>65.0</version>
</Package>
```
