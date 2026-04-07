---
title: "SFUserAccountManager Class"
domain: mobile-sdk
topic: sfuseraccountmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.382Z
estimatedTokens: 1113
keywords: [SFUserAccountManager, access, authenticated, accounts, add, new, log, switch]
---

# SFUserAccountManager Class

> The SFUserAccountManager class provides methods to access authenticated accounts, add new
accounts, log out accounts, and switch between accounts.

# SFUserAccountManager Class

The SFUserAccountManager class provides methods to access authenticated accounts, add new accounts, log out accounts, and switch between accounts.

To access the singleton SFUserAccountManager instance, send the following message:

```

```

## Properties

| Property | Description |
| --- | --- |
| @property (nonatomic, strong) SFUserAccount *currentUser | The current user account.  If the user has never logged in, this property may be nil. |
| @property (nonatomic, readonly) NSString *currentUserId | A convenience property to retrieve the current user's ID. This property is an alias for currentUser.credentials.userId. |
| @property (nonatomic, readonly) NSString *currentCommunityId | A convenience property to retrieve the current user's community ID. This property is an alias for currentUser.communityId. |
| @property (nonatomic, readonly) NSArray *allUserAccounts | An NSArray of all the SFUserAccount instances for the app. |
| @property (nonatomic, readonly) NSArray *allUserIds | Returns an array that contains all user IDs. |
| @property (nonatomic, copy) NSString *activeUserId | The most recently active user ID. If the user that’s specified by activeUserId is removed from the accounts list, this user may be temporarily different from the current user. |
| @property (nonatomic, strong) NSString *loginHost | The host to be used for login. |
| @property (nonatomic, assign) BOOL retryLoginAfterFailure | A flag that controls whether the login process restarts after it fails. The default value is YES. |
| @property (nonatomic, copy) NSString *oauthCompletionUrl | The OAuth callback URL to use for the OAuth login process. Apps can customize this property. By default, the property’s value is copied from the SFDCOAuthRedirectUri property in the main bundle. The default value is @"testsfdc:///mobilesdk/detect/oauth/done". |
| @property (nonatomic, copy) NSSet *scopes | The OAuth scopes that are associated with the app. |

## Methods

| Method | Description |
| --- | --- |
| - (NSString*) userAccountPlistFileForUser:(SFUserAccount*)user | Returns the path of the .plist file for the specified user account. |
| - (void) addDelegate:(id<SFUserAccountManagerDelegate>)delegate | Adds a delegate to this user account manager. |
| - (void) removeDelegate:(id<SFUserAccountManagerDelegate>)delegate | Removes a delegate from this user account manager. |
| - (SFLoginHostUpdateResult*)updateLoginHost | Sets the app-level login host to the value in app settings. |
| - (BOOL)loadAccounts:(NSError**)error | Loads all accounts. |
| - (SFUserAccount*)createUserAccount | Can be used to create an empty user account if you want to configure all of the account information yourself. Otherwise, use [SFAuthenticationManager loginWithCompletion:failure:] to automatically create an account when necessary. |
| - (SFUserAccount*) userAccountForUserId:(NSString*)userId | Returns the user account that’s associated with a given user ID. |
| - (NSArray*) accountsForOrgId:(NSString*)orgId | Returns all accounts that have access to a particular organization. |
| - (NSArray *) accountsForInstanceURL:(NSString *)instanceURL | Returns all accounts that match a particular instance URL. |
| - (void)addAccount:(SFUserAccount *)acct | Adds a user account. |
| - (BOOL) deleteAccountForUserId:(NSString*)userId error:(NSError **)error | Removes the user account that’s associated with the given user ID. |
| - (void)clearAllAccountState | Clears the account’s state in memory (but doesn’t change anything on the disk). |
| - (void) applyCredentials: (SFOAuthCredentials*)credentials | Applies the specified credentials to the current user. If no user exists, a user is created. |
| - (void)applyCustomDataToCurrentUser: (NSDictionary*)customData | Applies custom data to the SFUserAccount that can be accessed outside that user's sandbox. This data persists between app launches. Because this data will be serialized, make sure that objects that are contained in customData follow the NSCoding protocol.ImportantUse this method only for nonsensitive information. |
| - (void)switchToNewUser | Switches from the current user to a new user context. |
| - (void)switchToUser:(SFUserAccount *)newCurrentUser | Switches from the current user to the specified user account. |
| - (void) userChanged:(SFUserAccountChange)change | Informs the SFUserAccountManager object that something has changed for the current user. |

## Code Examples

```
[SFUserAccountManager sharedInstance]
```

```
- (NSString*)
userAccountPlistFileForUser:(SFUserAccount*)user
```

```
- (void)
addDelegate:(id<SFUserAccountManagerDelegate>)delegate
```

```
- (void)
removeDelegate:(id<SFUserAccountManagerDelegate>)delegate
```

```
- (SFUserAccount*)
userAccountForUserId:(NSString*)userId
```
