---
title: "ProcessRequest Class"
domain: apex-reference
topic: processrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.815Z
estimatedTokens: 818
namespace: Approval
keywords: [ProcessRequest, parent, ProcessSubmitRequest, ProcessWorkitemRequest, classes, write, generic, Apex, process, objects, either, Usage, getComments, getNextApproverIds, setComments]
---

# ProcessRequest Class

> The ProcessRequest class is the parent class
        for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can
        process objects from either class.

**Namespace:** `Approval`

# ProcessRequest Class

The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.

## Namespace

[Approval](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm "The Approval namespace provides classes and methods for approval processes.")

## Usage

The request must be instantiated via the child classes, ProcessSubmitRequest and ProcessWorkItemRequest.

## ProcessRequest Methods

The following are methods for ProcessRequest. All are instance methods.

-   **[getComments()](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_getComments)**
    Returns the comments that have been added previously to the approval request.
-   **[getNextApproverIds()](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_getNextApproverIds)**
    Returns the list of user IDs of user specified as approvers.
-   **[setComments(comments)](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_setComments)**
    Sets the comments to be added to the approval request.
-   **[setNextApproverIds(nextApproverIds)](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_Approval_ProcessRequest_setNextApproverIds)**
    If the next step in your approval process is another Apex approval process, you specify exactly one user ID as the next approver. If not, you cannot specify a user ID and this method must be null. This method sets the ActorId field of the associated ProcessInstanceWorkItem.

### getComments()

Returns the comments that have been added previously to the approval request.

#### Signature

public String getComments()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNextApproverIds()

Returns the list of user IDs of user specified as approvers.

#### Signature

public ID\[\] getNextApproverIds()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

### setComments(comments)

Sets the comments to be added to the approval request.

#### Signature

public Void setComments(String comments)

#### Parameters

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setNextApproverIds(nextApproverIds)

If the next step in your approval process is another Apex approval process, you specify exactly one user ID as the next approver. If not, you cannot specify a user ID and this method must be null. This method sets the ActorId field of the associated ProcessInstanceWorkItem.

#### Signature

public Void setNextApproverIds(ID\[\] nextApproverIds)

#### Parameters

nextApproverIds

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

Must be a single-entry list.

#### Return Value

Type: Void

## Related Topics

- Approval (atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)
- getComments() (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- getNextApproverIds() (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- setComments(comments) (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- setNextApproverIds(nextApproverIds) (atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
