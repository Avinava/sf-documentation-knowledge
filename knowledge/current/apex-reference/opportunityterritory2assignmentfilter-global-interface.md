---
title: "OpportunityTerritory2AssignmentFilter Global Interface"
domain: apex-reference
topic: opportunityterritory2assignmentfilter-global-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.706Z
keywords: [OpportunityTerritory2AssignmentFilter, Global, Interface, Returns, mapping, opportunities, territory, IDs., Salesforce, invokes, method, supplies, list, opportunity, IDs, except, excluded, assignment, IsExcludedFromTerritory2Filter=false, getOpportunityTerritory2Assignments]
---

# OpportunityTerritory2AssignmentFilter Global Interface

> Returns the mapping of opportunities to territory IDs. When Salesforce
      invokes this method, it supplies the list of opportunity IDs, except for opportunities that
      have been excluded from territory assignment
    (IsExcludedFromTerritory2Filter=false).

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