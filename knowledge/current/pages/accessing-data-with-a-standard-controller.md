---
title: "Accessing Data with a Standard Controller"
domain: pages
topic: accessing-data-with-a-standard-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.396Z
estimatedTokens: 422
keywords: [Accessing, Data, Standard, Controller, Every, includes, getter, record, query, URL, associated, markup, context]
---

# Accessing Data with a Standard Controller

> Every standard controller includes a getter method that returns the record specified by the
            id query string parameter in the page URL. This
         method allows the associated page markup to reference fields on the context record by using
            {!object} syntax, where
           

# Accessing Data with a Standard Controller

Every standard controller includes a getter method that returns the record specified by the id query string parameter in the page URL. This method allows the associated page markup to reference fields on the context record by using {!object} syntax, where object is the lowercase name of the object associated with the controller. For example, a page that uses the Account standard controller can use {!account.name} to return the value of the name field on the account that is currently in context.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For the getter method to succeed, the record specified by the id query string parameter in the URL must be of the same type as the standard controller. For example, a page that uses the Account standard controller can only return an account record. If a contact record ID is specified by the id query string parameter, no data is returned by the {!account} expression.

As with queries in the Lightning Platform API, you can use merge field syntax to retrieve data from related records:

-   You can traverse up to five levels of child-to-parent relationships. For example, if using the Contact standard controller, you can use {!contact.Account.Owner.FirstName} (a three-level child-to-parent relationship) to return the name of the owner of the account record that is associated with the contact.
-   You can traverse one level of parent-to-child relationships. For example, if using the Account standard controller, you can use {!account.Contacts} to return an array of all contacts associated with the account that is currently in context.
