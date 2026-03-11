---
title: "Use the with sharing, without sharing, and inherited sharing Keywords"
domain: apex-guide
topic: use-the-with-sharing-without-sharing-and-inherited-sharing-keywords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.589Z
keywords: [sharing, without, inherited, Keywords, Tip, Sharing, Without, Inherited, Warning, Example, Omitted, Declarations, Important, Implementation, Apex, Triggers, Details, Best, Practices]
---

# Use the with sharing, without sharing, and inherited sharing Keywords

# Use the with sharing, without sharing, and inherited sharing Keywords

Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

For information about how sharing rules are defined, see [Sharing Rules](https://help.salesforce.com/s/articleView?id=platform.security_about_sharing_rules.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## With Sharing

Use the with sharing keyword when declaring a class to enforce sharing rules of the current user. Explicitly setting this keyword ensures that Apex code runs in the current user context. Apex code that is executed with the executeAnonymous call and Connect in Apex always execute using the sharing rules of the current user. For more information on executeAnonymous, see [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm "An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.").

Use the with sharing keywords when declaring a class to enforce the sharing rules that apply to the current user. For example:

```

```

## Without Sharing

Use the without sharing keyword when declaring a class to ensure that the sharing rules for the current user aren’t enforced. For example, to turn off sharing rule enforcement for a class that’s called by a class that has sharing rules enforced, use the without sharing keyword on the called class.

```

```

## Inherited Sharing

Use the inherited sharing keyword when declaring a class to enforce the sharing rules of the class that calls it. Using inherited sharing is an advanced technique to determine the sharing mode at runtime and design Apex classes that can run in either with sharing or without sharing mode.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Because the sharing mode is determined at runtime, you must take extreme care to ensure that your Apex code is secure to run in both with sharing and without sharing modes.

Using inherited sharing, along with other appropriate security checks, facilitates in passing AppExchange security review and ensures that your privileged Apex code isn’t used in unexpected or insecure ways. An Apex class with inherited sharing runs as with sharing if used as:

-   An Aura component controller
-   An @AuraEnabled method called from a Lightning web component
-   A Visualforce controller
-   An Apex REST service
-   An asynchronous Apex class
-   Any other entry point to an Apex transaction

Using the inherited sharing keyword ensures that the default is to run as with sharing. A class declared as inherited sharing runs as without sharing only if explicitly called from an already established without sharing context.

## Example

This example declares an Apex class with inherited sharing and a Visualforce invocation of that Apex code. Because of the inherited sharing declaration, only contacts for which the running user has sharing access are displayed. If the declaration is omitted, contacts that the user has no rights to view are displayed due to the insecure default behavior.

```

```

```

```

## Omitted Sharing Declarations

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Apex without an explicit sharing declaration is insecure by default. We strongly recommend that you always specify a sharing declaration for a class.

If a class isn’t explicitly declared as either with sharing or without sharing, the current sharing rules remain in effect. Therefore, the class doesn’t enforce sharing rules except if it acquires sharing rules from another class. For example, if the class is called by another class that has sharing enforced, then sharing is enforced for the called class.

There’s a distinct difference between an Apex class that’s explicitly marked with inherited sharing and one with an omitted sharing declaration. For these entry points to an Apex transaction, an omitted sharing declaration defaults to these sharing modes:

-   An Aura component controller: with sharing
-   An @AuraEnabled method called from a Lightning web component: with sharing
-   A Visualforce controller: without sharing
-   An Apex REST service: without sharing
-   An asynchronous Apex class: without sharing
-   Any other entry point to an Apex transaction: without sharing

## Implementation in Apex Triggers

Apex triggers can’t have an explicit sharing declaration. Triggers typically run as without sharing, meaning that sharing rules for the current user aren’t enforced. However, a nested trigger that fires due to the execution of another trigger runs as with sharing in the following circumstances:

-   A DML operation that runs in [user mode](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.") invokes the nested trigger. For example, given this sample code, if an account is inserted into the database, then ContactTrigger1 runs as with sharing.
    
    ```
    
    ```
    
-   A DML operation in a method of a class that enforces sharing rules invokes the nested trigger. The class can enforce sharing rules explicitly with the with sharing declaration or inherit the sharing declaration. For example, given this sample code, if an account is inserted into the database, then ContactTrigger2 runs as with sharing.
    
    ```
    
    ```
    

In both cases, after the nested trigger fires in with sharing mode, subsequent calls to other classes use the declared sharing mode of each class.

## Other Implementation Details

-   The sharing setting of the class where a method is defined is applied, not of the class where the method is called from. For example, if a method is defined in a class declared as with sharing is called by a class declared as without sharing, the method executes with sharing rules enforced.
-   Both inner classes and outer classes can be declared as with sharing. Inner classes do not inherit the sharing setting from their container class. Otherwise, the sharing setting applies to all code contained in the class, including initialization code, constructors, and methods.
-   Classes inherit the sharing setting from a parent class when one class extends another.
-   [Asynchronous Apex](atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm "Apex offers multiple ways for running your Apex code asynchronously. Choose the asynchronous Apex feature that best suits your needs.") classes defined with inherited sharing always run in with sharing mode for asynchronous operations. Each asynchronous operation is a new entry point and the sharing mode is not serialized.

## Best Practices

Apex without an explicit sharing declaration is insecure by default. We strongly recommend that you always specify a sharing declaration for a class.

Regardless of the sharing mode, object-level access and field-level security aren’t enforced by Apex. You must enforce object-level access and field-level security in your SOQL queries or code. For example, with sharing mechanism doesn’t enforce user’s access to view reports and dashboards. You must explicitly enforce the running user’s CRUD (Create, Read, Update, Delete) and field-level security in your code. See [Enforcing Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm "Apex generally runs in system context, so the current user's permissions and field-level security (FLS) aren’t taken into account during code execution. To enforce the FLS and object permissions of the current user, you can enforce user mode for database operations and SOQL queries. You can also check the current user's permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.").

| Sharing Mode | When to Use |
| --- | --- |
| with sharing | Use this mode as the default unless your use case requires otherwise. |
| without sharing | Use this mode with caution. Ensure that you don’t inadvertently expose sensitive data that’s normally hidden by the sharing mode. This sharing mechanism is best used to grant targeted elevation of sharing privileges to the current user.For example, use without sharing to allow community users to read records to which they wouldn’t otherwise have access. |
| inherited sharing | Use this mode for service classes that must be flexible and support use cases with different sharing modes. |

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm "Using the transient Keyword Keyword")