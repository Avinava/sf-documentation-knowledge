---
title: "Bypass Object-Level and Field-Level Access Settings"
domain: packagingGuide
topic: bypass-object-level-and-field-level-access-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.136Z
estimatedTokens: 641
keywords: [Bypass, Object-Level, Field-Level, Access, Settings, Design, solutions, enforce, org’s, CRUD, security, FLS, standard, custom, objects]
---

# Bypass Object-Level and Field-Level Access Settings

> Design your solutions to enforce the org’s create, read, update, and delete (CRUD) and
    field-level security (FLS) settings on standard and custom objects.

# Bypass Object-Level and Field-Level Access Settings

Design your solutions to enforce the org’s create, read, update, and delete (CRUD) and field-level security (FLS) settings on standard and custom objects.

On the Salesforce Platform, you can configure CRUD access and FLS on profiles and permission sets. CRUD settings determine which objects a user can access. FLS determines which object fields a user can access. Use CRUD and FLS to restrict access to standard and custom objects and individual fields.

Customers expect that your solution doesn’t violate the settings they have set in their orgs. Design your solutions to enforce the org’s CRUD and FLS settings on standard and custom objects. Also, ensure that your solution gracefully handles situations where a user’s access is restricted.

In certain use cases, it’s acceptable to bypass CRUD and FLS, such as when:

-   Creating Roll-Up summaries or aggregates that don’t directly expose the data.
-   Modifying custom objects or fields, such as logs or system metadata, so that they aren’t directly accessible to the user via CRUD or FLS.
-   Accessing objects from a high-privileged method, a method that non-admin users can’t access.
-   Denying guest user access to underlying objects when your solution is a community or site.
-   Accessing custom objects belonging to your namespace with a bespoke security policy. In this case, document the policy as part of your AppExchange security review submission.

To learn more about CRUD and FLS enforcement, check out [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/ "HTML (New Window)") on Trailhead. To detect CRUD/FLS violations in your code, consider using a code scanner like Salesforce Code Analyzer’s [Salesforce Graph Engine](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/salesforce-graph-engine.html "HTML (New Window)").

## Apex Example

In this Apex code, the insert account data manipulation language (DML) statement runs without checking if the user has create access permission for the Account object. The code doesn’t enforce the org’s access settings.

```

```

This Apex code is more secure because it enforces the org’s access settings. It calls the isCreatable() method before the insert account DML statement executes. If isCreatable() returns true, the user has create access permission for the Account object and the insert account statement executes. Otherwise, an insufficient-access error is reported.

```

```

## Code Examples

```apex
public static Account createIndividualModalData(String name, String email, String mobile) {
   RecordType recordType = [Select Id from RecordType where DeveloperName = 'IndustriesIndividual' and SobjectType = Account'];
   Account account = new Account();
   account.Name = name;

   if(recordType != null) account.RecordTypeId = recordType.id;
   insert account;
    ...
}
```

```apex
public static Account createIndividualModalData(String name, String email, String mobile) {
   RecordType recordType = [Select Id from RecordType where DeveloperName = 'IndustriesIndividual' and SobjectType = 'Account'];
   Account account = new Account();
   account.Name = name;

   if(recordType != null) account.RecordTypeId = recordType.id;

   if (Schema.sObjectType.Account.isCreateable()) {
      insert account;
   } else {
      ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR,'Error: Insufficient Access'));
   }
   ...
}
```
