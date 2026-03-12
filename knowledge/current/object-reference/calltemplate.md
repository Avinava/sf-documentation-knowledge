---
title: "CallTemplate"
domain: object-reference
topic: calltemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.989Z
estimatedTokens: 812
keywords: [CallTemplate, call, script, users, making, calls, Associated, Objects]
---

# CallTemplate

> Represents a call script for users to read when making calls.

# CallTemplate

Represents a call script for users to read when making calls.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the call script. |
| HtmlBody | TypetextareaPropertiesNillableDescriptionThe body content of the call script. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this CallTemplate. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this CallTemplate. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the call script. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns the call script. |
| TemplateType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of call template.Possible values are:Text |
| TotalCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of calls that use the CallTemplate. |
| TotalCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total Call Back Later call results that use the CallTemplate. |
| TotalCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total Left Voicemail call results that use the CallTemplate. |
| TotalCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total Meaningful Connect call results that use the CallTemplate. |
| TotalCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total Not Interested call results that use the CallTemplate. |
| TotalCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total uncategorized call results that use the CallTemplate. |
| TotalCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total Unqualified call results that use the CallTemplate. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CallTemplateChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

## Related Topics

- CallTemplateChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
