---
title: "Storing User Information and Getting Access Tokens"
domain: apex-reference
topic: storing-user-information-and-getting-access-tokens
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.083Z
keywords: [Storing, User, Information, Getting, Access, Tokens, Note, Token, Info, Response]
---

# Storing User Information and Getting Access Tokens

## Storing User Information and Getting Access Tokens

The Auth.UserData class is used to store user information for Auth.RegistrationHandler. The third-party identity provider can send back a large collection of data about the user, including their username, email address, locale, and more. The Salesforce authentication provider framework converts this data into a common format with the Auth.UserData class and then sendsit to the registration handler.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If you use a [predefined Salesforce authentication provider](https://help.salesforce.com/s/articleView?language=en_US&id=xcloud.sso_predefined_authentication_provider_parent.htm), Salesforce constructs the Auth.UserData object for you. If you use a [custom authentication provider plug-in](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/authproviderplugin.htm), it's up to you to determine how you store information in the Auth.UserData object.

If the registration handler wants to use the rest of the data, the Auth.UserData class has an attributeMap variable. The attribute map is a map of strings (Map<String, String\>) for the raw values of all the data from the third party. Because the map is <String, String\>, values that the third party returns that aren't strings (like an array of URLs or a map) are converted into an appropriate string representation. The map includes everything returned by the third-party authentication provider, including the items automatically converted into the common format.

To learn about Auth.UserData properties, see [Auth.UserData Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData "Stores user information for authentication provider registration handlers, including handlers that implement the Auth.RegistrationHandler interface and handlers built using Flow Builder.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You can only perform DML operations on additional sObjects in the same transaction with User objects under certain circumstances. For more information, see [sObjects That Cannot Be Used Together in DML Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm).

For all authentication providers except Janrain, after a user is authenticated using a provider, the access token associated with that provider for this user can be obtained in Apex using the Auth.AuthToken Apex class. Auth.AuthToken provides two methods to retrieve access tokens. One is getAccessToken, which obtains a single access token. Use this method if the user ID is mapped to a single third-party user. If the user ID is mapped to multiple third-party users, use getAccessTokenMap, which returns a map of access tokens for each third-party user. For more information about authentication providers, see [Authentication Providers](https://help.salesforce.com/s/articleView?id=experience.sso_authentication_providers.htm&type=5&language=en_US "HTML (New Window)") in *Salesforce Help*.

When using Janrain as an authentication provider, you must use the Janrain accessCredentials dictionary values to retrieve the access token or its equivalent. Only some providers supported by Janrain provide an access token, while other providers use other fields. The Janrain accessCredentials fields are returned in the attributeMap variable of the Auth.UserData class. See the [Janrain auth\_info](http://developers.janrain.com/documentation/api/auth_info/ "HTML (New Window)") documentation for more information on accessCredentials.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Not all Janrain account types return accessCredentials. Sometimes you must change your account type to receive the information.

To learn about the Auth.AuthToken methods, see [Auth.AuthToken Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_class_Auth_AuthToken "Contains methods for getting and revoking access and refresh tokens that are issued when a user logs in via a single sign-on (SSO) flow that uses an authentication provider, such as Facebook.").

### User Information in the ID Token and User Info Response

Some identity providers send additional user information in an ID token or in a user info response. To extract user information from these responses, there are some extra steps.

An ID token is formatted as a JWT and includes information about the authenticated user. If the identity provider sends an ID token, Salesforce stores the full encoded JWT in the idToken property. Salesforce also stores the decoded JWT payload of the ID token in the idTokenJSONString property.

Salesforce doesn't validate the ID token. To validate it, use methods in the [Auth.JWTUtil](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm) class and pass in the encoded JWT stored in the idToken property. The methods in the Auth.JWTUtil class all return an instance of the Auth.JWT object.

Once you validate the JWT, you can use methods in the [Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm) class to access specific claims. For example, the Apex code in this snippet validates the ID token using a public keys endpoint from the identity provider and then retrieves the value of an email claim stored in the token.

Auth.JWT jwt = Auth.JWTUtil.validateJWTWithKeysEndpoint(userdata.idToken, keysEndpoint, true); // Retrieve email claim from id token String email = (String) jwt.getAdditionalClaims().get('email'); System.debug(email);

Alternatively, to access specific claims in the idTokenJSONString property, you can deserialize the JSON string and then write code to retrieve the claim you want. To deserialize the idTokenJSONString, use the [JSON.deserialize (jsonString, apexType)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize) method in the System.JSON class.

The user info response, if returned by the identity provider, is also a JSON object that has been serialized into a string. The user info response is stored in the userInfoJSONString property. You can use the [JSON.deserialize (jsonString, apexType)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize) method to deserialize the user info response so that you can retrieve specific information.

This example snippet creates a custom class to store the user info response. It then deserializes the user info response in the userInfoJSONString into this custom class structure.

public class UserInfoResponse { public String preferred\_username; public String email; public Boolean email\_verified; public String given\_name; public String family\_name; public String locale; } UserInfoResponse userInfo = (UserInfoResponse)System.JSON.deserialize(userData.userInfoJSONString, UserInfoResponse.class); System.debug(userInfo.email);