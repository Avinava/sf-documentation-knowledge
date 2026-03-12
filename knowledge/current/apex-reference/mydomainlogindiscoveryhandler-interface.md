---
title: "MyDomainLoginDiscoveryHandler Interface"
domain: apex-reference
topic: mydomainlogindiscoveryhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.907Z
estimatedTokens: 1370
namespace: Auth
keywords: [MyDomainLoginDiscoveryHandler, handler, implement, Domain, Login, Discovery, interview-based, two-step, process, user, prompted, unique, identifier, email, address]
---

# MyDomainLoginDiscoveryHandler Interface

> The handler used to implement the My Domain Login Discovery page,
      which is an interview-based (two-step) login process. First the user is prompted for a unique
      identifier such as an email address or phone number. Then the handler determines (discovers)
      how to authenticate the user. Either the user enters a password or is directed to an identity
      provider’s login page.

**Namespace:** `Auth`

# MyDomainLoginDiscoveryHandler Interface

The handler used to implement the My Domain Login Discovery page, which is an interview-based (two-step) login process. First the user is prompted for a unique identifier such as an email address or phone number. Then the handler determines (discovers) how to authenticate the user. Either the user enters a password or is directed to an identity provider’s login page.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Implement MyDomainLoginDiscoveryHandler to let My Domain users log in with something other than their username and password. This handler contains the logic to look up the user based on the identifier value entered on the login page. The Auth.MyDomainLoginDiscoveryHandler.login method is invoked when the identifier page is submitted and finds the user that corresponds to the submitted identifier. The Auth.SessionManagement.finishLoginDiscovery method sends the user to the authentication mechanism and then logs in the user.

Register the handler from the My Domain Setup page. Under Authentication Configuration, select the **Discovery** Login Page Type. For Login Discovery Handler, select this handler from the list of Apex classes.

For an example, see [MyDomainLoginDiscoveryHandler Example Implementation](#apex_interface_Auth_MyDomainLoginDiscoveryHandler_Example). For more details, search for My Domain Login Discovery in Salesforce Help.

-   **[MyDomainLoginDiscoveryHandler Method](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm#apex_Auth_MyDomainLoginDiscoveryHandler_methods)**

-   **[MyDomainLoginDiscoveryHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm#apex_interface_Auth_MyDomainLoginDiscoveryHandler_Example)**


## MyDomainLoginDiscoveryHandler Method

MyDomainLoginDiscoveryHandler has the following method.

-   **[login(identifier, startUrl, requestAttributes)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm#apex_Auth_MyDomainLoginDiscoveryHandler_login)**
    Log in a Salesforce user given the specified identifier, such as email or phone number. If successful, redirect the user to the page specified by the start URL.

### login(identifier, startUrl, requestAttributes)

Log in a Salesforce user given the specified identifier, such as email or phone number. If successful, redirect the user to the page specified by the start URL.

#### Signature

public System.PageReference login(String identifier, String startUrl, Map<String,String\> requestAttributes)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier the Salesforce user entered at the login prompt, for example, an email address or phone number.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page users see after successfully logging in to the My Domain subdomain.

requestAttributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.") <[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Information about the login request based on the user’s browser state when accessing the login page. requestAttributes passes in the MyDomainUrl, IpAddress, UserAgent, Platform, Application, City, Country, and Subdivision values. The City, Country, and Subdivision values come from IP address geolocation.

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm#apex_system_pagereference "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

The URL of the page where the user is redirected to complete authentication.

#### Example

Here’s a sample requestAttributes response.

```

```

## MyDomainLoginDiscoveryHandler Example Implementation

Here's an example of the Auth.MyDomainLoginDiscoveryHandler interface. This sample class contains the default logic for My Domain login discovery using password authentication. You can customize the code to ensure it meets your needs. The requestAttributes parameter provides additional information that you can use in the discovery logic. Attributes include MyDomainUrl, IpAddress, UserAgent, and location information (such as Country and City). Use Auth.DiscoveryCustomErrorException to throw custom errors to display on the login page.

To implement this interface, the My Domain login page type must be set to Discovery.

```

```

### Test Class for MyDomainDiscLoginDefaultHandler Class

The following is the test class for MyDomainDiscoveryLoginHandler. For the test to work, your org must have the My Domain login page type set to Discovery.

```

```

## Code Examples

```
CommunityUrl=http://my-dev-ed.my.salesforce.com:5555/discover
IpAddress=55.255.0.0
UserAgent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15
Platform=Mac OSX
Application=Browser
City=San Mateo
Country=United States
Subdivision=California
```

```apex
// This sample class contains the default logic for My Domain login discovery by password. 
// You can customize the code to ensure it meets your needs. The requestAttributes parameter
// provides additional information you can use in the discovery logic. Attributes include MyDomainUrl, 
// IpAddress, UserAgent, and location information (such as Country and City). 
// Use Auth.DiscoveryCustomErrorException to throw custom errors which will be shown on login page.
 global class MyDomainDiscLoginDefaultHandler implements Auth.MyDomainLoginDiscoveryHandler {
 global PageReference login(String identifier, String startUrl, Map<String, String> requestAttributes) 
{
   if (identifier != null) {
        // Search for user by email
        List<User> users = [SELECT Id FROM User WHERE Email = :identifier AND IsActive = TRUE];
        if (!users.isEmpty() && users.size() == 1) {
            return discoveryResult(users[0], startUrl, requestAttributes);
        } else {
            throw new Auth.LoginDiscoveryException('No unique user found. User count=' + users.size());
        }
    }
    throw new Auth.LoginDiscoveryException('Invalid Identifier');
  }
    private PageReference getSsoRedirect(User user, String startUrl, Map<String, String> requestAttributes) {
    // You can look up if the user should log in with SAML or an Auth Provider and return the URL to initialize SSO. For example:
    // SamlSsoConfig SSO = [select Id from SamlSsoConfig where DeveloperName='SamlTest' limit 1];
    // To get the URL for a My Domain subdomain, you can pass null in the communityURL parameter.    
    // String ssoUrl = Auth.AuthConfiguration.getSamlSsoUrl(null, startUrl, SSO.Id);
    // return new PageReference(ssoUrl);
    return null;
  }
     private PageReference discoveryResult(User user, String startUrl, Map<String, String> requestAttributes) 
     {
     PageReference ssoRedirect = getSsoRedirect(user, startUrl, requestAttributes);
      if (ssoRedirect != null) {
        return ssoRedirect;
      } 
      else {
        return Auth.SessionManagement.finishLoginDiscovery(Auth.LoginDiscoveryMethod.password, user.Id);    
      }
   }
}
```

```apex
// Test class for MyDomainDiscLoginDefaultHandler
@isTest
class MyDomainDiscLoginDefaultHandlerTest {
    /* Test Discoverable handler login.
       Create a user with specific email identifier and invoke login.
       Expected : User should be discovered and pagereference should be returned.
     */
    @isTest static void testLogin() {
        // Create user
        String identifierEmail = getUniqueName() + '@test.org';
        createTestUser(identifierEmail);
        Map<String, String> requestAttributes = new Map<String, String>();
        String startUrl = '';
        MyDomainDiscLoginDefaultHandler myDomainDiscLoginDefaultHandler = new MyDomainDiscLoginDefaultHandler();
        // Invoke login method from handler with the email of user created
        PageReference  pageReference = myDomainDiscLoginDefaultHandler.login(identifierEmail, startUrl, requestAttributes);
        // Asser page reference is returned
        System.assertNotEquals(null, pageReference, 'Page reference was not returned');
    }
    /* Test Discoverable handler login with invalid (non-existing) user.
        Expected : Auth.LoginDiscoveryException
     */
    @isTest static void testLoginWithInvalidUser() {
        try {
            Map<String, String> requestAttributes = new Map<String, String>();
            String startUrl = '';
            String uniqueName = getUniqueName();
            String email = uniqueName + '@test.org';
            MyDomainDiscLoginDefaultHandler myDomainDiscLoginDefaultHandler = new MyDomainDiscLoginDefaultHandler();
            // Invoke login method from handler with non-existing user
            myDomainDiscLoginDefaultHandler.login(email, startUrl, requestAttributes);
        }catch (Auth.LoginDiscoveryException loginDiscoveryException) {
            // Assert exception message
            System.assert(loginDiscoveryException.getMessage().contains('No unique user found'), 'message=' + loginDiscoveryException.getMessage());
        }
    }
    /*
       Generate a random name
     */
    private static String getUniqueName() {
        String orgId = UserInfo.getOrganizationId();
        String dateString = String.valueof(Datetime.now()).replace(' ','').replace(':','').replace('-','');
        Integer randomInt = Integer.valueOf(math.rint(math.random()*1000000));
        String uniqueName = orgId + dateString + randomInt;
        return uniqueName;
    }
    /*
      Create user with given email.
     */
    private static void createTestUser(String identifierEmail)
    {
        String uniqueName = getUniqueName();
        Profile pf = [SELECT Id FROM Profile WHERE Name='Standard User'];
        String profileID = pf.Id;
        String fName = 'fname';
        String lName = uniqueName + '-lname'; 
        User tuser = new User(  firstname = fName,
                                lastName = lName,
                                email = identifierEmail,
                                Username = uniqueName + '@test.org',
                                EmailEncodingKey = 'ISO-8859-1',
                                Alias = uniqueName.substring(18, 23),
                                TimeZoneSidKey = 'America/Los_Angeles',
                                LocaleSidKey = 'en_US',
                                LanguageLocaleKey = 'en_US',
                                ProfileId = profileID);
        insert tuser;
    }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- MyDomainLoginDiscoveryHandler Method (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm)
- MyDomainLoginDiscoveryHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm)
- login(identifier, startUrl, requestAttributes) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
