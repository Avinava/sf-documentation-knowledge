---
title: "Return Headers Using sObject Self-Service User Password"
domain: rest-api
topic: return-headers-using-sobject-self-service-user-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.744Z
keywords: [Return, Headers, sObject, Self-Service, User, Password, Syntax, Example, See]
---

# Return Headers Using sObject Self-Service User Password

# Return Headers Using sObject Self-Service User Password

Returns only the headers that are returned by sending a GET request to the sObject Self-Service User Password resource. This operation allows you to see returned header values of the GET request before retrieving the content itself. This resource is available in REST API version 24.0 and later.

If the session doesn’t have permission to access the user information, an INSUFFICIENT\_ACCESS error is returned.

## Syntax

URI

/services/data/vXX.X/sobjects/SelfServiceUser/selfServiceUserId/password

Formats

JSON, XML

HTTP Method

HEAD

Authentication

Authorization: Bearer token

Parameters

None required

## Example

For examples of getting password information, setting a password, and resetting a password, see [Manage User Passwords](atlas.en-us.api_rest.meta/api_rest/dome_sobject_user_password.htm "Use the sObject User Password resource to set, reset, or get information about a user password. Use the HTTP GET method to get password expiration status, the HTTP POST method to set the password, and the HTTP DELETE method to reset the password.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)