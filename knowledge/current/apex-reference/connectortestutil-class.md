---
title: "ConnectorTestUtil Class"
domain: apex-reference
topic: connectortestutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.614Z
keywords: [ConnectorTestUtil, Class, Creates, instance, connected, app, simulate, provisioning., createConnectedApp, connectedAppName, Signature, Parameters, Return, Value]
---

# ConnectorTestUtil Class

> Creates an instance of a connected app to simulate provisioning.

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