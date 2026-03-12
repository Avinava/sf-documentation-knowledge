---
title: "PreliminaryApplicationRef"
domain: edu-cloud-dev-guide
topic: preliminaryapplicationref
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.731Z
estimatedTokens: 506
keywords: [PreliminaryApplicationRef, saved, applications, API, version, 57.0, later, Calls]
---

# PreliminaryApplicationRef

> Represents details about saved applications. This object is available in
      API version 57.0 and later.

# PreliminaryApplicationRef

Represents details about saved applications. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact record associated with the person who submitted the application.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToContact |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the application based on the admission decision period.Possible values are:Early DecisionRegular Decision |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:Business License ApplicationBusiness PrescreeningIndividual ApplicationPublic Complaint |
| ProgramTermApplnTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program term application timeline associated with the preliminary application reference record.This field is a relationship field.Relationship NameProgramTermApplnTimelineRelationship TypeLookupRefers ToProgramTermApplnTimeline |
| SubmissionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application was submitted. |
| SubmittedByContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact who submits an application.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |

For more information, see [PreliminaryApplicationRef in Nonprofit Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_preliminaryapplicationref.htm "HTML (New Window)").
