---
title: "ProcessResult Methods"
domain: apex-reference
topic: processresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.977Z
keywords: [ProcessResult, Methods, record, being, processed., getEntityId, Signature, Return, Value, getErrors, getInstanceId, getInstanceStatus, getNewWorkitemIds, isSuccess]
---

# ProcessResult Methods

> The ID of the record being processed.

## ProcessResult Methods

The following are methods for ProcessResult. All are instance methods.

-   **[getEntityId()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_getEntityId)**  
    The ID of the record being processed.
-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects including the error code and description.
-   **[getInstanceId()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_getInstanceId)**  
    The ID of the approval process that has been submitted for approval.
-   **[getInstanceStatus()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_getInstanceStatus)**  
    The status of the current approval process. Valid values are: Approved, Rejected, Removed or Pending.
-   **[getNewWorkitemIds()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_getNewWorkitemIds)**  
    The IDs of the new items submitted to the approval process. There can be 0 or 1 approval processes.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_Approval_ProcessResult_isSuccess)**  
    A Boolean value that is set to true if the approval process completed successfully; otherwise, it is set to false.

### getEntityId()

The ID of the record being processed.

#### Signature

public String getEntityId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getErrors()

If an error occurred, returns an array of one or more database error objects including the error code and description.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getInstanceId()

The ID of the approval process that has been submitted for approval.

#### Signature

public String getInstanceId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getInstanceStatus()

The status of the current approval process. Valid values are: Approved, Rejected, Removed or Pending.

#### Signature

public String getInstanceStatus()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNewWorkitemIds()

The IDs of the new items submitted to the approval process. There can be 0 or 1 approval processes.

#### Signature

public ID\[\] getNewWorkitemIds()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

### isSuccess()

A Boolean value that is set to true if the approval process completed successfully; otherwise, it is set to false.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")