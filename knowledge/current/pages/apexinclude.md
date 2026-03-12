---
title: "apex:include"
domain: pages
topic: apexinclude
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.517Z
estimatedTokens: 309
keywords: [apex, include, component, inserts, second, Visualforce, current, entire, subtree, injected, DOM, point, scope, included, maintained]
---

# apex:include

> A component that inserts a second Visualforce page into the current page. The entire page subtree is injected into the Visualforce DOM at the point of reference and the scope of the included page is maintained.

# apex:include

A component that inserts a second Visualforce page into the current page. The entire page subtree is injected into the Visualforce DOM at the point of reference and the scope of the included page is maintained.

If content should be stripped from the included page, use the <apex:composition\> component instead.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the inserted page to be referenced by other components in the page. |  | 10.0 | global |
| pageName | ApexPages.PageReference | The Visualforce page whose content should be inserted into the current page. For this value, specify the name of the Visualforce page or use merge-field syntax to reference a page or PageReference. | Yes | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |

#### See Also

-   [Referencing an Existing Page with <apex:include>](atlas.en-us.pages.meta/pages/pages_templates_include.htm)

## Code Examples

```
<!-- Page: -->
<apex:page id="thePage">
	<apex:outputText value="(page) This is the page."/><br/>
	<apex:include pageName="include"/>
</apex:page>
			
<!-- Page: include -->
<apex:page id="theIncludedPage">
	<apex:outputText value="(include) This is text from another page."/>
</apex:page>
```

```
(page) This is the page.<br/>
<span id="thePage:include">(include) This is text from another page.</span>
```

## Related Topics

- Referencing an Existing Page with <apex:include> (atlas.en-us.pages.meta/pages/pages_templates_include.htm)
