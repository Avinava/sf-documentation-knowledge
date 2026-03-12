---
title: "SrvcMgmntApprovalAssignment"
domain: agentforce
topic: srvcmgmntapprovalassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.156Z
estimatedTokens: 421
keywords: [SrvcMgmntApprovalAssignment, relationship, service, operation, group, user, assigned, approval, API, version, 65.0, later, Calls]
---

# SrvcMgmntApprovalAssignment

> Represents the relationship between a service operation and a group or user
         to which the operation is assigned by default for approval. This object is available
      in API version 65.0 and later.

# SrvcMgmntApprovalAssignment

Represents the relationship between a service operation and a group or user to which the operation is assigned by default for approval. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe group or user to which a specific service business operation is assigned.This field is a polymorphic relationship field.Relationship NameAssignedToRefers ToGroup, User |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of service management operations based on which the group assignment is classified. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service operation for which a group or user is assigned for primary responsibility.Possible values are:Major Incident Approval |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subcategory of service management operations based on which the group assignment is classified. |
