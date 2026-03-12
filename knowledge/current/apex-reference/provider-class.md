---
title: "Provider Class"
domain: apex-reference
topic: provider-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.523Z
estimatedTokens: 1423
namespace: DataSource
keywords: [Provider, authentication, access, external, system, Usage, getAuthenticationCapabilities, getCapabilities, getConnection, connectionParams]
---

# Provider Class

> Returns the types of authentication that can be used to access the
      external system.

**Namespace:** `DataSource`

# Provider Class

Extend this base class to create a custom adapter for Salesforce Connect. The class informs Salesforce of the functional and authentication capabilities that are supported by or required to connect to the external system. This class extends the DataSourceUtil class and inherits its methods.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

Create an Apex class that extends DataSource.Provider to specify the following.

-   The types of authentication that can be used to access the external system
-   The features that are supported for the connection to the external system
-   The Apex class that extends DataSource.Connection to sync the external system’s schema and to handle the queries and searches of the external data

The values that are returned by the DataSource.Provider class determine which settings are available in the external data source definition in Salesforce. To access the external data source definition from Setup, enter External Data Sources in the Quick Find box, then select **External Data Sources**.

-   **[Provider Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm#apex_DataSource_Provider_methods)**


## Provider Methods

The following are methods for Provider.

-   **[getAuthenticationCapabilities()](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm#apex_DataSource_Provider_getAuthenticationCapabilities)**
    Returns the types of authentication that can be used to access the external system.
-   **[getCapabilities()](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm#apex_DataSource_Provider_getCapabilities)**
    Returns the functional operations and endpoint settings that the external system supports.
-   **[getConnection(connectionParams)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm#apex_DataSource_Provider_getConnection)**
    Returns a connection that points to an instance of the external data source.

### getAuthenticationCapabilities()

Returns the types of authentication that can be used to access the external system.

When you call this method, be sure the list of the external system’s authentication capabilities always contains the same values. The returned authentication types should never change based on runtime conditions, user context, dynamic queries, or any other conditions. Returning different authentication types for an external system can lead to errors that are difficult to troubleshoot.

For example, if your external system supports OAuth and Anonymous authentication, always return these types every time this method is called. Don’t query the database, make callouts, or use conditional logic that varies the results of this method.

#### Signature

public List<DataSource.AuthenticationCapability> getAuthenticationCapabilities()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[DataSource.AuthenticationCapability](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationCapability.htm "Specifies the types of authentication that can be used to access the external system.")\>

### getCapabilities()

Returns the functional operations and endpoint settings that the external system supports.

When you call this method, be sure the list of the external system’s capabilities always contains the same values. The returned capabilities should never change based on runtime conditions, user context, dynamic queries, or any other conditions. Returning different capabilities for an external system can lead to errors that are difficult to troubleshoot.

For example, if your external system supports the ROW\_QUERY and SEARCH operations, always return these capabilities every time this method is called. Don’t query the database, make callouts, or use conditional logic that varies the results of this method.

#### Signature

public List<DataSource.Capability> getCapabilities()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[DataSource.Capability](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_Capability.htm "Declares which functional operations the external system supports. Also specifies required endpoint settings for the external data source definition.")\>

### getConnection(connectionParams)

Returns a connection that points to an instance of the external data source.

#### Signature

public DataSource.Connection getConnection(DataSource.ConnectionParams connectionParams)

#### Parameters

connectionParams

Type: [DataSource.ConnectionParams](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_class_DataSource_ConnectionParams "Contains the credentials for authenticating to the external system.")

Credentials for authenticating to the external system.

#### Return Value

Type: [DataSource.Connection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection "Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- Provider Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm)
- getAuthenticationCapabilities() (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm)
- getCapabilities() (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm)
- getConnection(connectionParams) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- DataSource.AuthenticationCapability (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationCapability.htm)
- DataSource.Capability (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_Capability.htm)
- DataSource.ConnectionParams (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm)
- DataSource.Connection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
