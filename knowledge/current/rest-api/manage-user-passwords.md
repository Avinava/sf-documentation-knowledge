---
title: "Manage User Passwords"
domain: rest-api
topic: manage-user-passwords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.006Z
keywords: [Manage, User, Passwords, See]
---

# Manage User Passwords

# Manage User Passwords

Use the sObject User Password resource to set, reset, or get information about a user password. Use the HTTP GET method to get password expiration status, the HTTP POST method to set the password, and the HTTP DELETE method to reset the password.

The associated session must have permission to access the given user password information. If the session does not have proper permissions, an HTTP error 403 response is returned from these methods.

These methods are available for both users and self-service users. For managing self-service user passwords, use SelfServiceUser instead of User in the REST API URL.

Here is an example of retrieving the current password expiration status for a user:

Example usage for getting current password expiration status

```

```

Example request body for getting current password expiration status

None required

JSON example response body for getting current password expiration status

```

```

XML example response body for getting current password expiration status

```

```

Example error response if session has insufficient privileges

```

```

Here is an example of changing the password for a given user:

Example usage for changing a user password

```

```

Contents for file newpwd.json

```

```

Example response for changing a user password

No response body on successful password change, HTTP status code 204 returned.

Example error response if new password does not meet organization password requirements

```

```

And finally, here is an example of resetting a user password:

Example usage for resetting a user password

```

```

Example request body for resetting a user password

None required

JSON example response body for resetting a user password

```

```

XML example response body for resetting a user password

```

```

#### See Also

-   [sObject User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm "Accesses user passwords based on the specified user ID. Sets, resets, or gets the expiration status of a user password based on the HTTP method. Use the GET method to retrieve a password’s expiration status, the POST method to set a password, or the DELETE method to initiate a password reset.")