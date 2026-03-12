---
title: "UnifiedEmail"
domain: object-reference
topic: unifiedemail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.450Z
estimatedTokens: 732
keywords: [UnifiedEmail, email, captured, synced, EmailMessage, Task, record, reports, dashboards, Winter, ’24, release, later, Calls, Special]
---

# UnifiedEmail

> Represents an email that was captured or synced from an EmailMessage
         or Task record. This object is available for reports and dashboards in the Winter ’24
      release and later.

# UnifiedEmail

Represents an email that was captured or synced from an EmailMessage or Task record. This object is available for reports and dashboards in the Winter ’24 release and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Starting in Summer ’25, this object isn’t available unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

Einstein Activity Capture and Activity 360 Reporting must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActivityDateTime | TypedateTimePropertiesFilter, SortDescriptionThe date and time of the email in the Coordinated Universal Time (UTC) time zone. |
| ActivitySubType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionAlways blank for this object. |
| ActivityType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe type of activity.Possible value is UnifiedEmail. |
| DetailId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the object that contains detailed activity-specific information. The object depends on the activity type. For example, the detail for a Task activity is a Task object. The detail for an Event activity is an Event object. If the email was captured from Einstein Activity Capture, this field returns a blank value.This field is a relationship field.Relationship NameDetailRelationship TypeLookupRefers ToEmailMessage |
| Direction | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe direction in which the email was sent or received.Possible values are:InboundInternalOutbound |
| InternalEventKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for internal use. |
| IsInsightAvailable | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the activity has an insight associated with it (true) or not (false).The default value is false. |
| IsPrivate | TypebooleanPropertiesDefaulted on create FilterDescriptionIndicates whether the activity's sensitive fields (Subject and Snippet) are masked (true) or visible (false) for non-owners.The default value is false. |
| Snippet | TypestringPropertiesNillableDescriptionAn abbreviation of the email content. This field has a maximum length of 255 characters. |
| Subject | TypestringPropertiesNoneDescriptionContains the subject of the email. |
