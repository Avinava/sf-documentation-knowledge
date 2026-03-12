---
title: "CaseStatus"
domain: object-reference
topic: casestatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.328Z
estimatedTokens: 648
keywords: [CaseStatus, status, Case, New, Hold, Process, Calls, Usage]
---

# CaseStatus

> Represents the status of a Case, such as New, On Hold, or In
   Process.

# CaseStatus

Represents the status of a Case, such as New, On Hold, or In Process.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this case status value represents a closed Case (true) or not (false). Multiple case status values can represent a closed Case. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default case status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel for this case status value. This display value is the internal label that does not get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the case status picklist. These numbers are not guaranteed to be sequential, as some previous case status values might have been deleted. |

## Usage

This object represents a value in the case status picklist. The case status picklist provides additional information about the status of a Case, such as whether a given Status value represents an open or closed case. Query the CaseStatus object to retrieve the set of values in the case status picklist, and then use that information while processing Case records to determine more information about a given case. For example, the application could test whether a given case is open or closed based on its Status value and the value of the IsClosed property in the associated CaseStatus object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
