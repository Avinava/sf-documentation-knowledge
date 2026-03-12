---
title: "WorkTypeBuilder Class"
domain: apex-reference
topic: worktypebuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.718Z
estimatedTokens: 2120
namespace: LxScheduler
keywords: [WorkTypeBuilder, Contains, build, instance, lxscheduler.WorkType, class., setBlockTimeAfterAppointmentInMinutes, blockTimeAfterAppointmentInMinutes, setBlockTimeBeforeAppointmentInMinutes, blockTimeBeforeAppointmentInMinutes, setDurationInMinutes, durationInMinutes, setId, setOperatingHoursId, operatingHoursId, setSkillRequirements, skillRequirements, setTimeFrameEndInMinutes, timeFrameEndInMinutes, setTimeFrameStartInMinutes]
---

# WorkTypeBuilder Class

> Contains methods to build an instance of the lxscheduler.WorkType class.

**Namespace:** `LxScheduler`

# WorkTypeBuilder Class

Contains methods to build an instance of the lxscheduler.WorkType class.

A Builder object is obtained by invoking one of the WorkTypeBuilder methods defined by the WorkType class.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

-   **[WorkTypeBuilder Methods](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_methods)**


## WorkTypeBuilder Methods

The following are methods for WorkTypeBuilder.

-   **[build()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_build)**
    Returns an instance of the lxscheduler.WorkType object.
-   **[setBlockTimeAfterAppointmentInMinutes(blockTimeAfterAppointmentInMinutes)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setBlockTimeAfterAppointmentInMinutes)**
    Sets the time period, in minutes.
-   **[setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setBlockTimeBeforeAppointmentInMinutes)**
    Sets the time period, in minutes.
-   **[setDurationInMinutes(durationInMinutes)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setDurationInMinutes)**
    Sets the event length.
-   **[setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setId)**
    Sets the ID of the work type to the specified ID.
-   **[setOperatingHoursId(operatingHoursId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setOperatingHoursId)**
    Sets the overlap of operating hours.
-   **[setSkillRequirements(skillRequirements)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setSkillRequirements)**
    Sets the skills that are required to complete a particular task for a work type.
-   **[setTimeFrameEndInMinutes(timeFrameEndInMinutes)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setTimeFrameEndInMinutes)**
    Sets the end of the timeframe.
-   **[setTimeFrameStartInMinutes(timeFrameStartInMinutes)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_lxscheduler_WorkTypeBuilder_setTimeFrameStartInMinutes)**
    Sets the beginning of the timeframe.

### build()

Returns an instance of the lxscheduler.WorkType object.

#### Signature

public lxscheduler.WorkType build()

#### Return Value

Type: [lxscheduler.WorkType](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

### setBlockTimeAfterAppointmentInMinutes(blockTimeAfterAppointmentInMinutes)

Sets the time period, in minutes.

#### Signature

public lxscheduler.WorkTypeBuilder setBlockTimeAfterAppointmentInMinutes(Integer blockTimeAfterAppointmentInMinutes)

#### Parameters

blockTimeAfterAppointmentInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The time period after the appointment is considered unavailable.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)

Sets the time period, in minutes.

#### Signature

public lxscheduler.WorkTypeBuilder setBlockTimeBeforeAppointmentInMinutes(Integer blockTimeBeforeAppointmentInMinutes)

#### Parameters

blockTimeBeforeAppointmentInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The time period before the appointment is considered as unavailable.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setDurationInMinutes(durationInMinutes)

Sets the event length.

#### Signature

public lxscheduler.WorkTypeBuilder setDurationInMinutes(Integer durationInMinutes)

#### Parameters

durationInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Contains the event length, in minutes. Required if id is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setId(id)

Sets the ID of the work type to the specified ID.

#### Signature

public lxscheduler.WorkTypeBuilder setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the work type. Required if you're using shifts or if durationInMinutes is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setOperatingHoursId(operatingHoursId)

Sets the overlap of operating hours.

#### Signature

public lxscheduler.WorkTypeBuilder setOperatingHoursId(String operatingHoursId)

#### Parameters

operatingHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setSkillRequirements(skillRequirements)

Sets the skills that are required to complete a particular task for a work type.

#### Signature

public lxscheduler.WorkTypeBuilder setSkillRequirements(List<lxscheduler.SkillRequirement> skillRequirements)

#### Parameters

skillRequirements

Type: List<[lxscheduler.SkillRequirement](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirement.htm#apex_class_lxscheduler_SkillRequirement "Contains information about the set of skills that are required to complete a particular task for a work type.")\>

This method takes input as an instance of the lxscheduler.SkillRequirement class. Build the instance of the input class using the lxscheduler.SkillRequirementBuilder class.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setTimeFrameEndInMinutes(timeFrameEndInMinutes)

Sets the end of the timeframe.

#### Signature

public lxscheduler.WorkTypeBuilder setTimeFrameEndInMinutes(Integer timeFrameEndInMinutes)

#### Parameters

timeFrameEndInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setTimeFrameStartInMinutes(timeFrameStartInMinutes)

Sets the beginning of the timeframe.

#### Signature

public lxscheduler.WorkTypeBuilder setTimeFrameStartInMinutes(Integer timeFrameStartInMinutes)

#### Parameters

timeFrameStartInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- WorkTypeBuilder Methods (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- build() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setBlockTimeAfterAppointmentInMinutes(blockTimeAfterAppointmentInMinutes) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setDurationInMinutes(durationInMinutes) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setId(id) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setOperatingHoursId(operatingHoursId) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setSkillRequirements(skillRequirements) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- setTimeFrameEndInMinutes(timeFrameEndInMinutes) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
