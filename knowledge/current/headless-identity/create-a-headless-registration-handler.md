---
title: "Create a Headless Registration Handler"
domain: headless-identity
topic: create-a-headless-registration-handler
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.870Z
estimatedTokens: 259
keywords: [Headless, Registration, Handler, Apex, configure, Experience, Cloud, settings, Login]
---

# Create a Headless Registration Handler

> Create an Apex class for your registration handler. You reference this Apex class when
  you configure Experience Cloud settings on the Login & Registration page.

# Create a Headless Registration Handler

Create an Apex class for your registration handler. You reference this Apex class when you configure Experience Cloud settings on the Login & Registration page.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From Setup, in the Quick Find box, enter Apex, and then select **Apex Classes**.
2.  Click **New**.
3.  Fill the class with your headless registration handler code. You can paste in the code from the example.
4.  Save the class, and note its name.

## Example

Here’s an example headless registration handler. This registration handler creates a user and links it to the account and profile that you created earlier in this guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=headless_identity)

#### Note

This sample code is for demonstration only. Always test code before deploying it to a production environment.

```

```

## Code Examples

```apex
/*
 * Sample Headless Self Registration Handler class for Headless Identity implementation
 */

global class HeadlessSelfRegistrationHandler implements Auth.HeadlessSelfRegistrationHandler{
    static final String headless_account = 'My Account';
    
    // Creates a Standard salesforce or a community user
    global User createUser(Id profileId, Auth.UserData data, String customUserDataMap, String experienceId, String password){
        User u = new User();
        //Ensures the user will save as all required fields are pre-filled in with dummy values
        prepareUserData(data, u);

        //Get the Account, and create it if one is not already present. 
        Account a;
        List<Account> accounts = [SELECT Id FROM Account WHERE name='My Account'];
        if(accounts.isEmpty()) {
            a = new Account(name = headless_account);
            insert(a);
        } else {
            a = accounts[0];
        }
        
        handleCustomData(customUserDataMap); 
        
        // Create the Contact
        Contact c = new Contact();
        c.accountId = a.Id;
        c.firstName = u.firstName;
        c.lastName = u.lastName;
        insert(c);
        
        //Associate the Contact to the user along with the profile. 
        u.profileId = profileId;
        u.contactId = c.Id;
        return u;
    }
    
    /*
     * We support the ability to pass in complex structures in the custom user data map
     * You can build Apex classes that represent your complex structure
     * Then deserialize that structure into your Apex class
     * In this case we have a class at the bottom of this file called "ContactInformation"
     * This class deserializes the incoming request and prints out the fields
     * */ 
    void handleCustomData(String customUserDataMap) {
        System.debug('Custom Data: ' + customUserDataMap); 
        ContactInformation contactInfo = null; 
        try {
            contactInfo = (HeadlessSelfRegistrationHandler.ContactInformation)JSON.deserialize(customUserDataMap, HeadlessSelfRegistrationHandler.ContactInformation.class);
            System.debug('ContactInfo.mobilePhone: ' + contactInfo.mobilePhone); 
            System.debug('ContactInfo.streetAddress: ' + contactInfo.streetAddress); 
            System.debug('ContactInfo.city: ' + contactInfo.city); 
            System.debug('ContactInfo.state: ' + contactInfo.state); 
        } catch (Exception e) {
            System.debug('JSON was not formed correctly for the apex class'); 
        }
        
        
    }
    
    /*
	* This method handles filling user data that is required by Salesforce but is not passed in during registration
    * It is not strictly necessary but helpful as it centralizes the management of unnecessary fields to the IDP instead of the client. 
	*/
    void prepareUserData(Auth.UserData data, User u){
        
        String name, firstName, lastName, username, alias, email;
        
        System.debug('----> Passed In User Information');
        System.debug('Email: ' + data.email);
        System.debug('First Name: ' + data.firstName);
        System.debug('Last Name: ' + data.lastName);
        
        for(String key : data.attributeMap.keySet())
        {
            System.debug('key: ' + key + ' value: ' + data.attributeMap.get(key));
        }
        // Initialize the attributes required to create a new user with dummy values
        // in case they are not provided by the Auth Provider
        firstName = 'change-me';
        lastName = 'change-me';
        email = 'change@me.com';
        if(data.email != null && data.email != '')
            email = data.email;
        if(data.firstName != null && data.firstName != '')
            firstName = data.firstName;
        if(data.LastName != null && data.lastName != '')
            lastName = data.lastName;
        if(data.attributeMap.containsKey('full_name'))
            name = data.attributeMap.get('full_name');
        if(data.attributeMap.containsKey('name'))
            name = data.attributeMap.get('name');
        if(firstName == 'change-me' && name != '')
            firstName = name.substringBefore(' ');
        if(lastName == 'change-me' && name.substringAfter(' ') != '')
            lastName = name.substringAfter(' ');
        
        // Generate a random username
        Integer rand = Math.round(Math.random()*100000000);
        if(data.attributeMap.containsKey('username')){
            username = data.attributeMap.get('username');
        }else{
            username = lastName + '.' + rand + '@social-sign-on.com';
        }
        alias = firstName;
        
        //Alias must be 8 characters or less
        if(alias.length() > 8)
            alias = alias.substring(0, 8);
        u.username = username;
        u.email = email;
        u.lastName = lastName;
        u.firstName = firstName;
        u.alias = alias;
        u.languagelocalekey = UserInfo.getLocale();
        u.localesidkey = UserInfo.getLocale();
        u.emailEncodingKey = 'UTF-8';
        u.timeZoneSidKey = 'America/Los_Angeles';
    }
    
    /*
     * Apex Class Representation of Contact Information 
     * which was passed in the custom data map
     * */ 
    global class ContactInformation {
        String mobilePhone;
        String streetAddress;
        String city; 
        String state;
        Boolean privacyPolicy; 
    }
}
```
