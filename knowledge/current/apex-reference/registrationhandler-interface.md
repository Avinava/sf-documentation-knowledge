---
title: "RegistrationHandler Interface"
domain: apex-reference
topic: registrationhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.083Z
keywords: [RegistrationHandler, Interface, Updates, specified, user’s, information., method, called, user, logged, before, authentication, provider, then, logs, again., updateUser, userId, portalId, userData]
---

# RegistrationHandler Interface

> Updates the specified user’s information. This method is called if the user has
  logged in before with the authentication provider and then logs in again.

### updateUser(userId, portalId, userData)

Updates the specified user’s information. This method is called if the user has logged in before with the authentication provider and then logs in again.

#### Signature

public Void updateUser(ID userId, ID portalId, Auth.UserData userData)

#### Parameters

userId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

portalId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

userData

Type: [Auth.UserData](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData "Stores user information for authentication provider registration handlers, including handlers that implement the Auth.RegistrationHandler interface and handlers built using Flow Builder.")

#### Return Value

Type: Void

#### Usage

The portalID value can be null or an empty key if there's no portal configured with this provider.