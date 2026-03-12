---
title: "IndividualApplication"
domain: edu-cloud-dev-guide
topic: individualapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.283Z
estimatedTokens: 779
keywords: [IndividualApplication, preferences, applicant, program, enrollment, API, version, 57.0, later, Calls]
---

# IndividualApplication

> Represents information about the preferences of an applicant during program
         enrollment. This object is available in API version 57.0 and later.

# IndividualApplication

Represents information about the preferences of an applicant during program enrollment. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTerm | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe academic term associated with the application. |
| ApplicantEmail | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address of the applicant. |
| ApplicantPhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number of the applicant. |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategorizes the ways an application can be processed.Possible values are:Early DecisionRegular Decision |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the application.Possible values are:GraduateInternationalTransferUndergraduate |
| ApprovedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the application was approved. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service category of the application.Possible values are:Education |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact person associated with the application.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| DecisionReleaseDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the application decision is announced. |
| DueDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe last date when applicants can apply for admission. |
| LearningProgram | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe learning program associated with the application. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Opportunity associated with the Individual Application.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| ProgramTermApplnTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application timeline of the program term associated with the application.This field is a relationship field.Relationship NameProgramTermApplnTimelineRelationship TypeLookupRefers ToProgramTermApplnTimeline |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe submission and approval status of the application.Possible values are:Application DecisionCanceledDeniedEnrolledEnrollment FailedIn ReviewProcessingReady For Decision |

For more information, see [IndividualApplication in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_individualapplication.htm "HTML (New Window)").
