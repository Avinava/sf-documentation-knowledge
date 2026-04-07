---
title: "AccountSwitcherActivity Class"
domain: mobile-sdk
topic: accountswitcheractivity-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.327Z
estimatedTokens: 244
keywords: [AccountSwitcherActivity, extend, display, user, switching]
---

# AccountSwitcherActivity Class

> Use or extend the AccountSwitcherActivity class to display the user switching interface.

# AccountSwitcherActivity Class

Use or extend the AccountSwitcherActivity class to display the user switching interface.

The AccountSwitcherActivity class provides the screen that handles multi-user logins. It displays a list of existing user accounts and lets the user switch between existing accounts or sign into a new account. To enable multi-user logins, launch the activity from somewhere in your app using the following code:

```

```

For instance, you might launch this activity from a “Switch User” button in your user interface. See SampleApps/RestExplorer for an example.

If you like, you can customize and stylize AccountSwitcherActivity through XML.

For more control, you can extend AccountSwitcherActivity and replace it with your own custom sub-class. To replace the default class, call SalesforceSDKManager.setAccountSwitcherActivityClass(). Pass in a reference to the class file of your replacement activity class, such as AccountSwitcherActivity.class.

## Code Examples

```
final Intent i = new Intent(this, SalesforceSDKManager.getInstance().
    getAccountSwitcherActivityClass());
i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
this.startActivity(i);
```
