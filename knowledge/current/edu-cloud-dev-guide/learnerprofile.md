---
title: "LearnerProfile"
domain: edu-cloud-dev-guide
topic: learnerprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.360Z
estimatedTokens: 2471
keywords: [LearnerProfile, learner's, profile, API, version, 63.0, later, Calls, Associated, Objects]
---

# LearnerProfile

> Represents information about a learner's profile. This object is
      available in API version 63.0 and later.

# LearnerProfile

Represents information about a learner's profile. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the learner's academic level.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| AcademicStanding | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the learner's academic standing.Possible values are:Academic DismissalAcademic ProbationAcademic WarningGood StandingHonors/Dean's ListReinstatement StatusRequired Withdrawal |
| AcademicTermEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term Enrollment associated with the Learner Profile.This field is a relationship field.Relationship NameAcademicTermEnrollmentRefers ToAcademicTermEnrollment |
| AdmitTerm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic term in which the learner was admitted to the education institute. |
| College | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the college associated with the Learner Profile. |
| Concentration | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the specialization subject of the learner. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Contact associated with the Learner Profile.This field is a relationship field.Relationship NameContactRelationship TypeMaster-detailRefers ToContact (the master object) |
| ContactProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact Profile associated with the Learner Profile.This field is a relationship field.Relationship NameContactProfileRefers ToContactProfile |
| CumulativeGpa | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cumulative grade point average of the learner. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Learner Profile.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the learner. |
| EnrollmentReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the learner's enrollment reason.Possible values are:ContinuingFirst TimeRe-admitTransfer in |
| EnrollmentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the learner's enrollment status for the academic term.Possible values are:ActiveDropoutExpelledGraduatedNo showOtherTransferredWithdrawn |
| ExpectedGraduationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learner's expected graduation date. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's gender. |
| HasParentalFerpa | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether parental FERPA block is applicable on the learner's records (true) or not (false).The default value is false. |
| HasThirdPartyFerpa | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether third-party FERPA block is applicable on the learner's records (true) or not (false).The default value is false. |
| InstructionMode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mode of instructions of the learner's classes. |
| IsAthlete | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is an athlete (true) or not (false).The default value is false. |
| IsCampusResident | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner resides on campus (true) or not (false).The default value is false. |
| IsDeceased | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is deceased (true) or not (false).The default value is false. |
| IsEnrolledInCareerServices | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is enrolled in career services at the institute (true) or not (false).The default value is false. |
| IsEnrolledInDualDegree | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is enrolled in dual degree (true) or not (false).The default value is false. |
| IsFirstGenerationStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is a first generation student (true) or not (false).The default value is false. |
| IsInternationalStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is an international student (true) or not (false).The default value is false. |
| IsPellGrantEligible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is eligible for the Pell Grant (true) or not (false).The default value is false. |
| IsTransferStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the learner is a transfer student (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Major | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's major. |
| MajorDeclarationTerm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic term in which the learner declared their major. |
| MatriculationTerm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic term in which the learner enrolled at the institute. |
| Minor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's minor. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Learner Profile. |
| PrimaryAdvisorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User that is the primary advisor associated with the Learner Profile.This field is a relationship field.Relationship NamePrimaryAdvisorRefers ToUser |
| PrimaryAdvisorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the learner's primary advisor. |
| Pronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's preferred gender pronouns.Possible values are:He/HimHe/TheyNot ListedShe/HerShe/TheyThey/Them |
| SecondConcentration | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the second specialization subject of the learner. |
| SecondMajor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's second major. |
| SecondMinor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the learner's second minor. |
| SecondaryAdvisorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User that is the secondary advisor associated with the Learner Profile.This field is a relationship field.Relationship NameSecondaryAdvisorRefers ToUser |
| SecondaryAdvisorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the learner's secondary advisor. |
| StudentIdNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier issued to the learner by the institution. |
| StudyYearClassification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the learner's study year classification.Possible values are:FreshmanJuniorSeniorSophomore |
| TotalUnitsCompleted | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of units completed by the learner. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearnerProfileHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearnerProfileHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
