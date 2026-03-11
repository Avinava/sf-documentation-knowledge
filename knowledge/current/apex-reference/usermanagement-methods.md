---
title: "UserManagement Methods"
domain: apex-reference
topic: usermanagement-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.583Z
keywords: [UserManagement, Methods, Makes, duplicate, copy, System.UserManagement, object., clone, Signature, Return, Value, deregisterVerificationMethod, userId, method, Parameters, Usage, Note, formatPhoneNumber, countryCode, phoneNumber]
---

# UserManagement Methods

> Makes a duplicate copy of the System.UserManagement
    object.

## UserManagement Methods

The following are methods for UserManagement.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_clone)**  
    Makes a duplicate copy of the System.UserManagement object.
-   **[deregisterVerificationMethod(userId, method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_deregisterVerificationMethod)**  
    Deregisters an identity verification method. Use this method to let users delete an existing verification method.
-   **[formatPhoneNumber(countryCode, phoneNumber)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_formatPhoneNumber)**  
    Formats a mobile phone number for a user. Call this method to ensure that the phone number is formatted properly before updating a user’s mobile phone number.
-   **[initPasswordlessLogin(userId, method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_initPasswordlessLogin)**  
    Invokes a verification challenge for passwordless login when creating custom (Visualforce) Login and Verify pages for customers and partners.
-   **[initRegisterVerificationMethod(method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_initRegisterVerificationMethod)**  
    Invokes a verification challenge for registering identity verification methods with a custom (Visualforce) page. Users can register either their email address or phone number.
-   **[initSelfRegistration(method, user)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_initSelfRegistration)**  
    Invokes a verification challenge for self-registration when creating a custom (Visualforce) Verify page for Experience Cloud self-registration.
-   **[initVerificationMethod(method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_initVerificationMethod)**  
    Initiates a verification service for email, phone (SMS), and the Salesforce Authenticator verification methods.
-   **[initVerificationMethod(method, actionName, extras)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#unique_2132671252)**  
    Initiates a verification service for email, phone (SMS), and the Salesforce Authenticator verification methods.
-   **[obfuscateUser(userId, username)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_obfuscateUser)**  
    Scrambles users’ data on their request when they no longer want their personal data recognized in Salesforce. When you invoke the method for the user, the data becomes anonymous, and you can never recover it. Use this method to set the username to a specific value after it’s scrambled.
-   **[obfuscateUser(userId)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_obfuscateUser_2)**  
    Scrambles users’ data on their request when they no longer want their personal data recognized in Salesforce. When you invoke the method for the user, the data becomes anonymous, and you can never recover it.
-   **[registerVerificationMethod(method, startUrl)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_registerVerificationMethod)**  
    Registers an identity verification method. Verification methods can be a time-based one-time password (TOTP), email or text verification code, Salesforce Authenticator, or U2F-compatible security key. End users register verification methods for themselves.
-   **[sendAsyncEmailConfirmation(userId, emailTemplateId, networkId, startUrl)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_sendAsyncEmailConfirmation)**  
    Send an email message to a user’s email address for verification. The message contains a verification link (URL) that the user clicks to verify the email address later on. You can send email verifications in bulk.
-   **[verifyPasswordlessLogin(userId, method, identifier, code, startUrl)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifyPasswordlessLogin)**  
    Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.
-   **[verifyRegisterVerificationMethod(code, method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifyRegisterVerificationMethod)**  
    Completes registering a user’s email address or phone number as a verification method when customizing the identity verification process.
-   **[verifySelfRegistration(method, identifier, code, startUrl)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifySelfRegistration)**  
    Completes a verification challenge when creating a custom (Visualforce) Verify page for Experience Cloud site self-registration. If the person who is attempting to register enters the verification code successfully, the user is created and logged in.
-   **[verifyVerificationMethod(identifier, code, method)](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifyVerificationMethod)**  
    Completes the verification service for email, phone (SMS), Salesforce Authenticator, password, or time-based one-time password (TOTP) verification methods.

### clone()

Makes a duplicate copy of the System.UserManagement object.

#### Signature

public Object clone()

#### Return Value

Type: [User Management](#apex_class_System_UserManagement "Contains methods to manage end users, for example, to register their verification methods, verify their identity, or remove their personal information.")

### deregisterVerificationMethod(userId, method)

Deregisters an identity verification method. Use this method to let users delete an existing verification method.

#### Signature

public static void deregisterVerificationMethod(Id userId, Auth.VerificationMethod method)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

User ID of the user deregistering the verification method.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Verification method used to verify the identity of the user.

#### Return Value

Type: void

#### Usage

Use this method to deregister an existing identity verification method. For example, your users can deregister a phone number when their phone number changes. While only end users can register an identity verification method, you and your users can deregister one. Keep this behavior in mind when you implement a custom registration page.

This method is available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This method doesn't support deregistering built-in authenticators.

### formatPhoneNumber(countryCode, phoneNumber)

Formats a mobile phone number for a user. Call this method to ensure that the phone number is formatted properly before updating a user’s mobile phone number.

#### Signature

global static String formatPhoneNumber(String countryCode, String phoneNumber)

#### Parameters

countryCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A valid country code.

phoneNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A mobile number that contains from 3 through 49 numeric characters, without the country code. For example, (415) 555-1234.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns a user’s mobile phone number in the proper format.

#### Usage

Use this method to ensure a user’s mobile phone number is formatted as required by Salesforce. Then use the method’s return value to update the mobile field of the user’s record. This mobile number is used for SMS-based device activation. For example, mobile phone numbers are stored along with other identity verification methods in [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.") enum. This method is introduced in API version 43.0. It isn't available in earlier versions.

Here are some acceptable ways that users can enter their mobile number:

-   +1, (415) 555-1234 (with plus signs, parentheses, and dashes)
-   1, 4155551234 (only numbers, no symbols)
-   1 , 415-555-1234 (extra spaces)

Now, consider the following examples.

-   Correct examples:
    -   formatPhoneNumber('1', '4155551234');
    -   formatPhoneNumber('+1','(415) 555-1234');
    -   formatPhoneNumber('1', '415-555-1234');
-   Incorrect example, because the country code and mobile number aren’t separated:
    -   formatPhoneNumber(null, '+1 415-555-1234');
-   Example that doesn’t generate an error, but likely won’t work as intended:
    -   formatPhoneNumber('+1', '+1 (415) 555-1234');

#### Format Phone Number Code Example

Here's a code example that uses the formatPhoneNumber method. It gets the mobile number from the user and converts it to the format required by Salesforce. Then it updates the user’s record with the formatted mobile number.

```

```

As long as the country code and phone number are separated, formatPhoneNumber returns a value in the proper format.

### initPasswordlessLogin(userId, method)

Invokes a verification challenge for passwordless login when creating custom (Visualforce) Login and Verify pages for customers and partners.

#### Signature

public static String initPasswordlessLogin(Id userId, Auth.VerificationMethod method)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the user who’s logging in.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the user’s identity, which can be EMAIL or SMS.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier of the verification attempt.

#### Usage

Use this method along with its paired [verifyPasswordlessLogin](#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.") to customize the login experience with your own Visualforce Login and Verify pages. Invoke initPasswordlessLogin from the Login page where the user enters an email address or phone number.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

An alternative to using this combination of methods is to use [Site.passwordlessLogin](atlas.en-us.apexref.meta/apexref/apex_classes_sites.htm#apex_System_Site_passwordlessLogin "Logs in a user to a Salesforce Site or Experience Cloud site using an identity verification method, such as email or text, instead of a password. Passwordless login is a convenient, mobile-centric way to welcome users into your site. Let your users log in with something other than their password, like their email address or phone number."). Both approaches let you customize the Login page in Visualforce. With the paired methods, you can create custom Login and Verify pages. With Site.passwordlessLogin, Salesforce supplies the Verify page.

First call the initPasswordlessLogin method to initiate an authentication challenge. This method:

-   Gets the user ID and verification method, such as EMAIL or SMS, from the Login page.
-   Looks up the user and checks that the user is unique and active.
-   Sends a verification code to the user.
-   Adds an entry for the verification attempt to the Identity Verification History log, assigning an identifier to the verification attempt and setting the status to **User challenged, waiting for response**.
-   Adds an entry for the Passwordless Login to the Login History log.
-   Returns the identifier to [verifyPasswordlessLogin](#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.") to link the transactions.

Then call [verifyPasswordlessLogin](#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in."), which, if the user enters the verification code correctly, logs in the user.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Users must verify their identity by email address or phone number before they can log in without a password. You can check whether the user is verified from the user’s detail page in Setup. Or you can check programmatically with [TwoFactorMethodsInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_twofactormethodsinfo.htm "HTML (New Window)").

### initRegisterVerificationMethod(method)

Invokes a verification challenge for registering identity verification methods with a custom (Visualforce) page. Users can register either their email address or phone number.

#### Signature

public static String initRegisterVerificationMethod(Auth.VerificationMethod method)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the user’s identity, which can be EMAIL or SMS.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The method returns an error message if the phone number is already registered, the user isn’t a customer or partner, or if the context isn’t an Experience Cloud site.

#### Usage

Use this method along with its paired [verifyRegisterVerificationMethod](#apex_System_UserManagement_verifyRegisterVerificationMethod "Completes registering a user’s email address or phone number as a verification method when customizing the identity verification process.") to customize the process for registering a user’s verification method using a Visualforce Verify page.

First call the initRegisterVerificationMethod method to get the verification code sent to the user as input, and validate it. If the verification code isn’t valid, it returns an error message.

#### Example

Here’s a code example that registers a user’s phone number as a verification method. When the user enters a verification code on the Visualforce page, it invokes registerUser(). The method calls the [UserInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_userinfo.htm) class to get the User ID of the user who’s registering the verification method. Using the user ID, it then finds the user’s phone number. It also gets the user’s registration status to check whether the phone number is verified already. If the user is registered with a different phone number, the number is updated.

```

```

### initSelfRegistration(method, user)

Invokes a verification challenge for self-registration when creating a custom (Visualforce) Verify page for Experience Cloud self-registration.

#### Signature

public static String initSelfRegistration(Auth.VerificationMethod method, User user)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the identity of the user, which can be EMAIL or SMS.

user

Type: User

User object to insert after successful registration. To see which fields are required, see [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm) in the Object Reference for the Salesforce Platform.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier of the registration attempt.

#### Usage

By default, when users sign up for your Experience Cloud site with an email address or phone number, Salesforce sends them a verification code. At the same time, it generates a Verify page for users to confirm their identity. You can replace the default Salesforce Verify page with your own Visualforce page and then invoke the verification process.

Call this method to initiate the authentication challenge, and include a User object to insert if the registration is successful. The method returns the identifier for the self-registration attempt.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If you specify a language in the LanguageLocaleKey field on the User object, Salesforce uses this language for verification email and SMS messages.

Then call [verifySelfRegistration](#apex_System_UserManagement_verifySelfRegistration "Completes a verification challenge when creating a custom (Visualforce) Verify page for Experience Cloud site self-registration. If the person who is attempting to register enters the verification code successfully, the user is created and logged in."), which, if the user enters the verification code correctly, logs in the user.

#### Example

This code contains the result of a verification challenge that registers a new user.

```

```

### initVerificationMethod(method)

Initiates a verification service for email, phone (SMS), and the Salesforce Authenticator verification methods.

#### Signature

public static String initVerificationMethod(Auth.VerificationMethod method)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to initiate a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The returned identifier must be passed into verifyVerificationMethod.

#### Usage

Use this method along with its paired verifyVerificationMethod to customize a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods. The returned identifier from initVerificationMethod must be passed into verifyVerificationMethod.

First invoke the initVerificationMethod method to send a verification code to the user’s email or phone number, or to send a push notification to the Salesforce Authenticator. The user then enters the code or approves the push notification. If the verification code isn’t valid or the push notification isn’t approved, the service returns an error message.

#### Email Example

This example shows multi-factor authentication using email.

```

```

### initVerificationMethod(method, actionName, extras)

Initiates a verification service for email, phone (SMS), and the Salesforce Authenticator verification methods.

#### Signature

public static String initVerificationMethod(Auth.VerificationMethod method, String actionName, Map<String,String\> extras)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to initiate a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods.

actionName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

For the SALESFORCE\_AUTHENTICATOR verification method only, the name of the action to display on the Salesforce Authenticator, such as Connect to My Salesforce Org. The default action name is Apex-Defined Activity.

extras

Type: [Map<String,String>](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps.htm)

For the SALESFORCE\_AUTHENTICATOR verification method only, the following extra settings.

-   secure\_device\_required–If set to true, the user’s device must be secured. For example, the user must enter the device’s passcode to approve the request. Default setting is false.
-   challenge\_required–If set to true, the user must complete a biometric challenge, such as face recognition, on the device to approve the request. Default setting is false.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The returned identifier must be passed into verifyVerificationMethod method.

#### Usage

Use this method along with its paired verifyVerificationMethod to customize a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods. The returned identifier from initVerificationMethod must be passed into verifyVerificationMethod method.

First invoke the initVerificationMethod method to send a verification code to the user’s email or phone number, or to send a push notification to the Salesforce Authenticator. The user then enters the code or approves the push notification. If the verification code isn’t valid or the push notification isn’t approved, the service returns an error message.

#### Salesforce Authenticator Example

This example shows multi-factor authentication (MFA) using the Salesforce Authenticator mobile app. In this example, the actionName parameter is set to the default setting and the extra parameter settings are set to false.

```

```

This example shows multi-factor authentication using Salesforce Authenticator. In this example, the actionName parameter is set to Connect to My Salesforce Org and the challenge\_required extra parameter is set to true.

```

```

### obfuscateUser(userId, username)

Scrambles users’ data on their request when they no longer want their personal data recognized in Salesforce. When you invoke the method for the user, the data becomes anonymous, and you can never recover it. Use this method to set the username to a specific value after it’s scrambled.

#### Signature

public static void obfuscateUser(Id userId, String username)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the user whose data this method scrambles.

username

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The username after the user’s data is scrambled. Sets the value of the scrambled username to a specific string.

#### Return Value

Type: void

#### Usage

This method is introduced in API version 43.0. It isn't available in earlier versions.

You can use the obfuscateUser method to protect the personal information of your org’s users. When invoked, Salesforce permanently scrambles the user’s object data and replaces it with random character strings. The user’s detail page exists, but the fields contain meaningless strings of characters. Salesforce merely obfuscates (scrambles) personal data because you can't delete a user in Salesforce; you can only disable or deactivate a user. In other words, the user record remains in the database and this method performs a soft delete.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Take care when using this method. The users’ data becomes anonymous and can never be recovered.

**Considerations**

-   This method requires that the org’s User Management setting, **Scramble Specific Users' Data**, is enabled from Setup.
-   This method affects the standard fields of the user object—excluding a few fields such as the user ID, timezone, locale, and profile.
-   It is recommended that you note the user's ID and other attributes for post processing, such as the email address, if you want to send the user a confirmation.
-   This method changes only the user object. The association between the user and other objects is removed, but no other objects are changed. For example, contact, ThirdPartyAccountLink (TPAL), and user password authentication (UPA) objects remain unchanged.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Assure your admins that invoking this method doesn’t trigger an email change notification.

This method is part of our effort to protect users’ personal data and privacy. For more information on what you can do to actively protect user data, see Data Protection and Privacy in Salesforce Help.

### obfuscateUser(userId)

Scrambles users’ data on their request when they no longer want their personal data recognized in Salesforce. When you invoke the method for the user, the data becomes anonymous, and you can never recover it.

#### Signature

public static void obfuscateUser(Id userId)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the user whose data this method scrambles.

#### Return Value

Type: void

#### Usage

This method is introduced in API version 43.0. It isn't available in earlier versions.

You can use the obfuscateUser method to protect the personal information of your org’s users. When invoked, Salesforce permanently scrambles the user’s object data and replaces it with random character strings. The user’s detail page exists, but the fields contain meaningless strings of characters. Salesforce merely obfuscates (scrambles) personal data because you can't delete a user in Salesforce; you can only disable or deactivate a user. In other words, the user record remains in the database and this method performs a soft delete.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Take care when using this method. The users’ data becomes anonymous and can never be recovered.

**Considerations**

-   This method requires that the org’s User Management setting, **Scramble Specific Users' Data**, is enabled from Setup.
-   This method affects the standard fields of the user object—excluding a few fields such as the user ID, timezone, locale, and profile.
-   If you want to send the user a confirmation, it’s recommended that you note the user's ID and other attributes for post processing, such as the email address.
-   This method changes only the user object. The association between the user and other objects is removed, but no other objects are changed. For example, contact, ThirdPartyAccountLink (TPAL), and user password authentication (UPA) objects remain unchanged.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Assure your admins that invoking this method doesn’t trigger an email change notification.

This method is part of our effort to protect users’ personal data and privacy. For more information on what you can do to actively protect user data, see Data Protection and Privacy in Salesforce Help.

#### ObfuscateUser Code Example

```

```

### registerVerificationMethod(method, startUrl)

Registers an identity verification method. Verification methods can be a time-based one-time password (TOTP), email or text verification code, Salesforce Authenticator, or U2F-compatible security key. End users register verification methods for themselves.

#### Signature

public static System.PageReference registerVerificationMethod(Auth.VerificationMethod method, String startUrl)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Verification method used to verify the identity of the user.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Path to the page that users see after they log in.

#### Return Value

Type:[System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm#apex_system_pagereference "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Usage

Use this method to enable users to complete identity verification, such as multi-factor authentication (MFA), or to log in to their Experience Cloud site without a password. Users register these methods to verify their identity when logging in. You create a custom registration page when implementing mobile-centric passwordless logins. See [VerifyPasswordlessLogin](#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.").

The PageReference returned by registerVerificationMethod redirects the user to the Salesforce Verify page. If the user enters the correct code, the user is redirected to the Experience Cloud site page specified by the start URL. For example:

```

```

This method is available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

As a security measure, when users add or update mobile numbers in their detail page, they must log in again to verify their identity. As a result, unsaved changes in the app are lost. To disable this security measure, contact Salesforce Support.

### sendAsyncEmailConfirmation(userId, emailTemplateId, networkId, startUrl)

Send an email message to a user’s email address for verification. The message contains a verification link (URL) that the user clicks to verify the email address later on. You can send email verifications in bulk.

#### Signature

public static Boolean sendAsyncEmailConfirmation(String userId, String emailTemplateId, String networkId, String startUrl)

#### Parameters

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user to receive the email confirmation.

emailTemplateId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the email template in which the verification link is defined. If null, Salesforce sends a default email. Here's how the default email looks.

![Default verification email when the emailTemplateId parameter is set to null](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fsendasyncemailconfirmationwelcomeemail.png&folder=apexref)

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If verifying email addresses for Experience Cloud site users, the ID of the Experience Cloud site. In addition to external users (such as customers and partners), Experience Cloud site users can include internal users (such as employees) who are members of the site. To verify email addresses for internal users only, set this parameter to null.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user is redirected to this page after verification, with a success or error message as the parameter. If null, the user is redirected to the login page.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether sending the email message succeeded or failed.

#### Usage

Sending an async email message is good practice to ensure that users are registered with a valid email address that they truly own. To determine which users receive an email with the verification link, check whether the User Verified Email field in the User detail page is set to true. You can also get this information from the TwoFactorMethodsInfo API.

Send async email verification to customers and partners to verify their email address. These users must verify their email address before they can log in with email OTP (passwordless login).

The error code and description are passed as query parameters so that you can process any errors when building a custom landing page.

#### Example

```

```

### verifyPasswordlessLogin(userId, method, identifier, code, startUrl)

Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.

#### Signature

public static Auth.VerificationResult verifyPasswordlessLogin(Id userId, Auth.VerificationMethod method, String identifier, String code, String startUrl)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the user who’s logging in.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the identity of the user, which can be either EMAIL or SMS.

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the verification attempt received from the initPasswordlessLogin method.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to verify the identity of the user.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page where the user is directed after successful login.

#### Return Value

Type: [Auth.VerificationResult](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.")

Result of the verification challenge, which includes the message displayed, and where the user is directed if they enter the verification code correctly.

#### Usage

Call this method to complete the passwordless login authentication process. It validates the verification method and verification code. It also checks that the identifier is the same as the one returned by [initPasswordlessLogin](#apex_System_UserManagement_initPasswordlessLogin "Invokes a verification challenge for passwordless login when creating custom (Visualforce) Login and Verify pages for customers and partners.").

#### Example

For an example, see [Auth.VerificationResult](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.").

### verifyRegisterVerificationMethod(code, method)

Completes registering a user’s email address or phone number as a verification method when customizing the identity verification process.

#### Signature

public static String verifyRegisterVerificationMethod(String code, Auth.VerificationMethod method)

#### Parameters

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to verify the identity of the user.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the identity of the user, which can be either EMAIL or SMS.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the user enters an incorrect verification code, the method returns an error message.

#### Usage

Call verifyRegisterVerificationMethod to complete the process of registering a user’s verification method. This method checks whether the user entered the correct verification code. If the verification code is correct, the method

-   Confirms that the user entered the correct verification code
-   From the user’s detail page, updates the user's verification method status (sets the verification bit)
-   Sends an email to the user confirming that a verification method has been added to their record

If the verification code is incorrect, an error message is returned.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If users want to change their email address after registering one, don’t use the initRegisterVerificationMethod and verify RegisterVerificationMethod methods. To enable automatic identity verification for email address changes, from the Identity Verification Setup page, select the field **Require email confirmations for email address changes (applies to users in Experience Builder sites)**.

#### Example

Here’s a code example that registers a user’s phone number as a verification method. When the user enters a verification code on the Visualforce page, it invokes registerUser(). The method gets the User ID of the user who’s registering the verification method and the user’s phone number. It also gets the user’s registration status to check whether the phone number is verified already. If the user is registered with a different phone number, the number is updated.

```

```

### verifySelfRegistration(method, identifier, code, startUrl)

Completes a verification challenge when creating a custom (Visualforce) Verify page for Experience Cloud site self-registration. If the person who is attempting to register enters the verification code successfully, the user is created and logged in.

#### Signature

public static Auth.VerificationResult verifySelfRegistration(Auth.VerificationMethod method, String identifier, String code, String startUrl)

#### Parameters

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the identity of the user, which can be either EMAIL or SMS.

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier received from the initSelfRegistration method.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to verify the identity of the user.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page where the user is directed after successful self-registration. For the [Self-Registration component](https://help.salesforce.com/s/articleView?id=experience.rss_login_self_register.htm&language=en_US), set the Start URL in the component properties instead.

#### Return Value

Type: [Auth.VerificationResult](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.")

Result of the verification challenge, which includes the message displayed, and where the user is directed when they enter the verification code correctly.

#### Usage

By default, when users sign up for your Experience Cloud site with an email address or phone number, Salesforce sends them a verification code and generates a Verify page. This Verify page is where users enter the verification code to confirm their identity. You can replace this Salesforce-generated Verify page with a custom Verify page that you create with Visualforce. Then you invoke the verification process with Apex methods.

First, call the [initSelfRegistration](#apex_System_UserManagement_initSelfRegistration "Invokes a verification challenge for self-registration when creating a custom (Visualforce) Verify page for Experience Cloud self-registration.") method, which returns the identifier of the user to create. Then call this verifySelfRegistration method to complete the verification process. If the user enters the verification code correctly, the user is created and directed to the page specified in the startURL.

This method returns the verification result, which contains the verification status and, if the user is created, the session ID. If the verification method is SMS, the User object must contain a properly formatted mobile number, which is country code, space, and then phone number, for example, +1 1234567890. Use [System.UserManagement.formatPhoneNumber](#apex_System_UserManagement_formatPhoneNumber "Formats a mobile phone number for a user. Call this method to ensure that the phone number is formatted properly before updating a user’s mobile phone number.") to ensure that the phone number is formatted correctly.

#### Example

This code contains the result of a verification challenge that registers a new user.

```

```

### verifyVerificationMethod(identifier, code, method)

Completes the verification service for email, phone (SMS), Salesforce Authenticator, password, or time-based one-time password (TOTP) verification methods.

#### Signature

public static VerificationResult verifyVerificationMethod(String identifier, String code, Auth.VerificationMethod method)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier returned from initVerificationMethod for EMAIL, SMS, and SALESFORCE\_AUTHENTICATOR.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to verify the user’s identity for EMAIL, SMS, or PASSWORD.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the user’s identity, which can be EMAIL, PASSWORD, SALESFORCE\_AUTHENTICATOR, SMS, or TOTP.

#### Return Value

Type: [VerificationResult](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.")

#### Usage

Use this method along with its paired initVerificationMethod to customize a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods. Or use this method alone to provide a complete verification service for PASSWORD and TOTP verification methods.

This method checks whether the user entered the correct verification code or password. If the verification code or password is correct, the method verifies the user’s identity.

If the verification code or password isn’t valid, the service returns an error message.

#### Examples

This example shows multi-factor authentication using email.

```

```

The next two examples show multi-factor authentication using only the verifyVerificationMethod for password and TOTP verifications.

```

```

```

```