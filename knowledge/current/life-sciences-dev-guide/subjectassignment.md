---
title: "SubjectAssignment"
domain: life-sciences-dev-guide
topic: subjectassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.140Z
estimatedTokens: 479
keywords: [SubjectAssignment, junction, subject, inquiry, belongs, API, version, 65.0, later, Calls, Associated, Objects]
---

# SubjectAssignment

> Represents a junction between a subject and the inquiry that the subject
      belongs to. This object is available in API version 65.0 and later.

# SubjectAssignment

Represents a junction between a subject and the inquiry that the subject belongs to. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the medical inquiry that the subject belongs to.This field is a polymorphic relationship field.Relationship NameAssignmentRefers ToMedicalInquiry |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SubjectAssignmentFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SubjectAssignmentHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SubjectAssignmentShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SubjectAssignmentFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- SubjectAssignmentHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- SubjectAssignmentShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
