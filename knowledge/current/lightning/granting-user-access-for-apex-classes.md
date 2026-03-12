---
title: "Granting User Access for Apex Classes"
domain: lightning
topic: granting-user-access-for-apex-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.940Z
estimatedTokens: 360
keywords: [Granting, User, Access, Apex, Classes, authenticated, guest, @AuraEnabled, user’s, profile, assigned, permission]
---

# Granting User Access for Apex Classes

> An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an
   assigned permission set allows access to the Apex class.

# Granting User Access for Apex Classes

An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an assigned permission set allows access to the Apex class.

For details on configuring user profile or permission set access to an Apex class, see [Class Security](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_security.htm "HTML (New Window)") in the Apex Developer Guide.

#### See Also

-   [Creating an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm "Use the Developer Console to create an Apex server-side controller.")

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

-   [Securing Data in Apex Controllers](atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm "By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.")

## Related Topics

- Creating an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Securing Data in Apex Controllers (atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)
