---
title: "DataSourceUtil Class"
domain: apex-reference
topic: datasourceutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.489Z
estimatedTokens: 486
namespace: DataSource
keywords: [DataSourceUtil, Parent, DataSource.Provider, DataSource.Connection, DataSource.Table, DataSource.Column, classes, logWarning, message, throwException]
---

# DataSourceUtil Class

> Parent class for the DataSource.Provider, DataSource.Connection, DataSource.Table, and
        DataSource.Column classes.

**Namespace:** `DataSource`

# DataSourceUtil Class

Parent class for the DataSource.Provider, DataSource.Connection, DataSource.Table, and DataSource.Column classes.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[DataSourceUtil Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_methods)**


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

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- DataSourceUtil Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm)
- logWarning(message) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm)
- throwException(message) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
