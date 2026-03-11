---
title: "DmlOptions.AssignmentRuleHeader Properties"
domain: apex-reference
topic: dmloptionsassignmentruleheader-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.671Z
keywords: [DmlOptions.AssignmentRuleHeader, Properties, Specifies, specific, assignment, rule, run, case, lead., active, inactive., assignmentRuleID, Signature, Property, Value, Usage, useDefaultRule]
---

# DmlOptions.AssignmentRuleHeader Properties

> Specifies the ID of a specific assignment rule to run for
the case or lead. The assignment rule can be active or inactive.

## DmlOptions.AssignmentRuleHeader Properties

The following are properties for DmlOptions.AssignmentRuleHeader.

-   **[assignmentRuleID](atlas.en-us.apexref.meta/apexref/apex_class_Database_AssignmentRuleHeader.htm#apex_Database_AssignmentRuleHeader_assignmentRuleID)**  
    Specifies the ID of a specific assignment rule to run for the case or lead. The assignment rule can be active or inactive.
-   **[useDefaultRule](atlas.en-us.apexref.meta/apexref/apex_class_Database_AssignmentRuleHeader.htm#apex_Database_AssignmentRuleHeader_useDefaultRule)**  
    If specified as true for a case or lead, the system uses the default (active) assignment rule for the case or lead. If specified, do not specify an assignmentRuleId.

### assignmentRuleID

Specifies the ID of a specific assignment rule to run for the case or lead. The assignment rule can be active or inactive.

#### Signature

public Id assignmentRuleID {get; set;}

#### Property Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

The ID can be retrieved by querying the AssignmentRule sObject. If specified, do not specify useDefaultRule.

If the value is not in the correct ID format (15-character or 18-character Salesforce ID), the call fails and an exception is returned.

### useDefaultRule

If specified as true for a case or lead, the system uses the default (active) assignment rule for the case or lead. If specified, do not specify an assignmentRuleId.

#### Signature

public Boolean useDefaultRule {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If there are no assignment rules in the organization, in API version 29.0 and earlier, creating a case or lead with useDefaultRule set to true results in the case or lead being assigned to the predefined default owner. In API version 30.0 and later, the case or lead is unassigned and doesn't get assigned to the default owner.