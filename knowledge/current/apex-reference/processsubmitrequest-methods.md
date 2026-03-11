---
title: "ProcessSubmitRequest Methods"
domain: apex-reference
topic: processsubmitrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.987Z
keywords: [ProcessSubmitRequest, Methods, Returns, record, submitted, approval., example, return, account, contact, custom, object, record., getObjectId, Signature, Return, Value, getProcessDefinitionNameOrId, Usage, getSkipEntryCriteria]
---

# ProcessSubmitRequest Methods

> Returns the ID of the record that has been submitted for
approval. For example, it can return an account, contact, or custom
object record.

## ProcessSubmitRequest Methods

The following are methods for ProcessSubmitRequest. All are instance methods.

-   **[getObjectId()](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_getObjectId)**  
    Returns the ID of the record that has been submitted for approval. For example, it can return an account, contact, or custom object record.
-   **[getProcessDefinitionNameOrId()](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_getProcessDefinitionNameOrId)**  
    Returns the developer name or ID of the process definition.
-   **[getSkipEntryCriteria()](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_getSkipEntryCriteria)**  
    If getProcessDefinitionNameOrId() returns a value other than null, getSkipEntryCriteria() determines whether to evaluate the entry criteria for the process (true) or not (false).
-   **[getSubmitterId()](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_getSubmitterId)**  
    Returns the user ID of the submitter requesting the approval record. The user must be one of the allowed submitters in the process definition setup.
-   **[setObjectId(recordId)](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_setObjectId)**  
    Sets the ID of the record to be submitted for approval. For example, it can specify an account, contact, or custom object record.
-   **[setProcessDefinitionNameOrId(nameOrId)](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_setProcessDefinitionNameOrId)**  
    Sets the developer name or ID of the process definition to be evaluated.
-   **[setSkipEntryCriteria(skipEntryCriteria)](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_setSkipEntryCriteria)**  
    If the process definition name or ID is not null, setSkipEntryCriteria() determines whether to evaluate the entry criteria for the process (true) or not (false).
-   **[setSubmitterId(userID)](atlas.en-us.apexref.meta/apexref/apex_ProcessSubmitRequest.htm#apex_Approval_ProcessSubmitRequest_setSubmitterId)**  
    Sets the user ID of the submitter requesting the approval record. The user must be one of the allowed submitters in the process definition setup. If you don’t set a submitter ID, the process uses the current user as the submitter.

### getObjectId()

Returns the ID of the record that has been submitted for approval. For example, it can return an account, contact, or custom object record.

#### Signature

public String getObjectId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getProcessDefinitionNameOrId()

Returns the developer name or ID of the process definition.

#### Signature

public String getProcessDefinitionNameOrId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The default is null. If the return value is null, when a user submits a record for approval Salesforce evaluates the entry criteria for all processes applicable to the user.

### getSkipEntryCriteria()

If getProcessDefinitionNameOrId() returns a value other than null, getSkipEntryCriteria() determines whether to evaluate the entry criteria for the process (true) or not (false).

#### Signature

public Boolean getSkipEntryCriteria()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getSubmitterId()

Returns the user ID of the submitter requesting the approval record. The user must be one of the allowed submitters in the process definition setup.

#### Signature

public String getSubmitterId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setObjectId(recordId)

Sets the ID of the record to be submitted for approval. For example, it can specify an account, contact, or custom object record.

#### Signature

public Void setObjectId(String recordId)

#### Parameters

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setProcessDefinitionNameOrId(nameOrId)

Sets the developer name or ID of the process definition to be evaluated.

#### Signature

public Void setProcessDefinitionNameOrId(String nameOrId)

#### Parameters

nameOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The process definition developer name or process definition ID. The record is submitted to this specific process. If set to null, submission of a record approval follows standard evaluation; that is, every entry criteria of the process definition in the process order is evaluated and the one that satisfies is picked and submitted.

#### Return Value

Type: Void

#### Usage

If the process definition name or ID is not set via this method, then by default it is null. If it is null, the submission of a record for approval evaluates entry criteria for all processes applicable to the submitter. The order of evaluation is based on the process order of the setup.

### setSkipEntryCriteria(skipEntryCriteria)

If the process definition name or ID is not null, setSkipEntryCriteria() determines whether to evaluate the entry criteria for the process (true) or not (false).

#### Signature

public Void setSkipEntryCriteria(Boolean skipEntryCriteria)

#### Parameters

skipEntryCriteria

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If set to true, request submission skips the evaluation of entry criteria for the process set in [setProcessDefinitionNameOrId(nameOrId)](#apex_Approval_ProcessSubmitRequest_setProcessDefinitionNameOrId "Sets the developer name or ID of the process definition to be evaluated."). If the process definition name or ID is not specified, this parameter is ignored and standard evaluation is followed based on process order. If set to false, or if this method isn’t called, the entry criteria is not skipped.

#### Return Value

Type: Void

### setSubmitterId(userID)

Sets the user ID of the submitter requesting the approval record. The user must be one of the allowed submitters in the process definition setup. If you don’t set a submitter ID, the process uses the current user as the submitter.

#### Signature

public Void setSubmitterId(String userID)

#### Parameters

userID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user ID on behalf of which the record is submitted. If set to null, the current user is the submitter. If the submitter is not set with this method, the default submitter is null (the current user).

#### Return Value

Type: Void