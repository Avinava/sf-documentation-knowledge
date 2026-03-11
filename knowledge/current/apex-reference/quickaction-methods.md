---
title: "QuickAction Methods"
domain: apex-reference
topic: quickaction-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.104Z
keywords: [QuickAction, Methods, Returns, metadata, information, available, quick, actions, provided, parent, object., describeAvailableQuickActions, parentType, Signature, Parameters, Return, Value, Example, describeQuickActions, sObjectNames]
---

# QuickAction Methods

> Returns metadata information for the available quick actions
of the provided parent object.

## QuickAction Methods

The following are methods for QuickAction. All methods are static.

-   **[describeAvailableQuickActions(parentType)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_describeAvailableQuickActions)**  
    Returns metadata information for the available quick actions of the provided parent object.
-   **[describeQuickActions(sObjectNames)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_describeQuickActions)**  
    Returns the metadata information for the provided quick actions.
-   **[performQuickAction(quickActionRequest)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_performQuickAction)**  
    Performs the quick action specified in the quick action request and returns the action result.
-   **[performQuickAction(quickActionRequest, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_performQuickAction_2)**  
    Performs the quick action specified in the quick action request with the option for partial success, and returns the result.
-   **[performQuickActions(quickActionRequests)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_performQuickActions)**  
    Performs the quick actions specified in the quick action request list and returns action results.
-   **[performQuickActions(quickActionRequests, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_QuickAction_QuickAction_performQuickActions_2)**  
    Performs the quick actions specified in the quick action request list with the option for partial success, and returns action results.

### describeAvailableQuickActions(parentType)

Returns metadata information for the available quick actions of the provided parent object.

#### Signature

public static List<QuickAction.DescribeAvailableQuickActionResult> describeAvailableQuickActions(String parentType)

#### Parameters

parentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The parent object type. This can be an object type name ('Account') or 'Global' (meaning that this method is called at a global level and not an entity level).

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeAvailableQuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_class_quickaction_describeavailablequickactionresult "Contains describe metadata information for a quick action that is available for a specified parent.")\>

The metadata information for the available quick actions of the parent object.

#### Example

```

```

### describeQuickActions(sObjectNames)

Returns the metadata information for the provided quick actions.

#### Signature

public static List<QuickAction.DescribeQuickActionResult> describeQuickActions(List<String\> sObjectNames)

#### Parameters

sObjectNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The names of the quick actions. The quick action name can contain the entity name if it is at the entity level ('Account.QuickCreateContact'), or 'Global' if used for the action at the global level ('Global.CreateNewContact').

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeQuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_class_quickaction_describequickactionresult "Contains describe metadata information for a quick action.")\>

The metadata information for the provided quick actions.

#### Example

```

```

### performQuickAction(quickActionRequest)

Performs the quick action specified in the quick action request and returns the action result.

#### Signature

public static QuickAction.QuickActionResult performQuickAction(QuickAction.QuickActionRequest quickActionRequest)

#### Parameters

quickActionRequest

Type: [QuickAction.QuickActionRequest](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest "Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.")

#### Return Value

Type: [QuickAction.QuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult "After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.")

### performQuickAction(quickActionRequest, allOrNothing)

Performs the quick action specified in the quick action request with the option for partial success, and returns the result.

#### Signature

public static QuickAction.QuickActionResult performQuickAction(QuickAction.QuickActionRequest quickActionRequest, Boolean allOrNothing)

#### Parameters

quickActionRequest

Type: [QuickAction.QuickActionRequest](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest "Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.")

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether this operation allows partial success. If you specify false for this argument and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that can be used to verify which records succeeded, which failed, and why.

#### Return Value

Type: [QuickAction.QuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult "After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.")

### performQuickActions(quickActionRequests)

Performs the quick actions specified in the quick action request list and returns action results.

#### Signature

public static List<QuickAction.QuickActionResult> performQuickActions(List<QuickAction.QuickActionRequest> quickActionRequests)

#### Parameters

quickActionRequests

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.QuickActionRequest](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest "Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.")\>

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.QuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult "After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.")\>

### performQuickActions(quickActionRequests, allOrNothing)

Performs the quick actions specified in the quick action request list with the option for partial success, and returns action results.

#### Signature

public static List<QuickAction.QuickActionResult> performQuickActions(List<QuickAction.QuickActionRequest> quickActionRequests, Boolean allOrNothing)

#### Parameters

quickActionRequests

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.QuickActionRequest](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest "Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.")\>

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether this operation allows partial success. If you specify false for this argument and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that can be used to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.QuickActionResult](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult "After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.")\>