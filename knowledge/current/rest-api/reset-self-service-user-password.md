---
title: "Reset Self-Service User Password"
domain: rest-api
topic: reset-self-service-user-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.952Z
estimatedTokens: 376
keywords: [Reset, Self-Service, User, Password, Initiates, user’s, current, becomes, invalid, receives, email, link, log, again, finish]
---

# Reset Self-Service User Password

> Initiates a password reset for a self-service user based on the specified user ID. The
  user’s current password becomes invalid and the user receives an email with a password reset link.
  To log in again, the user must finish resetting their password. This resource is available in REST
  API version 24.0 and later.

# Reset Self-Service User Password

Initiates a password reset for a self-service user based on the specified user ID. The user’s current password becomes invalid and the user receives an email with a password reset link. To log in again, the user must finish resetting their password. This resource is available in REST API version 24.0 and later.

Salesforce auto-generates a temporary password for the user and returns it in the response body. If the user can’t access the email link, they can finish resetting their password by logging in with the temporary password.

If the session doesn’t have permission to access the user information, an INSUFFICIENT\_ACCESS error is returned.

## Syntax

URI

/services/data/vXX.X/sobjects/SelfServiceUser/selfServiceUserId/password

Formats

JSON, XML

HTTP Method

DELETE

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
