---
title: "ServiceSetupProvisioning"
domain: object-reference
topic: servicesetupprovisioning
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.938Z
estimatedTokens: 526
keywords: [ServiceSetupProvisioning, task, completed, Service, Setup, Assistant, API, version, 52.0, later, Calls, Special, Access, Rules]
---

# ServiceSetupProvisioning

> Represents a task completed by the Service Setup Assistant. This object
      is available in API version 52.0 and later.

# ServiceSetupProvisioning

Represents a task completed by the Service Setup Assistant. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

ServiceSetupProvisioning is accessible only if the Service Setup Assistant is turned on. Users need the Customize Application permission to access it.

## Fields

| Field | Details |
| --- | --- |
| JobName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of a group of tasks completed by the Service Setup Assistant. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn automatically generated ID. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the task being completed by the Service Setup Assistant.Possible values are:`Completed—The task completed successfully.ExistingSetup—The task couldn’t be completed due to conflicting configurations.FailedFatalError—The task couldn’t be completed.InProgress—The task is in progress.PRE_CONDITION_NOT_MET—The task couldn’t be completed because one or more prerequisites weren’t met.VALIDATION_NOT_MET—The task is considered as completed but the condition defined in the implementation was not true. No retry will be executed. |
| TaskAction | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe action taken by the task.Possible values are:updatesOrgSettingsupdatesOrgValuessortAppssetForecastingUserFeatureLicenserecalculatePermissionSetGroupdeploysMetadatacreatesSetupEntityAccessclearGuidanceCenterCachecallsConnectApiassignsPermissionSetsassignsPermissionSetGroups |
| TaskActionContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAdditional details about the TaskAction parameter, including how much of the action has been processed. |
| TaskContext | TypetextareaPropertiesNillableDescriptionThe description of the changes included in the task. |
| TaskName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the task. |
