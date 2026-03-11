---
title: "Enforce Sharing Rules"
domain: apex-guide
topic: enforce-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.571Z
keywords: [Enforce, Sharing, Rules, Note, Warning, See]
---

# Enforce Sharing Rules

# Enforce Sharing Rules

Apex generally runs in system context, so the current user’s permissions and field-level security aren’t taken into account during code execution. You can use sharing rules to extend a user’s access to specific records, and then enforce sharing rules by using the with sharing keyword on a class declaration. If you declare a class with the without sharing keyword, then sharing rules aren’t enforced.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex code that is executed with the executeAnonymous call and Connect in Apex always execute using the sharing rules of the current user. See [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm "An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.").

Apex developers must take care not to inadvertently expose sensitive data that would normally be hidden from users by user permissions, field-level security, or organization-wide defaults. They must be particularly careful with Web services, which can be restricted by permissions, but execute in system context after they’re initiated.

Most of the time, system context provides the correct behavior for system-level operations such as triggers and Web services that need access to all data in an organization. However, you can also specify that particular Apex classes should enforce the sharing rules that apply to the current user.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Enforcing sharing rules by using the with sharing keyword doesn’t enforce the user’s permissions and field-level security. Apex always has access to all fields and objects in an organization, ensuring that code won’t fail to run because of fields or objects that are hidden from a user.

This example has two classes, the first class (CWith) enforces sharing rules while the second class (CWithout) doesn’t. The CWithout class calls a method from the first, which runs with sharing rules enforced. The CWithout class contains an inner class, in which code executes under the same sharing context as the caller. It also contains a class that extends it, which inherits its without sharing setting.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Because a class declared as with sharing can call a class declared as without sharing, you may still have to implement class-level security. In addition, all SOQL and SOSL queries that use Pricebook2 ignore the with sharing keyword. All price books are returned, regardless of the applied sharing rules.

Enforcing the current user's sharing rules can impact:

-   SOQL and SOSL queries. A query can return fewer rows than it would operating in system context.
-   DML operations. An operation can fail because the current user doesn't have the correct permissions. For example, if the user specifies a foreign key value that exists in the organization, but which the current user doesn’t have access to, then the DML operation fails.

#### See Also

-   [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.")
    
-   [*Salesforce Help*: Sharing Rules](https://help.salesforce.com/s/articleView?id=platform.security_about_sharing_rules.htm&type=5&language=en_US)