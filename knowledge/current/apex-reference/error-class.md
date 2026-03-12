---
title: "Error Class"
domain: apex-reference
topic: error-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.546Z
estimatedTokens: 665
namespace: Database
keywords: [Error, Represents, information, error, occurred, during, DML, operation, Database, method., Usage, getFields, getMessage, getStatusCode]
---

# Error Class

> Represents information about an error that occurred during a DML operation when using a
    Database method.

**Namespace:** `Database`

# Error Class

Represents information about an error that occurred during a DML operation when using a Database method.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

Error class is part of SaveResult, which is generated when a user attempts to save a Salesforce record.

#### See Also

-   [SaveResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

-   [DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError "Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.")


## Error Methods

The following are methods for Error. All are instance methods.

-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_getFields)**
    Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.
-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_getMessage)**
    Returns the error message text.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_getStatusCode)**
    Returns a code that characterizes the error.

### getFields()

Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.

#### Signature

public String\[\] getFields()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### getMessage()

Returns the error message text.

#### Signature

public String getMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Returns a code that characterizes the error.

#### Signature

public StatusCode getStatusCode()

#### Return Value

Type: StatusCode

#### Usage

The full list of status codes is available in the WSDL file for your organization (see Downloading Salesforce WSDLs and Client Authentication Certificates in the Salesforce online help.)

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- SaveResult Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
- DuplicateError Class (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- getFields() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- getMessage() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- getStatusCode() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
