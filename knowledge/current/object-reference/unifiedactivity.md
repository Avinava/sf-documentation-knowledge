---
title: "UnifiedActivity"
domain: object-reference
topic: unifiedactivity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.423Z
estimatedTokens: 705
keywords: [UnifiedActivity, activity, automatically, captured, Einstein, Capture, EAC, data, calls, manually, logged, tasks, emails, consists, common]
---

# UnifiedActivity

> Represents an activity that is automatically captured from Einstein Activity
         Capture (EAC) or other activity data, such as calls, manually logged tasks, and emails.
         This object consists of fields common to all types of activity-related objects such as
         Event, Task, EmailMessage, VoiceCall, VideoCall, and so on. This object is available
      for reports and dashboards in the Winter ’24 release and later.

# UnifiedActivity

Represents an activity that is automatically captured from Einstein Activity Capture (EAC) or other activity data, such as calls, manually logged tasks, and emails. This object consists of fields common to all types of activity-related objects such as Event, Task, EmailMessage, VoiceCall, VideoCall, and so on. This object is available for reports and dashboards in the Winter ’24 release and later.

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

We’re retiring Einstein Activity Capture Activity 360 Reporting. Starting in Summer ’25, this object isn’t available with Einstein Activity Capture unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Fields

| Field | Details |
| --- | --- |
| ActivityDateTime | TypedateTimePropertiesFilter, SortDescriptionThe date and time of the activity in the Coordinated Universal Time (UTC) time zone. |
| ActivitySubType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionProvides standard subtypes to facilitate creating and searching for specific activity subtypes.Possible values are:CapturedLegacyCallStreamedVoiceCall |
| ActivityType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe type of activity.Possible values are:UnifiedActivityUnifiedEmailUnifiedMeetingUnifiedTaskUnifiedVideoCallUnifiedVoiceCall |
| DetailId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the object that contains detailed activity-specific information. The object depends on the activity type. For example, the detail for a Task activity is a Task object. The detail for an Event activity is an Event object.This field is a polymorphic relationship field.Relationship NameDetailRelationship TypeLookupRefers ToEmailMessage, Event, Task, VideoCall, VoiceCall |
| InternalEventKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for internal use. |
| IsInsightAvailable | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the activity has an insight associated with it (true) or not (false).The default value is false. |
| Snippet | TypestringPropertiesNillableDescriptionAn abbreviation of the activity body or description. This field has a maximum length of 255 characters. |
| Subject | TypestringPropertiesNoneDescriptionContains the subject of the task or event. |
