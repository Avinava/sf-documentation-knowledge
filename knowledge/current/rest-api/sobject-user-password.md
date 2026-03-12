---
title: "sObject User Password"
domain: rest-api
topic: sobject-user-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.995Z
estimatedTokens: 506
keywords: [sObject, User, Password, Accesses, passwords, resets, expiration, status, HTTP, retrieve, password’s, POST, initiate, reset]
---

# sObject User Password

> Accesses user passwords based on the specified user ID. Sets,
   resets, or gets the expiration status of a user password based on the HTTP method. Use the GET
   method to retrieve a password’s expiration status, the POST method to set a password, or the
   DELETE method to initiate a password reset.

# sObject User Password

Accesses user passwords based on the specified user ID. Sets, resets, or gets the expiration status of a user password based on the HTTP method. Use the GET method to retrieve a password’s expiration status, the POST method to set a password, or the DELETE method to initiate a password reset.

-   **[Get User Password Expiration Status](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_get.htm)**
    Gets a user’s password expiration status based on the specified user ID. A True or False value is returned in the response body. This resource is available in REST API version 24.0 and later.
-   **[Set User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_post.htm)**
    Sets a user’s password based on the specified user ID. The password provided in the request body replaces the user’s existing password. This resource is available in REST API version 24.0 and later.
-   **[Reset User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_delete.htm)**
    Initiates a password reset for a user based on the specified user ID. The user’s current password becomes invalid and the user receives an email with a password reset link. To log in again, the user must finish resetting their password. This resource is available in REST API version 24.0 and later.
-   **[Return Headers Using sObject User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_head.htm)**
    Returns only the headers that are returned by sending a GET request to the sObject User Password resource. This operation allows you to see returned header values of the GET request before retrieving the content itself. This resource is available in REST API version 24.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships.htm "sObject Relationships")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password.htm "sObject Self-Service User Password")

## Related Topics

- Get User Password Expiration Status (atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_get.htm)
- Set User Password (atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_post.htm)
- Reset User Password (atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_delete.htm)
- Return Headers Using sObject User Password (atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password_head.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password.htm)
