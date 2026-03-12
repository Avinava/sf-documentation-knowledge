---
title: "CourseCreditTransferAppln"
domain: edu-cloud-dev-guide
topic: coursecredittransferappln
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.041Z
estimatedTokens: 1686
keywords: [CourseCreditTransferAppln, course, credit, transfer, application, API, version, 65.0, later, Calls]
---

# CourseCreditTransferAppln

> Represents the details of a course credit transfer application. This
      object is available in API version 65.0 and later.

# CourseCreditTransferAppln

Represents the details of a course credit transfer application. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovedLearningEquivalencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approved Learning Equivalency related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameApprovedLearningEquivalencyRefers ToLearningEquivalency |
| ApprovedLearningId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approved Learning related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameApprovedLearningRefers ToLearning |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Case related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameCaseRefers ToCase |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application that's associated with this course credit transfer application.This field is a relationship field.Relationship NameIndividualApplicationRefers ToIndividualApplication |
| IsForEstimate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether course credit transfer application is only for estimation (true) or not (false).The default value is false. |
| IsInProgress | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the external learning that's associated with this course credit transfer application is in progress (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningAcademicSeason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic season of the learning for the Course Credit Transfer Application. |
| LearningAcademicYear | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic year of the learning for the Course Credit Transfer Application. |
| LearningAchievementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning Achievement related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameLearningAchievementRefers ToLearningAchievement |
| LearningDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of the learning for the Course Credit Transfer Application. |
| LearningDurationUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the duration unit of the learning for the Course Credit Transfer Application.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| LearningEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the external learning. |
| LearningIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the learning for the Course Credit Transfer Application. |
| LearningLetterGrade | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe letter grade of the learning for the Course Credit Transfer Application. |
| LearningName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the learning for the Course Credit Transfer Application. |
| LearningNumericGrade | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe letter grade of the learning for the Course Credit Transfer Application. |
| LearningStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the external learning. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Course Credit Transfer Application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe identifier for the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PriorLearningEvaluationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prior learning evaluation record that groups all course credit transfer applications for an institution into one transfer credit estimate.This field is a relationship field.Relationship NamePriorLearningEvaluationRefers ToPriorLearningEvaluation |
| Provider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider of the Course Credit Transfer Application. |
| RequestedLearningEquivalencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe requested Learning Equivalency related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameRequestedLearningEquivalencyRefers ToLearningEquivalency |
| RequestedLearningId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe requested Learning related to the Course Credit Transfer Application.This field is a relationship field.Relationship NameRequestedLearningRefers ToLearning |
| ReviewType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies review type of the Course Credit Transfer Application based on submitted information.Possible values are:NotReviewedOfficialUnofficial |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the Course Credit Transfer Application.Possible values are:Application DecisionApprovedCancelledConditionally ApprovedDeniedFaculty ReviewIn ReviewProcessing |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of credit requested for transfer.Possible values are:EducationEmploymentExaminationMilitaryOther |
