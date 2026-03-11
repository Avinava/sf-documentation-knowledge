---
title: "RegistrationHandler Methods"
domain: apex-reference
topic: registrationhandler-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.083Z
keywords: [RegistrationHandler, Methods, Returns, User, object, specified, portal, user, information, third, party, such, username, email, address., corresponds, party’s, information., new, hasn’t]
---

# RegistrationHandler Methods

> Returns a User object using the specified portal ID and user information from the third
        party, such as the username and email address. The User object corresponds to the third
        party’s user information. It can be a new user that hasn’t been inserted in
        your org’s database, or it can represent an existing user record in the database. If it’s a
        new User object, Salesforce inserts a user record for you.

## RegistrationHandler Methods

The following are methods for RegistrationHandler.

-   **[createUser(portalId, userData)](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_createUser)**  
    Returns a User object using the specified portal ID and user information from the third party, such as the username and email address. The User object corresponds to the third party’s user information. It can be a new user that hasn’t been inserted in your org’s database, or it can represent an existing user record in the database. If it’s a new User object, Salesforce inserts a user record for you.
-   **[updateUser(userId, portalId, userData)](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_updateUser)**  
    Updates the specified user’s information. This method is called if the user has logged in before with the authentication provider and then logs in again.

### createUser(portalId, userData)

Returns a User object using the specified portal ID and user information from the third party, such as the username and email address. The User object corresponds to the third party’s user information. It can be a new user that hasn’t been inserted in your org’s database, or it can represent an existing user record in the database. If it’s a new User object, Salesforce inserts a user record for you.

#### Signature

public User createUser(ID portalId, Auth.UserData userData)

#### Parameters

portalId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

userData

Type: [Auth.UserData](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData "Stores user information for authentication provider registration handlers, including handlers that implement the Auth.RegistrationHandler interface and handlers built using Flow Builder.")

#### Return Value

Type: User

#### Usage

The portalID value can be null or an empty key if there’s no portal configured with this provider.

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