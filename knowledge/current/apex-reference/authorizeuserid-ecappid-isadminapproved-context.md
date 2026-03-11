---
title: "authorize(userId, ecAppId, isAdminApproved, context)"
domain: apex-reference
topic: authorizeuserid-ecappid-isadminapproved-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.262Z
keywords: [authorize, userId, ecAppId, isAdminApproved, context, Authorizes, specified, user, access, external, client, app., app, set, users, self-authorize, method, isn’t, invoked., Signature]
---

# authorize(userId, ecAppId, isAdminApproved, context)

> Authorizes the specified user to access the external client app. If the external client
    app is set for users to self-authorize, this method isn’t invoked.

### authorize(userId, ecAppId, isAdminApproved, context)

Authorizes the specified user to access the external client app. If the external client app is set for users to self-authorize, this method isn’t invoked.

#### Signature

public Boolean authorize(Id userId, Id ecAppId, Boolean isAdminApproved, Auth.InvocationContext context)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the user attempting to use the external client app.

ecAppId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the external client app.

isAdminApproved

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The approval state of the specified user when the external client app requires approval.

context

Type: [Auth.InvocationContext](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_InvocationContext.htm "The context in which the connected app is invoked, such as the protocol flow used and the token type issued, if any. Developers can use the context information to write code that is unique to the type of invocation.")

The context in which the external client app is invoked.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A returned value of true indicates that the user is approved.