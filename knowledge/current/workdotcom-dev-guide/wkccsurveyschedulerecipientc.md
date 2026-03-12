---
title: "wkcc__SurveyScheduleRecipient__c"
domain: workdotcom-dev-guide
topic: wkccsurveyschedulerecipientc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.433Z
estimatedTokens: 455
keywords: [wkcc__SurveyScheduleRecipient__c, recipients, surveys, sent, particular, survey, schedule, employees, locations, change, scheduled, updated, referenced, time, goes]
---

# wkcc__SurveyScheduleRecipient__c

> Represents details about recipients of surveys sent out by a particular survey
      schedule. The recipients can be employees or locations. If you change the recipients for a
      scheduled survey, the updated recipients list is referenced the next time the scheduled survey
      goes out. This object is available in API version 49.0 and later.

# wkcc\_\_SurveyScheduleRecipient\_\_c

Represents details about recipients of surveys sent out by a particular survey schedule. The recipients can be employees or locations. If you change the recipients for a scheduled survey, the updated recipients list is referenced the next time the scheduled survey goes out. This object is available in API version 49.0 and later.

The custom object that represents details of a survey schedule in the org, including the selected survey, email template, and filter criteria, is wkcc\_\_SurveySchedule\_\_c.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe automatically generated ID of a survey schedule recipient, using the SSR-{00000000} display format. |
| wkcc__Employee__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a lookup field to the Employee object. Mutually exclusive with the wkcc__Location__c field.NoteIf the referenced Employee record is deleted, the wkcc__Employee__c field is cleared. |
| wkcc__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a lookup field to the Location object. Mutually exclusive with the wkcc__Employee__c field.NoteIf the referenced Location record is deleted, the wkcc__Location__c field is cleared. |
| wkcc__SurveySchedule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The name of the survey schedule associated with this list of recipients.NoteIf the referenced survey schedule is deleted, the associated list of survey recipients is also removed. |
