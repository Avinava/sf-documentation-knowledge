---
title: "Protect Your Application from Sharing Violations"
domain: secure-coding-guide
topic: protect-your-application-from-sharing-violations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.386Z
estimatedTokens: 1095
keywords: [Protect, Application, Sharing, Violations, Enforce, rules, prevent, inadvertent, exposure, sensitive, data, General, Considerations, Enforcing]
---

# Protect Your Application from Sharing Violations

> Enforce sharing rules to prevent inadvertent exposure of sensitive data.

# Protect Your Application from Sharing Violations

Enforce sharing rules to prevent inadvertent exposure of sensitive data.

When using Apex, ensure that you don’t inadvertently expose sensitive data. Apex generally runs in system context, which grants it access to all objects and fields without applying object permissions, field-level security, or sharing rules for the current user. Usually, system context provides the correct behavior for operations, such as triggers, that need access to all data in a Salesforce org. However, you can also specify that certain Apex classes must enforce the sharing rules that apply to the current user.

There are three keywords to remember for sharing rules.

-   With sharing: Use this to enforce the current user's sharing rules for a class. Here's sample code.

    public with sharing class ProjectService { public static List<Project\_\_c> getProjects() { // This query respects sharing rules for Project\_\_c return \[SELECT Id, Name, Status\_\_c FROM Project\_\_c\]; } }

-   Without sharing: Use this to ensure the current user's sharing rules are not enforced for a class. Here's sample code.

    public without sharing class ProjectServiceWithoutSharing { public static List<Project\_\_c> getProjects() { // This query ignores sharing rules for Project\_\_c return \[SELECT Id, Name, Status\_\_c FROM Project\_\_c\]; } }

-   Inherited sharing: Use this to run an Apex class in the same sharing mode as the class that called it. Inherited sharing clarifies intent and avoids ambiguity that can arise from an omitted sharing declaration, helping ensure privileged Apex code isn't used insecurely.

    public inherited sharing class ProjectServiceInheritedSharing { public static List<Project\_\_c> getProjects() { // Sharing mode depends on caller context return \[SELECT Id, Name, Status\_\_c FROM Project\_\_c\]; } }


Enforcing the current user's sharing rules can impact the following.

-   SOQL and SOSL queries: Queries can sometimes return fewer rows than they would in system context.
-   Data Manipulation Language (DML) operations: Operations might fail if the current user lacks the necessary permissions. For example, if a user specifies a foreign key value that they don’t have access to.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

The sharing setting refers to the setting of the class where the method is defined and not the setting of the class where the method is called. For instance, if a method in a with sharing class is called by a without sharing class, the method still executes with sharing rules enforced. Class-level security is always necessary.

## General Considerations for Enforcing Sharing Rules

-   Always include a sharing declaration on classes that have database operations.
-   Generally, declare classes as “with sharing” to ensure principle of least privilege.
    -   Some use cases, such as controller classes, that are accessible to a guest user may be exempted.
-   Always make a conscious decision when declaring a class as “inherited sharing” or “without sharing”.
    -   Don’t grant unauthorized access to users in every possible execution flow.
-   Apex triggers can’t have an explicit sharing declaration and run as without sharing. Therefore, hand code over to Handler classes instead of writing code in triggers.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

You can bypass sharing rules in some cases.

-   When building a site or community and deliberately denying guest user access to underlying data.
-   When accessing custom objects belonging to your namespace with a bespoke security policy. This policy must be documented as part of AppExchange security review submissions. This exception doesn't apply to standard objects, where the Salesforce admin solely owns the security policy.

To learn more about sharing rules enforcement, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/) on Trailhead. You can also look at [Use the with sharing, without sharing, and inherited sharing Keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm) for more information on sharing rules.
