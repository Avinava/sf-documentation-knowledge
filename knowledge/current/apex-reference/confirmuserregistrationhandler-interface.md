---
title: "ConfirmUserRegistrationHandler Interface"
domain: apex-reference
topic: confirmuserregistrationhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.831Z
estimatedTokens: 1294
namespace: Auth
keywords: [ConfirmUserRegistrationHandler, Manages, sign-on, SSO, user, mappings, Salesforce, third-party, identity, provider, confirm, updating, Usage, confirmUser, userId]
---

# ConfirmUserRegistrationHandler Interface

> Manages single sign-on (SSO) user mappings between Salesforce and a
      third-party identity provider. Use this interface to confirm user mappings before updating
      them.

**Namespace:** `Auth`

# ConfirmUserRegistrationHandler Interface

Manages single sign-on (SSO) user mappings between Salesforce and a third-party identity provider. Use this interface to confirm user mappings before updating them.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

When you set up SSO with a third-party identity provider, you create a class that implements a registration handler using the Auth.RegistrationHandler interface. This class manages the process of creating and updating users. For advanced use cases that require you to confirm user information during the update process, implement the Auth.ConfirmUserRegistrationHandler interface in your class. This interface must be implemented in addition to Auth.RegistrationHandler.

You can use the Auth.ConfirmUserRegistrationHandler interface to ensure that users are mapped correctly between Salesforce and the third party. When a user who has previously logged in with an authentication provider logs in again, you can confirm that the incoming user data is consistent with the user's third-party identifier. If not, you can identify which user is supposed to be logged in.

You can also use the Auth.ConfirmUserRegistrationHandler interface to switch context for users with multiple records. For example, a user has two records—an admin user and a standard user. When the user logs in, the third-party identity provider confirms the account used to log in and sends the response to Salesforce via the [UserInfo endpoint](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_using_userinfo_endpoint.htm&type=5&language=en_US "HTML (New Window)"). You can then use this information to determine whether to log in the user as an admin or standard user.

-   **[ConfirmUserRegistrationHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_Auth_ConfirmUserRegistrationHandler_methods)**

-   **[ConfirmUserRegistrationHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_interface_Auth_ConfirmUserRegistrationHandler_Example)**


## ConfirmUserRegistrationHandler Methods

The following are methods for ConfirmUserRegistrationHandler.

-   **[confirmUser(userId, tpalId, portalId, userdata)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_Auth_ConfirmUserRegistrationHandler_confirmUser)**
    Returns the ID of the user to be logged in based on their mapping to a third-party identifier. This method is called before calling the [updateUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_updateUser "HTML (New Window)") method. It's called only if the incoming user has previously logged in and has a third-party account link to a Salesforce user.

### confirmUser(userId, tpalId, portalId, userdata)

Returns the ID of the user to be logged in based on their mapping to a third-party identifier. This method is called before calling the [updateUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_auth_plugin.htm#apex_Auth_RegistrationHandler_updateUser "HTML (New Window)") method. It's called only if the incoming user has previously logged in and has a third-party account link to a Salesforce user.

#### Signature

public Id confirmUser(Id userId, Id tpalId, Id portalId, Auth.UserData userdata)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the user who is mapped to the third-party identifier via a third-party account link.

tpalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The third-party account link corresponding to the third-party identifier.

portalId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The portal ID the user is logging in to. If there's no portal configured, this value can be null.

userData

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData "HTML (New Window)")

Contains user information from the third-party identity provider.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The Id of the user to be logged in. If null, login fails.

## ConfirmUserRegistrationHandler Example Implementation

This example implements the Auth.ConfirmUserRegistrationHandler interface during the user update process to confirm that the correct user is logging in based on their email address and last name.

```

```

The following example tests the implementation:

```

```

## Code Examples

```apex
global class StandardUserRegistrationHandler implements Auth.RegistrationHandler, Auth.ConfirmUserRegistrationHandler {
    global User createUser(Id portalId, Auth.UserData data){
        User u = new User();
        Profile p = [SELECT Id FROM profile WHERE name='Standard User'];
        u.username = data.username + '@salesforce.com';
        u.email = data.email;
        u.lastName = data.lastName;
        u.firstName = data.firstName;
        String alias = data.username;
        if(alias.length() > 8) {
            alias = alias.substring(0, 8);
        }
        u.alias = alias;
        u.languagelocalekey = data.attributeMap.get('language');
        u.localesidkey = data.locale;
        u.emailEncodingKey = 'UTF-8';
        u.timeZoneSidKey = 'America/Los_Angeles';
        u.profileId = p.Id;
        return u;
    }
    
    global void updateUser(Id userId, Id portalId, Auth.UserData data) {
        User u = new User(id=userId);
        u.username = data.username + '@salesforce.com';
        u.email = data.email;
        u.lastName = data.lastName;
        u.firstName = data.firstName;
        String alias = data.username;
        if(alias.length() > 8) {
            alias = alias.substring(0, 8);
        }
        u.alias = alias;
        u.languagelocalekey = data.attributeMap.get('language');
        u.localesidkey = data.locale;
        update(u);
    }
    
    global Id confirmUser(Id userId, Id tpalId, Id portalId, Auth.UserData data) {
        if (data.email.contains(data.lastName)) { // looks genuine 
            return userId;
        } else { // find the right user
            User confirmedUser = [SELECT id FROM user WHERE email=:data.email];
            return confirmedUser.Id;
        }
    }
}
```

```apex
@isTest
public class StandardUserRegistrationHandlerTest {
    static testMethod void testConfirmUser() {
        StandardUserRegistrationHandler handler = new StandardUserRegistrationHandler();
        Auth.UserData sampleData = new Auth.UserData('idA', 'firstName', 'A',
            'firstName A', 'userA@example.org', null, 'usernameA', 'en_US', 'facebook',
            null, new Map<String, String>{'language' => 'en_US'});
        User u = handler.createUser(null, sampleData);
        insert(u);
        String uid = u.id;
        
        sampleData = new Auth.UserData('idB', 'firstName', 'B',
            'firstName B', 'userA@example.org', null, 'usernameB', 'en_US', 'facebook',
            null, new Map<String, String>{}); // note that user B is using userA's email
        Id confirmedUserId = handler.confirmUser(uid, '060xx0000004Eh6', null, sampleData);
        System.assertEquals(uid, confirmedUserId); // we should see userA's id
    }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- ConfirmUserRegistrationHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm)
- ConfirmUserRegistrationHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm)
- confirmUser(userId, tpalId, portalId, userdata) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm)
