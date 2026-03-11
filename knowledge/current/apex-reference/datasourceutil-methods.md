---
title: "DataSourceUtil Methods"
domain: apex-reference
topic: datasourceutil-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.567Z
keywords: [DataSourceUtil, Methods, Logs, error, message, debug, log., logWarning, Signature, Parameters, Return, Value, throwException]
---

# DataSourceUtil Methods

> Logs the error message in the debug log.

## DataSourceUtil Methods

The following are methods for DataSourceUtil.

-   **[logWarning(message)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_logWarning)**  
    Logs the error message in the debug log.
-   **[throwException(message)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_throwException)**  
    Throws a DataSourceException and displays the provided message to the user.

### logWarning(message)

Logs the error message in the debug log.

#### Signature

public void logWarning(String message)

#### Parameters

message

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message.

#### Return Value

Type: void

### throwException(message)

Throws a DataSourceException and displays the provided message to the user.

#### Signature

public void throwException(String message)

#### Parameters

message

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Error message to display to the user.

#### Return Value

Type: void