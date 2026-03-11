---
title: "ConnectionParams Properties"
domain: apex-reference
topic: connectionparams-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.563Z
keywords: [ConnectionParams, Properties, name, certificate, establishing, connection, external, system., certificateName, Signature, Property, Value, endpoint, oauthToken, password, principalType, protocol, repository, username]
---

# ConnectionParams Properties

> The name of the certificate for establishing each connection to the
      external system.

## ConnectionParams Properties

The following are properties for ConnectionParams.

-   **[certificateName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_certificateName)**  
    The name of the certificate for establishing each connection to the external system.
-   **[endpoint](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_endpoint)**  
    The URL of the external system.
-   **[oauthToken](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_oauthToken)**  
    The OAuth token that’s issued by the external system.
-   **[password](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_password)**  
    The password for authenticating to the external system.
-   **[principalType](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_principalType)**  
    An instance of DataSource.IdentityType, which determines which set of credentials to use to access the external system.
-   **[protocol](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_protocol)**  
    The type of protocol that’s used to authenticate to the external system.
-   **[repository](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_repository)**  
    Reserved for future use.
-   **[username](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_DataSource_ConnectionParams_username)**  
    The username for authenticating to the external system.

### certificateName

The name of the certificate for establishing each connection to the external system.

#### Signature

public String certificateName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value comes from the external data source definition in Salesforce.

### endpoint

The URL of the external system.

#### Signature

public String endpoint {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value comes from the external data source definition in Salesforce.

### oauthToken

The OAuth token that’s issued by the external system.

#### Signature

public String oauthToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### password

The password for authenticating to the external system.

#### Signature

public String password {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value depends on the Identity Type field of the external data source definition in Salesforce.

-   If Identity Type is set to Named Principal, the credentials come from the external data source definition.
-   If Identity Type is set to Per User:
    -   For queries and searches, the credentials are specific to the current user who invokes the query or search. The credentials come from the user’s authentication settings for the external system.
    -   For administrative connections, such as syncing the external system’s schema, the credentials come from the external data source definition.

### principalType

An instance of [DataSource.IdentityType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_IdentityType.htm "Determines which set of credentials is used to authenticate to the external system."), which determines which set of credentials to use to access the external system.

#### Signature

public DataSource.IdentityType principalType {get; set;}

#### Property Value

Type: [DataSource.IdentityType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_IdentityType.htm "Determines which set of credentials is used to authenticate to the external system.")

### protocol

The type of protocol that’s used to authenticate to the external system.

#### Signature

public DataSource.AuthenticationProtocol protocol {get; set;}

#### Property Value

Type: [DataSource.AuthenticationProtocol](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationProtocol.htm "Determines what type of credentials are used to authenticate to the external system.")

### repository

Reserved for future use.

#### Signature

public String repository {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Reserved for future use.

### username

The username for authenticating to the external system.

#### Signature

public String username {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value depends on the Identity Type field of the external data source definition in Salesforce.

-   If Identity Type is set to Named Principal, the credentials come from the external data source definition.
-   If Identity Type is set to Per User:
    -   For queries and searches, the credentials are specific to the current user who invokes the query or search. The credentials come from the user’s authentication settings for the external system.
    -   For administrative connections, such as syncing the external system’s schema, the credentials come from the external data source definition.