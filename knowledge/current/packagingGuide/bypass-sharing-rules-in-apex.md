---
title: "Bypass Sharing Rules in Apex"
domain: packagingGuide
topic: bypass-sharing-rules-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.172Z
estimatedTokens: 617
keywords: [Bypass, Sharing, Rules, Apex, Respect, profile-based, permissions, field-level, security, org-wide, defaults, code]
---

# Bypass Sharing Rules in Apex

> Respect profile-based permissions, field-level security, sharing rules, and org-wide
    defaults in your Apex code.

# Bypass Sharing Rules in Apex

Respect profile-based permissions, field-level security, sharing rules, and org-wide defaults in your Apex code.

The Salesforce Platform makes extensive use of data-sharing rules. Each object can have unique permissions that indicate which users and profiles can read, create, edit, and delete records of that object type. These restrictions are enforced when your code uses a standard controller.

However, a custom Apex class or Visualforce page doesn’t intrinsically respect built-in profile permissions, field-level security restrictions, or sharing rules. By default, an Apex class can read and update all data within an org.

In your Apex code, don’t expose sensitive data that is otherwise hidden from users. Respect profile-based permissions, field-level security, sharing rules, and org-wide defaults.

Follow these general rules for correctly enforcing sharing.

-   Declare with sharing on all global classes or classes containing @NamespaceAccessible methods. Don’t omit a sharing declaration or use without sharing on these entrypoints to your solution.
-   For controller classes that aren’t global or marked @NamespaceAccessible, either declare the class as with inherited sharing or with sharing. Don’t omit a sharing declaration or use without sharing on these entrypoints to your solution.
-   Declare all classes that directly perform data access operations as with sharing. If no class in your solution is marked without sharing, then with inherited sharing can also be used.

However, there are some notable exceptions. Don’t follow the general rules when:

-   You’re building a site or community and want to deny guest user access to data.
-   You’re accessing custom objects belonging to your namespace with a bespoke security policy. In this case, document the policy as part of your AppExchange security review submission documents. This exception doesn’t apply to standard objects. The org admin solely owns the security policy for standard objects.

## Apex Example

In this Apex code, the with sharing keyword isn’t added to class header. By default, sharing rules aren’t enforced.

```

```

In this Apex code, the with sharing keyword is used. Sharing rules are enforced.

```

```

To learn more about sharing rules enforcement, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/ "HTML (New Window)") on Trailhead.

## Code Examples

```apex
public class maincontroller {
   @AuraEnabled public static String saveJobApplication(String vacId, String userId) {
      ...
   }
}
```

```apex
public with sharing class maincontroller {
   @AuraEnabled public static String saveJobApplication(String vacId, String userId) {
       ...
   }
}
```
