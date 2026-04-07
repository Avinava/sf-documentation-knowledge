---
title: "GET /platform/v1/key"
domain: mc-apis
topic: get-platformv1key
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.215Z
estimatedTokens: 387
keywords: [platform, key, Retrieves, metadata, keys, belong, MID, Rest, Encryption, prerequisite, feature, **Overview**]
---

> Retrieves metadata for all keys that belong to a given MID. Data at Rest Encryption is a prerequisite for this feature.

# GET /platform/v1/key

## **Overview**

Retrieves metadata for all keys that belong to a given MID. Data at Rest Encryption is a prerequisite for this feature.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| x-request-id | string |  | Header parameter: Request ID for the request. Default Format: 11ee9b17-5734-4948-98d3-cb4b64e0171c |
| x-mccs-user-context | string |  | Header parameter: Indicates the MCCS user context. Example: EID=111;MID=111;EmployeeId=111. |
| x-mccs-keystore-provider | string |  | Header parameter: Specify a key store provider to use for an ImportKey or WrappingKey request. Examples: kms, keysecure, database. Default: keysecure. |
| x-mccs-mac | string |  | Header parameter: Specify message authentication code for the request. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 (OK)
Content-Type: application/json
{
    "keyName": "TDE Key 1",
    "keyId": "a9c8f1be-3ba1-42ef-b4a5-26f4df5cb0c7",
    "keyVersion": 1,
    "keyType": "RSA",
    "mid": 123,
    "keySize": 2048,
    "keyState": "PreActive",
    "createdDate": "2020-06-17T16:18:30.383"
    "createdBy": 123,
    "modifiedDate": "2020-05-20T15:30:10.21",
    "modifiedBy": 123,
    "exportable": false,
    "useCase": "Tde",
    "securityHash": "YnR2OGRjWWFeKjUiNGM5NDhlZTA=",
    "publicKey": "",
    "imported": false
}
```

Last Updated: Jun 8, 2021
