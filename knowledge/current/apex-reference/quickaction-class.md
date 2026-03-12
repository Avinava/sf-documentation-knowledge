---
title: "QuickAction Class"
domain: apex-reference
topic: quickaction-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.698Z
estimatedTokens: 2859
namespace: System
keywords: [QuickAction, Apex, process, actions, objects, allow, custom, appear, Chatter, feed, globally, describeAvailableQuickActions, parentType, describeQuickActions, sObjectNames]
---

# QuickAction Class

> Use Apex to request and process actions on objects
            that allow custom fields, on objects that appear in a Chatter feed, or on objects that
            are available globally.

**Namespace:** `System`

# QuickAction Class

Use Apex to request and process actions on objects that allow custom fields, on objects that appear in a Chatter feed, or on objects that are available globally.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Example

In this sample, the trigger determines if the new contacts to be inserted are created by a quick action. If so, it sets the WhereFrom\_\_c custom field to a value that depends on whether the quick action is global or local to the contact. Otherwise, if the inserted contacts don’t originate from a quick action, the WhereFrom\_\_c field is set to 'NoAction'.

```

```

This sample performs a global action—QuickAction.CreateContact–on the passed-in contact object.

```

```

#### See Also

-   [QuickActionRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest "Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.")

-   [QuickActionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult "After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.")


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

## Code Examples

```apex
trigger accTrig2 on Contact (before insert) {
    for (Contact c : Trigger.new) {
        if (c.getQuickActionName() == QuickAction.CreateContact) {
            c.WhereFrom__c = 'GlobaActionl';
        } else if (c.getQuickActionName() == Schema.Account.QuickAction.CreateContact) {
            c.WhereFrom__c = 'AccountAction';
        } else if (c.getQuickActionName() == null) {
            c.WhereFrom__c = 'NoAction';
        } else {
            System.assert(false);
        }
    }
}
```

```apex
public Id globalCreate(Contact c) { 
    QuickAction.QuickActionRequest req = new QuickAction.QuickActionRequest();
    req.quickActionName = QuickAction.CreateContact;
    req.record = c;
    QuickAction.QuickActionResult res = QuickAction.performQuickAction(req);
    return c.id;
}
```

```apex
// Called for Account entity.
List<QuickAction.DescribeAvailableQuickActionResult> result1 = 
    QuickAction.DescribeAvailableQuickActions('Account');  

// Called at global level, not entity level.
List<QuickAction.DescribeAvailableQuickActionResult> result2 = 
    QuickAction.DescribeAvailableQuickActions('Global');
```

```apex
// First 3 parameter values are for actions at the entity level. 
// Last parameter is for an action at the global level.
List<QuickAction.DescribeQuickActionResult> result = 
    QuickAction.DescribeQuickActions(new List<String> {
        'Account.QuickCreateContact', 'Opportunity.Update1', 
        'Contact.Create1', 'Global.CreateNewContact' });
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- QuickActionRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm)
- QuickActionResult Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm)
- describeAvailableQuickActions(parentType) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- describeQuickActions(sObjectNames) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- performQuickAction(quickActionRequest) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- performQuickAction(quickActionRequest, allOrNothing) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- performQuickActions(quickActionRequests) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- performQuickActions(quickActionRequests, allOrNothing) (atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
