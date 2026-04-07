---
title: "POST /address/v1/validateEmail"
domain: mc-apis
topic: post-addressv1validateemail
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.083Z
estimatedTokens: 309
keywords: [POST, address, validateEmail, Validates, email, specifying, validators, HTTP, validator, call, **Overview**]
---

> Validates an email by specifying the email address and validators to be used in the request body of the HTTP POST. You can use more than one validator in the same call.

# POST /address/v1/validateEmail

## **Overview**

Validates an email by specifying the email address and validators to be used in the request body of the HTTP POST. You can use more than one validator in the same call.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| email | string | Required | Email address to be validated |
| validators | array | Required | List of validators to check email against. Validators include: SyntaxValidator, MXValidator, and ListDetectiveValidator |

### Usage

**Example Request**

```javascript
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /address/v1/validateEmail
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "email": "help@example.com",
  "validators": [ "SyntaxValidator", "MXValidator", "ListDetectiveValidator" ]
}
```

**Example Response**

If the email address is valid, the API returnes this response.

```javascript
{
  "email": "help@example.com",
  "valid": true
}
```

If the email address is not valid, the API returns this response, indicating which validator failed.

```javascript
{
  "email": "this@is@not@a@valid@email@address",
  "valid": false,
  "failedValidation": "SyntaxValidator"
}
```

Last Updated: Jun 8, 2021
