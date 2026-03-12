---
title: "EducationalInfoRequest"
domain: edu-cloud-dev-guide
topic: educationalinforequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.149Z
estimatedTokens: 703
keywords: [EducationalInfoRequest, RFI, raised, prospective, students, parents, counselors, API, version, 57.0, later, Calls]
---

# EducationalInfoRequest

> Represents details about a request for information (RFI) raised by
         prospective students, parents, or counselors. This object is available in API version
      57.0 and later.

# EducationalInfoRequest

Represents details about a request for information (RFI) raised by prospective students, parents, or counselors. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicDurationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic term or academic year that's associated with the Educational Information Request.This field is a polymorphic relationship field.Relationship NameAcademicDurationRelationship TypeLookupRefers ToAcademicTerm, AcademicYear |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case that's associated with the request for information.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Category | TypepicklistPropertiesCreate, Filter, Restricted picklist, Group, Sort, UpdateDescriptionSpecifies the category for which the Request for Information is raised.Possible values are:AcademicAdmissionFinancial Aid |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learning that's associated with the request for information.This field is a relationship field.Relationship NameLearningRelationship TypeLookupRefers ToLearning |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Opportunity associated with the Educational Info Request.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| RequesterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the person associated with the request for information.This field is a relationship field.Relationship NameRequesterRelationship TypeLookupRefers ToAccount |
| SubCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the sub-category for which the Request for Information is raised.Possible values are:Application ProcessHousingProgram InfoScholarshipTuition Fee |
