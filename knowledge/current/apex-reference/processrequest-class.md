---
title: "ProcessRequest Class"
domain: apex-reference
topic: processrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.970Z
keywords: [ProcessRequest, Class, next, step, approval, process, another, Apex, specify, exactly, user, approver., cannot, method, must, null., sets, ActorId, field, associated]
---

# ProcessRequest Class

> If the next step in your approval process is another Apex approval process, you specify
    exactly one user ID as the next approver. If not, you cannot specify a user ID and this method
    must be null. This method sets the ActorId field of the
    associated ProcessInstanceWorkItem.

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