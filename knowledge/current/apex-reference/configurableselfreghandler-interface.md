---
title: "ConfigurableSelfRegHandler Interface"
domain: apex-reference
topic: configurableselfreghandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.823Z
estimatedTokens: 2061
namespace: Auth
keywords: [ConfigurableSelfRegHandler, Gives, control, over, how, customers, partners, self-register, Experience, Cloud, site, creating, implements, Auth.ConfigurableSelfRegHandler, choose]
---

# ConfigurableSelfRegHandler Interface

> Gives you more control over how customers or partners self-register
      for your Experience Cloud site by creating a class that implements Auth.ConfigurableSelfRegHandler. You choose the user
      information to collect, and how users identify themselves—with their email address,
      phone number, or another identifier. When verified, you create a customer or partner user and
      log in the user to your Experience Cloud site.

**Namespace:** `Auth`

# ConfigurableSelfRegHandler Interface

Gives you more control over how customers or partners self-register for your Experience Cloud site by creating a class that implements Auth.ConfigurableSelfRegHandler. You choose the user information to collect, and how users identify themselves—with their email address, phone number, or another identifier. When verified, you create a customer or partner user and log in the user to your Experience Cloud site.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

You set up site self-registration declaratively on the Login & Registration (L&R) page of the Administration workspace. When combined with a configurable self-registration setup, the handler class can programmatically fill in user fields, including custom fields, and determine how to create a user and log them in.

When you select the Configurable Self-Reg Page registration page, you choose the user fields to collect from the self-registration form, such as last name, first name, username, nickname, mobile, or email. You also determine the verification method that the user identifies themselves with, which can be email, mobile, or neither. Salesforce generates the Auth.ConfigurableSelfRegHandler handler, which contains logic on how to create an Experience Cloud site member. Modify the handler to change how users are created, and how collected user information is used.

You can add custom logic to ensure that the email or phone number is unique to the customer or partner who's registering. For example, you can add a custom unique field, and write a copy of the email or phone number to it. You can also change how the user is created. By default, the user is created as a contact associated with the account that you select on the L&R page.

The generated ConfigurableSelfRegHandler is located on the Setup Apex Classes page, and begins with AutocreatedConfigSelfReg, for example, AutocreatedConfigSelfReg1532475901849.

For an example, see [ConfigurableSelfRegHandler Example Implementation](#apex_interface_Auth_ConfigurableSelfRegHandler_Example "This Apex code implements the Auth.ConfigurableSelfRegHandler interface. After the customer or partner fills out the sign-up page and submits it, the handler is invoked to create an Experience Cloud member with the supplied information. If the registration process requires email or phone verification, the verification process finishes before the Auth.ConfigurableSelfRegHandler.createUser is invoked. If verification isn’t required, createUser is invoked when the customer or partner submits the page."). For more details, see [Salesforce Customer Identity](https://help.salesforce.com/articleView?id=identity_about_customers_partners.htm&language=en_US "HTML (New Window)") in Salesforce Help.

-   **[ConfigurableSelfRegHandler Method](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm#apex_Auth_ConfigurableSelfRegHandler_methods)**

-   **[ConfigurableSelfRegHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm#apex_interface_Auth_ConfigurableSelfRegHandler_Example)**
    This Apex code implements the Auth.ConfigurableSelfRegHandler interface. After the customer or partner fills out the sign-up page and submits it, the handler is invoked to create an Experience Cloud member with the supplied information. If the registration process requires email or phone verification, the verification process finishes before the Auth.ConfigurableSelfRegHandler.createUser is invoked. If verification isn’t required, createUser is invoked when the customer or partner submits the page.

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

## ConfigurableSelfRegHandler Example Implementation

This Apex code implements the Auth.ConfigurableSelfRegHandler interface. After the customer or partner fills out the sign-up page and submits it, the handler is invoked to create an Experience Cloud member with the supplied information. If the registration process requires email or phone verification, the verification process finishes before the Auth.ConfigurableSelfRegHandler.createUser is invoked. If verification isn’t required, createUser is invoked when the customer or partner submits the page.

Verification occurs by email if the admin chose Email as the verification method when setting up the Configurable Self-Reg handler on the Login & Registration (L&R) page. When a visitor clicks the sign-up link from the login page, Salesforce prompts for an email address and then sends a one-time password to the specified email address. If the visitor enters the verification code successfully on the verify page, the user is created and logged in. Likewise, if the admin chose Text Message as the verification method on the L&R page, the visitor is prompted to enter a phone number. Salesforce sends a challenge (verification code) via SMS to the user. If successful, the user is created and logged in. Requiring verification before creating a user reduces the number of dummy users cluttering your org.

The Auth.ConfigurableSelfRegHandler class contains logic for generating the user fields required to create a user in case the user doesn’t supply them. The handler generates default values, ensuring that the values are unique by appending a timestamp. You can modify the handler to make sure that the email address and phone number of the customer or partner are also unique.

```

```

## Code Examples

```apex
global class AutocreatedConfigSelfReg implements Auth.ConfigurableSelfRegHandler {

    private final Long CURRENT_TIME = Datetime.now().getTime();
    private final String[] UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    private final String[] LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz'.split('');
    private final String[] NUMBER_CHARS = '1234567890'.split('');
    private final String[] SPECIAL_CHARS = '!#$%-_=+<>'.split('');

    // This method is called once after verification (if any was configured).
    // This method should create a user and insert it.
    // Password can be null.
    // Return null or throw an exception to fail creation.
    global Id createUser(Id accountId, Id profileId, Map<SObjectField, String> registrationAttributes, String password) {
        User u = new User();
        u.ProfileId = profileId;
        for (SObjectField field : registrationAttributes.keySet()) {
            String value = registrationAttributes.get(field);
            u.put(field, value);
        }

        u = handleUnsetRequiredFields(u);
        generateContact(u, accountId);
        if (String.isBlank(password)) {
            password = generateRandomPassword();
        }
        Site.validatePassword(u, password, password);
        if (u.contactId == null) {
            return Site.createExternalUser(u, accountId, password);
        }
        u.languagelocalekey = UserInfo.getLocale();
        u.localesidkey = UserInfo.getLocale();
        u.emailEncodingKey = 'UTF-8';
        u.timeZoneSidKey = UserInfo.getTimezone().getID();
        insert u;
        System.setPassword(u.Id, password);
        return u.id;
    }
    // Method to autogenerate a password if one isn't passed in.
    // By setting a password for a user, we won't send a 
    // welcome email to set the password.
    private String generateRandomPassword() {
        String[] characters = new List<String>(UPPERCASE_CHARS);
        characters.addAll(LOWERCASE_CHARS);
        characters.addAll(NUMBER_CHARS);
        characters.addAll(SPECIAL_CHARS);
        String newPassword = '';
        Boolean needsUpper = true, needsLower = true, needsNumber = true, needsSpecial = true;
        while (newPassword.length() < 50) {
            Integer randomInt = generateRandomInt(characters.size());
            String c = characters[randomInt];
            if (needsUpper && c.isAllUpperCase()) {
                needsUpper = false;
            } else if (needsLower && c.isAllLowerCase()) {
                needsLower = false;
            } else if (needsNumber && c.isNumeric()) {
                needsNumber = false;
            } else if (needsSpecial && !c.isAlphanumeric()) {
                needsSpecial = false;
            }
            newPassword += c; 
        }
        newPassword = addMissingPasswordRequirements(newPassword, needsLower, needsUpper, needsNumber, needsSpecial);
        return newPassword;
    }

    private String addMissingPasswordRequirements(String password, Boolean addLowerCase, Boolean addUpperCase, Boolean addNumber, Boolean addSpecial) {
        if (addLowerCase) {
            password += LOWERCASE_CHARS[generateRandomInt(LOWERCASE_CHARS.size())];
        }
        if (addUpperCase) {
            password += UPPERCASE_CHARS[generateRandomInt(UPPERCASE_CHARS.size())];
        }
        if (addNumber) {
            password += NUMBER_CHARS[generateRandomInt(NUMBER_CHARS.size())];
        }
        if (addSpecial) {
            password += SPECIAL_CHARS[generateRandomInt(SPECIAL_CHARS.size())];
        }
        return password;
    }
   // Generates a random number from 0 up to, but not including, max.
    private Integer generateRandomInt(Integer max) {
        return Math.mod(Math.abs(Crypto.getRandomInteger()), max);
    }

    // Loops over required fields that were not passed in to 
    // set to some default value.
    private User handleUnsetRequiredFields(User u) {
        if (String.isBlank(u.LastName)){
            u.LastName = generateLastName();
        }
        if (String.isBlank(u.Username)) {
            u.Username = generateUsername();
        }
        if (String.isBlank(u.Email)) {
            u.Email = generateEmail();
        }
        if (String.isBlank(u.Alias)) {
            u.Alias = generateAlias();
        }
        if (String.isBlank(u.CommunityNickname)) {
            u.CommunityNickname = generateCommunityNickname();
        }
        return u;
    }
    // Method to construct a contact for a user.
    private void generateContact(User u, Id accountId) {
        // Add logic here if you want to build your own 
        // contact for the use.
    }
   // Default implementation to try to provide uniqueness.
    private String generateAlias() {
        String timeString = String.valueOf(CURRENT_TIME);
        return timeString.substring(timeString.length() - 8);
    }
    // Default implementation to try to provide uniqueness.
    private String generateLastName() {
        return 'ExternalUser' + CURRENT_TIME;
    }
    // Default implementation to try to provide uniqueness.
    private String generateUsername() {
        return 'externaluser' + CURRENT_TIME + '@company.com';
    }
    // Default implementation to try to provide uniqueness.
    private String generateEmail() {
        return 'externaluser' + CURRENT_TIME + '@company.com';
    }
    // Default implementation to try to provide uniqueness.
    private String generateCommunityNickname() {
        return 'ExternalUser' + CURRENT_TIME;
    }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- ConfigurableSelfRegHandler Method (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm)
- ConfigurableSelfRegHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm)
- createUser(accountId, profileId, registrationAttributes, password) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
