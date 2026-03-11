---
title: "ReminderDefinition"
domain: omnistudio
topic: reminderdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.200Z
keywords: [ReminderDefinition, Supported, Calls, Fields, Associated, Objects]
---

# ReminderDefinition

# ReminderDefinition

Represents information about the condition, rule, and related configuration that's set for a reminder. This object is available in API version 60.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Condition | TypetextareaPropertiesNillableDescriptionThe condition that's used to schedule the reminder. |
| EndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date until when the reminder will be sent. |
| FirstReminderInterval | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days after which the first reminder is sent. |
| FourthReminderInterval | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days after which the fourth reminder should be sent. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate field isn’t null, the user accessed this record or list view indirectly. |
| MaximumRecurrenceCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe maximum number of times the reminder will be sent. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the reminder definition. |
| OccurrenceType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe occurrence of the reminder for an event.Valid values are:PostEventPreEventThe default value is PostEvent. This field is available in API version 61.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecurrenceRule | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe recurrence rule that's used for the schedule if the reminder is recurring type. |
| RelatedObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object for which the reminder definition is created. This field is available in API version 61.0 and later. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe record for which the reminder definition is being defined.This field is a relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToSurvey |
| SecondReminderInterval | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days after which the second reminder should be sent. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the status of the reminder.Valid values are:ActiveDraftInactiveThe default value is Draft. |
| ThirdReminderInterval | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days after which the third reminder should be sent. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of the reminder.Valid values are:NonrecurringRecurringThe default value is Recurring. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReminderDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[ReminderDefinitionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[ReminderDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.