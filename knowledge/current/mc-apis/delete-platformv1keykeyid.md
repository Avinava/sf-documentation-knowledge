---
title: "DELETE /platform/v1/key/{keyId}"
domain: mc-apis
topic: delete-platformv1keykeyid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.511Z
estimatedTokens: 308
keywords: [platform, key, keyId, Deletes, current, MID, Rest, Encryption, prerequisite, feature, **Overview**]
---

> Deletes a key based on the keyId for the current MID. Data at Rest Encryption is a prerequisite for this feature.

# DELETE /platform/v1/key/{keyId}

## **Overview**

Deletes a key based on the keyId for the current MID. Data at Rest Encryption is a prerequisite for this feature.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| keyId | string | Required | ID of the key. Format: UUID. |
| x-request-id | string |  | Header parameter: Request ID for the request. Default Format: 4586c4c7-8504-4cf4-942d-19f99a57c4d9. |
| x-mccs-user-context | string |  | Header parameter: Indicates the MCCS user context. Example: EID=111;MID=111;EmployeeId=111. |
| x-mccs-keystore-provider | string |  | Header parameter: Specify a key store provider to use for an ImportKey or WrappingKey request. Examples: kms, keysecure, database. Default: keysecure. |
| x-mccs-mac | string |  | Header parameter: Specify the message authentication code for the request. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/key/bd48dc1c-161b-4c94-8ee0-ff72a6430317
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 204 (No Content)
Successfully soft deleted meta data and hard deleted from keystore
```

Last Updated: Jun 8, 2021
