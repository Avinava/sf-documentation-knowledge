---
title: "UserSwitchReceiver Class"
domain: mobile-sdk
topic: userswitchreceiver-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.412Z
estimatedTokens: 489
keywords: [UserSwitchReceiver, native, Android, app, caches, data, tokens, implement, abstract, receive, notifications, user, switching, events]
---

# UserSwitchReceiver Class

> If your native Android app caches data other than tokens, implement the UserSwitchReceiver abstract class to receive notifications of user
  switching events.

# UserSwitchReceiver Class

If your native Android app caches data other than tokens, implement the UserSwitchReceiver abstract class to receive notifications of user switching events.

Every time a user switch occurs, Mobile SDK broadcasts an intent. The intent action is declared in the UserAccountManager class as:

```

```

This broadcast event gives applications a chance to properly refresh their cached resources to accommodate user switching. To help apps listen for this event, Mobile SDK provides the UserSwitchReceiver abstract class. This class is implemented in the following Salesforce activity classes:

-   SalesforceActivity
-   SalesforceListActivity
-   SalesforceExpandableListActivity

If your main activity extends one of the Salesforce activity classes, you don’t need to implement UserSwitchReceiver.

If you’ve cached only tokens in memory, you don’t need to do anything—Mobile SDK automatically refreshes tokens.

If you’ve cached user data other than tokens, override your activity’s refreshIfUserSwitched() method with your custom refresh actions.

If your main activity does not extend one of the Salesforce activity classes, implement UserSwitchReceiver to handle cached data during user switching.

To set up the broadcast receiver:

1.  Implement a subclass of UserSwitchReceiver.
2.  Register your subclass as a receiver in your activity’s onCreate() method.
3.  Unregister your receiver in your activity’s onDestroy() method.

For an example, see the ExplorerActivity class in the RestExplorer sample application.

If your application is a hybrid application, no action is required.

The SalesforceDroidGapActivity class refreshes the cache as needed when a user switch occurs.

## Methods

A single method requires implementation.

| Method Name | Description |
| --- | --- |
| protected abstract void onUserSwitch(); | Implement this method to handle cached user data (other than tokens) when user switching occurs. |

## Code Examples

```apex
public static final String USER_SWITCH_INTENT_ACTION = 
    "com.salesforce.USERSWITCHED";
```
