---
title: "Authentication with the  for iOS for
      iOS"
domain: service-sdk-ios
topic: authentication-with-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.973Z
estimatedTokens: 2176
keywords: [Authentication, iOS, Service, Chat, SDK, mechanism, users, user-specific, Cloud, authenticate, SCSAuthenticationSettings, pass, Settings, Flow, Error, Conditions, Sample, Code]
---

> The Service Chat SDK provides an authentication
    mechanism that allows your users to access user-specific information in Service Cloud. To
    authenticate, create an SCSAuthenticationSettings object and
    pass it to the SDK.

# Authentication with the for iOS for iOS

The Service Chat SDK provides an authentication mechanism that allows your users to access user-specific information in Service Cloud. To authenticate, create an SCSAuthenticationSettings object and pass it to the SDK.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Authentication Settings

Authentication with the Service Chat SDK uses an [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object. Create this object with a client ID and a dictionary containing authentication settings. This authentication settings dictionary must contain a URL for your org (SCSOAuth2JSONKeyInstanceUrl) and an access token (SCSOAuth2JSONKeyAccessToken). If your OAuth2 flow supports refresh tokens, include a refresh token (SCSOAuth2JSONKeyRefreshToken) to the authentication settings.

In Swift:

```

```

In Objective-C:

```

```

If you're using the [Salesforce Mobile SDK](https://developer.salesforce.com/page/Mobile_SDK), we provide a helper method that allows you to construct an [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object directly from the Mobile SDK user account. You can use this sample code after you've successfully logged in a user.

In Swift:

```

```

In Objective-C:

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

For developers who plan to use the [Salesforce Mobile SDK](https://developer.salesforce.com/page/Mobile_SDK) for authentication, the [Mobile SDK Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/intro.htm?search_text=SFUserAccount) contains [authentication](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/intro_oauth.htm) instructions. If you're using a Salesforce Experience Cloud site, be sure to configure the login endpoint as described in the Salesforce Mobile SDK documentation ([Configure the Login Endpoint](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/communities_login_endpoint.htm)). This documentation describes how to use the SFDCOAuthLoginHost property in your info.plist file to create a custom login URI.

If you plan to use remote push notification to alert the user when an event occurs in your org, call registerForPushNotifications on the [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object. To learn more, see [Notifications with the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_push_notifications.htm "The Service Chat SDK can display notifications for activity related to Chat.").

However you create an [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object, pass it to the Service Chat SDK during the authentication flow.

## Authentication Flow

You can either authenticate on-demand when the SDK calls [serviceCloud(shouldAuthenticateServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html#/c:objc\(pl\)SCServiceCloudDelegate\(im\)serviceCloud:shouldAuthenticateServiceType:completion:) in your [SCServiceCloudDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html) implementation, or you can authenticate explicitly (that is, before the app attempts to show the relevant UI) using the [setAuthenticationSettings(settings:forServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(im\)setAuthenticationSettings:forServiceType:completion:) method in the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) shared instance.

With on-demand authentication, you perform the authentication asynchronously, after the SDK calls your [serviceCloud(shouldAuthenticateServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html#/c:objc\(pl\)SCServiceCloudDelegate\(im\)serviceCloud:shouldAuthenticateServiceType:completion:) delegate method. Once authenticated, pass the [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object to the completion block that you're given in the [serviceCloud(shouldAuthenticateServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html#/c:objc\(pl\)SCServiceCloudDelegate\(im\)serviceCloud:shouldAuthenticateServiceType:completion:) method.

The following sequence diagram illustrates the basic authentication flow for on-demand authentication.

On-Demand Authentication ![OAuth on demand diagram](/docs/resources/img/en-us/noversion?doc_id=images%2Fios-oauth-diagram-on-demand.png&folder=service_sdk_ios)

Alternatively, you can explicitly authenticate before any UI appears that requires authentication. Call the [setAuthenticationSettings(settings:forServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(im\)setAuthenticationSettings:forServiceType:completion:) method in the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) shared instance using the [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) object.

The following sequence diagram illustrates the authentication flow for explicit authentication.

Explicit Authentication![OAuth explicit diagram](/docs/resources/img/en-us/noversion?doc_id=images%2Fios-oauth-diagram-explicit.png&folder=service_sdk_ios)

To programmatically log out a user, call [setAuthenticationSettings(settings:forServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(im\)setAuthenticationSettings:forServiceType:completion:) using nil for the [SCSAuthenticationSettings](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAuthenticationSettings.html) argument.

## Error Conditions

Implement [serviceCloud(authenticationFailed:forServiceType:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html#/c:objc\(pl\)SCServiceCloudDelegate\(im\)serviceCloud:authenticationFailed:forServiceType:) in your [SCServiceCloudDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html) object to handle error conditions. The SDK calls this method if the access token expires, and for any other scenario that results in an authentication failure. If you return true or YES, the SDK assumes that you want to proceed, and it subsequently calls [serviceCloud(shouldAuthenticateServiceType:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html#/c:objc\(pl\)SCServiceCloudDelegate\(im\)serviceCloud:shouldAuthenticateServiceType:completion:) to give you a chance to send updated authentication information. If you return false or NO, the SDK goes back to the guest user state.

## Sample Code

The following sample code illustrates how to implement an [SCServiceCloudDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCServiceCloudDelegate.html) object to handle authentication.

```

```

## Code Examples

```
// Specify auth info
let myClientId: String = "CLIENT_ID_VALUE"
let authDictionary: [SCSOAuth2JSONKey: String] = 
  [ .instanceUrl : "https://MyDomainName.my.salesforce.com", 
    .accessToken : "ACCESS_TOKEN_VALUE" ]

// Create auth settings object
let authSettings = SCSAuthenticationSettings(oauth2: authDictionary, 
                                             clientId: myClientId)
```

```
// Specify auth info
NSString *myClientId = @"CLIENT_ID_VALUE";
NSDictionary<SCSOAuth2JSONKey, NSString*> *authDictionary = 
  @{ SCSOAuth2JSONKeyInstanceUrl : @"https://URL_FOR_YOUR_ORG.com", 
     SCSOAuth2JSONKeyAccessToken : @"ACCESS_TOKEN_VALUE" };

// Create auth settings object
SCSAuthenticationSettings *authSettings = 
  [[SCSAuthenticationSettings alloc] initWithOAuth2Dictionary: authDictionary 
                                                     clientId: myClientId];
```

```
// Get user account info from the Salesforce Mobile SDK
let identity: SFUserAccountIdentity = 
  SFUserAccountIdentity(userId: myUserId, orgId: myOrgId)
let account: SFUserAccount = 
  SFUserAccountManager.sharedInstance().userAccount(forUserIdentity: identity)!

// Create auth settings object from SFUserAccount
let authSettings = SCSAuthenticationSettings(mobileSDK: account)
```

```
// Get user account info from the Salesforce Mobile SDK
SFUserAccountIdentity *identity = 
  [SFUserAccountIdentityClass identityWithUserId:myUserId orgId:myOrgId];
SFUserAccount *account = 
  [[SFUserAccountManagerClass sharedInstance] userAccountForUserIdentity:identity];

// Create auth settings object from SFUserAccount
SCSAuthenticationSettings *authSettings = 
  [[SCSAuthenticationSettings alloc] initWithMobileSDKAccount:account];
```

```
class MyAuthHandler: NSObject, SCServiceCloudDelegate {
  
  override init() {
    super.init()

    // Subscribe to ServiceCloud events
    ServiceCloud.shared().delegate = self
  }
  
  /**
   Implementation of a `ServiceCloudDelegate` method that allows you to
   authenticate for a given service.
   */
  func serviceCloud(_ serviceCloud: ServiceCloud,
                    shouldAuthenticateServiceType service: SCServiceType,
                    completion: @escaping (SCSAuthenticationSettings?) -> Void) -> Bool {

    // Rather than scrutinize the service to see if we want to authenticate,
    // let's just assume that we always want to authenticate...
    
    // TO DO: Authenticate asynchronously
    let urlRequest = URLRequest.init(url: URL(string: "https://example.com/auth")!)
    URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in

      // TO DO: Populate the `SCSAuthenticationSettings` object from the result.
      var authSettings: SCSAuthenticationSettings?

      // Call the completion block with the authentication settings (asynchronously)
      completion(authSettings)
      
    }.resume()
    
    // Tell the SDK that we do plan to authenticate
    return true
  }
  
  /**
   Implementation of a `ServiceCloudDelegate` method to handle authentication
   failure events.
   */
  func serviceCloud(_ serviceCloud: ServiceCloud,
                    authenticationFailed error: Error,
                    forServiceType service: SCServiceType) -> Bool {

    // For this example, let's not bother handling the error,
    // and just fall back to the guest user state...
    // TO DO: In your code, you should inspect this error.
    // If you want to handle the error, you could
    // return `true` and then you'd be called back in the
    // `shouldAuthenticateServiceType` method above.
    
    return false
  }
}
```

## Related Topics

- Notifications with the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_push_notifications.htm)
