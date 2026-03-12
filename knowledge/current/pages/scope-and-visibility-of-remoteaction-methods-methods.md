---
title: "Scope and Visibility of  @RemoteAction Methods Methods"
domain: pages
topic: scope-and-visibility-of-remoteaction-methods-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.787Z
estimatedTokens: 524
namespace: Global
keywords: [Scope, Visibility, @RemoteAction, Apex, either]
---

# Scope and Visibility of  @RemoteAction Methods Methods

> Apex @RemoteAction methods must be static and either global or public.

**Namespace:** `Global`

# Scope and Visibility of @RemoteAction Methods Methods

Apex @RemoteAction methods must be static and either global or public.

Don’t use globally exposed remote actions to perform sensitive operations or to expose nonpublic data. Global remote actions can only call other global methods. You can’t use public remote actions in global components, or in a global scope. Scope escalation results in a compiler error, or for references that are resolved at runtime, a runtime failure. This table describes the restrictions.

| @RemoteAction Scope | Visualforce Page | Non-Global Component | Global Component | iframe | Access Across Packages |
| --- | --- | --- | --- | --- | --- |
| Global Remote Method | Allowed | Allowed | Allowed | Allowed | Allowed |
| Public Remote Method | Allowed | Allowed | Error | Error | Packages must share the namespace. Method must have the @namespaceAccessible annotation. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If a @RemoteAction method is in a managed package and used by Visualforce Remoting, it must have global visibility if user profile or permission set access is used.

When remote actions are accessed via markup they are included indirectly via components, the <apex:include\>, or the <apex:composition\> tags. The scope of the remote method is carried forward into the top-level container (the top-level item in the inclusion hierarchy), which must abide by scope escalation rules.

|  | Top-Level Container |
| --- | --- |
| @RemoteAction Accessed From | Visualforce Page | Non-Global Component | Global Component | iframe |
| Global Component | Allowed | Allowed | Allowed | Allowed |
| Non-Global Component | Allowed | Allowed | Allowed only if non-global component doesn't include public remote methods. | Allowed only if non-global component doesn't include public remote methods. |
| <apex:include> <apex:composition> | Allowed within the same namespace; error if namespaces are different and the included page or its child hierarchy contains public remote methods. | n/a | n/a | Error |
