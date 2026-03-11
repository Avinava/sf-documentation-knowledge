---
title: "confirmUser(userId, tpalId, portalId,
    userdata)"
domain: apex-reference
topic: confirmuseruserid-tpalid-portalid-userdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.601Z
keywords: [confirmUser, userId, tpalId, portalId, userdata, Returns, user, logged, based, their, mapping, third-party, identifier., method, called, before, calling, updateUser, method., It's]
---

# confirmUser(userId, tpalId, portalId,
    userdata)

> Returns the ID of the user to be logged in based on their mapping to a
      third-party identifier. This method is called before calling the updateUser() method. It's called only if the incoming user has previously
      logged in and has a third-party account link to a Salesforce user.

### confirmUser(userId, tpalId, portalId, userdata)

Returns the ID of the user to be logged in based on their mapping to a third-party identifier. This method is called before calling the [updateUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_updateUser "HTML (New Window)") method. It's called only if the incoming user has previously logged in and has a third-party account link to a Salesforce user.

#### Signature

public Id confirmUser(Id userId, Id tpalId, Id portalId, Auth.UserData userdata)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the user who is mapped to the third-party identifier via a third-party account link.

tpalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The third-party account link corresponding to the third-party identifier.

portalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The portal ID the user is logging in to. If there's no portal configured, this value can be null.

userData

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData "HTML (New Window)")

Contains user information from the third-party identity provider.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The Id of the user to be logged in. If null, login fails.