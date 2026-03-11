---
title: "SchedulingRule"
domain: metadata-api
topic: schedulingrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.505Z
keywords: [SchedulingRule, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, SchedulingRuleParameter, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# SchedulingRule

# SchedulingRule

Represents a scheduling rule in Workforce Engagement Management. Scheduling rules determine when agents are assigned to shifts.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SchedulingRule components have the suffix .schedulingRule and are stored in the SchedulingRules folder.

## Version

SchedulingRule components are available in API version 53.0 and later.

## Special Access Rules

This type is available only if Workforce Engagement is enabled in your org. To view, create, edit, and delete records, the user requires the Workforce Engagement Planner permission set.

## Fields

| Field Name | Description |
| --- | --- |
| isProtected | Field TypebooleanDescriptionIndicates whether the component is protected (true) or not (false). The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. The name of the rule. |
| schedulingCategory | Field TypeSchedulingCategory (enumeration of type string)DescriptionRequired. What the scheduling logic applies the rule to. The valid values are:A—Service AppointmentB—Shift |
| schedulingRuleParameters | Field TypeSchedulingRuleParameter[]DescriptionParameters associated with a scheduling rule, such as work limits. |
| schedulingRuleType | Field TypeSchedulingRuleType (enumeration of type string)DescriptionRequired. Specifies the type of rule. The valid values are:A—Active ResourcesB—Match SkillsC—AvailabilityM—Match TerritoryQ—Match QueueRestTimeMinutes—Rest Time in Minutes. Available in API version 56.0 and later.W—Work LimitLimitNonstandardShifts—Specifies a rule type that limits how many non-standard shifts can be assigned to each agent. Available in API version 54.0 and later. |

## SchedulingRuleParameter

Represents a scheduling rule parameter, such as a work limit, that’s associated with a scheduling rule.

| Field Name | Description |
| --- | --- |
| schedulingParameterKey | Field TypeSchedulingParameterKey (enumeration of type string)DescriptionRequired. The scheduling rule parameter key.C—Constraint Field NameL—Limit TypeR—ResolutionT—Time ResolutionW—Work UnitConsiderAbsence—Consider resource absences when evaluating availability. Available in API version 56.0 and later.ConsiderSTM—Consider service territory membership, which defines working hours, when evaluating availability. Available in API version 56.0 and later. |
| value | Field TypestringDescriptionThe scheduling rule parameter value. |

## Declarative Metadata Sample Definition

The following is an example of a SchedulingRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").