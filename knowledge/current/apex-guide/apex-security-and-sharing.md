---
title: "Apex Security and
        Sharing"
domain: apex-guide
topic: apex-security-and-sharing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.568Z
keywords: [Apex, Security, Sharing]
---

# Apex Security and
        Sharing

# Apex Security and Sharing

When you use Apex, the security of your code is critical. You'll need to add user permissions for Apex classes and enforce sharing rules. Read on to learn about Apex managed sharing and get some security tips.

-   **[Enforce Sharing Rules](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm)**  
    Apex generally runs in system context, so the current user’s permissions and field-level security aren’t taken into account during code execution. You can use sharing rules to extend a user’s access to specific records, and then enforce sharing rules by using the with sharing keyword on a class declaration. If you declare a class with the without sharing keyword, then sharing rules aren’t enforced.
-   **[Enforce Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm)**  
    Apex generally runs in system context, so the current user's permissions and field-level security (FLS) aren’t taken into account during code execution. To enforce the FLS and object permissions of the current user, you can enforce user mode for database operations and SOQL queries. You can also check the current user's permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.
-   **[Enforce User Mode for Database Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm)**  
    You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.
-   **[Enforce Security with the stripInaccessible Method](atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm)**  
    Use the stripInaccessible method to enforce field-level and object-level data protection. This method can be used to strip the fields and relationship fields from query and subquery results that the user can’t access. The method can also be used to remove inaccessible sObject fields before DML operations to avoid exceptions and to sanitize sObjects that have been deserialized from an untrusted source.
-   **[Filter SOQL Queries Using WITH SECURITY\_ENFORCED](atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_enforced.htm)**  
    Use the WITH SECURITY\_ENFORCED clause to enable field- and object-level security permissions checking for SOQL SELECT queries in Apex code, including subqueries and cross-object relationships.
-   **[Class Security](atlas.en-us.apexcode.meta/apexcode/apex_classes_security.htm)**  
    
-   **[Understanding Apex Managed Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing.htm)**  
    Sharing is the act of granting a user or group of users permission to perform a set of actions on a record or set of records. Sharing access can be granted using the Salesforce user interface and Lightning Platform, or programmatically using Apex.
-   **[Security Tips for Apex and Visualforce Development](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_intro.htm)**