---
title: "SrvcMgmntRuleAssignment"
domain: agentforce
topic: srvcmgmntruleassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.955Z
keywords: [SrvcMgmntRuleAssignment, Supported, Calls, Fields]
---

# SrvcMgmntRuleAssignment

# SrvcMgmntRuleAssignment

Represents the relationship between a business operation and a group or user to which the operation is assigned by default. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IssueCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the service operation based on which the rule and action is classified. |
| IssueSubCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subcategory of the service operation based on which the rule and action is classified. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service operation related to a rule and an action that's triggered.Possible values are:ChangeRequest—Change RequestIncidentProblemRelease |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RuleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe automated process that stores the rule criteria for a service operation, such as an expression set definition or a flow definition.This field is a polymorphic relationship field.Relationship NameRuleDefinitionRefers ToExpressionSet |