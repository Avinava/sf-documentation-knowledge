---
title: "CaseSolution"
domain: object-reference
topic: casesolution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.323Z
estimatedTokens: 341
keywords: [CaseSolution, association, Case, Solution, Calls, Usage]
---

# CaseSolution

> Represents the association between a Case and a
        Solution.

# CaseSolution

Represents the association between a Case and a Solution.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Case associated with the Solution.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| SolutionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Solution associated with the case.This is a relationship field.Relationship NameSolutionRelationship TypeLookupRefers ToSolution |

## Usage

You can't update this object via the API. If you attempt to create a record that matches an existing record, the request simply returns the existing record.

#### See Also

-   [CaseShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm "Represents a sharing entry on a Case.")

-   [SolutionStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solutionstatus.htm "Represents the status of a Solution, such as Draft, Reviewed, and so on.")

## Related Topics

- CaseShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm)
- SolutionStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solutionstatus.htm)
