---
title: "FlowOrchestrationVersion"
domain: object-reference
topic: floworchestrationversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.384Z
estimatedTokens: 1485
keywords: [FlowOrchestrationVersion, version, orchestration, API, 62.0, later, Calls, Associated, Objects]
---

# FlowOrchestrationVersion

> Represents the version of an orchestration.  This object is available
      in API version 62.0 and later.

# FlowOrchestrationVersion

Represents the version of an orchestration. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActivatedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user that activated the orchestration.This field is a relationship field.Relationship NameActivatedByRefers ToUser |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the orchestration was activated. |
| ApiVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe API version of this orchestration record version. |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the flow orchestration version. |
| FlowOrchestrationId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent orchestration running this version.This field is a relationship field.Relationship NameFlowOrchestrationRelationship TypeMaster-detailRefers ToFlowOrchestration |
| IsOverridable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the orchestration that's part of a managed package is overridable.The default value is false. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the orchestration record version is a template.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label of the orchestration. |
| OrchestrationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe orchestration's flow type. FlowType consolidates ProcessType and TriggerType into one field. FlowType is used with permissions, so admins can control access to each flow type.Valid values are:OrchAutolnch—Autolaunched No Trigger Orchestration: Launches when invoked by Apex, REST API, custom buttons, or custom links. An orchestration lets you create a multi-step, multi-user process.OrchRecTrigAftSave—Record-Triggered After Save Orchestration: Launches when a record is created or updated. An orchestration lets you create a multi-step, multi-user process. This type of flow runs in the background without user interaction.CmsOrchAutolnch—CMS Workflow Orchestration Autolaunched: Launches when invoked from the Workflows component in a CMS workspace. This type of orchestration lets you create a multi-step, multi-user process to create, edit, organize, and manage digital content from a centralized location |
| OverriddenById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the orchestration that's overriding the current orchestration.This field is a relationship field.Relationship NameOverriddenByRefers ToFlowOrchestration |
| OverriddenOrchestrationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the orchestration that the current orchestration is overriding.This field is a relationship field.Relationship NameOverriddenOrchestrationRefers ToFlowOrchestration |
| RunInMode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe mode that the orchestration runs in.Possible values are:DefaultMode—The orchestration version runs in system or user context, depending on how the orchestration is launched.SystemModeWithSharing—The orchestration version always runs in system mode with sharing. The orchestration respects org-wide default settings, role hierarchies, sharing rules, manual sharing, teams, and territories. But it doesn’t respect object permissions, field-level access, or other permissions of the running user.SystemModeWithoutSharing—The orchestration version can access all data. In the UI, this value appears as System Context without Sharing—Access All Data. |
| SourceTemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is a relationship field.Relationship NameSourceTemplateRefers ToFlowOrchestration |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe ID of the template that the orchestration was created from. This is a relationship field.(Refers to Orchestration Record).Possible values are:Active—ActiveDraft—InactiveInvalidDraft—DraftObsolete—InactiveUnderReview—Under Review |
| TriggerObjectOrEventLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the object or platform event that triggers this flow. |
| VersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version number of the orchestration version. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationVersionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- FlowOrchestrationVersionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
