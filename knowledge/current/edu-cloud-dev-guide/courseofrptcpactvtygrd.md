---
title: "CourseOfrPtcpActvtyGrd"
domain: edu-cloud-dev-guide
topic: courseofrptcpactvtygrd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.124Z
estimatedTokens: 1483
keywords: [CourseOfrPtcpActvtyGrd, https, gus.lightning.force.com, lightning, MDS_Entity__c, a7BEE000000QYE92AO, view, API, version, 65.0, later, Calls, Associated, Objects]
---

# CourseOfrPtcpActvtyGrd

> https://gus.lightning.force.com/lightning/r/MDS_Entity__c/a7BEE000000QYE92AO/view
      This object is available in API version 65.0 and later.

# CourseOfrPtcpActvtyGrd

https://gus.lightning.force.com/lightning/r/MDS\_Entity\_\_c/a7BEE000000QYE92AO/view This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learner account associated with the course offering participant activity grade.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActivityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of activity, such as an assignment or quiz.Possible values are:AssignmentAttendanceExamGroup ProjectLab AssignmentParticipationQuiz |
| Comments | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments related to the activity grade. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe learner contact associated with the course offering participant activity grade.This field is a relationship field.Relationship NameContactRefers ToContact |
| CourseOfferingParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe course offering participant associated with the course offering participant activity grade.This field is a relationship field.Relationship NameCourseOfferingParticipantRefers ToCourseOfferingParticipant |
| CourseOfrgRubricCriterionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe course offering rubric criterion associated with the course offering participant activity grade.This field is a relationship field.Relationship NameCourseOfrgRubricCriterionRefers ToCourseOfrgRubricCriterion |
| IsActivityInProgress | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the activity is in progress (true) or not (false).The default value is false. |
| IsActivityLate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the activity is late (true) or not (false).The default value is false. |
| IsActivityMissing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the activity is missing (true) or not (false).The default value is false. |
| IsIncomplete | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the activity is incomplete (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LetterGrade | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe letter grade the course offering participant achieved for the activity. |
| MaximumMark | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum score for the activity. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autonumbered name for the activity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PercentileRank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe percentile rank the course offering particpant achieved for the activity. |
| Score | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe score the course offering participant achieved for the activity. |
| ScoreDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the activity was scored. |
| ScoreStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the score for the activity grade, such as submitted, not submitted, or fully graded.Possible values are:Fully GradedNot SubmittedSubmitted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CourseOfrPtcpActvtyGrdHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CourseOfrPtcpActvtyGrdOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CourseOfrPtcpActvtyGrdShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CourseOfrPtcpActvtyGrdHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- CourseOfrPtcpActvtyGrdOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- CourseOfrPtcpActvtyGrdShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
