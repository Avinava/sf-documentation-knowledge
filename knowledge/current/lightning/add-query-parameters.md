---
title: "Add Query Parameters"
domain: lightning
topic: add-query-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.314Z
estimatedTokens: 394
keywords: [Add, Query, URL, PageReference, state, key-value, pairs, serialized, describe, form, specific, user, save, bookmark]
---

# Add Query Parameters

> To add query parameters to the URL, update the PageReference state property. The key-value pairs of the state property are serialized to URL query parameters. The
    query parameters describe the page and form a more specific URL that the user can save or
    bookmark.

# Add Query Parameters

To add query parameters to the URL, update the PageReference state property. The key-value pairs of the state property are serialized to URL query parameters. The query parameters describe the page and form a more specific URL that the user can save or bookmark.

Keep these behaviors in mind when working with the state property.

-   You can’t directly change the pageReference object. To update the state, create a new pageReference object, and copy the values using Object.assign({}, pageReference).
-   state parameters must be namespaced. For example, a managed package with the namespace abc with a parameter accountId is represented as abc\_\_accountId. The namespace for custom components is c\_\_.Parameters without a namespace are reserved for Salesforce use. This namespace restriction is introduced under a critical update in Winter ’19 and enforced in Summer ’19.
-   Since the key-value pairs of PageReference.state are serialized to URL query parameters, all the values must be strings.
-   Code that consumes values from state must parse the value into its proper format.
-   To delete a value from the state object, define it as undefined.

If your component uses the lightning:hasPageReference or lightning:isUrlAddressable interfaces, always implement a change handler. When the target of a navigation action maps to the same component, the routing container might simply update the pageReference attribute value instead of recreating the component. In this scenario, a change handler ensures that your component reacts correctly.
