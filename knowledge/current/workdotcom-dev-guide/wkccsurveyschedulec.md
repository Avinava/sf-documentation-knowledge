---
title: "wkcc__SurveySchedule__c"
domain: workdotcom-dev-guide
topic: wkccsurveyschedulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.428Z
estimatedTokens: 1360
keywords: [wkcc__SurveySchedule__c, survey, schedule, org, including, selected, email, template, filter, criteria, API, version, 49.0, later, wkcc]
---

# wkcc__SurveySchedule__c

> Represents the details of a survey schedule in the org, including the selected
      survey, email template, and filter criteria. This object is available in API version 49.0
    and later

# wkcc\_\_SurveySchedule\_\_c

Represents the details of a survey schedule in the org, including the selected survey, email template, and filter criteria. This object is available in API version 49.0 and later

The custom object that represents details about the locations or employees that receive the scheduled survey is wkcc\_\_SurveyScheduleRecipient\_\_c.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (see LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The name of the survey schedule. The maximum length is 80 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. The default value is the user logged in to the API to perform the create operation. |
| wkcc__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the schedule is executing as defined. Deactivating a survey schedule stops it from executing until it's reactivated. The default is true.NoteWhen you deactivate a schedule, wkcc__NextSendDate__c is cleared. The field is cleared, because we can't determine when the next send occurs until the schedule is reactivated. |
| wkcc__AuthenticationRequired__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether recipients of surveys sent out by this schedule must authenticate to access the survey. Available in API version 50.0 and later. The default value is false.NoteRecipients of surveys that require authentication must have a user record in your Work.com org, their employee record must include an email address, and each employee's user must be associated with an Experience Cloud site that is activated.When a survey that requires authentication is sent or scheduled, the number of total recipients shown reflects the number who meet all the requirements. Warnings alert you to problems with the other intended recipients and how many individuals are impacted. |
| wkcc__EmailTemplateId__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the email template selected for this schedule. |
| wkcc__EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the schedule stops sending the survey. This value must be later than the value in wkcc__StartDate__c. This value is stored in GMT time but is shown to users in local time. |
| wkcc__IncludeSublocations__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether to include sublocations (true) or not (false). A sublocation is a child record of a Location record. This field applies only when the recipient type is Location. The default value is false. |
| wkcc__IndividualRole__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the role shared by individuals who are recipients of the scheduled survey. Use this field to send the scheduled survey only to a role-specific group of recipients at the selected locations. This field applies only when the recipient type is Location. The maximum number of characters is 255. |
| wkcc__NextSendDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (GMT) when the survey is next sent to recipients, based on the current definition of the schedule. This value is stored in GMT time but is shown to users in local time.NoteWhen you deactivate a schedule, wkcc__NextSendDate__c is cleared. The field is cleared, because we can't determine when the next send occurs until the schedule is reactivated. |
| wkcc__RecipientType__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates the record type of selected recipients of the scheduled survey.ImportantAfter a schedule is created, you can't change the recipient type.Possible values are:EmployeeLocationThe default value is Employee. |
| wkcc__ScheduleFrequency__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates how often to send the survey.Possible values are:ONCEDAILYWEEKLYThe default value is ONCE. |
| wkcc__StartDate__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date and time by which the schedule begins sending the survey. This value must be earlier than the value in wkcc__EndDate__c. This value is stored in GMT time but is shown to users in local time. |
| wkcc__Survey__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe survey this schedule sends. This field is a lookup to the Survey object. |
