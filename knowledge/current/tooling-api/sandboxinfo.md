---
title: "SandboxInfo"
domain: tooling-api
topic: sandboxinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.808Z
estimatedTokens: 1890
keywords: [SandboxInfo, sandbox, SOAP, Calls, REST, HTTP, Usage, Creating, Refreshing, Deleting, Checking, Progress]
---

# SandboxInfo

> Represents a sandbox.

# SandboxInfo

Represents a sandbox.

SandboxInfo enqueues a sandbox for creation or refresh. A create operation on SandboxInfo represents creation of a new sandbox, and an update represents refresh of an existing sandbox. For every creation or update, a SandboxProcess is automatically created and is used for monitoring the sandbox copy process.

This object is available in API version 35.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update()

## Supported REST HTTP Methods

GET, PATCH, POST, DELETE

## Fields

| Field | Details |
| --- | --- |
| ActivationUserGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the ID of the public group consisting of users who can access the sandbox. The user who created the sandbox is added to the group by default.This field is a relationship field.RestrictionsYou can specify this value only during sandbox creation and refresh.Available in API version 60.0 and later.Behavior change announcement: Starting in Spring ’25, this field will be required when creating or refreshing a Developer or Developer Pro sandbox. To avoid losing the ability to create or refresh Developer and Developer Pro sandboxes, use API version 60.0 or later.Relationship NameActivationUserGroupRelationship TypeLookupRefers ToGroup |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the ID of an Apex class that runs after each copy of the sandbox. Allows you to perform business logic on the sandbox to prepare it for use.RestrictionsYou can specify this value only during sandbox creation.The class must extend the System.SandboxPostCopy interface.Available in API version 36.0 and later.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| AutoActivate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, you can activate a sandbox refresh immediately.RestrictionsThis field only affects behavior for update operations (Sandbox refresh). |
| CopyArchivedActivities | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, archived activity data is copied to the sandbox.RestrictionsThis field is visible only if your organization has purchased an option to copy archived activities for sandbox. To obtain this option, contact Salesforce Customer Support.You can set the value to true only for a Full sandbox. |
| CopyChatter | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, archived Chatter data is copied to the sandbox.RestrictionsYou can set the value to true only for a Full sandbox. |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sandbox, which helps you distinguish it from other sandboxes.RestrictionsThe description length can’t exceed 1,000 characters. |
| Features | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe add-on features to apply when creating or refreshing the sandbox.Currently there’s one valid value:['SandboxStorage']: Increases the data storage available for Developer sandboxes from 200 MB to 400 MB and Developer Pro sandboxes from 1 GB to 2 GB. You can’t use this feature with Partial Copy or Full sandboxes. |
| HistoryDays | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents the number of days of object history to be copied in the sandbox.Valid values:-1, which means all available days0 (default)1020306090120150180RestrictionsThis field affects behavior only for Full sandboxes. |
| LicenseType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the sandbox license type. Valid values:DEVELOPERDEVELOPER_PROPARTIALFULL |
| SandboxName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the sandbox.RestrictionsMust be a unique sandbox name.Must be alphanumeric characters.Must be 10 or fewer characters.Can’t be the same as the name of a sandbox that’s pending deletion. |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the ID of a SandboxInfo that serves as the source org for a cloned sandbox.Relationship NameSourceRelationship TypeLookupRefers ToSandboxInfo |
| TemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the PartitionLevelScheme that represents the sandbox template associated with this sandbox. A sandbox template lets you select which objects to copy in a sandbox.To use the TemplateId field, you must have the ManageSandboxes user permission.RestrictionsSetting a TemplateId value for a Partial Copy sandbox is required.Setting a TemplateId value for a Full sandbox is optional.Setting a TemplateId value for other sandbox types is prohibited, because other sandbox types don’t support sandbox templates.Relationship NameTemplateRelationship TypeLookupRefers ToPartitionLevelScheme |

## Usage

SandboxInfo and ﻿ [SandboxProcess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm#tooling_api_objects_sandboxprocess "Represents the sandbox copy process for a SandboxInfo record.") work together to manage the creation or refresh of a sandbox.

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

- SandboxProcess (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm)
