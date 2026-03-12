---
title: "Limit Declarative Access"
domain: communities-dev
topic: limit-declarative-access
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.487Z
estimatedTokens: 262
keywords: [Limit, Declarative, Access, Granting, permission, view, external, users, standard, controllers, Experience, Builder, sites, Salesforce, Tabs]
---

# Limit Declarative Access

> Granting permission to view an object allows external users to view that object using
    standard controllers. Standard controllers are available in Experience Builder sites and
    Salesforce Tabs + Visualforce sites that have Lightning features enabled. These controllers
    grant access based solely on the platform declarative permissions.

# Limit Declarative Access

Granting permission to view an object allows external users to view that object using standard controllers. Standard controllers are available in Experience Builder sites and Salesforce Tabs + Visualforce sites that have Lightning features enabled. These controllers grant access based solely on the platform declarative permissions.

Grant declarative access to create, view, modify, or delete only those objects for which external users are allowed to access without mediation via your controller. The Salesforce platform includes standard controllers that can be used to create, read, update, or delete data. Standard UI controllers enforce the declarative access policies encoded in the platform’s sharing rules, in the create, read, update, and delete (CRUD) permissions, and in field-level security (FLS). If you grant permissions to an external user to view or update an object, they’re able to perform the operation. Don’t grant excessive permissions to any object if you don’t want those permissions exercised.
