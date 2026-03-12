---
title: "Determine a Security Model"
domain: communities-dev
topic: determine-a-security-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.485Z
estimatedTokens: 982
keywords: [Determine, Security, Model, every, case, whether, implement, custom, access, control, rely, declarative, platform, recommend, possible]
---

# Determine a Security Model

> For every use case, determine whether to implement a custom access control model or to
    rely on the declarative platform access control model. We recommend using the platform
    declarative access control model when possible. However, sometimes your requirements call for a
    custom access control model.

# Determine a Security Model

For every use case, determine whether to implement a custom access control model or to rely on the declarative platform access control model. We recommend using the platform declarative access control model when possible. However, sometimes your requirements call for a custom access control model.

If you require a custom access control model:

1.  Remove declarative data permissions, including create, read, update, and delete (CRUD), field-level security (FLS), and sharing, to the objects accessed by the controller from the appropriate user profile and permission set. Declare the controller without sharing.
2.  Implement procedural access control in controllers without sharing. For each affected controller, implement procedural access control logic as required by your security policy.

If you can use the platform’s declarative access control model:

1.  Declare your controller with sharing, and configure the sharing, CRUD permissions for objects, and FLS appropriately for each profile and permission set.

## Choosing a Security Model for your Controller: An Example

Consider a controller that creates a lead. Examples of custom access control include:

-   Requiring a CAPTCHA before a lead is created.
-   Requiring a referral code before a lead is created.
-   Requiring the user to agree to a license agreement before a lead is created.

In each of these examples, the desired policy requires a procedural step that can’t be enforced by declarative sharing, CRUD permissions, or FLS. In these cases, write custom logic in your apex controller to enforce the procedural rules. To ensure that users can access only the underlying data by invoking your controller, you must remove declarative access, including CRUD, FLS, and sharing to the lead object.

However, if your security policy can be mapped to the platform’s CRUD permissions, FLS, and sharing logic, configure the appropriate sharing settings and object CRUD permissions to implement that logic. And then declare your controller with sharing.

Be aware that removing declarative access and relying on without-sharing procedural logic rules comes with some risk.

-   Implement your organization’s security logic via procedural Apex code. Implementation errors, or failure to correctly implement the appropriate profile, record, or stateful access checks, leads to unauthorized data access.
-   If your security policy requires stateful logic, implement custom session management logic to preserve state across requests.
-   Writing procedural access control logic is hard for org admins to maintain and modify quickly.

Removing CRUD permissions and FLS access is the only way to ensure that users must use your controller and can’t use standard controllers to access the underlying objects. Because the platform can’t distinguish between unauthenticated guest users, you often must implement custom access control and deny declarative access to all objects for guest users.

-   **[Unauthenticated Guest User Guidelines](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_guidelines.htm)**
    Consider these guidelines about record ID encryption and providing different levels of access to unauthenticated guest users before you choose a declarative or custom access control model.
-   **[Declarative Access Control Model Examples](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_declarative_access_examples.htm)**
    These code and flow examples use the declarative access control model to provide unauthenticated guest users access to read records.
-   **[Custom Access Control Model Examples](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_custom_access_examples.htm)**
    These code and flow examples use a custom access control model to provide unauthenticated guest users access to create records.

## Related Topics

- Unauthenticated Guest User Guidelines (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_guidelines.htm)
- Declarative Access Control Model Examples (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_declarative_access_examples.htm)
- Custom Access Control Model Examples (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_user_custom_access_examples.htm)
