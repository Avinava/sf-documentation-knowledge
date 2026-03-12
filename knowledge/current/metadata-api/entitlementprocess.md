---
title: "EntitlementProcess"
domain: metadata-api
topic: entitlementprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.341Z
estimatedTokens: 1692
keywords: [EntitlementProcess, Represents, settings, entitlement, process., File, Suffix, Directory, Location, Version, Fields, EntitlementProcessMilestoneItem, EntitlementProcessMilestoneTimeTrigger, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# EntitlementProcess

> Represents the settings for an entitlement
            process.

# EntitlementProcess

Represents the settings for an entitlement process.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Entitlement process values are stored in files in the entitlementProcesses directory. Each file has the name of a process and the suffix .entitlementProcess. Each file contains one entitlement process or, if entitlement versioning is enabled, one version of an entitlement process.

The name of the file is the name of the entitlement process with the version appended to the end, if applicable (for example, an entitlement process named “gold\_support” can have the file name “gold\_support\_v2.entitlementProcess”). This file name corresponds to the slaProcess.NameNorm field exposed through SOAP API. This file name is distinct from the name field, which represents what displays in the user interface and, if versioning is enabled, can be shared among multiple versions of the same entitlement process. The slaProcess.NameNorm field contains the lowercase version of the name field shown in the user interface.

## Version

Entitlement processes are available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the entitlement process is active (true) or not (false). |
| businessHours | string | The business hours that apply to the entitlement process.This field is available in API version 30.0 and later. |
| description | string | The description of the entitlement process. |
| entryStartDateField | string | For milestone processes on which a case enters the process based on a custom date/time field on the case, specifies which date and time are used. Valid values are:SlaStartDate (entitlement process start date)CreatedDate (date case was opened)ClosedDate (date case was closed)LastModifiedDate (date case was last modified)StopStartDate (date case was stopped) |
| exitCriteriaBooleanFilter | string | For milestone processes on which a case exits the process when custom criteria are met, and for which filter logic is added, specifies that logic. |
| exitCriteriaFilterItems | FilterItem[] | For milestone processes on which a case exits the process when custom criteria are met, specifies those criteria. |
| exitCriteriaFormula | string | For milestone processes on which a case exits the process when a custom formula evaluates to true, specifies that formula. |
| isVersionDefault | boolean | Indicates whether the entitlement process is the default version (true) or not (false).This field is available in API version 28.0 and later. |
| milestones | EntitlementProcessMilestoneItem[] | Represents a milestone on the entitlement process. |
| name | string | The name of the entitlement process as it displays in the user interface. |
| SObjectType | string | Indicates the type of record that the entitlement process can run on. |
| versionMaster | string | Identifies the sequence of versions to which this entitlement process belongs. This field’s contents can be any value as long as it’s identical among all versions of the entitlement process.This field is available in API version 28.0 and later. |
| versionNotes | string | The description of the entitlement process version.This field is available in API version 28.0 and later. |
| versionNumber | int | The version number of the entitlement process. Must be 1 or greater.This field is available in API version 28.0 and later. |

## EntitlementProcessMilestoneItem

Represents a milestone item on an entitlement process.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessHours | string | The business hours that apply to the milestone.This field is available in API version 30.0 and later. |
| criteriaBooleanFilter | string | For milestones that apply only when criteria are met and for which filter logic is added, specifies that logic. |
| milestoneCompletionCriteria | string | The criteria to be met for the milestone to be marked complete. |
| milestoneCriteriaFilterItems | FilterItem[] | For milestones that apply only when criteria are met, specifies those criteria. |
| milestoneCriteriaFormula | string | For milestones that apply only when a formula evaluates to true, specifies that formula. |
| milestoneName | string | The name of the milestone. |
| minutesCustomClass | string | The name of the Apex class that is used to calculate the trigger time. This field is available in API version 30.0 and later. |
| minutesToComplete | int | The number of minutes from when the case enters the entitlement process that the milestone occurs. |
| successActions | WorkflowActionReference[] | The actions triggered when the milestone is completed. |
| timeTriggers | EntitlementProcessMilestoneTimeTrigger[] | The time triggers on an entitlement process milestone. |
| useCriteriaStartTime | boolean | When the milestone starts: when the milestone criteria are met (true) or when the case enters the entitlement process (false). |

## EntitlementProcessMilestoneTimeTrigger

Represents the time trigger on an entitlement process milestone.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actions | WorkflowActionReference[] | The actions to take when the time trigger is reached, if, at that time, the milestone isn’t completed. |
| timeLength | int | The length of time between the time trigger activation and the milestone target completion date. This length of time can be a negative or positive value. Negative values indicate that the target completion date hasn’t yet arrived and correspond to warning time triggers. Positive values indicate that the target completion date has passed and correspond to violation time triggers. |
| workflowTimeTriggerUnit | MilestoneTimeUnits (enumeration of type string) | Specifies the type of unit used to determine when a workflow is triggered. Valid values are:MinutesHoursDays |

## Declarative Metadata Sample Definition

Here’s a sample entitlement process.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EntitlementProcess xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>eppersone</description>
    <entryStartDateField>SlaStartDate</entryStartDateField>
    <exitCriteriaBooleanFilter>1 OR 2</exitCriteriaBooleanFilter>
    <exitCriteriaFilterItems>
        <field>Case.IsClosed</field>
        <operation>equals</operation>
        <value>true</value>
    </exitCriteriaFilterItems>
    <exitCriteriaFilterItems>
        <field>Case.Description</field>
        <operation>startsWith</operation>
        <value>foo</value>
    </exitCriteriaFilterItems>
    <milestones>
        <milestoneName>m1</milestoneName>
        <minutesToComplete>1</minutesToComplete>
        <successActions>
            <name>emailBob</name>
            <type>Alert</type>
        </successActions>
        <timeTriggers>
            <actions>
                <name>emailAlice</name>
                <type>Alert</type>
            </actions>
            <actions>
                <name>setEscalateToTrue</name>
                <type>FieldUpdate</type>
            </actions>
            <timeLength>1</timeLength>
            <workflowTimeTriggerUnit>Minutes</workflowTimeTriggerUnit>
        </timeTriggers>
        <timeTriggers>
            <actions>
                <name>setStopToTrue</name>
                <type>FieldUpdate</type>
            </actions>
            <timeLength>2</timeLength>
            <workflowTimeTriggerUnit>Minutes</workflowTimeTriggerUnit>
        </timeTriggers>
        <useCriteriaStartTime>false</useCriteriaStartTime>
    </milestones>
    <milestones>
        <milestoneCriteriaFilterItems>
            <field>Case.Priority</field>
            <operation>equals</operation>
            <value>High</value>
        </milestoneCriteriaFilterItems>
        <milestoneName>m2</milestoneName>
        <minutesToComplete>120</minutesToComplete>
        <useCriteriaStartTime>true</useCriteriaStartTime>
        <successActions>
            <name>emailBob</name>
            <type>Alert</type>
        </successActions>
    </milestones>
</EntitlementProcess>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- WorkflowActionReference (atlas.en-us.api_meta.meta/api_meta/meta_workflow.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
