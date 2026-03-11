---
title: "SamlJitHandler Methods"
domain: apex-reference
topic: samljithandler-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.647Z
keywords: [SamlJitHandler, Methods, Returns, User, object, specified, Federation, ID., corresponds, user, information., new, hasn’t, inserted, database, existing, record, database., createUser, samlSsoProviderId]
---

# SamlJitHandler Methods

> Returns a User object using the specified Federation ID. The User
      object corresponds to the user information. This object can be a new user that hasn’t been
      inserted in the database or an existing user record in the database.

## SamlJitHandler Methods

The following are methods for SamlJitHandler.

-   **[createUser(samlSsoProviderId, communityId, portalId, federationId, attributes, assertion)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_SamlJitHandler.htm#apex_Auth_SamlJitHandler_createUser)**  
    Returns a User object using the specified Federation ID. The User object corresponds to the user information. This object can be a new user that hasn’t been inserted in the database or an existing user record in the database.
-   **[updateUser(userId, samlSsoProviderId, communityId, portalId, federationId, attributes, assertion)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_SamlJitHandler.htm#apex_Auth_SamlJitHandler_updateUser)**  
    Updates the specified user’s information. This method is called if the user has logged in before with SAML single sign-on and then logs in again, or if your application is using the Existing User Linking URL.

### createUser(samlSsoProviderId, communityId, portalId, federationId, attributes, assertion)

Returns a User object using the specified Federation ID. The User object corresponds to the user information. This object can be a new user that hasn’t been inserted in the database or an existing user record in the database.

#### Signature

public User createUser(Id samlSsoProviderId, Id communityId, Id portalId, String federationId, Map<String,String\> attributes, String assertion)

#### Parameters

samlSsoProviderId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the SamlSsoConfig standard object.

communityId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the Experience Cloud site. This parameter can be null if you’re not creating an Experience Cloud user.

portalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the portal. This parameter can be null if you’re not creating a portal user.

federationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID Salesforce expects to be used for this user.

attributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

All attributes in the SAML assertion that were added to the default assertion; for example, custom attributes. Attributes are case-sensitive.

If the assertion is encrypted, the attribute map contains a decrypted assertion stored as a value with the key Sfdc.SamlAssertion.

assertion

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The default SAML assertion, base-64 encoded.

If the assertion is encrypted, this parameter is also encrypted. To access the decrypted assertion, see the Sfdc.SamlAssertion key in the attribute map.

#### Return Value

Type: User

A User sObject.

#### Usage

The communityId and portalId parameter values can be null or the associated keys can be empty if there’s no Experience Cloud site or portal configured with this organization.

### updateUser(userId, samlSsoProviderId, communityId, portalId, federationId, attributes, assertion)

Updates the specified user’s information. This method is called if the user has logged in before with SAML single sign-on and then logs in again, or if your application is using the Existing User Linking URL.

#### Signature

public void updateUser(Id userId, Id samlSsoProviderId, Id communityId, Id portalId, String federationId, Map<String,String\> attributes, String assertion)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the Salesforce user.

samlSsoProviderId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the SamlSsoConfig object.

communityId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the Experience Cloud site. This type can be null if you’re not updating an Experience Cloud user.

portalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the portal. This type can be null if you’re not updating a portal user.

federationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID Salesforce expects to be used for this user.

attributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

All attributes in the SAML assertion that were added to the default assertion; for example, custom attributes. Attributes are case-sensitive.

If the assertion is encrypted, the attribute map also contains a decrypted assertion stored as a value with the key Sfdc.SamlAssertion.

assertion

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The default SAML assertion, base-64 encoded.

If the assertion is encrypted, this parameter is also encrypted. To access the decrypted assertion, see the Sfdc.SamlAssertion key in the attribute map.

#### Return Value

Type: void