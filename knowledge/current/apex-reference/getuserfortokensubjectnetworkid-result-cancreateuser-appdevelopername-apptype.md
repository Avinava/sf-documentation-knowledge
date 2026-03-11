---
title: "getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType)"
domain: apex-reference
topic: getuserfortokensubjectnetworkid-result-cancreateuser-appdevelopername-apptype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.342Z
keywords: [getUserForTokenSubject, networkId, result, canCreateUser, appDeveloperName, appType, Finds, subject, defined, external, identity, provider’s, token, mapped, Salesforce, subject., Signature, Parameters, Return, Value]
---

# getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType)

> Finds the subject defined in the external identity provider’s token so that it can be
    mapped to a Salesforce subject.

### getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType)

Finds the subject defined in the external identity provider’s token so that it can be mapped to a Salesforce subject.

#### Signature

public User getUserForTokenSubject(Id networkId, Auth.TokenValidationResult result, Boolean canCreateUser, String appDeveloperName, Auth.IntegratingAppType appType)

#### Parameters

networkId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The identifier for the Salesforce user, if one exists.

result

Type: [Auth.TokenValidationResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)

The result of the token validation performed by the validateIncomingToken method in the [Auth.Oauth2TokenExchangeHandler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm) class.

canCreateUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the handler can set up a User object if no user exists. Salesforce automatically inserts the user into this object.

appDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The developer name of the Salesforce connected app or external client app that’s being used to integrate your app with Salesforce.

appType

Type: [Auth.IntegratingAppType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_IntegratingAppType.htm)

Specifies whether your app is integrated with Salesforce as a connected app or as an external client app.

#### Return Value

Type: [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm)

Returns a User object with the user information obtained from the token, from Salesforce, and from callouts to the identity provider, if applicable. The User object can be an existing user record or a new user that hasn’t been inserted in the database. If it’s a new user, Salesforce automatically inserts the user on behalf of the token exchange handler.