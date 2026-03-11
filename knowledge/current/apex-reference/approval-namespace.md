---
title: "Approval Namespace"
domain: apex-reference
topic: approval-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.051Z
keywords: [Approval, Namespace]
---

# Approval Namespace

# Approval Namespace

The Approval namespace provides classes and methods for approval processes.

The following are the classes in the Approval namespace.

-   **[LockResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult)**  
    The result of a record lock returned by a System.Approval.lock() method.
-   **[ProcessRequest Class](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest)**  
    The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.
-   **[ProcessResult Class](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_ProcessResult)**  
    After you submit a record for approval, use the ProcessResult class to process the results of an approval process.
-   **[ProcessSubmitRequest Class](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_ProcessSubmitRequest)**  
    Use the ProcessSubmitRequest class to submit a record for approval.
-   **[ProcessWorkitemRequest Class](atlas.en-us.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm#apex_ProcessWorkitemRequest)**  
    Use the ProcessWorkitemRequest class for processing an approval request after it is submitted.
-   **[UnlockResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult)**  
    The result of a record unlock, returned by a System.Approval.unlock() method.