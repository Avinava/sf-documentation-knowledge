---
title: "WorkTypeBuilder Class"
domain: salesforce-scheduler-developer-guide
topic: worktypebuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.224Z
estimatedTokens: 1276
namespace: LxScheduler
keywords: [WorkTypeBuilder, build, instance, lxscheduler.WorkType, setBlockTimeAfterAppointmentInMinutes, blockTimeAfterAppointmentInMinutes, setBlockTimeBeforeAppointmentInMinutes, blockTimeBeforeAppointmentInMinutes, setDurationInMinutes, durationInMinutes, setId, setOperatingHoursId, operatingHoursId, setSkillRequirements, skillRequirements]
---

# WorkTypeBuilder Class

> Contains methods to build an instance of the lxscheduler.WorkType class.

**Namespace:** `LxScheduler`

# WorkTypeBuilder Class

Contains methods to build an instance of the lxscheduler.WorkType class.

A Builder object is obtained by invoking one of the WorkTypeBuilder methods defined by the WorkType class.

## Namespace

LxScheduler

## WorkTypeBuilder Methods

The following are methods for WorkTypeBuilder.

### build()

Returns an instance of the lxscheduler.WorkType object.

#### Signature

public lxscheduler.WorkType build()

#### Return Value

Type: [lxscheduler.WorkType](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

### setBlockTimeAfterAppointmentInMinutes(blockTimeAfterAppointmentInMinutes)

Sets the time period, in minutes.

#### Signature

public lxscheduler.WorkTypeBuilder setBlockTimeAfterAppointmentInMinutes(Integer blockTimeAfterAppointmentInMinutes)

#### Parameters

blockTimeAfterAppointmentInMinutes

Type: Integer

The time period after the appointment is considered unavailable.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)

Sets the time period, in minutes.

#### Signature

public lxscheduler.WorkTypeBuilder setBlockTimeBeforeAppointmentInMinutes(Integer blockTimeBeforeAppointmentInMinutes)

#### Parameters

blockTimeBeforeAppointmentInMinutes

Type: Integer

The time period before the appointment is considered as unavailable.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setDurationInMinutes(durationInMinutes)

Sets the event length.

#### Signature

public lxscheduler.WorkTypeBuilder setDurationInMinutes(Integer durationInMinutes)

#### Parameters

durationInMinutes

Type: Integer

Contains the event length, in minutes. Required if id is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setId(id)

Sets the ID of the work type to the specified ID.

#### Signature

public lxscheduler.WorkTypeBuilder setId(String id)

#### Parameters

id

Type: String

The ID of the work type. Required if you're using shifts or if durationInMinutes is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setOperatingHoursId(operatingHoursId)

Sets the overlap of operating hours.

#### Signature

public lxscheduler.WorkTypeBuilder setOperatingHoursId(String operatingHoursId)

#### Parameters

operatingHoursId

Type: String

The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setSkillRequirements(skillRequirements)

Sets the skills that are required to complete a particular task for a work type.

#### Signature

public lxscheduler.WorkTypeBuilder setSkillRequirements(List<lxscheduler.SkillRequirement> skillRequirements)

#### Parameters

skillRequirements

Type: List<[lxscheduler.SkillRequirement](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_SkillRequirement.htm#apex_class_lxscheduler_SkillRequirement "Contains information about the set of skills that are required to complete a particular task for a work type.")\>

This method takes input as an instance of the lxscheduler.SkillRequirement class. Build the instance of the input class using the lxscheduler.SkillRequirementBuilder class.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setTimeFrameEndInMinutes(timeFrameEndInMinutes)

Sets the end of the timeframe.

#### Signature

public lxscheduler.WorkTypeBuilder setTimeFrameEndInMinutes(Integer timeFrameEndInMinutes)

#### Parameters

timeFrameEndInMinutes

Type: Integer

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

### setTimeFrameStartInMinutes(timeFrameStartInMinutes)

Sets the beginning of the timeframe.

#### Signature

public lxscheduler.WorkTypeBuilder setTimeFrameStartInMinutes(Integer timeFrameStartInMinutes)

#### Parameters

timeFrameStartInMinutes

Type: Integer

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")

## Related Topics

- lxscheduler.WorkType (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm)
- lxscheduler.SkillRequirement (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_SkillRequirement.htm)
