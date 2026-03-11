---
title: "customAttributes(userId, ecAppId, formulaDefinedAttributes, context)"
domain: apex-reference
topic: customattributesuserid-ecappid-formuladefinedattributes-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.262Z
keywords: [customAttributes, userId, ecAppId, formulaDefinedAttributes, context, Sets, new, attributes, specified, user., external, client, app, gets, user’s, UserInfo, endpoint, method, update, attribute]
---

# customAttributes(userId, ecAppId, formulaDefinedAttributes, context)

> Sets new attributes for the specified user. When the external client app gets the user’s
    attributes from the UserInfo endpoint, use this method to update the attribute
    values.

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