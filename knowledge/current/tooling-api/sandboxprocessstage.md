---
title: "SandboxProcessStage"
domain: tooling-api
topic: sandboxprocessstage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.740Z
estimatedTokens: 1390
keywords: [SandboxProcessStage, Represents, status, progress, during, spectific, stage, SandboxProcess, record., Supported, SOAP, Calls, REST, HTTP, Fields, Usage, Creating, Sandbox, Refreshing, Deleting]
---

# SandboxProcessStage

> Represents the status and progress during a spectific stage for a SandboxProcess record.

# SandboxProcessStage

Represents the status and progress during a spectific stage for a SandboxProcess record.

Provides real time visibility into the status and progress of the sandbox copy so users can effectively plan and manage their development and testing activities.

This object is available in API version 66.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

All fields are read only and represent the status and progress of the sandbox for monitoring purposes.

| Field | Details |
| --- | --- |
| SandboxProcess | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the sandbox process that this progress belongs to.Relationship NameSandboxProcessRelationship TypeLookupRefers ToSandboxProcess |
| StageType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIndicates the type of stage.Valid values:In QueueData CopyPending ActivationActivationRefers ToSandboxProcess |
| StageNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the order of the stages.0In Queue1Data Copy2Pending Activation3Activation |
| Status | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the stage has completed or not.Valid values:PendingIn ProgressCompleted |
| StartTime | TypedateTimePropertiesFilter, Group, Nillable, SortDescriptionWhen the stage's status goes into In Progress. |
| EndTime | TypedateTimePropertiesFilter, Group, Nillable, SortDescriptionWhen the stage's status goes into Completed. |
| InfoLastUpdated | TypedateTimePropertiesFilter, Group, Nillable, SortDescriptionWhen we last checked the internal system for progress information on this stage. |
| CompletedWork | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the current amount of work completed.RestrictionsOnly used for Data Copy and Activation. |
| ActualTotalWork | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the verified amount of work to be completed. This number calculates continuously and may represent a partial amount while IsActualWorkFinal=false.RestrictionsOnly used for Data Copy and Activation |
| IsActualWorkFinal | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionDefault false, set to true after calculation of the actual work completes. |
| EstimatedTotalWork | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDuring the In Queue stage, this represents the number of sandboxes ahead of yours.During the Data Copy and Activation stages, this represents an estimation of work while IsActualWorkFinal=false. The estimation total derives this value from a prior sandbox copy and doesn't change throughout processing. This estimation isn't available if there's no prior copy. |

## Usage

[SandboxInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm#tooling_api_objects_sandboxinfo "Represents a sandbox.") represents a sandbox, and [SandboxProcess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm#tooling_api_objects_sandboxprocess "Represents the sandbox copy process for a SandboxInfo record.") represents the sandbox copy process, which occurs when you create a sandbox or refresh it. **SandboxProcessStage** represents the status and progress of a copy during a specific stage within the sandbox copy process.

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
- SandboxProcess (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm)
