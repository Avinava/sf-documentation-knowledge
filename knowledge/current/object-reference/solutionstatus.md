---
title: "SolutionStatus"
domain: object-reference
topic: solutionstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.368Z
estimatedTokens: 623
keywords: [SolutionStatus, status, Solution, Draft, Reviewed, Calls, Usage]
---

# SolutionStatus

> Represents the status of a Solution,
   such as Draft, Reviewed, and so on.

# SolutionStatus

Represents the status of a Solution, such as Draft, Reviewed, and so on.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default solution status value (true) or not (false) in the picklist. Only one value can be the default value. |
| IsReviewed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this solution status value represents a reviewed Solution (true) or not (false). Multiple solution status values can represent a reviewed Solution. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel for this solution status value. This display value is the internal label that does not get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the solution status picklist. These numbers are not guaranteed to be sequential, as some previous solution status values might have been deleted. |

## Usage

This object represents a value in the solution status picklist. The solution status picklist provides additional information about the status of a Solution, such as whether a given status value represents a reviewed or unreviewed solution. Your client application can query this object to retrieve the set of values in the solution status picklist, and then use that information while processing Solution objects to determine more information about a given solution. For example, the application could test whether a given case has been reviewed or not based on its Status value and the value of the IsReviewed property in the associated SolutionStatus record.

#### See Also

-   [Solution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solution.htm "Represents a detailed description of a customer issue and the resolution of that issue.")

## Related Topics

- Solution (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solution.htm)
