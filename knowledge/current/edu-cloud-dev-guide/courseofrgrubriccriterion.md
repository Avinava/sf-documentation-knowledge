---
title: "CourseOfrgRubricCriterion"
domain: edu-cloud-dev-guide
topic: courseofrgrubriccriterion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.111Z
estimatedTokens: 930
keywords: [CourseOfrgRubricCriterion, activity, rubric, criterion, course, offering, API, version, 65.0, later, Calls, Associated, Objects]
---

# CourseOfrgRubricCriterion

> Represents an activity rubric criterion for a course offering. This
      object is available in API version 65.0 and later.

# CourseOfrgRubricCriterion

Represents an activity rubric criterion for a course offering. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of activity, such as assignment or quiz.Possible values are:AssignmentAttendanceExamGroup ProjectLab AssignmentParticipationQuiz |
| CountedInstances | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of instances of the activity represented by the record that are counted toward the final grade. |
| CourseOfferingId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe course offering associated with the course offering rubric criterion.This field is a relationship field.Relationship NameCourseOfferingRefers ToCourseOffering |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the course offering rubric criterion. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MaximumInstances | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times the activity represented by the record can occur within a term. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the course offering rubric criterion. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Weight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weight of the course offering rubric criterion. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CourseOfrgRubricCriterionHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CourseOfrgRubricCriterionOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CourseOfrgRubricCriterionShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CourseOfrgRubricCriterionHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- CourseOfrgRubricCriterionOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- CourseOfrgRubricCriterionShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
