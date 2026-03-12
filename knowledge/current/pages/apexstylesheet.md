---
title: "apex:stylesheet"
domain: pages
topic: apexstylesheet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.149Z
estimatedTokens: 434
keywords: [apex, stylesheet, link, style, components, Visualforce, component, injects, head, element, generated, HTML, Zip, Resource, Attributes]
---

# apex:stylesheet

> A link to a stylesheet that can be used to style components on the Visualforce page. When specified, this component injects the stylesheet reference into the head element of the generated HTML page.

# apex:stylesheet

A link to a stylesheet that can be used to style components on the Visualforce page. When specified, this component injects the stylesheet reference into the head element of the generated HTML page.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <link\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Zip Resource Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows other components in the page to reference the stylesheet component. |  | 10.0 | global |
| value | Object | The URL to the style sheet file. Note that this can be a reference to a static resource. | Yes | 10.0 | global |

#### See Also

-   [apex:slds](atlas.en-us.pages.meta/pages/pages_compref_slds.htm)

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

-   [Extending Salesforce Styles with Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm "Use the <apex:stylesheet> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.")

## Code Examples

```
<apex:stylesheet value="/resources/htdocs/css/basic.css"/>
```

```
<link rel="stylesheet"  type="text/css" href="/resources/htdocs/css/basic.css"/>
```

```
<apex:stylesheet value="{!URLFOR($Resource.StyleZip, 'basic.css')}"/>
```

```
<link rel="stylesheet"  type="text/css" href="[generatedId]/basic.css"/>
```

## Related Topics

- apex:slds (atlas.en-us.pages.meta/pages/pages_compref_slds.htm)
- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
- Extending Salesforce Styles with Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)
