---
title: "HeadlessSelfRegistrationHandler Interface"
domain: apex-reference
topic: headlessselfregistrationhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.842Z
estimatedTokens: 1224
namespace: Auth
keywords: [HeadlessSelfRegistrationHandler, Creates, customer, partner, users, Headless, Registration, Flow, Usage, createUser, profileId, data, customUserDataMap, experienceId, password]
---

# HeadlessSelfRegistrationHandler Interface

> Creates customer and partner users during the Headless Registration Flow.

**Namespace:** `Auth`

# HeadlessSelfRegistrationHandler Interface

Creates customer and partner users during the Headless Registration Flow.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

The Headless Registration Flow allows you to control user registration experience in a third-party app while using Salesforce to authenticate users and manage their data access. When you set up this flow, add users in the class that is implementing the Auth.HeadlessSelfRegistrationHandler interface. This class runs after the user verifies their identity. For a detailed explanation of headless registration, see [Headless Registration Flow for Private Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_registration_private_clients.htm&type=5&language=en_US "HTML (New Window)") or [Headless Registration Flow for Public Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_registration_public_clients.htm&type=5&language=en_US "HTML (New Window)"), depending on your app type.

-   **[HeadlessSelfRegistrationHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm#apex_Auth_HeadlessSelfRegistrationHandler_methods)**
    The following are methods for HeadlessSelfRegistrationHandler.
-   **[HeadlessSelfRegistrationHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm#apex_interface_Auth_HeadlessSelfRegistrationHandler_Example)**
    This example class implements the Auth.HeadlessSelfRegistrationHandler interface to create a user. It finds or creates an account to store the new user and creates a contact to associate with the account. It then creates the user based on information that your client sends to Headless Registration API.

## HeadlessSelfRegistrationHandler Methods

The following are methods for HeadlessSelfRegistrationHandler.

-   **[createUser(profileId, data, customUserDataMap, experienceId, password)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm#apex_Auth_HeadlessSelfRegistrationHandler_createUser)**
    Returns a User object using information submitted by your off-platform app to Headless Registration API. The User object can be a new user that hasn’t been inserted in your org’s database, or it can represent an existing user record. If it’s a new User object, Salesforce inserts the user record for you.

### createUser(profileId, data, customUserDataMap, experienceId, password)

Returns a User object using information submitted by your off-platform app to Headless Registration API. The User object can be a new user that hasn’t been inserted in your org’s database, or it can represent an existing user record. If it’s a new User object, Salesforce inserts the user record for you.

#### Signature

public User createUser(Id profileId, Auth.UserData data, String customUserDataMap, String experienceId, String password)

#### Parameters

profileId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the profile that is assigned to new users.

data

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm "HTML (New Window)")

A class that stores information about the user, such as their name and locale.

customUserDataMap

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of a JSON object containing custom user information passed in during registration. We recommend that you deserialize this string into the equivalent Apex class structure. Determine what custom information to collect when you build your app’s registration experience.

experienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom value that determines what the end user experiences.

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user password.

#### Return Value

Type: User

## HeadlessSelfRegistrationHandler Example Implementation

This example class implements the Auth.HeadlessSelfRegistrationHandler interface to create a user. It finds or creates an account to store the new user and creates a contact to associate with the account. It then creates the user based on information that your client sends to Headless Registration API.

```

```

## Code Examples

```apex
global class ExampleHeadlessReg implements Auth.HeadlessSelfRegistrationHandler {
    // TO DO: Update this constant with the actual value for your use case
    private static final String CUSTOMER_ACCOUNT = 'My Account';
    
    /*
    * Retrieve an existing account or create a new one if it doesn't exist
    *
    * @param accountName - The name of the Account to find or create
    * @return Account - The found or newly created Account record
    */
    private Account findOrCreateAccount(String accountName) {
        List<Account> existingAccounts = [SELECT Id FROM Account WHERE Name=:accountName LIMIT 1];

        if (existingAccounts.isEmpty()) {
            Account newAccount = new Account(Name = accountName);
            insert(newAccount);
            return newAccount;
        }

        return existingAccounts[0];
    }

    /*
    * Create a contact and associate it with an account
    *
    * @param account - The Account object to associate the contact with
    * @param user - The User object containing the first and last name for the contact
    * @return Contact - The newly created contact record
    */
    private Contact createContact(Account account, User user) {
        Contact c = new Contact();
        c.accountId = account.Id;
        c.firstName = user.firstName;
        c.lastName = user.lastName;

        insert(c);

        return c;
    }

    //TO DO: Implement any additional password validation that you want in this method. 
    // In this example, the password was already checked to ensure that it complies with the org’s password policy,
    // and the password, if present, is set automatically for the new user when they are returned from the createUserMethod.
    private Boolean isPasswordValid(String password) {
        return true;
    }
 

    global User createUser(Id profileId, Auth.UserData data, String customUserDataMap, String experienceId, String password){
        if (!isPasswordValid(password)) {
            return null;
        }

        User u = new User();
        u.Username = data.username;
        u.ProfileId = profileId;
        u.Email = data.email;
        u.LastName = data.lastName;
        u.FirstName = data.firstName;
        String alias = data.username;
        // Alias must be 8 characters or less
        if (alias.length() > 8) {
            alias = alias.substring(0, 8);
        }
        u.Alias = alias;
        Account a = findOrCreateAccount(CUSTOMER_ACCOUNT);
        Contact c = createContact(a, u);
        u.ContactId = c.Id;
        u.LanguageLocaleKey = UserInfo.getLocale();
        u.LocaleSidKey = UserInfo.getLocale();
        u.EmailEncodingKey = 'UTF-8';
        u.TimeZoneSidKey = UserInfo.getTimezone().getID();

        return u;
    }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- HeadlessSelfRegistrationHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm)
- HeadlessSelfRegistrationHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm)
- createUser(profileId, data, customUserDataMap, experienceId, password) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
