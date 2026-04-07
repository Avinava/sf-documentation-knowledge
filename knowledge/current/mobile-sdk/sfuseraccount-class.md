---
title: "SFUserAccount Class"
domain: mobile-sdk
topic: sfuseraccount-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.372Z
estimatedTokens: 620
keywords: [SFUserAccount, user, account, that’s, currently, authenticated, encapsulates, data, uniquely, identify, Function]
---

# SFUserAccount Class

> The SFUserAccount class
represents a single user account that’s currently authenticated.
It encapsulates data that can be used to uniquely identify a user
account.

# SFUserAccount Class

The SFUserAccount class represents a single user account that’s currently authenticated. It encapsulates data that can be used to uniquely identify a user account.

## Properties

You can create SFUserAccount objects directly, from a JSON object, or from a bundle.

| Property | Description |
| --- | --- |
| @property (nonatomic, copy)  NSSet *accessScopes | The access scopes for this user. |
| @property (nonatomic, strong)  SFOAuthCredentials *credentials; | The credentials that are associated with this user. |
| @property (nonatomic, strong)  SFIdentityData *idData; | The identity data that’s associated with this user. |
| @property (nonatomic, copy, readonly)  NSURL *apiUrl; | The URL that can be used to invoke any API on the server side. This URL takes into account the current community if available. |
| @property (nonatomic, copy)  NSString *email; | The user's email address. |
| @property (nonatomic, copy)  NSString *organizationName; | The name of the user's organization. |
| @property (nonatomic, copy)  NSString *fullName; | The user's first and last names. |
| @property (nonatomic, copy)  NSString *userName; | The user's username. |
| @property (nonatomic, strong)  UIImage *photo; | The user's photo, typically a thumbnail of the user. The consumer of this class must set this property at least once in order to use the photo. This class doesn't fetch the photo from the server; it stores and retrieves the photo locally. |
| @property (nonatomic)  SFUserAccountAccessRestriction accessRestrictions; | The access restrictions that are associated with this user. |
| @property (nonatomic, copy)  NSString *communityId; | The current community ID, if the user is logged into a community. Otherwise, this property is nil. |
| @property (nonatomic, readonly, getter = isSessionValid)  BOOL sessionValid; | Returns YES if the user has an access token and, presumably, a valid session. |
| @property (nonatomic, copy)  NSDictionary *customData; | The custom data for the user. Because this data can be serialized, the objects that are contained in customData must follow the NSCoding protocol. |

## Global Function

| Function Name | Description |
| --- | --- |
| NSString *SFKeyForUserAndScope (SFUserAccount *user, SFUserAccountScope scope); | Returns a key that uniquely identifies this user account for the given scope. If you set scope to SFUserAccountScopeGlobal, the same key will be returned regardless of the user account. |

## Code Examples

```
@property (nonatomic, copy) 
NSSet *accessScopes
```

```
@property (nonatomic, strong) 
SFOAuthCredentials *credentials;
```

```
@property (nonatomic, strong) 
SFIdentityData *idData;
```

```
@property (nonatomic, copy, readonly) 
NSURL *apiUrl;
```

```
@property (nonatomic, copy) 
NSString *email;
```
