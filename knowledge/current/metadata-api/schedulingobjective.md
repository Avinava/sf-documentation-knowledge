---
title: "SchedulingObjective"
domain: metadata-api
topic: schedulingobjective
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:42.573Z
estimatedTokens: 844
keywords: [SchedulingObjective, Represents, scheduling, objective, Workforce, Engagement., Scheduling, objectives, define, business, goals, tools, consider, identifying, agents, shifts., Important, Parent, File, Suffix]
---

# SchedulingObjective

> Represents a scheduling objective in Workforce Engagement. Scheduling objectives
      define business goals that the scheduling tools consider when identifying agents for
      shifts.

# SchedulingObjective

Represents a scheduling objective in Workforce Engagement. Scheduling objectives define business goals that the scheduling tools consider when identifying agents for shifts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SchedulingObjective components have the suffix .SchedulingObjective and are stored in the SchedulingObjective folder.

## Version

SchedulingObjective components are available in API version 55.0 and later.

## Special Access Rules

This type is available only if Workforce Engagement is enabled in your org. To view, create, edit, and delete records, the user requires the Workforce Engagement Planner permission set.

## Fields

| Field Name | Description |
| --- | --- |
| isProtected | Field TypebooleanDescriptionIndicates whether the component is protected (true) or not (false). The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. The name of the objective. |
| schedulingCategory | Field TypeSchedulingCategory (enumeration of type string)DescriptionRequired. What the scheduling logic applies the objective to. The valid values are:A—Service AppointmentB—Shift |
| schedulingObjectiveParameters | Field TypeSchedulingObjectiveParameter[]DescriptionParameters associated with a scheduling objective, such as the number of days before and after a shift that the logic considers when balancing assignments. |
| schedulingObjectiveType | Field TypeSchedulingObjectiveType (enumeration of type string)DescriptionRequired. Specifies the type of objective. Possible values are:AgentPreference—In the UI, this value appears as Maximized Preferences.BalanceNonStandardShiftsBalanceShifts |

## SchedulingObjectiveParameter

Represents a parameter that’s associated with a scheduling objective.

| Field Name | Description |
| --- | --- |
| parameterKey | Field TypeObjectiveParameterKey (enumeration of type string)DescriptionRequired. The scheduling objective parameter key. Possible values are:DaysAheadDaysBack |
| value | Field TypestringDescriptionThe scheduling objective parameter value. |

## Declarative Metadata Sample Definition

The following is an example of a SchedulingObjective component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SchedulingObjective xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Balance Shifts</masterLabel>
    <schedulingCategory>B</schedulingCategory>
    <schedulingObjectiveType>BalanceShifts</schedulingObjectiveType>
    <schedulingObjectiveParameters>
        <parameterKey>DaysAhead</parameterKey>
        <value>30</value>
    </schedulingObjectiveParameters>
</SchedulingObjective>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>SchedulingObjective</name>
	<members>Balance Shifts</members>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
