---
title: "VideoCallInsightAction"
domain: object-reference
topic: videocallinsightaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.116Z
estimatedTokens: 782
keywords: [VideoCallInsightAction, suggested, follow-up, action, derived, video, call, insight, manages, recommended, steps—such, sending, email, creating, task]
---

# VideoCallInsightAction

> Represents a suggested follow-up action derived from a video call insight.
         VideoCallInsightAction manages recommended steps—such as sending an email, creating a task,
         or scheduling a meeting—that address specific moments, including competitor mentions,
         pricing discussions, or objections. This object is available in API version 66.0 and
      later.

# VideoCallInsightAction

Represents a suggested follow-up action derived from a video call insight. VideoCallInsightAction manages recommended steps—such as sending an email, creating a task, or scheduling a meeting—that address specific moments, including competitor mentions, pricing discussions, or objections. This object is available in API version 66.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available for Einstein Conversation Insights customers whose data is stored natively on the Salesforce Platform. If you turned on Einstein Conversation Insights for the first time starting in Spring ’26, this object is available to query and access using Salesforce tools. For existing ECI customers, data migration and access to related Salesforce Platform objects is scheduled to begin in Summer ’26.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Einstein Conversation Insight must be enabled and the user requires the Conversation Insights for Sales permission set.

## Fields

| Field | Details |
| --- | --- |
| ActionCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe category that classifies the purpose of the action.Possible values are:FollowUpNeedsAttention |
| ActionReferenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the reference record associated with the generated action.This field is a relationship field.Relationship NameActionReferenceRefers ToVideoCallInsightReason |
| ActionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe specific type of action to be performed for the insight.Possible values are:CreateCalendarEventCreateTaskWithDateEciCreateCallbackEciScheduleMeetingsEciSendCallResponseViewContactProfileThe default value is CreateTaskWithDate. |
| CompletionDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRequired. The timestamp when the action was completed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the insight action. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the insight action.Possible values are:ActiveCompletedThe default value is Active. |
| VideoCallInsightId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the VideoCallInsight record associated with a video call. Each record represents the call insight of a specific recording or transcript within a call.This field is a relationship field.Relationship NameVideoCallInsightRelationship TypeMaster-detailRefers ToVideoCallInsight (the master object) |
