---
title: "ConnectorTestUtil Method"
domain: apex-reference
topic: connectortestutil-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.614Z
keywords: [ConnectorTestUtil, Method, Creates, instance, connected, app, simulate, provisioning., createConnectedApp, connectedAppName, Signature, Parameters, Return, Value]
---

# ConnectorTestUtil Method

> Creates an instance of a connected app to simulate provisioning.

## ConnectorTestUtil Method

The ConnectorTestUtil class has 1 method.

-   **[createConnectedApp(connectedAppName)](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_ConnectorTestUtil.htm#apex_UserProvisioning_ConnectorTestUtil_createConnectedApp)**  
    Creates an instance of a connected app to simulate provisioning.

### createConnectedApp(connectedAppName)

Creates an instance of a connected app to simulate provisioning.

#### Signature

public static ConnectedApplication createConnectedApp(String connectedAppName)

#### Parameters

connectedAppName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the connected app to test for provisioning.

#### Return Value

Type: ConnectedApplication

The instance of the connected app to test for provisioning.