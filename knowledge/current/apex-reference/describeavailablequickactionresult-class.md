---
title: "DescribeAvailableQuickActionResult Class"
domain: apex-reference
topic: describeavailablequickactionresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.183Z
estimatedTokens: 671
namespace: QuickAction
keywords: [DescribeAvailableQuickActionResult, unique, action, doesn’t, API, Usage, getActionEnumOrId, getLabel, getName, getType]
---

# DescribeAvailableQuickActionResult Class

> Returns the unique ID for the action. If the action doesn’t have an
      ID, its API name is used.

**Namespace:** `QuickAction`

# DescribeAvailableQuickActionResult Class

Contains describe metadata information for a quick action that is available for a specified parent.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

The QuickAction describeAvailableQuickActions method returns an array of available quick action describe result objects (QuickAction.DescribeAvailableQuickActionResult).

## DescribeAvailableQuickActionResult Methods

The following are methods for DescribeAvailableQuickActionResult. All are instance methods.

-   **[getActionEnumOrId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getActionEnumOrId)**
    Returns the unique ID for the action. If the action doesn’t have an ID, its API name is used.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getLabel)**
    The quick action label.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getName)**
    The quick action name.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getType)**
    The quick action type.

### getActionEnumOrId()

Returns the unique ID for the action. If the action doesn’t have an ID, its API name is used.

#### Signature

public String getActionEnumOrId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

The quick action label.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

The quick action name.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

The quick action type.

#### Signature

public String getType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- getActionEnumOrId() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
