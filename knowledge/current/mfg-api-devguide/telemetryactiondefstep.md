---
title: "TelemetryActionDefStep"
domain: mfg-api-devguide
topic: telemetryactiondefstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.360Z
estimatedTokens: 589
keywords: [TelemetryActionDefStep, step, action, telemetry, signal, definition, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample]
---

# TelemetryActionDefStep

> Represents a step in the action for a telemetry signal
			definition.

# TelemetryActionDefStep

Represents a step in the action for a telemetry signal definition.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

TelemetryActionDefStep components have the suffix .TelemetryActionDefStep and are stored in the TelemetryActionDefSteps folder.

## Version

TelemetryActionDefStep components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| delayInSeconds | Field TypeintDescriptionIndicates a delay (in seconds) before the step is executed. |
| developerName | Field TypestringDescriptionThe developer’s internal name for the API.For example, if you create a record with MyCustomRecord name, you cannot create another record with that same name. |
| groupName | Field TypestringDescriptionRequired.The name of the group that the telemetry action definition step belongs to. Steps in a group are shown together in an intake form. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for TelemetryActionDefStep, which is defined when the TelemetryActionDefStep is created. |
| operationType | Field TypeTelemetryActnDefStepOpType (enumeration of type string)DescriptionRequired.Specifies the type of the operation that's performed in the telemetry action definition step.Values are:RetrieveSubmit |
| remoteEndPointUrl | Field TypestringDescriptionThe URL of the remote end point to which a request is shared to execute the telemetry action step. |
| sequenceNumber | Field TypeintDescriptionRequired.The sequence number of a step in the action related to a telemetry definition. |
| targetComponentPath | Field TypestringDescriptionRequired.The hierarchical path representing the target component in the telemetry system of a connected asset or vehicle where the action is targeted. |
| telemetryActionDefinition | Field TypestringDescriptionRequired.The telemetry action definition related to the step. |

## Declarative Metadata Sample Definition

The following is an example of a TelemetryActionDefStep component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TelemetryActionDefStep xmlns="http://soap.sforce.com/2006/04/metadata">
    <delayInSeconds>0</delayInSeconds>
    <developerName>HoodStatusControl_HoodPositionStep</developerName>
    <groupName>BodyControlResponse</groupName>
    <isProtected>false</isProtected>
    <masterLabel>Hood Position Monitor</masterLabel>
    <operationType>Submit</operationType>
    <remoteEndPointUrl>https://api.sample-vehicle-management.com/hood</remoteEndPointUrl>
    <targetComponentPath>Vehicle.Body.Hood</targetComponentPath>
    <telemetryActionDefinition>HoodStatusControl</telemetryActionDefinition>
</TelemetryActionDefStep>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>TelemetryActionDefStep</name>
    </types>
    <version>65.0</version>
</Package>
```
