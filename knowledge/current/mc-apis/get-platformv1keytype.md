---
title: "GET /platform/v1/key/type"
domain: mc-apis
topic: get-platformv1keytype
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.203Z
estimatedTokens: 276
keywords: [platform, key, Retrieves, algorithms, appropriate, lengths, Rest, Encryption, prerequisite, feature, **Overview**]
---

> Retrieves supported key algorithms and appropriate key lengths. Data at Rest Encryption is a prerequisite for this feature.

# GET /platform/v1/key/type

## **Overview**

Retrieves supported key algorithms and appropriate key lengths. Data at Rest Encryption is a prerequisite for this feature.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| x-request-id | string |  | Header parameter: Request ID for the request. Default Format: d0b531e1-9e61-43e4-bf1b-4b8dc49a16c2 |
| x-mccs-user-context | string |  | Header parameter: Indicates the MCCS user context. Example: EID=111;MID=111;EmployeeId=111. |
| x-mccs-keystore-provider | string |  | Header parameter: Specify a key store provider to use for an ImportKey or WrappingKey request. Examples: kms, keysecure, database. Default: keysecure. |
| x-mccs-mac | string |  | Header parameter: Specify the message authentication code for the request. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/key/type
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 (OK)
{
    "key": "RSA",
    "value": 2048
}
```

Last Updated: Jun 8, 2021
