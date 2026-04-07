---
title: "UserAccountManager Class"
domain: mobile-sdk
topic: useraccountmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.650Z
estimatedTokens: 286
keywords: [UserAccountManager, authenticated, accounts, add, new, log, switch]
---

> The UserAccountManager class provides methods to access authenticated accounts, add new
accounts, log out existing accounts, and switch between existing accounts.

# UserAccountManager Class

The UserAccountManager class provides methods to access authenticated accounts, add new accounts, log out existing accounts, and switch between existing accounts.

You don’t directly create instances of UserAccountManager. Instead, obtain an instance using the following call:

```

```

## Methods

| Method | Description |
| --- | --- |
| public UserAccount getCurrentUser() | Returns the currently active user account. |
| public List<UserAccount> getAuthenticatedUsers() | Returns the list of authenticated user accounts. |
| public boolean doesUserAccountExist(UserAccount account) | Checks whether the specified user account is already authenticated. |
| public void switchToUser(UserAccount user) | Switches the application context to the specified user account. If the specified user account is invalid or null, this method launches the login flow. |
| public void switchToNewUser() | Launches the login flow for a new user to log in. |
| public void signoutUser(UserAccount userAccount, Activity frontActivity) | Logs the specified user out of the application and wipes the specified user’s credentials. |

## Code Examples

```
SalesforceSDKManager.getInstance().getUserAccountManager();
```

## Related Topics

- UserAccount (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracct.htm)
