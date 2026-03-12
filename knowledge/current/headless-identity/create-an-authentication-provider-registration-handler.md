---
title: "Create an Authentication Provider Registration Handler"
domain: headless-identity
topic: create-an-authentication-provider-registration-handler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.844Z
estimatedTokens: 1286
keywords: [Authentication, Provider, Registration, Handler, Apex, users, log, third-party, app, external, sign-on, SSO, creates, updates, their]
---

# Create an Authentication Provider Registration Handler

> Create an Apex registration handler to use with your authentication provider. When users
        log in to your third-party app with an external single sign-on (SSO) provider, the
        registration handler creates and updates their user records.

# Create an Authentication Provider Registration Handler

Create an Apex registration handler to use with your authentication provider. When users log in to your third-party app with an external single sign-on (SSO) provider, the registration handler creates and updates their user records.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From Setup, in the Quick Find box, enter Apex, and then select **Apex Classes**.
2.  Click **New**.
3.  Fill the class with your registration handler code. You can paste in the code from the example.
4.  Save the class, and note its name.

## Example

Here’s an example registration handler that you can use with your Google authentication provider. This class is triggered every time a user logs in with Google. If it’s the user’s first time logging in to your app, the class creates a user in Salesforce and associates them with the Headless Identity Demo profile that you created. The class also added the user to the account that you created earlier. If the user logged in to your app before, the class updates their record with any new information.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=headless_identity)

#### Note

This sample code is for demonstration only. Always test code before deploying it to a production environment.

/\* \* This class is a sample auth provider registration handler for a Headless Identity implementation \* It creates an external user and associates them with the Headless Demo Profile \* It creates or associates the user contact to an Account called My Account \* It uses the email as the username \* \*/ global class HeadlessDemoGoogleIDPRegistrationHandler implements Auth.RegistrationHandler{ static final String headless\_account = 'My Account'; static final String headless\_profile = 'Headless Demo Profile'; /\* \* Tries to find a user with a username matching the incoming email \* If not it creates one, associates it to an Account and Profile \* \*/ global User createUser(Id portalId, Auth.UserData data) { //Find an existing user, we are using username to map to email as your google email is a google username List<User> users = \[SELECT Id, firstName, lastName, email FROM User where Username =:data.email LIMIT 1\]; User u = null; if (!users.isEmpty()) { u = users\[0\]; } //If no user is found we create one if (u == null) { u = new User(); prepareUserData(data, u); //Get the Account, and create it if one is not already present. Account a; List<Account> accounts = \[SELECT Id FROM Account WHERE name='My Account'\]; if(accounts.isEmpty()) { a = new Account(name = headless\_account); insert(a); } else { a = accounts\[0\]; } // Get the Profile Profile p = \[SELECT Id FROM Profile WHERE Name =: headless\_profile LIMIT 1\]; //Create the Contact Contact c = new Contact(); c.accountId = a.Id; c.firstName = u.firstName; c.lastName = u.lastName; insert(c); //Associate the Contact to the user along with the profile. u.profileId = p.Id; u.contactId = c.Id; } else { u.firstName = data.firstName; u.lastName = data.lastName; u.email = data.email; update u; } return u; } /\* \* Basic Update User Method \* \*/ global void updateUser(Id userId, Id portalId, Auth.UserData data){ User u = new User(id=userId); u.email = data.email; u.lastName = data.lastName; u.firstName = data.firstName; update(u); } /\* \* This method handles filling user data that is required by Salesforce but is not passed in during registration \*/ void prepareUserData(Auth.UserData data, User u){ String name, firstName, lastName, username, alias, email; System.debug('----> Passed In User Information'); System.debug('Email: ' + data.email); System.debug('First Name: ' + data.firstName); System.debug('Last Name: ' + data.lastName); for(string key : data.attributeMap.keySet()) { system.debug('key: ' + key + ' value: ' + data.attributeMap.get(key)); } // Initialize the attributes essential for creating a new user with dummy values // in case they will not be provided by the Auth Provider firstName = 'change-me'; lastName = 'change-me'; email = 'change@me.com'; if(data.email != null && data.email != '') email = data.email; if(data.firstName != null && data.firstName != '') firstName = data.firstName; if(data.LastName != null && data.lastName != '') lastName = data.lastName; if(data.attributeMap.containsKey('full\_name')) name = data.attributeMap.get('full\_name'); if(data.attributeMap.containsKey('name')) name = data.attributeMap.get('name'); if(firstName == 'change-me' && name != '') firstName = name.substringBefore(' '); if(lastName == 'change-me' && name.substringAfter(' ') != '') lastName = name.substringAfter(' '); alias = firstName; //Alias must be 8 characters or less if(alias.length() > 8) alias = alias.substring(0, 8); u.username = email; u.email = email; u.lastName = lastName; u.firstName = firstName; u.alias = alias; u.languagelocalekey = UserInfo.getLocale(); u.localesidkey = UserInfo.getLocale(); u.emailEncodingKey = 'UTF-8'; u.timeZoneSidKey = 'America/Los\_Angeles'; } }
