---
title: "Use Expressions to Add Dynamic Data to Aura Sites"
domain: communities-dev
topic: use-expressions-to-add-dynamic-data-to-aura-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.292Z
estimatedTokens: 605
keywords: [Expressions, Add, Dynamic, Data, Aura, Sites, access, pass, component's, attributes]
---

# Use Expressions to Add Dynamic Data to Aura Sites

> With expressions, you can access property values and other information to pass into a
    component's attributes.

# Use Expressions to Add Dynamic Data to Aura Sites

With expressions, you can access property values and other information to pass into a component's attributes.

An expression is any set of literal values, variables, subexpressions, or operators that can be resolved to a single value. Method calls aren’t allowed in expressions.

The expression syntax is: {!expression} where expression is a placeholder for the expression. Add expressions to content regions. Expressions aren't supported in shared regions like the header, hero, and footer sections.

Use these expressions to display the authenticated user’s information, images associated with data categories, or record information on a site page.

| Expression | Displays |
| --- | --- |
| {!CurrentUser.name} | Combined first and last name of the user, as displayed on the user detail page. |
| {!CurrentUser.firstName} | First name of the user, as displayed on the user edit page. |
| {!CurrentUser.lastName} | Last name of the user, as displayed on the user edit page. |
| {!CurrentUser.userName} | Administrative field that defines the user’s login. |
| {!CurrentUser.id} | Salesforce ID of the user. |
| {!CurrentUser.email} | Email address of the user. |
| {!CurrentUser.communityNickname} | Name used to identify the user in a site. |
| {!CurrentUser.accountId} | Account ID associated with the user. This expression displays a valid account ID for partner and customer users. For all others, it displays '000000000000000'. |
| {!CurrentUser.effectiveAccountId} | Account ID associated with the effective account. This expression displays a valid account ID for partner and customer users. For all others, it displays '000000000000000'. |
| {!Global.PathPrefix}/{!DataCategory.Name}.jpg | Image associated with the data category in a search component. |
| {!Global.PathPrefix}/<Name of the Subfolder>/{!DataCategory.Name}.jpg | Image associated with the data category in a subfolder in a search component. |
| {!recordId} | 15-digit record ID on object pages. |
| {!term} | Expression that returns the HTML-encoded search term in the Aura-based standard search page. |

#### See Also

-   [*LWR Sites for Experience Cloud* : Use Expressions in LWR Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_expressions.htm "LWR Sites for Experience Cloud : Use Expressions in LWR Sites - HTML (New Window)")
