---
title: "Exposing Data with Apex REST Web Service Methods"
domain: apex-guide
topic: exposing-data-with-apex-rest-web-service-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.929Z
estimatedTokens: 791
keywords: [Exposing, Data, Apex, REST, Web, Service, Invoking, custom, always, uses, system, context, Consequently, current, user's]
---

# Exposing Data with Apex REST Web Service Methods

> Invoking a custom Apex REST Web service method always uses system context.
		Consequently, the current user's credentials are not used, and any user who has access to
		these methods can use their full power, regardless of permissions, field-level security, or
		sharing rules. Developers who expose methods using the Apex REST annotations should
		therefore take care that they are not inadvertently exposing any sensitive data.

# Exposing Data with Apex REST Web Service Methods

Invoking a custom Apex REST Web service method always uses system context. Consequently, the current user's credentials are not used, and any user who has access to these methods can use their full power, regardless of permissions, field-level security, or sharing rules. Developers who expose methods using the Apex REST annotations should therefore take care that they are not inadvertently exposing any sensitive data.

Apex class methods that are exposed through the Apex REST API don’t enforce object permissions and field-level security by default. To enforce object or field-level security while using SOQL SELECT statements in Apex, use the [WITH USER\_MODE](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.") clause. You can strip user-inaccessible fields from query and subquery results, or remove inaccessible sObject fields before DML operations by using the [Security.stripInaccessible](atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm "Use the stripInaccessible method to enforce field-level and object-level data protection. This method can be used to strip the fields and relationship fields from query and subquery results that the user can’t access. The method can also be used to remove inaccessible sObject fields before DML operations to avoid exceptions and to sanitize sObjects that have been deserialized from an untrusted source.") method. You can also use the appropriate object or field describe result methods to check the current user’s access level on the objects and fields that the Apex REST API method is accessing. See [DescribeSObjectResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [DescribeFieldResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm).

Also, sharing rules (record-level access) are enforced only when declaring a class with the with sharing keyword. This requirement applies to all Apex classes, including to classes that are exposed through Apex REST API. To enforce sharing rules for Apex REST API methods, declare the class that contains these methods with the with sharing keyword. See [Using the with sharing or without sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.").

#### See Also

-   [Apex Security and Sharing](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm "When you use Apex, the security of your code is critical. You'll need to add user permissions for Apex classes and enforce sharing rules. Read on to learn about Apex managed sharing and get some security tips.")

## Related Topics

- WITH USER_MODE (atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm)
- Security.stripInaccessible (atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm)
- Using the with sharing or without sharing Keywords (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm)
- Apex Security and Sharing (atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm)
