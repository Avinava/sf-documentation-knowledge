---
title: "Use Expressions to Add Dynamic Data to LWR Sites"
domain: exp-cloud-lwr
topic: use-expressions-to-add-dynamic-data-to-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.525Z
estimatedTokens: 1384
keywords: [Expressions, Add, Dynamic, Data, LWR, Sites, calculations, access, Salesforce, content, CMS, pass, component’s, attributes, output]
---

# Use Expressions to Add Dynamic Data to LWR Sites

> With expressions, you can make calculations and access property values and other data
    from Salesforce or content from Salesforce CMS to pass into a component’s attributes. Use
    expressions for dynamic output or for passing values into components by assigning them to
    attributes.

# Use Expressions to Add Dynamic Data to LWR Sites

With expressions, you can make calculations and access property values and other data from Salesforce or content from Salesforce CMS to pass into a component’s attributes. Use expressions for dynamic output or for passing values into components by assigning them to attributes.

An expression is any set of literal values, variables, subexpressions, or operators that can be resolved to a single value. Method calls aren’t allowed in expressions.

The expression syntax is: {!expression} where expression is a placeholder.

## Data Binding Expressions

Use these expressions to bind data from Salesforce or content from Salesforce CMS to your LWR site and dynamically populate content. The expressions work in the following instances.

-   In any field in a data-bound component, such as Banner, Card, Grid, or Tile
-   In an HTML Editor component that’s nested within a data-bound component or placed on a CMS content page or a record detail page
-   In a Rich Content Editor component that’s nested within a data-bound component or placed on a CMS content page or a record detail page (excludes the expression {!cmsMedia.contentKey})

Here’s an example of an HTML Editor component where we want to show an image in the banner.

![HTML Editor with the img src expression](/docs/resources/img/en-us/260.0?doc_id=images%2Fhtml_editor_expressions.png&folder=exp_cloud_lwr)

When the page loads on the live site, the relevant value replaces the expression.

![Banner showing the image rendered by the expression used in HTML Editor](/docs/resources/img/en-us/260.0?doc_id=images%2Frendered_expession.png&folder=exp_cloud_lwr)

| Expression | Description | Supported Pages and Components |
| --- | --- | --- |
| {!Item.field} | Gets the data for the field on the current bound data. | Component properties that can be bound to data from Salesforce or to content from Salesforce CMS |
| {!Item.field._rawValue} | Gets the raw value for the data field. | Component properties that can be bound to data from Salesforce |
| {!Item.field._displayValue} | Gets the formatted and localized value for the data field. | Component properties that can be bound to data from Salesforce |
| {!Item._detailURL} | Gets the URL of a Salesforce CMS data item. | Component properties that can be bound to content from Salesforce CMS, including a CMS content page |
| {!Label.namespace.name} | Defines the label’s localized value when you specify labels in Experience Builder. | First, create a translated custom label in Salesforce Setup. For more information, see Translate Custom Labels. Then, use the label expression in any Experience Builder component that has a text field to see the localized label. |
| {!cmsMedia.contentKey} | Gets the URL of a Salesforce CMS image. | The HTML Editor component on any page in an enhanced LWR site. Unsupported in non-enhanced LWR sites. |

## Other Expressions

Use other expressions to query parameters, resolve the correct basePath for a site, or to leverage user fields in expressions.

| Expression | Description | Supported Pages and Components |
| --- | --- | --- |
| {!Route.param} | Gets a query parameter from the URL. | All pagesOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |
| {!param} | Gets a parameter value from a URL where : precedes the parameter. For example, gets {!term} from the /global-search/:term URL. | All pages with a dynamic parameter in their URLOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |
| {!Site.basePath} | Resolves to the basePath of the LWR site. | All pagesOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |
| {!User.userId} | Resolves to the Salesforce ID of the user. | All pagesOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |
| {!User.isGuest} | Returns TRUE or FALSE based on whether the user is a guest user. | All pagesOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |
| {!User.Record.<User sObject Field>} | Resolves to the value of a Salesforce User Object’s field. | All pagesOut-of-the-box and custom components with string propertiesHTML EditorRich Content Editor |

-   When you use the {!param} or {!Route.param} expression in the HTML Editor or Rich Content Editor components, some HTML special characters are escaped, or replaced with different values, for security purposes. These characters include <, \>, and &.
-   LWR sites don’t support expressions that display authenticated user information and start with {!CurrentUser.
-   Expressions with user data are resolved for Rich Content Editor only on Preview and Published sites.
-   When binding User data, you can access all the User sObject fields by using the {!User.Record.<User sObject Field>} expression. You can also use the {!User.Commerce.<Commerce Field>} expression to access user data related to Commerce in sites built using the Commerce templates. For more information, see [Expressions in Commerce Components](https://help.salesforce.com/s/articleView?id=commerce.comm_components_expressions.htm&language=en_US).

#### See Also

-   [*Experience Cloud Developer Guide* : Use Expressions in Aura Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/communities_dev_expressions_aura.htm " Experience Cloud Developer Guide : Use Expressions in Aura Sites - HTML (New Window)")
