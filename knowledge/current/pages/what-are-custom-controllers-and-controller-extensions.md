---
title: "What are Custom Controllers and Controller Extensions?"
domain: pages
topic: what-are-custom-controllers-and-controller-extensions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.279Z
estimatedTokens: 434
keywords: [Custom, Controllers, Controller, Extensions, Apex, implements, logic, leveraging, standard, want, Visualforce, run, entirely, system, mode]
---

# What are Custom Controllers and Controller Extensions?

> A custom controller is an Apex class that implements all of the logic for a page
   without leveraging a standard controller. Use custom controllers when you want your Visualforce page to run entirely in system
   mode, which does not enforce the permissions and field-level security of the current u

# What are Custom Controllers and Controller Extensions?

A custom controller is an Apex class that implements all of the logic for a page without leveraging a standard controller. Use custom controllers when you want your Visualforce page to run entirely in system mode, which does not enforce the permissions and field-level security of the current user.

A controller extension is an Apex class that extends the functionality of a standard or custom controller. Use controller extensions when:

-   You want to leverage the built-in functionality of a standard controller but override one or more actions, such as edit, view, save, or delete.
-   You want to add new actions.
-   You want to build a Visualforce page that respects user permissions. Although a controller extension class executes in system mode, if a controller extension extends a standard controller, the logic from the standard controller does not execute in system mode. Instead, it executes in user mode, in which permissions, field-level security, and sharing rules of the current user apply.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Custom controllers and controller extension classes execute in system mode, so they ignore user permissions and field-level security. However, you can choose whether they respect a user's organization-wide defaults, role hierarchy, and sharing rules by using the with sharing keywords in the class definition. For information, see “Using the with sharing, without sharing, and inherited sharing Keywords” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "html (New Window)").
