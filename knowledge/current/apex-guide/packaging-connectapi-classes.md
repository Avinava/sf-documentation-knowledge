---
title: "Packaging ConnectApi Classes"
domain: apex-guide
topic: packaging-connectapi-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.885Z
estimatedTokens: 265
keywords: [Packaging, ConnectApi, Classes, include, package, aware, Chatter, dependencies]
---

# Packaging ConnectApi Classes

> If you include ConnectApi classes in a
        package, be aware of Chatter dependencies.

# Packaging ConnectApi Classes

If you include ConnectApi classes in a package, be aware of Chatter dependencies.

If a ConnectApi class has a dependency on Chatter, the code can be compiled and installed in orgs that don’t have Chatter enabled. However, if Chatter isn’t enabled, the code throws an error at run time.

```

```

In its reference documentation, every ConnectApi method indicates whether or not it supports Chatter.

#### See Also

-   [Develop and Distribute Apex for Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_chapter.htm "As an independent software vendor (ISV) or Salesforce partner, you can distribute Apex code to customer orgs by using managed packages. For first-generation managed packages (1GP) and migrated second-generation managed packages (2GP), use versioning to evolve components of your managed package gracefully without breaking existing customer integrations. Understand how global Apex in managed packages behaves and learn how to develop global Apex in managed packages specifically for agents.")

## Code Examples

```apex
System.NoAccessException: Insufficient Privileges: This feature is not currently enabled for this user.
```

## Related Topics

- Develop and Distribute Apex for Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_chapter.htm)
