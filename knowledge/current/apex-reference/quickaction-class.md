---
title: "QuickAction Class"
domain: apex-reference
topic: quickaction-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.104Z
keywords: [QuickAction, Class, Performs, quick, actions, specified, action, request, list, option, partial, success, returns, results., performQuickActions, quickActionRequests, allOrNothing, Signature, Parameters, Return]
---

# QuickAction Class

> Performs the quick actions specified in the quick action
request list with the option for partial success, and returns action
results.

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