---
title: "Authenticating Using the Salesforce Mobile SDK"
domain: service-sdk-android
topic: authenticating-using-the-salesforce-mobile-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.467Z
estimatedTokens: 1394
keywords: [Authenticating, Salesforce, Mobile, SDK, instructions, describe, how, authenticate, Service, Chat, provided, authentication, mechanism]
---

# Authenticating Using the Salesforce Mobile SDK

> These instructions describe how to authenticate the Service Chat SDK using the
    provided authentication mechanism within the Salesforce Mobile SDK.

# Authenticating Using the Salesforce Mobile SDK

These instructions describe how to authenticate the Service Chat SDK using the provided authentication mechanism within the Salesforce Mobile SDK.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before starting, make sure that you’ve already:

-   Installed the Service Chat SDK. See [Install the Service SDK for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm#ess_sdk_setup_android "Install the Service SDK for Android using Gradle.").
-   Installed the [Salesforce Mobile SDK](https://github.com/forcedotcom/SalesforceMobileSDK-Android). If you want to install this SDK using maven, add a dependency on com.salesforce.mobilesdk:SalesforceSDK:<VERSION\_NUMBER> to your module's build.gradle file.
-   Created a connected app that allows the SDK to authenticate with your Salesforce Experience Cloud site. See [Connected Apps](https://help.salesforce.com/articleView?id=connected_app_overview.htm&language=en_US). For an overview of Salesforce authentication from a mobile device, see [Understand Security and Authentication](https://trailhead.salesforce.com/en/modules/mobile_sdk_introduction/units/mobilesdk_intro_security).

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

#### Note

When creating a connected app, be sure that it has access to the chatter\_api scope. See [Scope Parameter Values](https://help.salesforce.com/articleView?id=remoteaccess_oauth_scopes.htm&language=en_US).

1.  If you're using a Salesforce Experience Cloud site, be sure to configure the login endpoint as described in the Salesforce Mobile SDK documentation ([Configure the Login Endpoint](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/communities_login_endpoint.htm)).

    The documentation describes how to use the first server listed in your servers.xml file as the default login location. For example:

    ```

    ```

2.  Add an account\_type property to strings.xml. The property must be unique to your app to prevent conflicts with other apps that use the Service Chat SDK or the Salesforce Mobile SDK.

    ```

    ```

3.  Implement [AuthenticatedUser](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthenticatedUser.html) as a wrapper to your Mobile SDK user.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    AuthenticatedUser.getUserId must return the Salesforce user ID (UserAccount.getUserId) for the Case Management message feed to display correctly.

4.  Implement [AuthTokenProvider](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthTokenProvider.html) as a wrapper to your Mobile SDK authentication system.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

5.  When your app launches, initialize the Salesforce Mobile SDK.

    ```

    ```

    For more information, see the [SalesforceSDKManager documentation](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/android_native_classes_salesforcesdkmanager.htm) in the Mobile SDK Developer’s Guide.

6.  Write code that allows a user to log in and log out of their org using the Salesforce Mobile SDK. Make sure the user logs in before showing the Service Chat SDK UI.

    For example:

    ```

    ```

7.  When configuring Knowledge (using [KnowledgeConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/knowledge/4.3.6/api/reference/com/salesforce/android/knowledge/core/KnowledgeConfiguration.html)) or Case Management (using [CaseConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/case/4.2.7/api/reference/com/salesforce/android/cases/core/CaseConfiguration.html)), use the withAuthConfig method in the builder and pass in your implementation for [AuthenticatedUser](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthenticatedUser.html) and [AuthTokenProvider](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthTokenProvider.html).

    This code sample illustrates how it works with Knowledge:

    ```

    ```

    This code sample illustrates how it works with Case Management:

    ```

    ```


At this point, you can use the features of the Service Chat SDK as an authenticated user.

## Code Examples

```
<servers>
  <server name="Site Login" url="https://MY_SITE_URL.com"/>
</servers>
```

```
<string name="account_type">com.mycompany.myapp</string>
```

```apex
import com.salesforce.androidsdk.accounts.UserAccount;
import com.salesforce.android.service.common.http.AuthenticatedUser;

public class MobileSdkUser implements AuthenticatedUser {
  private final String mUserId;

  public MobileSdkUser (UserAccount userAccount) {
    mUserId = userAccount.getUserId();
  }

  @Override public String getUserId () {
    return mUserId;
  }
}
```

```apex
class MobileSdkUser(userAccount: UserAccount) : AuthenticatedUser {
  private val mUserId: String

  init {
    mUserId = userAccount.getUserId()
  }

  override fun getUserId(): String {
    return mUserId
  }
}
```

```apex
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.salesforce.android.service.common.http.AuthTokenProvider;
import com.salesforce.android.service.common.http.ResponseSummary;
import com.salesforce.androidsdk.rest.ClientManager;

public class MobileSdkAuthTokenProvider implements AuthTokenProvider {

  private final ClientManager.AccMgrAuthTokenProvider mTokenProvider;
  private String mAuthToken;

  public MobileSdkAuthTokenProvider (ClientManager.AccMgrAuthTokenProvider tokenProvider, 
                                     String initialToken) {
    mTokenProvider = tokenProvider;
    mAuthToken = initialToken;
  }

  @Nullable @Override public String getToken () {
    return mAuthToken;
  }

  @Nullable @Override public String getTokenType () {
    return "Bearer";
  }

  @Override public boolean canRefresh () {
    return true;
  }

  @Override public void refreshToken (@NonNull ResponseSummary responseSummary) {
    mAuthToken = mTokenProvider.getNewAuthToken();
  }
}
```

## Related Topics

- Install the Service SDK for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm)
