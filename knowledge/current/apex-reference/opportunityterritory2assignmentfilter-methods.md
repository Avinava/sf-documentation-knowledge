---
title: "OpportunityTerritory2AssignmentFilter Methods"
domain: apex-reference
topic: opportunityterritory2assignmentfilter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.706Z
keywords: [OpportunityTerritory2AssignmentFilter, Methods, Returns, mapping, opportunities, territory, IDs., Salesforce, invokes, method, supplies, list, opportunity, IDs, except, excluded, assignment, IsExcludedFromTerritory2Filter=false, getOpportunityTerritory2Assignments, opportunityIds]
---

# OpportunityTerritory2AssignmentFilter Methods

> Returns the mapping of opportunities to territory IDs. When Salesforce
      invokes this method, it supplies the list of opportunity IDs, except for opportunities that
      have been excluded from territory assignment
    (IsExcludedFromTerritory2Filter=false).

## OpportunityTerritory2AssignmentFilter Methods

The following are methods for OpportunityTerritory2AssignmentFilter.

-   **[getOpportunityTerritory2Assignments(opportunityIds)](atlas.en-us.apexref.meta/apexref/apex_interface_TerritoryMgmt_OpportunityTerritory2AssignmentFilter.htm#apex_TerritoryMgmt_OpportunityTerritory2AssignmentFilter_getOpportunityTerritory2Assignments)**  
    Returns the mapping of opportunities to territory IDs. When Salesforce invokes this method, it supplies the list of opportunity IDs, except for opportunities that have been excluded from territory assignment (IsExcludedFromTerritory2Filter=false).

### getOpportunityTerritory2Assignments(opportunityIds)

Returns the mapping of opportunities to territory IDs. When Salesforce invokes this method, it supplies the list of opportunity IDs, except for opportunities that have been excluded from territory assignment (IsExcludedFromTerritory2Filter=false).

#### Signature

public Map<Id,Id> getOpportunityTerritory2Assignments(List<Id> opportunityIds)

#### Parameters

opportunityIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

Opportunity IDs.

#### Return Value

Type: Map<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type."),[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A key value pair associating each Territory ID to an Opportunity ID.