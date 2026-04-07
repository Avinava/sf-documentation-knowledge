---
title: "GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/userinfo"
domain: mc-apis
topic: get-yoursubdomainauthmarketingcloudapiscomv2userinfo
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.415Z
estimatedTokens: 624
keywords: [userinfo, account, user, token, Supply, authorization, includes, email, member, MID, enterprise, EID, Application, inclu, _SUBDOMAIN.auth.marketingcloudapis.com, **Overview**]
---

> Gets information for the account and user that are associated with the access token. Supply the access token in the authorization header. User information includes the account name, email, and ID. Account information includes the member ID (MID) and enterprise ID (EID). Application information inclu

# GET YOUR\_SUBDOMAIN.auth.marketingcloudapis.com/v2/userinfo

## **Overview**

Gets information for the account and user that are associated with the access token. Supply the access token in the authorization header. User information includes the account name, email, and ID. Account information includes the member ID (MID) and enterprise ID (EID). Application information includes REST and SOAP base URIs, redirect URIs, and scopes. Permission information includes the permission name and ID. Review [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm).

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
GET /v2/userinfo
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "exp": 1527771992,
  "iss": "https://mc.exacttarget.com",
  "user": {
    "sub": "10654321",
    "name": "Auth_user_name",
    "preferred_username": "Auth_user_preferred_username",
    "email": "example@example.com",
    "locale": "en-GB",
    "zoneinfo": "Europe/London",
    "timezone": {
      "longName": "(GMT) Dublin, Edinburgh, Lisbon, London *",
      "shortName": "GMT+0",
      "offset": 0,
      "dst": true
    }
  },
  "organization": {
    "member_id": 10123456,
    "enterprise_id": 10123456,
    "enterprise_name": "Auth_enterprise_name",
    "account_type": "enterprise",
    "stack_key": "S1",
    "region": "NA1",
    "locale": "en-US",
    "zoneinfo": "America/Los_Angeles",
    "timezone": {
      "longName": "(GMT-08:00) Pacific Time (US & Canada) *",
      "shortName": "GMT-8",
      "offset": -8,
      "dst": true
    }
  },
  "rest": {
    "rest_instance_url": "https://mc563885gzs27c5t9-63k636ttgm.rest.marketingcloudapis.com",
    "soap_instance_url": "https://mc563885gzs27c5t9-63k636ttgm.soap.marketingcloudapis.com"
  },
  "application": {
    "id": "1a23b4cd-5e66-789f-0g1h-2i3a6efb6d80",
    "name": "auth_application_name",
    "redirectUrl": [
      "https://example.example.com*",
      "https://example.com/oauth-authorize",
      "https://example.example.com/***********"
    ],
    "appScopes": [
      "openid",
      "offline",
      "email_read",
      "email_send",
      "email_write"
    ]
  },
  "permissions": [
    {
      "objectTypeName": "Email",
      "operationName": "Update",
      "name": "Update",
      "id": 123
    }
  ]
}
```

Last Updated: Jun 8, 2021
