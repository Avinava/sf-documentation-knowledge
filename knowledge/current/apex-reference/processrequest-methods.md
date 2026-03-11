---
title: "ProcessRequest Methods"
domain: apex-reference
topic: processrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.969Z
keywords: [ProcessRequest, Methods, Returns, comments, added, previously, approval, request., getComments, Signature, Return, Value, getNextApproverIds, setComments, Parameters, setNextApproverIds, nextApproverIds]
---

# ProcessRequest Methods

> Returns the comments that have been added previously to
the approval request.

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