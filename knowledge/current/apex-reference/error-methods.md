---
title: "Error Methods"
domain: apex-reference
topic: error-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.194Z
keywords: [Error, Methods, Returns, array, field, names., Identifies, which, fields, object, any, affected, error, condition., getFields, Signature, Return, Value, getMessage, getStatusCode]
---

# Error Methods

> Returns an array of one or more field names. Identifies
which fields in the object, if any, affected the error condition.

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