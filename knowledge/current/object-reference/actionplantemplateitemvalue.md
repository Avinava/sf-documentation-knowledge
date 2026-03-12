---
title: "ActionPlanTemplateItemValue"
domain: object-reference
topic: actionplantemplateitemvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.958Z
estimatedTokens: 2093
keywords: [ActionPlanTemplateItemValue, associated, action, plan, template, item, API, version, 44.0, later, Calls, Objects]
---

# ActionPlanTemplateItemValue

> Represents the value associated with an action plan template item.
		This object is available in API version 44.0 and later.

# ActionPlanTemplateItemValue

Represents the value associated with an action plan template item. This object is available in API version 44.0 and later.

## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()search()undelete()update()upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActionPlanTemplateItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the action plan template item that this value relates to.Relationship NameActionPlanTemplateItemRelationship TypeMaster-detailRefers ToActionPlanTemplateItem (the master object) |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the task created from this template item is active. The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template item value is locked or not. The default value is false. |
| ItemEntityFieldName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the field on the action plan template item that this value is for. Available fields include:AssessmentTask.AssessmentTaskDefinitionId—Assessment Task Definition IDAssessmentTask.AssignedToId—AssignedTo IDAssessmentTask.Description—DescriptionAssessmentTask.EndTime—End TimeAssessmentTask.IsRequired—RequiredAssessmentTask.Name—NameAssessmentTask.OwnerId—Owner IDAssessmentTask.ParentId—Visit IDAssessmentTask.ReferenceRecordId—ReferenceRecord IDAssessmentTask.SequenceNumber—SequenceAssessmentTask.StartTime—Start TimeAssessmentTask.Status—StatusAssessmentTask.TaskDefinitionId—TaskDefinition IDAssessmentTask.TaskType—Task TypeDocumentChecklistItem.Comments—CommentsDocumentChecklistItem.DocumentCategoryId—Document Category IDDocumentChecklistItem.DocumentTypeId—Document Type IDDocumentChecklistItem.Instruction—InstructionsDocumentChecklistItem.IsAccepted—AcceptedDocumentChecklistItem.IsFrozen—FrozenDocumentChecklistItem.IsRequired—RequiredDocumentChecklistItem.Name—NameDocumentChecklistItem.OwnerId—Owner IDDocumentChecklistItem.ParentRecordId—Parent Record IDDocumentChecklistItem.ReceivedDocumentId—Received Document IDDocumentChecklistItem.Status—StatusDocumentChecklistItem.ValidatedById—User IDDocumentChecklistItem.ValidationDateTime—Validation Date TimeDocumentChecklistItem.WhoId—Who IDEvent.ActivityDate—Due Date OnlyEvent.ActivityDateTime—Due Date TimeEvent.Description—DescriptionEvent.DurationInMinutes—DurationEvent.EndDateTime—End Date TimeEvent.EventSubtype—Event SubtypeEvent.IsAllDayEvent—All-Day EventEvent.IsPrivate—PrivateEvent.IsRecurrence—Create Recurring Series of EventsEvent.IsReminderSet—Reminder SetEvent.Location—LocationEvent.OwnerId—Assigned To IDEvent.Recurrence2PatternText—Recurrence PatternEvent.RecurrenceDayOfMonth—Recurrence Day of MonthEvent.RecurrenceDayOfWeekMask—Recurrence Day of Week MaskEvent.RecurrenceEndDateOnly—Recurrence EndEvent.RecurrenceInstance—Recurrence InstanceEvent.RecurrenceInterval—Recurrence IntervalEvent.RecurrenceMonthOfYear—Recurrence Month of YearEvent.RecurrenceStartDateTime—Recurrence StartEvent.RecurrenceTimeZoneSidKey—Recurrence Time ZoneEvent.RecurrenceType—Recurrence TypeEvent.ReminderDateTime—Reminder Date/TimeEvent.ShowAs—Show Time AsEvent.StartDateTime—Start Date TimeEvent.Subject—SubjectEvent.Type—TypeEvent.WhatId—Related To IDEvent.WhoId—Name IDGenericVisitTask.DefinitionReferenceId—Generic Visit Task IDGenericVisitTask.Description—DescriptionGenericVisitTask.EndDateTime—End Date TimeGenericVisitTask.IsRequired—RequiredGenericVisitTask.Name—NameGenericVisitTask.OwnerId—Owner IDGenericVisitTask.Sequence—SequenceGenericVisitTask.StartDateTime—Start Date TimeGenericVisitTask.Status—StatusGenericVisitTask.VisitId—Visit IDOtherComponentTask.Description—DescriptionOtherComponentTask.FullyQualifiedName—Fully Qualified NameOtherComponentTask.Name—NameOtherComponentTask.OwnerId—Owner IDOtherComponentTask.ParentTaskId—Assessment Task IDOtherComponentTask.ParticipantRoleId—ParticipantRole IDRecordAction.ActionDefinition—Action DefinitionRecordAction.ActionType—Action TypeRecordAction.FlowDefinition—Interaction Definition IDRecordAction.FlowInterviewId—FlowInterview IDRecordAction.IsMandatory—Is MandatoryRecordAction.IsUiRemoveHidden—Hide Remove Action in UIRecordAction.Order—OrderRecordAction.ParticipantRoleId—ParticipantRole IDRecordAction.Pinned—PinnedRecordAction.RecordId—Parent Record IDRecordAction.Status—StatusSignatureTask.Description—DescriptionSignatureTask.Name—NameSignatureTask.ParentTaskId—Assessment Task IDTask.APT_Custom_Text_1_c__c—APT Custom Text - 1Task.ActivityDate—Due Date OnlyTask.Boolean_Test__c—Boolean TestTask.CallDisposition—Call ResultTask.CallDurationInSeconds—Call DurationTask.CallObject—Call Object IdentifierTask.CallType—Call TypeTask.Custom_Picklist__c—Custom PicklistTask.Description—TEstActivityDEsTask.IsRecurrence—Create Recurring Series of TasksTask.IsReminderSet—Reminder SetTask.OwnerId—Assigned To IDTask.Priority—PriorityTask.RecurrenceDayOfMonth—Recurrence Day of MonthTask.RecurrenceDayOfWeekMask—Recurrence Day of Week MaskTask.RecurrenceEndDateOnly—Recurrence EndTask.RecurrenceInstance—Recurrence InstanceTask.RecurrenceInterval—Recurrence IntervalTask.RecurrenceMonthOfYear—Recurrence Month of YearTask.RecurrenceRegeneratedType—Repeat This TaskTask.RecurrenceStartDateOnly—Recurrence StartTask.RecurrenceTimeZoneSidKey—Recurrence Time ZoneTask.RecurrenceType—Recurrence TypeTask.ReminderDateTime—Reminder Date/TimeTask.Status—StatusTask.Subject—SubjectTask.TaskSubtype—Task SubtypeTask.Type—TypeTask.WhatId—Related To IDTask.WhoId—Name IDTask.test__c—testTask.text_3__c—text 3 |
| ItemEntityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of action plan template item.Possible values are:Document Checklist ItemEvent—Available in API version 63.0 and later with the Sales Action Plans add-on license and the Sales Action Plans default permission set.RecordActionTask |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template item value can be edited or not. The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier for this record. |
| ValueFormula | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA formula used to calculate the value for this action plan template item. |
| ValueLiteral | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionThe value for this action plan template item. |

## Associated Objects

This object has the following associated objects. If the API version isn't specified, they're available in the same API versions as this object. Otherwise, they're available in the specified API version and later.

[ActionPlanTemplateItemValueChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanTemplateItemValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanTemplateItemValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanTemplateItemValueOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanTemplateItemValueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
