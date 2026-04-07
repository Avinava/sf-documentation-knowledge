---
title: "Handle Custom URLs in Chat"
domain: service-sdk-android
topic: handle-custom-urls-in-chat
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.563Z
estimatedTokens: 806
keywords: [Handle, Custom, URLs, Chat, agents, pass, along, perform, specific, actions, mobile, app]
---

# Handle Custom URLs in Chat

> Have your agents pass along custom URLs to perform specific actions in your mobile
        app.

# Handle Custom URLs in Chat

Have your agents pass along custom URLs to perform specific actions in your mobile app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

When an agent sends a standard link to a user in your app, a preview tile appears that the user can tap to view in a browser. However, you can come up with your own URL scheme that displays a custom tile and performs a custom action within your app.

1.  Create a custom URL scheme and expression.

    Create a URL scheme using the [AppEventList](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/AppEventList.html) class. This class allows you to add URLs either for specific paths (such as action/settings) or using regular expressions (such as action\\\\/a.\*). Patterns are matched in the order that you add them to the [AppEventList](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/AppEventList.html) object. Be sure to add items starting with the most specific and ending with the most generic.

    ```

    ```

2.  Implement the [AppLinkClickListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/AppLinkClickListener.html) so that you can handle when the user taps on the URL.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    In order to minimize or maximize the chat window, you need access to the [ChatUIClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIClient.html) that you used when creating the chat UI.

    ```

    ```

3.  Configure the chat SDK using the [ChatUIConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.html) builder. Add the [AppEventList](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/AppEventList.html) object and the [AppLinkClickListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/AppLinkClickListener.html).

    ```

    ```

## Code Examples

```
// Create an app event list
// TO DO: Replace "servicesdk" with your own unique scheme
AppEventList appEventList = new AppEventList("servicesdk"); 
        
// Add a regular expression for a path
appEventList.addDescriptionForPath("action/settings", "Tap for regex action");

// Add a custom path for a specific path
appEventList.addDescriptionForExpression("action\\/a.*", "Tap for path action");
```

```apex
public static class ChatAppLinkClickListener implements AppLinkClickListener {

  private final Activity mActivity;
  private final ChatUIClient mUIClient;

  // Constructor requires the chat UI client and the activity
  public ChatAppLinkClickListener(ChatUIClient uiClient, Activity activity) {
    mActivity = activity;
    mUIClient = uiClient;
  }

  @Override
  public void didReceiveAppEventWithURL(@NonNull String url) {

    if (url.contains("settings")) {

      // Minimize chat window
      mUIClient.minimize();

      // TO DO: Perform some action for this url. For example:
      Intent intent = new Intent(mActivity, ChatSettingsActivity.class);
      mActivity.startActivity(intent);
    }
    if (url.contains("alert")) {

      // TO DO: Perform some action for this url. For example:
      Toast.makeText(
        mActivity.getApplicationContext(),
        "An example of an alert",
        Toast.LENGTH_SHORT)
      .show();
    }

    // NOTE: You can maximize the chat window using
    //       mUIClient.maximize();

  }
}
```

```
new ChatUIConfiguration.Builder()
  // … other ChatUIConfiguration details
  .chatUIConfigurationBuilder.appEventList(appEventList)
  .appLinkClickListener(new ChatAppLinkClickListener(context))
```
