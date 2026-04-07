---
title: "POST /platform/v1/key"
domain: mc-apis
topic: post-platformv1key
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.983Z
estimatedTokens: 640
keywords: [POST, platform, key, Creates, imports, encryption, bring, own, BYOK, TDE, Rest, prerequisite, feature, **Overview**]
---

> Creates or imports an encryption key for bring your own key (BYOK) for TDE. Data at Rest Encryption is a prerequisite for this feature.

# POST /platform/v1/key

## **Overview**

Creates or imports an encryption key for bring your own key (BYOK) for TDE. Data at Rest Encryption is a prerequisite for this feature.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| x-request-id | string |  | Header parameter: Request ID for the request. Default Format: 52e3ca33-c54a-4bbe-824c-419ff9a46860. |
| x-mccs-user-context | string |  | Header parameter: Indicates the MCCS user context. Example: EID=111;MID=111;EmployeeId=111. |
| x-mccs-keystore-provider | string |  | Header parameter: Specify a key store provider to use for an ImportKey or WrappingKey request. Examples: kms, keysecure, database. Default: keysecure. |
| x-mccs-mac | string |  | Header parameter: Specify the message authentication code for the request. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| keyName | string | Required | undefined |
| keyId | string |  | Format: GUID. |
| keyVersion | integer |  | Format: int32. |
| keyType | string | Required | undefined |
| mid | integer | Required | Format: int64. |
| eid | integer |  | Format: int64. |
| keySize | integer | Required | Format: int32. |
| keyState | string |  | undefined |
| exportable | boolean |  | undefined |
| createdDate | string |  | undefined |
| employeeId | integer |  | Format: int32. |
| modifiedDate | string |  | undefined |
| modifiedBy | integer |  | Format: int32. |
| keyData.wrappedRsaBytes | string |  | undefined |
| keyData.digitalSignature | string |  | undefined |
| keyData.initializationVector | string |  | IV may be required when you wrap with an AES key. |
| keyData.wrappedAesBytes | string |  | undefined |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
{
    "keyName": "TDE Key 1",
    "keyType": "RSA",
    "mid": 123,
    "eid": 123,
    "keySize": 2048,
    "keyData": {
        "wrappedRsaBytes": "SampleRsaKeyBytes",
        "wrappedAesBytes": "SampleAesKeyBytes"
    }
}
```

**Example Response**

```js
HTTP/1.1 201 (Created)
{
    "keyName": "TDE Key 1",
    "keyId": "a9c8f1be-3ba1-42ef-b4a5-26f4df5cb0c7",
    "keyVersion": 1,
    "keyType": "RSA",
    "mid": 123,
    "eid": 123,
    "keySize": 2048,
    "keyState": "PreActive",
    "exportable": false,
    "createdDate": "2020-06-17T16:18:30.383"
    "employeeid": 123,
    "modifiedDate": "2020-05-20T15:30:10.21",
    "modifiedBy": 123,
    "imported": false
}
```

Last Updated: Jun 8, 2021
