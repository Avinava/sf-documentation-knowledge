---
title: "sObject Self-Service User Password"
domain: rest-api
topic: sobject-self-service-user-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.739Z
keywords: [sObject, Self-Service, User, Password]
---

# sObject Self-Service User Password

# sObject Self-Service User Password

Accesses self-service user passwords based on the specified user ID. Sets, resets, or gets the expiration status of a self-service user password based on the HTTP method. Use the GET method to retrieve a password’s expiration status, the POST method to set a password, or the DELETE method to initiate a password reset.

-   **[Get Self-Service User Password Expiration Status](atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password_get.htm)**  
    Retrieves a self-service user’s password expiration status based on the specified user ID. A True or False value is returned in the response body. This resource is available in REST API version 24.0 and later.
-   **[Set Self-Service User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password_post.htm)**  
    Sets a self-service user’s password based on the specified user ID. The password provided in the request body replaces the user’s existing password. This resource is available in REST API version 24.0 and later.
-   **[Reset Self-Service User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password_delete.htm)**  
    Initiates a password reset for a self-service user based on the specified user ID. The user’s current password becomes invalid and the user receives an email with a password reset link. To log in again, the user must finish resetting their password. This resource is available in REST API version 24.0 and later.
-   **[Return Headers Using sObject Self-Service User Password](atlas.en-us.api_rest.meta/api_rest/resources_sobject_self_service_user_password_head.htm)**  
    Returns only the headers that are returned by sending a GET request to the sObject Self-Service User Password resource. This operation allows you to see returned header values of the GET request before retrieving the content itself. This resource is available in REST API version 24.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm "sObject User Password")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm "AppMenu Items")