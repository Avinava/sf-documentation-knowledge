---
title: "PersonEducation"
domain: edu-cloud-dev-guide
topic: personeducation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.659Z
estimatedTokens: 844
keywords: [PersonEducation, academic, standing, applicant, API, version, 57.0, later, Calls]
---

# PersonEducation

> Represents information about the academic standing of an applicant. This
      object is available in API version 57.0 and later.

# PersonEducation

Represents information about the academic standing of an applicant. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Person Education.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ClassRank | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe measure of the applicant's academic performance compared to the other students in their class. This rank is based on the class rank reporting format that's followed by the institute, such as a number or percentage. |
| ClassRankReportingFormat | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the class rank reporting format followed by the institution to report the applicant's performance.Possible values are:DecileExactNoneQuartileQuintile |
| ClassRankWeightingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the GPA weighting type that’s used to calculate the applicant’s class rank.Possible values are:UnweightedWeighted |
| Comment | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments on the applicant’s education details. |
| CumulativeGpa | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe grade point average of all the grades earned by an applicant in all the semesters or terms. |
| EducationLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of education achieved.Possible values are:GraduateHigh SchoolNo Formal EducationPost GraduateThe default value is Fellowship. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the individual’s education. |
| GpaScale | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scale used when calculating the applicant's grade point average. |
| GpaWeightingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of weightage given to the applicant's grades when calculating their grade point average.Possible values are:UnweightedWeighted |
| GraduationClassSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of students who graduated from the same school, in the same academic year, as the applicant. |
| InstitutionAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution associated with the applicant’s education.This field is a relationship field.Relationship NameIndividualRelationship TypeLookupRefers ToIndividual |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active.The default value is false. |

For more information, see [PersonEducation in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_personeducation.htm "HTML (New Window)").
