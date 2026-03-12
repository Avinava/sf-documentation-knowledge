---
title: "AssessmentQuestion"
domain: netzero-cloud-dev-guide
topic: assessmentquestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.535Z
estimatedTokens: 313
keywords: [AssessmentQuestion, Stores, questions, assessment, API, version, 55.0, later, Calls]
---

# AssessmentQuestion

> Stores the questions required for an assessment. This object is
      available in API version 55.0 and later.

# AssessmentQuestion

Stores the questions required for an assessment. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisclosureDefinitionVer | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the predefined disclosure definition version associated with the assessment question.Possible values are:CsrdVersion3ForHybridMS365—CSRD V3 Microsoft 365 Word Hybrid ModeCsrdVersion4ForHybridMS365—CSRD V4 Microsoft 365 Word Hybrid Mode |
| DisclosureDefinitionVerRefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe custom disclosure definition version associated with the assessment question.This field is a relationship field.Relationship NameDisclosureDefinitionVerRefRefers ToDisclosureDefinitionVersion |

For more information, see [AssessmentQuestion in Industries Common Resources Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm).
