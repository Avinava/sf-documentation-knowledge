---
title: "ProgramRecommendationRule"
domain: health-cloud-object-reference
topic: programrecommendationrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.877Z
estimatedTokens: 648
keywords: [ProgramRecommendationRule, eligibility, criteria, recommendation, program, API, version, 61.0, later, Calls]
---

# ProgramRecommendationRule

> Represents the eligibility criteria and recommendation for a program.
      This object is available in API version 61.0 and later.

# ProgramRecommendationRule

Represents the eligibility criteria and recommendation for a program. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the program is eligible for implementation. |
| HasActiveCommercialIns | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this program has an active commercial insurance.The default value is false. |
| IsInclusionRule | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether it's an inclusion rule (true) or an exclusion rule (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum age for enrolling in the program. |
| MinimumAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum age for enrolling in the program. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program recommendation rule. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program associated with the program recommendation rule.This field is a relationship field.Relationship NameProgramRelationship TypeMaster-detailRefers ToProgram (the master object) |
| ProgramType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of program associated with the program recommendation rule.Possible values are:CopayPatient Assistance ProgramQuick Start |
| RecommendedProgramPriority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended priority of the program. |
| RuleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of rule.Possible values are:EligibilityRecommendation |
