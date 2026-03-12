---
title: "TelemetryActnDefStepAttr"
domain: automotive-cloud
topic: telemetryactndefstepattr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.768Z
estimatedTokens: 631
keywords: [TelemetryActnDefStepAttr, attributes, telemetry, action, definition, step, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, API, version, 65.0, later, Calls]
---

# TelemetryActnDefStepAttr

> Represents the attributes of a telemetry action definition
			step.

# TelemetryActnDefStepAttr

Represents the attributes of a telemetry action definition step.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

TelemetryActnDefStepAttr components have the suffix .TelemetryActnDefStepAttr and are stored in the TelemetryActnDefStepAttrs folder.

## Version

TelemetryActnDefStepAttr components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| allowedValues | Field TypestringDescriptionThe allowed values for the telemetry action definition step attribute. |
| attributeName | Field TypestringDescriptionRequired.The name of the telemetry action definition step attribute. |
| dataType | Field TypeTelActnDefStepAttrDataType (enumeration of type string)DescriptionRequired.The data type of the telemetry action definition step attribute.Values are:BooleanDoubleFloatInt16Int32Int8IntegerStringUint16Uint32Uint64Uint8 |
| description | Field TypestringDescriptionThe description of the telemetry action definition step attribute. |
| developerName | Field TypestringDescriptionThe developer’s internal name for the API.For example, if you create a record with MyCustomRecord name, you cannot create another record with that same name. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for TelemetryActnDefStepAttr, which is defined when the TelemetryActnDefStepAttr is created. |
| maximumValue | Field TypedoubleDescriptionThe maximum value allowed for the telemetry action definition step attribute. |
| minimumValue | Field TypedoubleDescriptionThe minimum value allowed for the telemetry action definition step attribute. |
| telemetryActnDefStep | Field TypestringDescriptionRequired.The telemetry action definition step that this attribute belongs to. |
| type | Field TypeTelemetryActnDefStepAttrType (enumeration of type string)DescriptionRequired.The type of the telemetry action definition step attribute.Values are:ActuatorSensor |
| unitOfMeasure | Field TypestringDescriptionThe unit of measure of the telemetry action definition step attribute. |

## Declarative Metadata Sample Definition

The following is an example of a TelemetryActnDefStepAttr component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TelemetryActnDefStepAttr xmlns="http://soap.sforce.com/2006/04/metadata">
    <allowedValues>INACTIVE,CLOSE,OPEN</allowedValues>
    <attributeName>Position</attributeName>
    <dataType>int8</dataType>
    <description>sliding action such as window.</description>
    <developerName>HoodStatusControl_HoodPositionStep_Position</developerName>
    <isProtected>false</isProtected>
    <masterLabel>Hood Position Control</masterLabel>
    <telemetryActnDefStep>HoodStatusControl_HoodPositionStep</telemetryActnDefStep>
    <type>Actuator</type>
    <unitOfMeasure>Action</unitOfMeasure>
</TelemetryActnDefStepAttr>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>TelemetryActnDefStepAttr</name>
    </types>
    <version>65.0</version>
</Package>
```
