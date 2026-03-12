---
title: "login()"
domain: api
topic: login
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.394Z
estimatedTokens: 2704
keywords: [login, Logs, server, starts, client, session, Usage, Enterprise, Partner, Endpoints, Endpoint, Base, URLs, Proxy, Expiration]
---

# login()

> Logs in to the login server and starts a client session.

# login()

Logs in to the login server and starts a client session.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api)

#### Important

login() is available in API version 64.0 and earlier, but is disabled by default in new orgs. To enable login(), go to User Interface in Setup and enable Enable SOAP API login(). Enabling the SOAP API login() call can’t be undone in User Interface. After you enable login(), you can disable and enable it using the test run in the related release update.

## Syntax

```

```

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

login() calls count toward your login rate limit.

Use the login() call to log in to the login server and start a client session. The client app logs in and obtains a sessionId and server URL before making other API calls.

When a client app invokes the login() call, it passes in a username and password as credentials. Upon invocation, the API authenticates the credentials. It then returns the sessionId, the user ID associated with the logged-in username, and a URL that points to the Lightning Platform API to use in all subsequent API calls.

Salesforce checks the IP address from which the client app is logging in and blocks logins from unknown IP addresses. If the API blocks the login, Salesforce returns a login fault. To log in, the user must add the security token at the end of the user’s password. For example, if a user's password is mypassword and the security token is XXXXXXXXXX, the user enters mypasswordXXXXXXXXXX. Users get their security token by changing their password or resetting their security token from the Salesforce user interface. When users change their password or reset their security token, Salesforce sends a new security token to the email address on the user’s Salesforce record. The security token is valid until the user resets the security token, or changes the password, or you reset the user’s password. When the security token is invalid, the user must repeat the login process. To avoid another log in, add the client's IP address to the org's list of trusted IP addresses. For more information, see [Security Token](atlas.en-us.api.meta/api/sforce_api_concepts_security.htm "Client apps that access your Salesforce data are subject to the same security protections that are used in the Salesforce user interface. Additional protection is available for orgs that install AppExchange managed packages if those packages contain components that access Salesforce via the API.").

After logging in, make sure that your client app performs these tasks.

-   Sets the session ID in the SOAP header so that the API can validate subsequent requests for this session.
-   Specifies the server URL as the target for subsequent service requests. The login server supports only login calls.

Development tools differ in the way you specify session headers and server URLs. For more information, see the documentation for your particular development tool.

The limit is 3,600 calls to login() per user per hour. Exceeding this limit results in a “Login Rate Exceeded” error. After reaching the hourly limit, Salesforce blocks the user from logging in. Users can try to log in again an hour after the block occurred.

## Enterprise and Partner Endpoints

In API version 11.1 and earlier, client apps built with the partner WSDL can send requests to the enterprise endpoint, and enterprise WSDL apps can send requests to the partner endpoint. Beginning with version 12.0, this functionality is not supported.

## Endpoint Base URLs

When specifying an endpoint for a Salesforce org, there are three options for the base URL.

1.  Recommended: Your My Domain login URL, in the format https://MyDomainName.my.salesforce.com for production orgs and https://MyDomainName\--SandboxName.sandbox.my.salesforce.com for sandboxes.
2.  The default Salesforce login URLs: https://login.salesforce.com for production and Developer Edition orgs and https://test.salesforce.com for sandboxes.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

    #### Note

    Admins can prevent SOAP API logins from the default Salesforce login URLs via a My Domain setting.


All examples use the recommended My Domain login URL format for a production org. To specify an endpoint for a sandbox or to use the default Salesforce login URLs, modify the example as needed.

To understand the benefits of using your My Domain login URL versus the default Salesforce login URL, see [Log In to Salesforce with Code](https://help.salesforce.com/s/articleView?id=products.domain_name_login_code.htm&type=5&language=en_US) in Salesforce Help.

## Login When Using a Proxy

If you log in to Salesforce via a proxy, set the proxy host and port number on the instance of the ConnectorConfig class that you use to log in. If you must authenticate on the proxy, set the username and password.

```

```

## Session Expiration

Client apps aren’t required to explicitly log out to end a session. Sessions expire automatically after a predetermined length of inactivity. The default is two hours. If you make an API call, the inactivity timer is reset to zero. To change the session expiration (timeout) value, from Setup, enter Session Settings in the Quick Find box, and select **Session Settings**.

## Active Self-Service Users Authentication

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Starting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.

To authenticate active self-service users, use [LoginScopeHeader](atlas.en-us.api.meta/api/sforce_api_header_loginscopeheader.htm) to specify the [Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_organization.htm "HTML (New Window)") ID against which self-service users are authenticated. A self-service user must exist and be active before being authenticated (see [SelfServiceUser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_selfserviceuser.htm "HTML (New Window)")).

## Customer Experience Cloud Site User Authentication

To authenticate an active Experience Cloud site user who has the API Enabled permission, use [LoginScopeHeader](atlas.en-us.api.meta/api/sforce_api_header_loginscopeheader.htm) to specify the [Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_organization.htm "HTML (New Window)") ID of the org with Experience Cloud sites. Site users must exist, be active, and belong to the Experience Cloud site before being authenticated.

When specifying an endpoint that authenticates an Experience Cloud site user, the base URL format is https://MyDomainName.my.site.com for a production org and https:/MyDomainName\--SandboxName.sandbox.my.site.com for a sandbox org..

All examples for Experience Cloud Site User Authorization use the base URL format for a production org with enhanced domains enabled. To specify an endpoint for a sandbox org, or if you haven’t yet enabled enhanced domains, update the base URL.

## Example Endpoints

Client apps can send login requests to these endpoints (using valid values for the authentication endpoint).

Enterprise WSDL:

-   String authEndPoint = "https://MyDomainName.my.salesforce.com/services/Soap/c/version/"
-   String authEndPoint = "https://MyDomainName.my.site.com/path-prefix/services/Soap/c/version/"

Partner WSDL:

-   String authEndPoint = "https://MyDomainName.my.salesforce.com/services/Soap/u/version/"
-   String authEndPoint = "https://MyDomainName.my.site.com/path-prefix/services/Soap/u/version/"

## Logout

Salesforce recommends that you always call logout() to end a session when it’s no longer needed. This call ends any child sessions. To provide the most protection, log out the user instead of waiting for the session to expire.

## Sample Code—Java

This sample logs a user in with the specified username, password, and authentication endpoint URL. The sample writes user and session information to the console after a successful login. Before running this sample, replace the values for username, password, and authentication endpoint with valid values.

To learn how to generate and import the web service WSDL needed to make API calls, see [Step 2: Generate or Obtain the Web Service WSDL](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm "To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you.") in the Quick Start.

```

```

## Sample Code—C#

This sample logs a user in using the specified username and password. The result of the login call contains the service endpoint URL, which is the virtual server instance that is servicing your org, and a unique session ID. The sample sets these returned values on the binding. It sets the binding URL to the returned service endpoint. It also sets the session ID on the session header that is used on all API calls. Next, the sample writes user and session information to the console after a successful login. Before running this sample, replace the values for username and password with valid values.

To learn how to generate and import the web service WSDL needed to make API calls, see [Step 2: Generate or Obtain the Web Service WSDL](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm "To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you.") in the Quick Start.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| username | string | Login username. |
| password | string | Login password associated with the specified username. |

The login request size is limited to 10 KB.

## Response

[LoginResult](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm)

## Faults

[LoginFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "An extensive list of core data types and error-handling objects used in API calls.")

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "An extensive list of core data types and error-handling objects used in API calls.")

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Quick Start: SOAP API](atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm)

## Code Examples

```
LoginResult = connection.login(string username, string password);
```

```
ConnectorConfig config = new ConnectorConfig();
config.setUsername(userId);
config.setPassword(passwd);
config.setAuthEndpoint(authEndPoint);
config.setProxy(proxyHost, proxyPort);
// Set the username and password if your proxy must be authenticated
config.setProxyUsername(proxyUsername);
config.setProxyPassword(proxyPassword);
try {
   EnterpriseConnection connection = new EnterpriseConnection(config);
   // etc.
} catch (ConnectionException ce) {
  ce.printStackTrace();
}
```

```apex
public boolean loginSample() {
   boolean success = false;
   String username = "username";
   String password = "password";
   String authEndPoint = "https://MyDomainName.my.salesforce.com/services/Soap/c/24.0/";

   try {
      ConnectorConfig config = new ConnectorConfig();
      config.setUsername(username);
      config.setPassword(password);        

      System.out.println("AuthEndPoint: " + authEndPoint);
      config.setAuthEndpoint(authEndPoint);

      connection = new EnterpriseConnection(config);

      // Print user and session info
      GetUserInfoResult userInfo = connection.getUserInfo();
      System.out.println("UserID: " + userInfo.getUserId());
      System.out.println("User Full Name: " + userInfo.getUserFullName());
      System.out.println("User Email: " + userInfo.getUserEmail());
      System.out.println();
      System.out.println("SessionID: " + config.getSessionId());
      System.out.println("Auth End Point: " + config.getAuthEndpoint());
      System.out
            .println("Service End Point: " + config.getServiceEndpoint());
      System.out.println();

      success = true;
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }

   return success;
}
```

```apex
public bool loginSample()
{
   Boolean success = false;
   string username = "username";
   string password = "password";

   // Create a service object 
   binding = new SforceService();
 
   LoginResult lr;
   try
   {
      Console.WriteLine("
Logging in...
");
      lr = binding.login(username, password);

      /** 
         * The login results contain the endpoint of the virtual server instance 
         * that is servicing your org. Set the URL of the binding 
         * to this endpoint.
         */
      // Save old authentication end point URL
      String authEndPoint = binding.Url;
      // Set returned service endpoint URL
      binding.Url = lr.serverUrl;

      /** Get the session ID from the login result and set it for the 
         * session header that will be used for all subsequent calls.
         */
      binding.SessionHeaderValue = new SessionHeader();
      binding.SessionHeaderValue.sessionId = lr.sessionId;

      // Print user and session info
      GetUserInfoResult userInfo = lr.userInfo;
      Console.WriteLine("UserID: " + userInfo.userId);
      Console.WriteLine("User Full Name: " +
            userInfo.userFullName);
      Console.WriteLine("User Email: " +
            userInfo.userEmail);
      Console.WriteLine();
      Console.WriteLine("SessionID: " +
            lr.sessionId);
      Console.WriteLine("Auth End Point: " +
            authEndPoint);
      Console.WriteLine("Service End Point: " +
            lr.serverUrl);
      Console.WriteLine();

      // Return true to indicate that we are logged in, pointed  
      // at the right URL and have our security token in place.     
      success = true;
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                                 e.Message + "
" + e.StackTrace);
   }
   return success;
}
```

## Related Topics

- Security
            Token (atlas.en-us.api.meta/api/sforce_api_concepts_security.htm)
- LoginScopeHeader (atlas.en-us.api.meta/api/sforce_api_header_loginscopeheader.htm)
- Step 2: Generate or Obtain the Web
               Service WSDL (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)
- LoginResult (atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm)
- LoginFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- Quick Start: SOAP API (atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm)
