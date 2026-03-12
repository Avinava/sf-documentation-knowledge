---
title: "RegistrationHandler Interface"
domain: apex-reference
topic: registrationhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.963Z
estimatedTokens: 3484
namespace: Auth
keywords: [RegistrationHandler, Salesforce, ability, authentication, provider, Facebook©, Janrain©, sign-on, Usage, createUser, portalId, userData, updateUser, userId, Storing]
---

# RegistrationHandler Interface

> Salesforce provides the ability to use an authentication provider, such
as Facebook© or Janrain©, for single sign-on into Salesforce.

**Namespace:** `Auth`

# RegistrationHandler Interface

Salesforce provides the ability to use an authentication provider, such as Facebook© or Janrain©, for single sign-on into Salesforce.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

To set up single sign-on, you must create a class that implements Auth.RegistrationHandler. Classes implementing the Auth.RegistrationHandler interface are specified as the Registration Handler in authentication provider definitions, and enable single sign-on into Salesforce portals and organizations from third-party services such as Facebook. Using information from the authentication providers, your class must perform the logic of creating and updating user data as appropriate, including any associated account and contact records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

During the user update process, you can use the [confirmUser()](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_Auth_ConfirmUserRegistrationHandler_confirmUser "Returns the ID of the user to be logged in based on their mapping to a third-party identifier. This method is called before calling the updateUser() method. It's called only if the incoming user has previously logged in and has a third-party account link to a Salesforce user.") method to ensure that users are correctly mapped between Salesforce and the third party. For more information, see the [ConfirmUserRegistrationHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_interface_Auth_ConfirmUserRegistrationHandler "Manages single sign-on (SSO) user mappings between Salesforce and a third-party identity provider. Use this interface to confirm user mappings before updating them.").

-   **[RegistrationHandler Methods](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_methods)**

-   **[Storing User Information and Getting Access Tokens](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_auth_plugin_part2)**

-   **[Auth.RegistrationHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_auth_plugin_example)**

-   **[Auth.RegistrationHandler Error Example](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_auth_plugin_example_error)**
    This example implements the Auth.RegistrationHandler interface and shows how to use a custom exception to display an error message in the URL of the page. If you don’t use a custom exception, the error code and description appear in the URL and the error description appears on the page.

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

## Auth.RegistrationHandler Example Implementation

This example implements the Auth.RegistrationHandler interface that creates as well as updates a standard user based on data provided by the authentication provider. Error checking has been omitted to keep the example simple.

```

```

The following example tests the above code.

```

```

## Auth.RegistrationHandler Error Example

This example implements the Auth.RegistrationHandler interface and shows how to use a custom exception to display an error message in the URL of the page. If you don’t use a custom exception, the error code and description appear in the URL and the error description appears on the page.

To limit this example to the custom exception, some code was omitted.

```

```

## Code Examples

```apex
global class StandardUserRegistrationHandler implements Auth.RegistrationHandler{
    global User createUser(Id portalId, Auth.UserData data) {
        User u = new User();
        Profile p = [SELECT Id FROM profile WHERE name='Standard User'];
        u.Username = data.username + '@salesforce.com';
        u.Email = data.email;
        u.LastName = data.lastName;
        u.FirstName = data.firstName;
        String alias = data.username;
        if(alias.length() > 8) {
            alias = alias.substring(0, 8);
        }
        u.Alias = alias;
        u.LanguageLocaleKey = data.attributeMap.get('language');
        u.LocaleSidKey = data.locale;
        u.EmailEncodingKey = 'UTF-8';
        u.TimeZoneSidKey = 'America/Los_Angeles';
        u.ProfileId = p.Id;
        return u;
    }

    global void updateUser(Id userId, Id portalId, Auth.UserData data) {
        User u = new User(id=userId);
        u.Username = data.username + '@salesforce.com';
        u.Email = data.email;
        u.LastName = data.lastName;
        u.FirstName = data.firstName;
        String alias = data.username;
        if(alias.length() > 8) {
            alias = alias.substring(0, 8);
        }
        u.Alias = alias;
        u.LanguageLocaleKey = data.attributeMap.get('language');
        u.LocaleSidKey = data.locale;
        update(u);
    }
}
```

```apex
@isTest
private class StandardUserRegistrationHandlerTest {
static testMethod void testCreateAndUpdateUser() {
    StandardUserRegistrationHandler handler = new StandardUserRegistrationHandler();
    Auth.UserData sampleData = new Auth.UserData('testId', 'testFirst', 'testLast',
        'testFirst testLast', 'testuser@example.org', null, 'testuserlong', 'en_US', 'facebook',
        null, new Map<String, String>{'language' => 'en_US'});
    User u = handler.createUser(null, sampleData);
    System.assertEquals('testuserlong@salesforce.com', u.username);
    System.assertEquals('testuser@example.org', u.email);
    System.assertEquals('testLast', u.lastName);
    System.assertEquals('testFirst', u.firstName);
    System.assertEquals('testuser', u.alias);
    insert(u);
    String uid = u.id;
    
    sampleData = new Auth.UserData('testNewId', 'testNewFirst', 'testNewLast',
        'testNewFirst testNewLast', 'testnewuser@example.org', null, 'testnewuserlong', 'en_US', 'facebook',
        null, new Map<String, String>{'language' => 'en_US'});
    handler.updateUser(uid, null, sampleData);
    
    User updatedUser = [SELECT username, email, firstName, lastName, alias FROM user WHERE id=:uid];
    System.assertEquals('testnewuserlong@salesforce.com', updatedUser.username);
    System.assertEquals('testnewuser@example.org', updatedUser.email);
    System.assertEquals('testNewLast', updatedUser.lastName);
    System.assertEquals('testNewFirst', updatedUser.firstName);
    System.assertEquals('testnewu', updatedUser.alias);
}
}
```

```apex
global class RegHandler implements Auth.RegistrationHandler {

    class RegHandlerException extends Exception {}

        global User createUser(Id portalId, Auth.UserData data){
            List<Profile> profiles = [SELECT Id, Name, UserType FROM Profile WHERE Name = 'Power User']; 
            Profile profile = profiles.isEmpty() ? null : profiles[0]; 
            if(profile==null) 
               throw new RegHandlerException('Cannot find the profile. For help, contact your administrator.'); 
... 
        } 

        global void updateUser(Id userId, Id portalId, Auth.UserData data){
            User u = new User(id=userId);
            u.lastName = data.lastName;
            u.firstName = data.firstName;
            update(u);
        }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- confirmUser() (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm)
- ConfirmUserRegistrationHandler Interface (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm)
- RegistrationHandler Methods (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- Storing User Information and Getting Access Tokens (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- Auth.RegistrationHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- Auth.RegistrationHandler Error Example (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- createUser(portalId, userData) (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- updateUser(userId, portalId, userData) (atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm)
- Auth.UserData (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
