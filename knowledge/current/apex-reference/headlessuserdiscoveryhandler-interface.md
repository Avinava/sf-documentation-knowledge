---
title: "HeadlessUserDiscoveryHandler Interface"
domain: apex-reference
topic: headlessuserdiscoveryhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.826Z
estimatedTokens: 1974
namespace: Auth
keywords: [HeadlessUserDiscoveryHandler, create, headless, user, discovery, handler, implement, during, login, passwordless, forgot, password, flows., Usage, discoverUserFromLoginHint, networkId, loginHint, verificationAction, customDataJson, requestAttributes]
---

# HeadlessUserDiscoveryHandler Interface

> Use this interface to create a headless user discovery handler that you implement during
    headless login, passwordless login, and forgot password flows.

**Namespace:** `Auth`

# HeadlessUserDiscoveryHandler Interface

Use this interface to create a headless user discovery handler that you implement during headless login, passwordless login, and forgot password flows.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Develop headless authorization flows where users log in to an off-platform app with an identifier other than their username, such as an email address, phone number, or order number. When a user enters the identifier in your headless app, your app sends the identifying information to a Salesforce endpoint. Salesforce then passes the identifying information to your implementation of the Auth.HeadlessUserDiscoveryHandler interface. The handler finds the user's account and its associated email address or phone number.

Headless user discovery supports these use cases.

-   Headless login with any identifier and a password. For example, a user goes to your headless app and enters their order number and password to log in.
-   Headless login with any identifier and a one-time password (OTP). For example, a user goes to your app and enters just their order number. Your Apex handler finds the user's account based on the order number. Salesforce sends an OTP to the verified email address that's associated with the account. To log in, the user enters the OTP.
-   Headless password reset with any identifier. For example a user goes to your app and enters their phone number. Your Apex handler finds the user account and Salesforce sends an OTP to the user's verified phone number. To verify their identity for password reset, the user enters the OTP and can then set a new password.

Headless user discovery is supported for Headless Identity API flows and OAuth 2.0 for First-Party Applications flows. For more information about supported flows and implementation details, see [Headless Login Without a Username](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_discovery.htm&type=5&language=en_US).

-   **[HeadlessUserDiscoveryHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm#apex_Auth_HeadlessUserDiscoveryHandler_methods)**

-   **[HeadlessUserDiscoveryHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm#apex_interface_Auth_HeadlessUserDiscoveryHandler_Example)**


## HeadlessUserDiscoveryHandler Methods

The following are methods for HeadlessUserDiscoveryHandler.

-   **[discoverUserFromLoginHint(networkId, loginHint, verificationAction, customDataJson, requestAttributes)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm#apex_Auth_HeadlessUserDiscoveryHandler_discoverUserFromLoginHint)**
    Finds a user's Salesforce account based on user information, such as their email address, phone number, or other data, that's passed to a Salesforce endpoint during headless login, passwordless login, and forgot password flows.

### discoverUserFromLoginHint(networkId, loginHint, verificationAction, customDataJson, requestAttributes)

Finds a user's Salesforce account based on user information, such as their email address, phone number, or other data, that's passed to a Salesforce endpoint during headless login, passwordless login, and forgot password flows.

#### Signature

public Auth.HeadlessUserDiscoveryResponse discoverUserFromLoginHint(Id networkId, String loginHint, Auth.VerificationAction verificationAction, String customDataJson, Map<String,String> requestAttributes)

#### Parameters

networkId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the Experience Cloud site where your headless app sends requests.

loginHint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Information about the user that Salesforce can use to find their associated account, such as their email address or phone number.

verificationAction

Type: [Auth.VerificationAction](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationAction.htm "Indicates the method that you use to send a one-time password (OTP) to a user during the headless passwordless login flow.")

The verification method that's used to log the user in, either email or SMS.

customDataJson

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom user data, such as first name, that you collect when the user logs in to your headless app.

requestAtttibutes

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map)<[String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string),[String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string)\>

Information about the login request that's based on the user’s browser state when accessing the login page. requestAttributes passes in the CommunityUrl, IpAddress, UserAgent, Platform, Application, City, Country, and Subdivision values. The City, Country, and Subdivision values come from IP geolocation.

#### Return Value

Type: [Auth.HeadlessUserDiscoveryResponse](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_class_Auth_HeadlessUserDiscoveryResponse "Contains methods to describe the result of headless user discovery using a handler that implements the Auth.HeadlessUserDiscoveryHandler interface during headless login, passwordless login, and forgot password flows.")

If the handler finds a user, it returns a user ID. If not, it returns an error message.

## HeadlessUserDiscoveryHandler Example Implementation

Here's an example implementation of the Auth.HeadlessUserDiscoveryHandler interface. This example supports login with email and login with SMS.

The discoverUserFromLoginHint method uses custom logic to search for a user account with a verified email address or phone number that matches the data passed in the login hint. As a security best practice, Salesforce always recommends writing code to determine if the user's email address or phone number is verified.

For users logging in with email, the custom logic first checks whether the email address passed in the login hint is in a valid format. Then, to look for a verified Salesforce email address that matches the email address passed in the login hint, it queries the [TwoFactorMethodsInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_twofactormethodsinfo.htm) object. If successful, it returns an instance of Auth.HeadlessUserDiscoveryResponse with the user ID. If something goes wrong, it returns an instance of Auth.HeadlessUserDiscoveryResponse with a custom error message. In this example, it returns error messages when the email address format isn't valid, the email address isn't verified, there's no user with that email address, or there are multiple users with that email address.

For users logging in with SMS, the custom logic is similar. It checks whether the phone number passed in the login hint is in a valid format. Then, it looks for a verified Salesforce phone number that matches the phone number passed in the login hint. If successful, it returns an instance of Auth.HeadlessUserDiscoveryResponse with the user ID, and if not, it returns custom error messages.

```

```

## Code Examples

```apex
/*
 * Headless User Discovery Handler
 */
global class MyHeadlessUserDiscoveryHandler implements Auth.HeadlessUserDiscoveryHandler {


  /*
  * This method handles the logic to determine the user account based on the loginHint and verificationMethod
  */
  global Auth.HeadlessUserDiscoveryResponse discoverUserFromLoginHint(Id networkId, String loginHint, 
  Auth.VerificationAction verificationAction, String customDataJson, Map<String,String>requestAttributes) {
    if (verificationAction == Auth.VerificationAction.EMAIL) {
      return doLookupByVerifiedEmail(loginHint, verificationAction);
    } else if (verificationAction == Auth.VerificationAction.SMS) {
      return doLookupByVerifiedMobile(loginHint, verificationAction);
    } else {
      return new Auth.HeadlessUserDiscoveryResponse(null, 'Unsupported Auth.VerificationAction');
    }
  }

  private Auth.HeadlessUserDiscoveryResponse doLookupByVerifiedEmail(String loginHint, Auth.VerificationAction verificationAction) {
    if (String.isBlank(loginHint) || !isValidEmail(loginHint)) {
      return new Auth.HeadlessUserDiscoveryResponse(null, 'Invalid email sent as loginHint: ' + loginHint);
    }
    // Search for an user account by email
    List<User> users = [SELECT Id FROM User WHERE Email = :loginHint AND IsActive = TRUE];
    if (!users.isEmpty() && users.size() == 1) {
      Id userId = users[0].Id;
      // Check if the user has a verified email
      List<TwoFactorMethodsInfo> verifiedInfo = [SELECT HasUserVerifiedEmailAddress FROM TwoFactorMethodsInfo WHERE UserId = :userId];
      if (!verifiedInfo.isEmpty() && verifiedInfo[0].HasUserVerifiedEmailAddress == true) {
        // Prepare and return HeadlessUserDiscoveryResponse with userId
        return new Auth.HeadlessUserDiscoveryResponse(new Set<Id>{userId}, null);
      } else {
        // Return HeadlessUserDiscoveryResponse with error message
        return new Auth.HeadlessUserDiscoveryResponse(null, 'Email ' + loginHint + ' not verified for the given user account');
      }
    } else {
      if (users.isEmpty()) {
        return new Auth.HeadlessUserDiscoveryResponse(null, 'No user identified for the email: ' + loginHint);
      } else {
        return new Auth.HeadlessUserDiscoveryResponse(null, 'Multiple users identified for the email: ' + loginHint);
      }
    }
  }

  private Auth.HeadlessUserDiscoveryResponse doLookupByVerifiedMobile(String loginHint, Auth.VerificationAction verificationAction) {
    String formattedSms = !String.isBlank(loginHint) ? getFormattedSms(loginHint) : null;
    if (String.isBlank(formattedSms)) {
      return new Auth.HeadlessUserDiscoveryResponse(null, 'Invalid phone number sent as loginHint: ' + loginHint);
    }
    // Search for an user account by phone
    List<User> users = [SELECT Id FROM User WHERE MobilePhone = :loginHint AND IsActive = TRUE];
    if (!users.isEmpty() && users.size() == 1) {
      Id userId = users[0].Id;
      // Check if the user has a verified phone
      List<TwoFactorMethodsInfo> verifiedInfo = [SELECT HasUserVerifiedMobileNumber FROM TwoFactorMethodsInfo WHERE UserId = :userId];
      if (!verifiedInfo.isEmpty() && verifiedInfo[0].HasUserVerifiedMobileNumber == true) {
        // Prepare and return HeadlessUserDiscoveryResponse with userId
        return new Auth.HeadlessUserDiscoveryResponse(new Set<Id>{userId}, null);
      } else {
        // Return HeadlessUserDiscoveryResponse with error message
        return new Auth.HeadlessUserDiscoveryResponse(null, ' ' + loginHint + ' not verified for the given user account');
      }
    } else {
      if (users.isEmpty()) {
        return new Auth.HeadlessUserDiscoveryResponse(null, 'No user identified for the phone number: ' + loginHint);
      } else {
        return new Auth.HeadlessUserDiscoveryResponse(null, 'Multiple users identified for the phone number: ' + loginHint);
      }
    }
  }

  private boolean isValidEmail(String identifier) {
    String emailRegex = '^[a-zA-Z0-9._|\\\\%#~`=?&/$^*!}{+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
    // source: http://www.regular-expressions.info/email.html 
    Pattern EmailPattern = Pattern.compile(emailRegex);
    Matcher EmailMatcher = EmailPattern.matcher(identifier);
    if (EmailMatcher.matches()) { return true; }
    else { return false; }
  }

  private String getFormattedSms(String identifier) {
    // Accept SMS input formats with 1 or 2 digits country code, 3 digits area code and 7 digits number
    // You can customize the SMS regex to allow different formats
    String smsRegex = '^(\\+?\\d{1,2}?[\\s-])?(\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4})$';
    Pattern smsPattern = Pattern.compile(smsRegex);
    Matcher smsMatcher = SmsPattern.matcher(identifier);
    if (smsMatcher.matches()) {
      try {
        // Format user input into the verified SMS format '+xx xxxxxxxxxx' before DB lookup
        // Append US country code +1 by default if no country code is provided
        String countryCode = smsMatcher.group(1) == null ? '+1' : smsMatcher.group(1);
        return System.UserManagement.formatPhoneNumber(countryCode, smsMatcher.group(2));
      } catch(System.InvalidParameterValueException e) {
        return null;
      }
    } else { return null; }
  }
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- HeadlessUserDiscoveryHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm)
- HeadlessUserDiscoveryHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm)
- discoverUserFromLoginHint(networkId, loginHint, verificationAction, customDataJson, requestAttributes) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Auth.VerificationAction (atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationAction.htm)
- Auth.HeadlessUserDiscoveryResponse (atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm)
