---
title: "AssessmentEnvelope"
domain: edu-cloud-dev-guide
topic: assessmentenvelope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.936Z
estimatedTokens: 336
keywords: [AssessmentEnvelope, envelope, assessments, learner, API, version, 62.0, later, Calls]
---

# AssessmentEnvelope

> Represents information about an envelope that contains the assessments
         related to a learner. This object is available in API version 62.0 and later.

# AssessmentEnvelope

Represents information about an envelope that contains the assessments related to a learner. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LearnerCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Case of the learner associated with the Assessment Envelope.This field is a relationship field.Relationship NameLearnerCaseRefers ToCase |
| LearnerProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Program Enrollment of the learner associated with the Assessment Envelope.This field is a relationship field.Relationship NameLearnerProgramEnrollmentRefers ToProgramEnrollment |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type for this assessment envelope.Possible values are:DefaultPulseCheck |

For more information, see [AssessmentEnvelope in Health Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_assessmentenvelope.htm).
