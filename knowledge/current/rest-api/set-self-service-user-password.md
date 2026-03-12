---
title: "Set Self-Service User Password"
domain: rest-api
topic: set-self-service-user-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.117Z
estimatedTokens: 338
keywords: [Set, Self-Service, User, Password, self-service, user’s, password, based, specified, user, ID., provided, request, body, replaces, existing, password., resource, REST, API]
---

# Set Self-Service User Password

> Sets a self-service user’s password based on the specified user ID. The password
  provided in the request body replaces the user’s existing password. This resource is available in
  REST API version 24.0 and later.

# Set Self-Service User Password

Sets a self-service user’s password based on the specified user ID. The password provided in the request body replaces the user’s existing password. This resource is available in REST API version 24.0 and later.

You can only set one password per request. The new password must conform to the password policies for the organization, otherwise an INVALID\_NEW\_PASSWORD error is returned.

If the session doesn’t have permission to access the user information, an INSUFFICIENT\_ACCESS error is returned.

## Syntax

URI

/services/data/vXX.X/sobjects/SelfServiceUser/selfServiceUserId/password

Formats

JSON, XML

HTTP Method

POST

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
