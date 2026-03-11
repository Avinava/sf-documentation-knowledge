---
title: "QuickActionRequest Methods"
domain: apex-reference
topic: quickactionrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.706Z
keywords: [QuickActionRequest, Methods, Returns, QuickAction’s, context, record, ID., getContextId, Signature, Return, Value, getQuickActionName, getRecord, setContextId, contextId, Parameters, Usage, setQuickActionName, name, setRecord]
---

# QuickActionRequest Methods

> Returns this QuickAction’s context record ID.

## QuickActionRequest Methods

The following are methods for QuickActionRequest. All are instance methods.

-   **[getContextId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getContextId)**  
    Returns this QuickAction’s context record ID.
-   **[getQuickActionName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getQuickActionName)**  
    Returns this QuickAction’s name.
-   **[getRecord()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getRecord)**  
    Returns the QuickAction’s associated record.
-   **[setContextId(contextId)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setContextId)**  
    Sets this QuickAction’s context ID. Returned by getContextId.
-   **[setQuickActionName(name)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setQuickActionName)**  
    Sets this QuickAction’s name. Returned by getQuickActionName.
-   **[setRecord(record)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setRecord)**  
    Sets a record for this QuickAction. Returned by getRecord.

### getContextId()

Returns this QuickAction’s context record ID.

#### Signature

public Id getContextId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getQuickActionName()

Returns this QuickAction’s name.

#### Signature

public String getQuickActionName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecord()

Returns the QuickAction’s associated record.

#### Signature

public SObject getRecord()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

### setContextId(contextId)

Sets this QuickAction’s context ID. Returned by getContextId.

#### Signature

public Void setContextId(Id contextId)

#### Parameters

contextId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

For Apex saved using Salesforce API version 28.0, sets this QuickAction’s parent ID and is returned by getParentId.

### setQuickActionName(name)

Sets this QuickAction’s name. Returned by getQuickActionName.

#### Signature

public Void setQuickActionName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setRecord(record)

Sets a record for this QuickAction. Returned by getRecord.

#### Signature

public Void setRecord(SObject record)

#### Parameters

record

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Return Value

Type: Void