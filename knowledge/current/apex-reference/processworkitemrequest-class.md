---
title: "ProcessWorkitemRequest Class"
domain: apex-reference
topic: processworkitemrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.839Z
estimatedTokens: 1139
namespace: Approval
keywords: [ProcessWorkitemRequest, processing, approval, submitted, Usage, Inherited, getAction, getWorkitemId, setAction, actionType, setWorkitemId]
---

# ProcessWorkitemRequest Class

> Use the ProcessWorkitemRequest class for
    processing an approval request after it is submitted.

**Namespace:** `Approval`

# ProcessWorkitemRequest Class

Use the ProcessWorkitemRequest class for processing an approval request after it is submitted.

## Namespace

[Approval](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm "The Approval namespace provides classes and methods for approval processes.")

## Usage

You must specify the Approval namespace when creating an instance of this class. The constructor for this class takes no arguments. For example:

```

```

## Inherited Methods

In addition to the methods listed, the ProcessWorkitemRequest class has access to all the methods in its parent class, [ProcessRequest Class](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest "The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class."):

-   [getComments()](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_getComments "Returns the comments that have been added previously to the approval request.")
-   [getNextApproverIds()](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_getNextApproverIds "Returns the list of user IDs of user specified as approvers.")
-   [setComments(comments)](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_setComments "Sets the comments to be added to the approval request.")
-   [setNextApproverIds(nextApproverIds)](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_setNextApproverIds "If the next step in your approval process is another Apex approval process, you specify exactly one user ID as the next approver. If not, you cannot specify a user ID and this method must be null. This method sets the ActorId field of the associated ProcessInstanceWorkItem.")

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

## Code Examples

```
Approval.ProcessWorkitemRequest pwr = new Approval.ProcessWorkitemRequest();
```

## Related Topics

- Approval (atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)
- ProcessRequest Class (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- getComments() (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- getNextApproverIds() (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- setComments(comments) (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- setNextApproverIds(nextApproverIds) (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- getAction() (atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
- getWorkitemId() (atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
- setAction(actionType) (atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
- setWorkitemId(id) (atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
