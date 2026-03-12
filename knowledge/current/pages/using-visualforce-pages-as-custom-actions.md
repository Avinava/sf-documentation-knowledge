---
title: "Using Visualforce Pages as Custom Actions"
domain: pages
topic: using-visualforce-pages-as-custom-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.567Z
estimatedTokens: 526
keywords: [Visualforce, Pages, Custom, Actions, action, design, either, acts, upon, record, provided, standard, controller, finds, records]
---

# Using Visualforce Pages as Custom Actions

> If your Visualforce page is used as a custom action, design it so that it either acts
        upon a single record provided by a standard controller, or finds and acts upon a record, or
        records your custom controller code retrieves.

# Using Visualforce Pages as Custom Actions

If your Visualforce page is used as a custom action, design it so that it either acts upon a single record provided by a standard controller, or finds and acts upon a record, or records your custom controller code retrieves.

## Custom Actions on an Object

A Visualforce page added as a custom action on an object is invoked in the context of a record of that object type. The custom action is passed a specific record ID—the record the user was looking at when the user clicked the custom action. Design the page to act on that specific record type.

Visualforce pages used as custom actions on an object must use the standard controller for that object. Use controller extensions to add custom code, including @RemoteAction methods you can call using JavaScript remoting.

Your custom code could do more than make updates to the originating record. For example, the Create Quick Order custom action searches for matching merchandise. It then creates an invoice and line item, all as part of creating an order for a part. That logic occurs in the context of the originating account record—the invoice is related to the account record where the quick order action was invoked.

When you redirect to a URL internal to your org, the action dialog closes upon completion or programmatically navigating away. If you set up the redirect to point to an external URL, the behavior can vary because an external URL opens in a new browser tab.

## Custom Global Actions

Visualforce pages used as global actions can be invoked in many different places and don’t have a specific record associated with them. They have complete freedom of action, which means it’s up to you to write the code.

More specifically, Visualforce pages used as global actions can’t use *any* standard controller. You must write a custom controller to handle the page. Your code might create one or many records, modify found records, and so on.

When a global action completes, the user is either redirected to a parent record created as part of the action or returned to where they started.
