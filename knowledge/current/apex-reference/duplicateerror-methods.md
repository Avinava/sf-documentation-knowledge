---
title: "DuplicateError Methods"
domain: apex-reference
topic: duplicateerror-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.692Z
keywords: [DuplicateError, Methods, Returns, details, duplicate, rule, records, found, rule., getDuplicateResult, Signature, Return, Value, Example, getFields, getMessage, getStatusCode]
---

# DuplicateError Methods

> Returns the details of a duplicate rule and duplicate records found by
      the duplicate rule.

## DuplicateError Methods

The following are methods for DuplicateError.

-   **[getDuplicateResult()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getDuplicateResult)**  
    Returns the details of a duplicate rule and duplicate records found by the duplicate rule.
-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getFields)**  
    Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.
-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getMessage)**  
    Returns the error message text.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getStatusCode)**  
    Returns a code that characterizes the error.

### getDuplicateResult()

Returns the details of a duplicate rule and duplicate records found by the duplicate rule.

#### Signature

public Datacloud.DuplicateResult getDuplicateResult()

#### Return Value

Type: [Datacloud.DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.")

#### Example

This example shows the code used to get the possible duplicates and related match information after saving a new contact. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```

### getFields()

Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.

#### Signature

public List<String\> getFields()

#### Return Value

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

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

Type: [StatusCode](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_enums.htm)