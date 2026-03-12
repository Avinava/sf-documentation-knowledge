---
title: "Account User Territory Information (POST)"
domain: life-sciences-dev-guide
topic: account-user-territory-information-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.462Z
estimatedTokens: 231
keywords: [Account, User, Territory, POST, including, territories, additional]
---

# Account User Territory Information (POST)

> Get user details, including territories and additional user information.

# Account User Territory Information (POST)

Get user details, including territories and additional user information.

Resource

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON Example

```

```

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | The ID of the user. Using this ID, this API fetches users associated with territories linked to this account. | Required | 64.0 |
| fieldNames | <list>String | The additional user fields that you want to retrieve. The user ID and name is fetched by default. | Optional | 64.0 |

Response body for POST

[AccountUserTerritoryInfoOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_account_user_territory_info.htm "The details of the users and the territories associacted with the account.")

## Code Examples

```
/connect/life-sciences/commercial/account-user-territory-info
```

```
{
"accountId":"00xxG00000n6bbxxAA",
"fieldNames":["City","IsActive","LanguageLocaleKey"]
}
```

## Related Topics

- AccountUserTerritoryInfoOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_account_user_territory_info.htm)
