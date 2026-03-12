---
title: "Auth Exceptions"
domain: apex-reference
topic: auth-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.629Z
estimatedTokens: 980
namespace: Auth
keywords: [Auth, Exceptions, contains, exception, classes., Examples]
---

# Auth Exceptions

> The Auth namespace contains some exception
    classes.

**Namespace:** `Auth`

# Auth Exceptions

The Auth namespace contains some exception classes.

All exception classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.").

The Auth namespace contains the following exception.

| Exception | Description |
| --- | --- |
| Auth.​AuthProviderPluginException | Throw this exception to indicate that an error occurred when using the auth provider plug-in. Use to display a custom error message to the user. To get the error message and write it to debug log, use the String getMessage(). |
| Auth.​ConnectedAppPlugin​Exception | Throw this exception to indicate that an error occurred while running the custom behavior for a connected app. To get the error message and write it to debug log, use the String getMessage(). |
| Auth.DiscoveryCustomErrorException | Throw this exception to customize error messages that appear on Discovery logins and Configurable Self-Registration pages. An error message can have up to 200 characters. Use custom error exceptions to localize error messages.Include this exception in:Auth.MyDomainLoginDiscoveryHandler to show a custom error message on the My Domain login pageAuth.LoginDiscoveryHandler to show an error message on the Experience Cloud site login pageAuth.ConfigurableSelfRegHandler to show an error message on the Experience Cloud site self-registration Verify pageThe Verify page shows up if you configured self-registration with either an Email or Text Message verification method. If you didn’t set up sign-up with a verification method, the error message appears on the self-registration page.To get the error message and write it to debug log, use the String getMessage(). |
| Auth.JWTBearerTokenExchange.​JWTBearerTokenExchangeException​ | Throw this exception to indicate a problem with the response from the token endpoint in the JWTBearerTokenExchange class. This exception occurs during the OAuth 2.0 JWT bearer token flow when the HTTP response:Fails to return an access tokenIsn’t in JSON formatReturns a response code other than a 200 “OK” success codeTo get the error message and write it to debug log, use the String getMessage(). |
| Auth.JWTValidationException | Throws this exception to indicate failure to validate a JWT using methods in the JWTUtil class. This exception occurs during the OAuth 2.0 token exchange flow in these scenarios.Can’t parse the JWTCan’t validate the JWT using a certificate, a public key, or the remote keys endpoint, depending on which method you use |
| Auth.LoginDiscoveryException | Throw this exception to indicate that an error occurred when executing the Login Discovery handler. For an example, see LoginDiscoveryHandler Example Implementation. To get the error message and write it to debug log, use the String getMessage(). |
| Auth.VerificationException | Throw this exception to trigger verification based on the passed-in policy. You can throw this exception in an Apex trigger or Visualforce controller. The system automatically sends you to the verification endpoint, if possible.NoteYou can’t catch this exception. The exception immediately triggers the verification. |

## Examples

This example uses AuthProviderPluginException to throw a custom exception in a custom authentication provider implementation. Use this exception if you want the end user to see a specific message, passing in the error message as a parameter. If you use another exception, users see a standard Salesforce error message.

```

```

This example uses Auth.VerificationException to trigger verification if a user attempts to create an account without a high assurance session.

```

```

## Code Examples

```apex
global override Auth.OAuthRefreshResult refresh(Map<string,string> authProviderConfiguration,String refreshToken){
            HttpRequest req = new HttpRequest();
            String accessToken = null;
            String error  = null;
            try {
            
            // DEVELOPER TODO: Make a refresh token flow using refreshToken passed 
            // in as an argument to get the new access token
            // accessToken = ... 
            } catch (System.CalloutException e) {
            error = e.getMessage();
            }
            catch(Exception e) {
            error = e.getMessage();
            throw new Auth.AuthProviderPluginException('My custom error');
            }
            
            return new Auth.OAuthRefreshResult(accessToken,refreshToken, error);                
            }
```

```apex
trigger testTrigger on Account (before insert) {
    Map<String, String> sessionMap = auth.SessionManagement.getCurrentSession();
    if(!sessionMap.get('SessionSecurityLevel').equals('HIGH_ASSURANCE')) {
        throw new Auth.VerificationException(
            Auth.VerificationPolicy.HIGH_ASSURANCE, 'Insert Account');
    }
}
```

## Related Topics

- Exception Class and Built-In Exceptions (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)
