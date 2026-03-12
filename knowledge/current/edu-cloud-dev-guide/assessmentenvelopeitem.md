---
title: "AssessmentEnvelopeItem"
domain: edu-cloud-dev-guide
topic: assessmentenvelopeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.940Z
estimatedTokens: 280
keywords: [AssessmentEnvelopeItem, item, envelope, assessments, learner, API, version, 62.0, later, Calls]
---

# AssessmentEnvelopeItem

> Represents information about an item in an envelope that contains the
         assessments related to a learner. This object is available in API version 62.0 and
      later.

# AssessmentEnvelopeItem

Represents information about an item in an envelope that contains the assessments related to a learner. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedatePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date after which the assessment envelope becomes inactive. |
| PulseCheckOccurrenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe occurrence of the pulse check associated with the Assessment Envelope Item. |
| StartDate | TypedatePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the assessment envelope becomes active. |

For more information, see [AssessmentEnvelopeItem in Health Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_assessmentenvelopeitem.htm).
