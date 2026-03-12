---
title: "SandboxProcess"
domain: tooling-api
topic: sandboxprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.825Z
estimatedTokens: 2260
keywords: [SandboxProcess, sandbox, copy, process, SandboxInfo, record, SOAP, Calls, REST, HTTP, Usage, Creating, Refreshing, Deleting, Checking]
---

# SandboxProcess

> Represents the sandbox copy process for a
            SandboxInfo record.

# SandboxProcess

Represents the sandbox copy process for a SandboxInfo record.

When you create a SandboxInfo record, a corresponding SandboxProcess record is created. The latest SandboxProcess record for a SandboxInfo record represents the current state of the sandbox.

This object is available in API version 35.0 and later.

## Supported SOAP Calls

query(), retrieve(), update()

## Supported REST HTTP Methods

GET, PATCH

## Fields

Except for RefreshAction, all fields are read only. The read-only fields represent the attributes chosen on SandboxInfo when a copy process was enqueued, or represent the state of the process for monitoring purposes.

| Field | Details |
| --- | --- |
| ActivatedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to the ID of the user who requested sandbox activation.Relationship NameActivatedByRelationship TypeLookupRefers ToUser |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the sandbox was activated during a refresh. |
| ActivationUserGroupId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionA reference to the ID of the group consisting of users who can access the sandbox. The user who created the sandbox is added to the group by default. Available in API version 60.0 and later.This field is a relationship field.Relationship NameActivationUserGroupRelationship TypeLookupRefers ToGroup |
| ApexClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to the ID of an Apex class to run after each copy of the sandbox. Running this class allows you to perform DML operations on the sandbox to prepare it for use. The class must extend the System.SandboxPostCopy interface. Available in API version 36.0 and later.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| AutoActivate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRepresents whether the sandbox refresh is configured to activate immediately upon completion. |
| CopyArchivedActivities | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, archived activity data is copied to the sandbox.RestrictionsThis field is visible only if your organization has purchased an option to copy archived activities for sandbox. To obtain this option, contact Salesforce Customer Support.You can set the value to true only for a Full sandbox. |
| CopyChatter | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRepresents whether archived Chatter data is copied to the sandbox. |
| CopyProgress | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents how much of a copy has been completed.Available for Developer, Developer Pro, and Full sandboxes. Not available for Full or Partial sandboxes created from sandbox templates. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionA description of the sandbox, which helps you distinguish it from other sandboxes. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the sandbox copy process finished. |
| Features | TypetextareaPropertiesNillable, UpdateDescriptionThe list of add-on features to apply after the sandbox is created or refreshed.Currently there’s one valid value:['SandboxStorage']: Increases the data storage available for Developer sandboxes from 200 MB to 400 MB and Developer Pro sandboxes from 1 GB to 2 GB. You can’t use this feature with Partial Copy or Full sandboxes. |
| HistoryDays | TypeintPropertiesDefaulted on create, Filter, Group, SortDescriptionRepresents the number of days of object history to be copied in the sandbox.Valid values:-1, which means all available days01020306090120150180 |
| LicenseType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe sandbox license type. Valid values:ADVANCED_DEVADVANCED_FULLDEVELOPERDEVELOPER_PROPARTIALFULLFULL_PLUS |
| RefreshAction | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionEditing this field activates or discards a sandbox refresh. Valid values:ACTIVATEDISCARDRestrictionsIf all the following are true, you can activate or discard a sandbox refresh by editing the value in this field.This record is the latest SandboxProcess record.The associated sandbox has been refreshed.This record’s Status is Pending Activation. |
| SandboxInfoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to the ID of the SandboxInfo being processed (create or refresh).Relationship NameSandboxInfoRelationship TypeLookupRefers ToSandboxInfo |
| SandboxName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the sandbox. |
| SandboxOrganization | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the org created by the copy process. This field is available in API version 37.0 and later. |
| SourceId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionA reference to the ID of the SandboxInfo that this sandbox is a clone of. This field is used only when cloning a sandbox. When this field is used, LicenseType must be null. Your source sandbox must be an existing, completed sandbox, that belongs to the same production org as the sandbox you’re creating or refreshing. Your SourceId value can’t be the same SandboxInfo that you’re updating. Available in API version 37.0 and later.Relationship NameSourceRelationship TypeLookupRefers ToSandboxInfo |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the sandbox copy process started. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCurrent state of the sandbox copy process.If running a SOQL query, use the values in parentheses. Possible values include:ActivatingActivation Confirmed (5)Deactivation Confirmed (6)Deactivation Finished (7)Activation Processing (8)Completed (1)Deleted (D)Deleting (E)Discarding (F)Locked (B)Locking (L)Pending (0)Pending Activation (4)Processing (2)Sampling (X)Stopped (G)Suspended (S) |
| TemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to the ID of the PartitionLevelScheme that represents the sandbox template associated with the sandbox for this process. A sandbox template selects which objects to copy in a sandbox.To use the TemplateId field, you must have the ManageSandboxes user permission.Relationship NameTemplateRelationship TypeLookupRefers ToPartitionLevelScheme |

## Usage

[SandboxInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm#tooling_api_objects_sandboxinfo "Represents a sandbox.") represents a sandbox, and SandboxProcess represents the sandbox copy process, which occurs when you create a sandbox or refresh it. You can also delete a sandbox.

## Creating a Sandbox

To enqueue a new sandbox:

-   Create a SandboxInfo record.
-   To find the status of a sandbox after it is enqueued, query SandboxProcess for a given SandboxInfoId field to find the latest SandboxProcess record. The value of Completed in Status indicates that the creation process is finished.

## Refreshing a Sandbox

To refresh a sandbox:

-   To start a sandbox refresh, edit the SandboxInfo record.
-   To find the status of a sandbox after it is enqueued, find the latest SandboxProcess record by querying SandboxProcess for a given SandboxInfoId value. The value of Status indicates the current state of the process.
-   When the Status field value is Pending Activation, change the value of the RefreshAction field to either ACTIVATE or DISCARD.

## Deleting a Sandbox

To delete a sandbox, delete the SandboxInfo record that represents the sandbox. Deleting the SandboxInfo record deletes the sandbox and frees up a license.

## Checking Sandbox Progress

Each SandboxProcess record progresses through several stages represented by the StageType and StageNumber on the SandboxProcessStage record. The system updates progress details as the copy proceeds. For every stage, you can view specifics using the Status, StartTime, EndTime, and InfoLastUpdated fields.

If your sandbox status is suspended or stopped for more than 1 hour, contact Salesforce customer support.

While the system can't provide a time-based estimate, you can track your place in the queue or how much work exists and has been completed.

-   During the In Queue stage, you can check your current place in the queue with the EstimatedTotalWork field.
-   During the Data Copy and Activation stages, you can check how much work exists and has been completed to estimate copy completion with the EstimatedTotalWork, ActualTotalWork, and CompletedWork fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

-   If IsActualWorkFinal = true, then ActualTotalWork is a better representation of the total work required.
-   If IsActualWorkFinal = false, then EstimatedTotalWork is a better representation of the total work required.

## Related Topics

- SandboxInfo (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm)
