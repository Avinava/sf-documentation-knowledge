---
title: "ProcessWorkitemRequest Methods"
domain: apex-reference
topic: processworkitemrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.992Z
keywords: [ProcessWorkitemRequest, Methods, Returns, type, action, already, associated, approval, request., Valid, values, Approve, Reject, Removed., getAction, Signature, Return, Value, getWorkitemId, setAction]
---

# ProcessWorkitemRequest Methods

> Returns the type of action already associated with the
approval request. Valid values are: Approve, Reject, or Removed.

## ProcessWorkitemRequest Methods

The following are methods for ProcessWorkitemRequest. All are instance methods.

-   **[getAction()](atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm#apex_Approval_ProcessWorkitemRequest_getAction)**  
    Returns the type of action already associated with the approval request. Valid values are: Approve, Reject, or Removed.
-   **[getWorkitemId()](atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm#apex_Approval_ProcessWorkitemRequest_getWorkitemId)**  
    Returns the ID of the approval request that is in the process of being approved, rejected, or removed.
-   **[setAction(actionType)](atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm#apex_Approval_ProcessWorkitemRequest_setAction)**  
    Sets the type of action to take for processing an approval request.
-   **[setWorkitemId(id)](atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm#apex_Approval_ProcessWorkitemRequest_setWorkitemId)**  
    Sets the ID of the approval request that is being approved, rejected, or removed.

### getAction()

Returns the type of action already associated with the approval request. Valid values are: Approve, Reject, or Removed.

#### Signature

public String getAction()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getWorkitemId()

Returns the ID of the approval request that is in the process of being approved, rejected, or removed.

#### Signature

public String getWorkitemId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setAction(actionType)

Sets the type of action to take for processing an approval request.

#### Signature

public Void setAction(String actionType)

#### Parameters

actionType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Valid values are: Approve, Reject, or Removed. Only system administrators can specify Removed.

#### Return Value

Type: Void

### setWorkitemId(id)

Sets the ID of the approval request that is being approved, rejected, or removed.

#### Signature

public Void setWorkitemId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void