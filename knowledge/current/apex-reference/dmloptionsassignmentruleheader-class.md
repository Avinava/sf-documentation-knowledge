---
title: "DmlOptions.AssignmentRuleHeader Class"
domain: apex-reference
topic: dmloptionsassignmentruleheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.073Z
estimatedTokens: 628
namespace: Database
keywords: [DmlOptions.AssignmentRuleHeader, Enables, setting, assignment, rule, options., Example, assignmentRuleID, Usage, useDefaultRule]
---

# DmlOptions.AssignmentRuleHeader Class

> Enables setting assignment rule
   options.

**Namespace:** `Database`

# DmlOptions.AssignmentRuleHeader Class

Enables setting assignment rule options.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Example

The following example uses the useDefaultRule option:

```

```

The following example uses the assignmentRuleID option:

```

```

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

## Code Examples

```apex
Database.DMLOptions dmo = new Database.DMLOptions();
dmo.assignmentRuleHeader.useDefaultRule= true;

Lead l = new Lead(company='ABC', lastname='Smith');
l.setOptions(dmo);
insert l;
```

```apex
Database.DMLOptions dmo = new Database.DMLOptions();
dmo.assignmentRuleHeader.assignmentRuleId= '01QD0000000EqAn';

Lead l = new Lead(company='ABC', lastname='Smith');
l.setOptions(dmo);
insert l;
```

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- assignmentRuleID (atlas.en-us.apexref.meta/apexref/apex_class_Database_AssignmentRuleHeader.htm)
- useDefaultRule (atlas.en-us.apexref.meta/apexref/apex_class_Database_AssignmentRuleHeader.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
