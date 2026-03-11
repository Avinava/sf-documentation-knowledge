---
title: "LeadConvertResult Methods"
domain: apex-reference
topic: leadconvertresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.420Z
keywords: [LeadConvertResult, Methods, new, account, specified, convertLead, invoked., getAccountId, Signature, Return, Value, getContactId, getErrors, getLeadId, getOpportunityId, getRelatedPersonAccountId, isSuccess]
---

# LeadConvertResult Methods

> The ID of the new account (if a new account was specified)
or the ID of the account specified when convertLead was invoked.

## LeadConvertResult Methods

The following are methods for LeadConvertResult. All are instance methods.

-   **[getAccountId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getAccountId)**  
    The ID of the new account (if a new account was specified) or the ID of the account specified when convertLead was invoked.
-   **[getContactId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getContactId)**  
    The ID of the new contact (if a new contact was specified) or the ID of the contact specified when convertLead was invoked.
-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getErrors)**  
    If an error occurred, an array of one or more database error objects providing the error code and description.
-   **[getLeadId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getLeadId)**  
    The ID of the converted lead.
-   **[getOpportunityId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getOpportunityId)**  
    The ID of the new opportunity, if one was created when convertLead was invoked.
-   **[getRelatedPersonAccountId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#unique_577896156)**  
    The ID of the new or existing person account specified when convertLead was invoked.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_isSuccess)**  
    A Boolean value that is set to true if the DML operation was successful for this object, false otherwise

### getAccountId()

The ID of the new account (if a new account was specified) or the ID of the account specified when convertLead was invoked.

#### Signature

public ID getAccountId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getContactId()

The ID of the new contact (if a new contact was specified) or the ID of the contact specified when convertLead was invoked.

#### Signature

public ID getContactId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getErrors()

If an error occurred, an array of one or more database error objects providing the error code and description.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getLeadId()

The ID of the converted lead.

#### Signature

public ID getLeadId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getOpportunityId()

The ID of the new opportunity, if one was created when convertLead was invoked.

#### Signature

public ID getOpportunityId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getRelatedPersonAccountId()

The ID of the new or existing person account specified when convertLead was invoked.

#### Signature

public ID getRelatedPersonAccountId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isSuccess()

A Boolean value that is set to true if the DML operation was successful for this object, false otherwise

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")