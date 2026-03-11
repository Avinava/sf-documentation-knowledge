---
title: "refresh(userId, ecAppId, context)"
domain: apex-reference
topic: refreshuserid-ecappid-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.262Z
keywords: [refresh, userId, ecAppId, context, Salesforce, calls, method, during, token, exchange., Signature, Parameters, Return, Value]
---

# refresh(userId, ecAppId, context)

> Salesforce calls this method during a refresh token exchange.

### refresh(userId, ecAppId, context)

Salesforce calls this method during a refresh token exchange.

#### Signature

public void refresh(Id userId, Id ecAppId, Auth.InvocationContext context)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the user requesting the refresh token.

ecAppId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the external client app.

context

Type: Auth.InvocationContext

The context in which the external client app is invoked.

#### Return Value

Type: void