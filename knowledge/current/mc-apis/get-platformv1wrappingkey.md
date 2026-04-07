---
title: "GET /platform/v1/wrappingKey"
domain: mc-apis
topic: get-platformv1wrappingkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.420Z
estimatedTokens: 478
keywords: [platform, wrappingKey, Retrieve, necessary, wrapping, key, RSA, Rest, Encryption, prerequisite, feature, **Overview**]
---

> Retrieve and create, if necessary, the wrapping key - RSA 4096. Data at Rest Encryption is a prerequisite for this feature.

# GET /platform/v1/wrappingKey

## **Overview**

Retrieve and create, if necessary, the wrapping key - RSA 4096. Data at Rest Encryption is a prerequisite for this feature.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| x-request-id | string |  | Header parameter: Request ID for the request. Default Format: c39516e2-55e0-426d-8717-b2efed6d9841. |
| x-mccs-user-context | string |  | Header parameter: Indicates the MCCS user context. Example: EID=111;MID=111;EmployeeId=111. |
| x-mccs-keystore-provider | string |  | Header parameter: Specify a key store provider to use for an ImportKey or WrappingKey request. Examples: kms, keysecure, database. Default: keysecure. |
| x-mccs-mac | string |  | Header parameter: Specify the message authentication code for the request. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/wrappingKey
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 (OK)
Content-Type: text/plain; charset=utf-8
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA2kBDGZIRLUpZXzovqaSR
jqVQQpOJRCUQImYvB4poHilvJ/Euz1p0bW9QPoTV8U8cXGZtd0gLS2zlO3SflFQl
X+6+gPUHne3l7HjWdmKxaIctJpB0rCvQAZlcdmKSzJkKphx0Q+e8nrXjq88AfS8R
X19IscFRJM8UUFJJW5OZTHUopfQ98rqlPzIyHBEGQNKdbVrAmB6RQCITBXWDeS7r
1ioKhV9y55Q3bdqFmK/zKs+quEOkkFYRhEdDpUP7beF0m8wO09c+tLV3N47AmaGs
r7OA+VVhSHLDLc2aAiNUV6XIIFPvJq6s9WNmHnUUw+sCWm0kbMTkAlnPKsMLvvgS
mNTYoGe7F8fsmOx4aP3n+NexvrTrfJkR6akTEqu3UiT3dxWGNndpw+g4TkyRHPHS
ZISCYjc9AxrqCZxO7wLp+u4h82bEMVzgtLmv07FDysero8yr9Skj8T091sNKozd+
N0OeHpvBAmzSkE7TRSnFSoWi0ZkYxqLQvAgb+CVs+WdLCUotGWi3a6NKMfvVTQQ5
PhbCRgWqTIsUai4ovktM5pGL8ZCOg1hI5/8Yyy6sOJ4/okt9K4jxPKA5LJZd4GvR
3Wljz9PjTlHvGR48cPu+pZJWEynd5Qo5jSsqf6Sm0wa2j0lJHGGYDPMpwmuDOV/W
GykDWPMWxMNGcnRuzPVUaP8CAwEAAQ==
-----END PUBLIC KEY-----
```

Last Updated: Jun 8, 2021
