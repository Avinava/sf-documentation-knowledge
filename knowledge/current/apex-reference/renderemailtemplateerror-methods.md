---
title: "RenderEmailTemplateError Methods"
domain: apex-reference
topic: renderemailtemplateerror-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.814Z
keywords: [RenderEmailTemplateError, Methods, Returns, name, merge, field, error., getFieldName, Signature, Return, Value, getMessage, getOffset, getStatusCode]
---

# RenderEmailTemplateError Methods

> Returns the name of the merge field in the error.

## RenderEmailTemplateError Methods

The following are methods for RenderEmailTemplateError.

-   **[getFieldName()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getFieldName)**  
    Returns the name of the merge field in the error.
-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getMessage)**  
    Returns a message describing the error.
-   **[getOffset()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getOffset)**  
    Returns the offset within the supplied body text where the error was discovered. If the offset cannot be determined, -1 is returned.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getStatusCode)**  
    Returns a Salesforce API status code.

### getFieldName()

Returns the name of the merge field in the error.

#### Signature

public String getFieldName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMessage()

Returns a message describing the error.

#### Signature

public String getMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOffset()

Returns the offset within the supplied body text where the error was discovered. If the offset cannot be determined, -1 is returned.

#### Signature

public Integer getOffset()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getStatusCode()

Returns a Salesforce API status code.

#### Signature

public System.StatusCode getStatusCode()

#### Return Value

Type: System.StatusCode