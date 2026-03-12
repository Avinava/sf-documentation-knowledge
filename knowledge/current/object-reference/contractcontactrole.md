---
title: "ContractContactRole"
domain: object-reference
topic: contractcontactrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.310Z
estimatedTokens: 455
keywords: [ContractContactRole, role, Contact, plays, Contract, Calls]
---

# ContractContactRole

> Represents the role that a Contact plays on a
  Contract.

# ContractContactRole

Represents the role that a Contact plays on a Contract.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Contact associated with this Contract.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Contract.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort,UpdateDescriptionSpecifies whether this Contact plays the primary role on this Contract (true) or not (false). Each contract has one primary contact role. Default is false. Labels is Primary. |
| Role | TypepicklistPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionName of the role played by the Contact on this Contract, such as Decision Maker, Approver, Buyer, and so on. Must be unique—there can't be multiple records in which the ContractId, ContactId, and Role values are identical. Different contacts can play the same role on the same contract. A contact can play different roles on the same contract. |

#### See Also

-   [ContractStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractstatus.htm "Represents the status of a Contract, such as Draft, InApproval, Activated, Terminated, or Expired.")

## Related Topics

- ContractStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractstatus.htm)
