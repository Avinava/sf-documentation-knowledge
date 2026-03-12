---
title: "ExternalClientAppOauthHandler Class"
domain: apex-reference
topic: externalclientappoauthhandler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.182Z
estimatedTokens: 1849
namespace: Auth
keywords: [ExternalClientAppOauthHandler, extending, behavior, external, client, app, customize, how, invoked, depending, protocol, gives, control, over, interaction]
---

# ExternalClientAppOauthHandler Class

> Contains methods for extending the behavior of an external client app. For example,
    customize how an external client app is invoked depending on the protocol used. This class gives
    you more control over the interaction between Salesforce and your external client
    app.

**Namespace:** `Auth`

# ExternalClientAppOauthHandler Class

Contains methods for extending the behavior of an external client app. For example, customize how an external client app is invoked depending on the protocol used. This class gives you more control over the interaction between Salesforce and your external client app.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

When you create an external client app, you specify general information about the app and settings for OAuth. To customize how the app is invoked, create a external client app handler with the ExternalClientAppOauthHandler Apex class. For example, use this class to support new authentication protocols or respond to user attributes in a way that benefits the business process.

When you create an external client app handler, you also configure the ExternalClientAppOauthHandler class to run as an execution user. The execution user authorizes access for the external client app. For example, when you use the authorize method, the execution user authorizes the external client app to access data.

If you don't specify an execution user, the plug-in runs as an Automated Process User, which is a system user that executes tasks behind the scenes. Most ExternalClientAppOauthHandler methods require that you specify an execution user, with the exception of the customAttributes method.

-   **[ExternalClientAppOauthHandler Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm#apex_Auth_ExternalClientAppOauthHandler_methods)**


## ExternalClientAppOauthHandler Methods

The following are methods for ExternalClientAppOauthHandler.

-   **[authorize(userId, ecAppId, isAdminApproved, context)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm#apex_Auth_ExternalClientAppOauthHandler_authorize)**
    Authorizes the specified user to access the external client app. If the external client app is set for users to self-authorize, this method isn’t invoked.
-   **[customAttributes(userId, ecAppId, formulaDefinedAttributes, context)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm#apex_Auth_ExternalClientAppOauthHandler_customAttributes)**
    Sets new attributes for the specified user. When the external client app gets the user’s attributes from the UserInfo endpoint, use this method to update the attribute values.
-   **[refresh(userId, ecAppId, context)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm#apex_Auth_ExternalClientAppOauthHandler_refresh)**
    Salesforce calls this method during a refresh token exchange.

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

### customAttributes(userId, ecAppId, formulaDefinedAttributes, context)

Sets new attributes for the specified user. When the external client app gets the user’s attributes from the UserInfo endpoint, use this method to update the attribute values.

#### Signature

public Map<String,String> customAttributes(Id userId, Id ecAppId, Map<String,String> formulaDefinedAttributes, Auth.InvocationContext context)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID of the user attempting to use the external client app.

ecAppId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character ID for the external client app.

formulaDefinedAttributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of the current set of attributes from the UserInfo endpoint (OAuth) or from a SAML assertion. For more information, see The UserInfo Endpoint in the online help.

context

Type: Auth.InvocationContext

The context in which the external client app is invoked.

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of the updated set of attributes.

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

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- ExternalClientAppOauthHandler Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm)
- authorize(userId, ecAppId, isAdminApproved, context) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm)
- customAttributes(userId, ecAppId, formulaDefinedAttributes, context) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm)
- refresh(userId, ecAppId, context) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Auth.InvocationContext (atlas.en-us.apexref.meta/apexref/apex_enum_Auth_InvocationContext.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
