---
title: "ContractStatus"
domain: object-reference
topic: contractstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.347Z
estimatedTokens: 614
keywords: [ContractStatus, status, Contract, Draft, InApproval, Activated, Terminated, Expired, Calls, Usage]
---

# ContractStatus

> Represents the status of a Contract, such as Draft, InApproval,
   Activated, Terminated, or Expired.

# ContractStatus

Represents the status of a Contract, such as Draft, InApproval, Activated, Terminated, or Expired.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default contract status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel for this contract status value. This display value is the internal label that does not get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the contract status picklist. These numbers are not guaranteed to be sequential, as some previous contract status values might have been deleted. |
| StatusCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCode indicating the status of a contract. One of the following values:DraftInApprovalActivatedTwo other values (Terminated and Expired) are defined but are not available for use via the API. |

## Usage

This object represents a value in the contract status picklist. The contract status picklist provides additional information about the status of a Contract, such as its current state (Draft, InApproval, or Activated). You can query these records to retrieve the set of values in the contract status picklist, and then use that information while processing Contract objects to determine more information about a given contract. For example, the application could test whether a given contract is activated based on its Status value and the value of the StatusCode property in the associated ContractStatus object.

#### See Also

-   [ContractContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractcontactrole.htm "Represents the role that a Contact plays on a Contract.")

## Related Topics

- ContractContactRole (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractcontactrole.htm)
