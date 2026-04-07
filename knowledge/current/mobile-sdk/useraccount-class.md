---
title: "UserAccount Class"
domain: mobile-sdk
topic: useraccount-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.339Z
estimatedTokens: 829
keywords: [UserAccount, user, account, currently, authenticated, encapsulates, data, uniquely, identify]
---

# UserAccount Class

> The UserAccount class
represents a single user account that is currently authenticated.
It encapsulates data that can be used to uniquely identify a user
account.

# UserAccount Class

The UserAccount class represents a single user account that is currently authenticated. It encapsulates data that can be used to uniquely identify a user account.

## Constructors

You can create UserAccount objects directly, from a JSON object, or from a bundle.

| Constructor | Description |
| --- | --- |
| public UserAccount( 	String authToken,  	String refreshToken, 	String loginServer,  	String idUrl,  	String instanceServer, 	String orgId,  	String userId,  	String username,  	String accountName, 	String clientId, 	String communityId, 	String communityUrl ) | Creates a UserAccount object using values you specify. |
| public UserAccount(JSONObject object) | Creates a UserAccount object from a JSON string. |
| public UserAccount(Bundle bundle) | Creates a UserAccount object from an Android application bundle. |

## Methods

| Method | Description |
| --- | --- |
| public String getOrgLevelStoragePath() | Returns the organization level storage path for this user account, relative to the higher level directory of app data. The higher level directory could be files. The output is in the format /{orgID}/. This storage path is meant for data that can be shared across multiple users of the same organization. |
| public String getUserLevelStoragePath() | Returns the user level storage path for this user account, relative to the higher level directory of app data. The higher level directory could be files. The output is in the format /{orgID}/{userID}/. This storage path is meant for data that is unique to a particular user in an organization, but common across all the communities that the user is a member of within that organization. |
| public String getCommunityLevelStoragePath(String communityId) | Returns the community level storage path for this user account, relative to the higher level directory of app data. The higher level directory could be files. The output is in the format /{orgID}/{userID}/{communityID}/. If communityID is null and then the output would be /{orgID}/{userID}/internal/. This storage path is meant for data that is unique to a particular user in a specific community. |
| public String getOrgLevelFilenameSuffix() | Returns a unique suffix for this user account, that can be appended to a file to uniquely identify this account, at an organization level. The output is in the format _{orgID}. This suffix is meant for data that can be shared across multiple users of the same organization. |
| public String getUserLevelFilenameSuffix() | Returns a unique suffix for this user account, that can be appended to a file to uniquely identify this account, at a user level. The output is in the format _{orgID}_{userID}. This suffix is meant for data that is unique to a particular user in an organization, but common across all the communities that the user is a member of within that organization. |
| public String getCommunityLevelFilenameSuffix(String communityId) | Returns a unique suffix for this user account, that can be appended to a file to uniquely identify this account, at a community level. The output is in the format _{orgID}_{userID}_{communityID}. If communityID is null and then the output would be _{orgID}_{userID}_internal. This suffix is meant for data that is unique to a particular user in a specific community. |

## Code Examples

```apex
public UserAccount(
	String authToken, 
	String refreshToken,
	String loginServer, 
	String idUrl, 
	String instanceServer,
	String orgId, 
	String userId, 
	String username, 
	String accountName,
	String clientId,
	String communityId,
	String communityUrl
)
```
