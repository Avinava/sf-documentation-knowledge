---
title: "FlowOrchestration"
domain: object-reference
topic: floworchestration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.334Z
estimatedTokens: 1689
keywords: [FlowOrchestration, orchestration, definition, API, version, 62.0, later, Calls, Associated, Objects]
---

# FlowOrchestration

> Represents the details of an orchestration definition. This object is
      available in API version 62.0 and later.

# FlowOrchestration

Represents the details of an orchestration definition. This object is available in API version 62.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| ActiveVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the active orchestration version. This field is a relationship field.This field is a relationship field.Relationship NameActiveVersionRefers ToFlowOrchestrationVersion |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the the orchestration. |
| ApiVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe API version of the active orchestration or the last saved orchestration. |
| AverageRunTime | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe average duration of an orchestration run that has completed without error. |
| CompletionRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of the total number of orchestration runs that have completed without error. |
| Description | TypetextareaPropertiesNillable, UpdateDescriptionThe description of the flow orchestration. |
| FailedRunCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of orchestration runs that have failed. |
| InstalledPackageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the installed package that the orchestration is a part of. |
| IsCitizenEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the orchestration can be modified by non-admins. Valid value is False.The default value is false. |
| IsOverridable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the orchestration that's part of a managed package is overridable.The default value is false. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the orchestration record is a template.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the managable state of the orchestration that's contained in a package.Valid values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionThe label of the orchestration. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with the orchestration record. |
| OrchestrationDefinition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the orchestration definition. |
| OrchestrationLabel | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe label of the orchestration. |
| OrchestrationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe orchestration's flow type. FlowType consolidates ProcessType and TriggerType into one field. FlowType is used with permissions, so admins can control access to each flow type.Valid values are:OrchAutolnch—Autolaunched No Trigger Orchestration: Launches when invoked by Apex, REST API, custom buttons, or custom links. An orchestration lets you create a multi-step, multi-user process.OrchRecTrigAftSave—Record-Triggered After Save Orchestration: Launches when a record is created or updated. An orchestration lets you create a multi-step, multi-user process. This type of flow runs in the background without user interaction.CmsOrchAutolnch —CMS Workflow Orchestration Autolaunched: Launches when invoked from the Workflows component in a CMS workspace. This type of orchestration lets you create a multi-step, multi-user process to create, edit, organize, and manage digital content from a centralized location |
| OverriddenById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the orchestration that's overriding the current orchestration.This field is a relationship field.Relationship NameOverriddenByRefers ToFlowOrchestration |
| OverriddenOrchestrationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the orchestration that the current orchestration is overriding.This field is a relationship field.Relationship NameOverriddenOrchestrationRefers ToFlowOrchestration |
| RunCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of orchestration runs that have been started across all orchestration versions. |
| SourceTemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the template that the orchestration was created from.This field is a relationship field.Relationship NameSourceTemplateRefers ToFlowOrchestration |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the record.Valid values are:Active—ActiveDraft—InactiveInvalidDraft—DraftObsolete—InactiveUnderReview—Under Review |
| TriggerType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the trigger type for a record-triggered orchestration.Valid values are:RecordAfterSave—Record—Run After Save |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- FlowOrchestrationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
