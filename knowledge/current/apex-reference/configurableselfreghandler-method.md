---
title: "ConfigurableSelfRegHandler Method"
domain: apex-reference
topic: configurableselfreghandler-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.595Z
keywords: [ConfigurableSelfRegHandler, Method, Create, community, member, information, visitor, provided, community’s, self-registration, page., createUser, accountId, profileId, registrationAttributes, password, Signature, Parameters, Return, Value]
---

# ConfigurableSelfRegHandler Method

> Create a community member from the information that the visitor
      provided on your community’s self-registration page.

## ConfigurableSelfRegHandler Method

The following is the method for ConfigurableSelfRegHandler.

-   **[createUser(accountId, profileId, registrationAttributes, password)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm#apex_Auth_ConfigurableSelfRegHandler_createUser)**  
    Create a community member from the information that the visitor provided on your community’s self-registration page.

### createUser(accountId, profileId, registrationAttributes, password)

Create a community member from the information that the visitor provided on your community’s self-registration page.

#### Signature

public Id createUser(Id accountId, Id profileId, Map<Schema.SObjectField,String\> registrationAttributes, String password)

#### Parameters

accountId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Default account with which the new user is associated. This value comes from the Account field setting on Login and Registration (L&R) page under Registration Page Configuration.

profileID

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Profile to assign the new user. This value comes from the Profile field setting on the L&R page under Registration Page Configuration.

registrationAttributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<Schema.sObjectField,[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of attributes that the registering user entered on the self-registration page. The fields that appear on the self-registration page come from the User Fields selected on the L&R page when the registration type is Configurable Self-Reg Page.

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The password entered by the user if “Include Password” is selected on the L&R page. (If a password isn’t entered, the handler must generate one because a password is required to create a user.)

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Returns an identifier for the created User object. Auth.ConfigurableSelfRegHandler inserts a user and then returns the ID of that user.