---
title: "SurveyResponseOffline"
domain: life-sciences-dev-guide
topic: surveyresponseoffline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.415Z
estimatedTokens: 939
keywords: [SurveyResponseOffline, participant’s, offline, survey, including, status, participant, location, completion, time, staging, environments, API, version, 65.0]
---

# SurveyResponseOffline

> Represents information about a participant’s offline survey response, including the
      response status, participant location, and completion time, for both offline and staging
      environments. This object is available in API version 65.0 and later.

# SurveyResponseOffline

Represents information about a participant’s offline survey response, including the response status, participant location, and completion time, for both offline and staging environments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompletionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the participant completed the survey. |
| EstimatedDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total time, in seconds, taken by the participant to provide a response to the survey. |
| InvitationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the survey invitation that’s associated with this response.This field is a relationship field.Relationship NameInvitationRefers ToSurveyInvitation |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the offline survey response. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier of the offline or staging response record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this offline survey response record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Response | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant’s offline response to the survey. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the survey.Possible values are:CompletedCompletedAndMigratedNotStartedPartiallyCompletedPausedStarted |
| SubmitterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who is submitting the response for the survey.This field is a polymorphic relationship field.Relationship NameSubmitterRefers ToContact, Lead, User |
| SurveyCompletionPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescription"The percentage of the survey completed by the participant. |
| SurveyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the survey that the participant completed.This field is a relationship field.Relationship NameSurveyRefers ToSurvey |
| SurveyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the survey that the participant completed. |
| SurveyVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the version of the survey that the participant completed.This field is a relationship field.Relationship NameSurveyVersionRefers ToSurveyVersion |
