---
title: "ConnectedAppPlugin Class"
domain: apex-reference
topic: connectedappplugin-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.257Z
keywords: [ConnectedAppPlugin, Class, Salesforce, calls, method, during, refresh, token, exchange., userId, connectedAppId, context, Signature, Parameters, Return, Value]
---

# ConnectedAppPlugin Class

> Salesforce calls this method
      during a refresh token exchange.

### refresh(userId, connectedAppId, context)

Salesforce calls this method during a refresh token exchange.

#### Signature

public void refresh(Id userId, Id connectedAppId, Auth.InvocationContext context)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the user requesting the refresh token.

connectedAppId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the connected app.

context

Type: [InvocationContext](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_InvocationContext.htm "The context in which the connected app is invoked, such as the protocol flow used and the token type issued, if any. Developers can use the context information to write code that is unique to the type of invocation.")

The context in which the connected app is invoked.

#### Return Value

Type: void