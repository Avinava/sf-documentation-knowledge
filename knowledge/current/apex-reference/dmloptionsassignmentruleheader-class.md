---
title: "DmlOptions.AssignmentRuleHeader Class"
domain: apex-reference
topic: dmloptionsassignmentruleheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.671Z
keywords: [DmlOptions.AssignmentRuleHeader, Class, specified, true, case, lead, system, uses, default, active, assignment, rule, lead., specify, assignmentRuleId., useDefaultRule, Signature, Property, Value, Usage]
---

# DmlOptions.AssignmentRuleHeader Class

> If specified as true for a case or lead, the system uses the default (active) assignment
 rule for the case or lead. If specified, do not specify an assignmentRuleId.

### useDefaultRule

If specified as true for a case or lead, the system uses the default (active) assignment rule for the case or lead. If specified, do not specify an assignmentRuleId.

#### Signature

public Boolean useDefaultRule {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If there are no assignment rules in the organization, in API version 29.0 and earlier, creating a case or lead with useDefaultRule set to true results in the case or lead being assigned to the predefined default owner. In API version 30.0 and later, the case or lead is unassigned and doesn't get assigned to the default owner.