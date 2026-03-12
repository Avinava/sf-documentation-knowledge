---
title: "Redirecting to a Standard Object List
Page"
domain: pages
topic: redirecting-to-a-standard-object-list-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.018Z
estimatedTokens: 154
keywords: [Redirecting, Standard, buttons, links, navigate, user, tab, redirect, content, present, objects]
---

# Redirecting to a Standard Object List
Page

> For buttons or links that navigate a user to a standard tab, you
can redirect the content to present a list of standard objects.

# Redirecting to a Standard Object List Page

For buttons or links that navigate a user to a standard tab, you can redirect the content to present a list of standard objects.

Create a Visualforce page with the following markup:

```

```

The user will see a page that resembles the following:

Overriding the Account Detail Page ![An Account detail page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fvf_account_list.png&folder=pages)

The Visualforce page can also refer to other standard objects, such as contacts, by changing the reference to the standard object. For example:

```

```

## Code Examples

```
<apex:page action="{!URLFOR($Action.Account.List, $ObjectType.Account)}"/>
```

```
<apex:page action="{!URLFOR($Action.Contact.List, $ObjectType.Contact)}"/>
```
