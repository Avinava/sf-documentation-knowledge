---
title: "UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString)"
domain: apex-reference
topic: userdataidentifier-firstname-lastname-fullname-email-link-username-locale-provid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.402Z
keywords: [UserData, identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString, Creates, instance, Auth.UserData, class, includes, token]
---

# UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString)

> Creates an instance of the Auth.UserData class that includes the ID token and user info
    response from the identity provider, if returned during single sign-on.

### UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString)

Creates an instance of the Auth.UserData class that includes the ID token and user info response from the identity provider, if returned during single sign-on.

#### Signature

public UserData(String identifier, String firstName, String lastName, String fullName, String email, String link, String username, String locale, String provider, String siteLoginUrl, Map<String,String> attributeMap, String idToken, String userInfoJSONString)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An identifier from the third party for the authenticated user, such as the Facebook user number or the Salesforce user ID.

firstName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The first name of the authenticated user, according to the third party.

lastName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The last name of the authenticated user, according to the third party.

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The full name of the authenticated user, according to the third party.

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The email address of the authenticated user, according to the third party.

link

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A stable link for the authenticated user such as https://www.facebook.com/MyUsername.

username

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The username of the authenticated user in the third party.

locale

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The standard locale string for the authenticated user.

provider

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The service used to log in, such as Facebook or Janrain.

siteLoginUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The site login page URL passed in if used with a site; null otherwise.

attributeMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.

idToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If provided by the third party, the ID token, formatted as an encoded JWT. The ID token contains claims with information about the authenticated user.

userInfoJSONString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If provided by the third party, the user info response, formatted as a JSON object that has been serialized into a string.