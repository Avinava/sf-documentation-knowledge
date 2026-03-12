---
title: "Get User Password Expiration Status"
domain: rest-api
topic: get-user-password-expiration-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.158Z
estimatedTokens: 285
keywords: [Get, User, Password, Expiration, Status, user’s, password, expiration, status, based, specified, user, ID., True, False, returned, response, body., resource, REST]
---

# Get User Password Expiration Status

> Gets a user’s password expiration status based on the specified user ID. A True or False
  value is returned in the response body. This resource is available in REST API version 24.0 and
  later.

# Get User Password Expiration Status

Gets a user’s password expiration status based on the specified user ID. A True or False value is returned in the response body. This resource is available in REST API version 24.0 and later.

If the session doesn’t have permission to access the user information, an INSUFFICIENT\_ACCESS error is returned.

## Syntax

URI

/services/data/vXX.X/sobjects/User/userId/password

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None required

## Example

For examples of getting password information, setting a password, and resetting a password, see [Manage User Passwords](atlas.en-us.api_rest.meta/api_rest/dome_sobject_user_password.htm "Use the sObject User Password resource to set, reset, or get information about a user password. Use the HTTP GET method to get password expiration status, the HTTP POST method to set the password, and the HTTP DELETE method to reset the password.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Manage User Passwords (atlas.en-us.api_rest.meta/api_rest/dome_sobject_user_password.htm)
