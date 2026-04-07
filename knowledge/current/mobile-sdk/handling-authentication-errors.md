---
title: "Handling Authentication Errors"
domain: mobile-sdk
topic: handling-authentication-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.292Z
estimatedTokens: 361
keywords: [Handling, Authentication, Errors, Mobile, SDK, error, handlers, display, messages, divert, app, flow, occur, event, user, account, manager, iterates, delegates, gives, chance, handle]
---

> Mobile SDK provides
   default error handlers that display messages and divert the app flow when authentication errors
   occur. In an error event, the user account manager iterates through its delegates and gives them
   the chance to handle the error.

# Handling Authentication Errors

| Swift | Objective-C |
| --- | --- |
| UserAccountManager | SFUserAccountManager |
| UserAccountManagerDelegate | SFUserAccountManagerDelegate |

Mobile SDK provides default error handlers that display messages and divert the app flow when authentication errors occur. In an error event, the user account manager iterates through its delegates and gives them the chance to handle the error.

To insert your own classes into this chain, implement the delegate protocol and override the following method:

**Swift:**

```

```

**Objective-C:**

```

```

A return value of true or YES indicates that the method handled the current error condition. In this case, the user account manager takes no further action for this error. Otherwise, the delegate did not handle the error, and the error handling process falls to the next delegate in the list. If all delegates return false, the user account manager uses its own error handler.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

For authentication error handling, Mobile SDK historically used a customizable list of SFAuthErrorHandler objects in the SFAuthenticationManager shared object. SFAuthenticationManager is now deprecated. If you had customized the authentication error handler list, update your code to use UserAccountManagerDelegate (Swift) or SFUserAccountManagerDelegate (Objective-C).

## Code Examples

```
func userAccountManager(_ accountManager: UserAccountManager, 
               didFailAuthenticationWith: Error, 
                                    info: AuthInfo) -> Bool 
{
    // Provide custom error handling
    //...
    return true
}
```

```
/**
 *
 * @param userAccountManager The instance of SFUserAccountManager
 * @param error The Error that occurred
 * @param info  The info for the auth request
 * @return YES if the error has been handled by the delegate. 
 * SDK will attempt to handle the error if the result is NO.
 */
- (BOOL)userAccountManager:(SFUserAccountManager *)userAccountManager 
                     error:(NSError*)error 
                      info:(SFOAuthInfo *)info {
    // Provide custom error handling
    //...
    return YES;
}
```
