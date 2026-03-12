---
title: "WaveAutoInstallRequest"
domain: object-reference
topic: waveautoinstallrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.338Z
estimatedTokens: 1272
keywords: [WaveAutoInstallRequest, access, concrete, CRM, Analytics, auto-install, tracks, progress, applications, created, templates, automated, process, user, API]
---

# WaveAutoInstallRequest

> Provides access to the concrete object that represents a CRM Analytics
      auto-install request. The auto-install request tracks the progress of CRM Analytics
      applications created from CRM Analytics templates by the automated process user. This
    object is available in API version 38.0 and later.

# WaveAutoInstallRequest

Provides access to the concrete object that represents a CRM Analytics auto-install request. The auto-install request tracks the progress of CRM Analytics applications created from CRM Analytics templates by the automated process user. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

CRM Analytics must be enabled in your org. A user must have the Auto Install permission enabled.

## Fields

| Field | Details |
| --- | --- |
| Configuration | TypetextareaPropertiesCreate, NillableDescriptionCRM Analytics application configuration for the auto-install request. |
| FailedReason | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf the CRM Analytics application fails to complete successfully, this value indicates why the failure occurred. Values can be:OrganizationIncompatible: the org didn't pass the template compatibility checks.AppInstallationSkipped: the org didn't pass the template compatibility checks and was skipped.RetriesExhausted: the request exhausted the maximum number of retries.RequestCancelled: the user canceled the request.AppCreateFailure: the app or folder creation failed. Check the request log and try again.AppUpdateFailure: the app or folder update failed. Check the request log and try again.AppConstructionFailure: the app or folder construction failed. Check the request log and try again.WaveDisabled: the org doesn't have the Wave org permission or preference enabled. Check the licenses for CRM Analytics and try again.CancelFailed: canceling an in-progress app failed. Check the request log and try again.DeleteFailed: deleting an app failed. Check the request log and try again.DependencyFailure: a dependent auto-install request failed. Check App Install History and try again.DependencyCancelled: the user canceled a dependent auto-install request. Check App Install History and try again.FailedToEnqueue: the request failed to enqueue. Check the request log and try again.FailedOther: the request failed for another reason. Check the request log and try again. |
| FolderId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the CRM Analytics application created by the auto-install request.This is a relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the auto-install request is locked or not. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the auto-install request can be edited or not. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the auto-install request, provided at creation by the user. |
| RequestLog | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA log of the auto-install progress and completion results. |
| RequestStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the auto-install request. Values can be New, Enqueued, Cancelled, In Progress, AppInProgress, Failed, and Success. |
| RequestType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of auto-install request. Values can be WaveEnable, OrgCompatibilityCheck, WaveAppCreate, WaveAppUpdate, WaveAppDelete, and StartDataflow. |
| TemplateApiName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe API name of the CRM Analytics template to create the CRM Analytics app from. |
| TemplateVersion | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe version of the CRM Analytics template to create the CRM Analytics app from. |

## Usage

Use this object to query and create auto-install requests for CRM Analytics applications in your org. This object is useful to troubleshoot issues with templated applications that the automated process user creates.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WaveAutoInstallRequestChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- WaveAutoInstallRequestChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
