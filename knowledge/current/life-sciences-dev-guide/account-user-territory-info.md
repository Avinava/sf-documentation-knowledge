---
title: "Account User Territory Info"
domain: life-sciences-dev-guide
topic: account-user-territory-info
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.599Z
estimatedTokens: 159
keywords: [Account, User, Territory, Info, users, territories, associacted]
---

# Account User Territory Info

> The details of the users and the territories associacted with the account.

# Account User Territory Info

The details of the users and the territories associacted with the account.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The API response code. | Small, 64.0 | 64.0 |
| message | String | If the parameters were invalid, this property contains the error message. | Small, 64.0 | 64.0 |
| response | Map <String, Object> | Data related to the users and territories | Small, 64.0 | 64.0 |
| success | Boolean | This flag indicates if the request was successful or not.. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "code": "200",
  "message": null,
  "response": {
    "warnings": null,
    "UserTerritoryInfo": [
      {
        "userInformation": {
          "Name": "John Doe",
          "IsActive": true,
          "Username": "jdoe@example.org",
          "Id": "005xx00000ElNh3xxF"
        },
        "territoryInformation": {
          "Name": "RD - Midwest 20A",
          "Id": "0MISxx00000NLzpxxG"
        }
      },
      {
        "userInformation": {
          "Name": "Peter Pan",
          "IsActive": true,
          "Username": "ppan@example.com",
          "Id": "005xx00000Enxi1xxB"
        },
        "territoryInformation": {
          "Name": "RD - Midwest 20A",
          "Id": "0MISxx00000NLzpxxG"
        }
      }
    ],
    "errors": null
  },
  "success": true
}
```
