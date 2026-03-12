---
title: "apex:composition"
domain: pages
topic: apexcomposition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.353Z
estimatedTokens: 412
keywords: [apex, composition, area, includes, content, second, template, pages, Visualforce, include, <apex, insert>, components, composition>, component]
---

# apex:composition

> An area of a page that includes content from a second template page. Template pages are Visualforce pages that include one or more <apex:insert> components. The <apex:composition> component names the associated template, and provides body for the template's <apex:insert> components with matching <ap

# apex:composition

An area of a page that includes content from a second template page. Template pages are Visualforce pages that include one or more <apex:insert\> components. The <apex:composition\> component names the associated template, and provides body for the template's <apex:insert\> components with matching <apex:define\> components. Any content outside of an <apex:composition\> component is not rendered.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

See also: <apex:insert\>, <apex:define\>

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| rendered | String | This attribute has no effect on the display of this component. If you wish to conditionally display a <apex:component> wrap it inside a <apex:outputPanel> component, and add the conditional expression to its rendered attribute. |  | 10.0 | global |
| template | ApexPages.PageReference | The template page used for this component. For this value, specify the name of the Visualforce page or use merge-field syntax to reference a page or PageReference. | Yes | 10.0 | global |

#### See Also

-   [apex:define](atlas.en-us.pages.meta/pages/pages_compref_define.htm)

-   [apex:insert](atlas.en-us.pages.meta/pages/pages_compref_insert.htm)

-   [Defining Templates with <apex:composition>](atlas.en-us.pages.meta/pages/pages_templates_composition.htm)

## Code Examples

```
<!-- Page: composition -->
<!-- This page acts as the template. Create it first, then the page below.  -->	
<apex:page>
	<apex:outputText value="(template) This is before the header"/><br/>
	<apex:insert name="header"/><br/>
	<apex:outputText value="(template) This is between the header and body"/><br/>
	<apex:insert name="body"/>
</apex:page>
			
<!-- Page: page -->
<apex:page>
	<apex:composition template="composition">
		<apex:define name="header">(page) This is the header of mypage</apex:define>
		<apex:define name="body">(page) This is the body of mypage</apex:define>
	</apex:composition>
</apex:page>
```

```
(template) This is before the header<br/>
(page) This is the header of mypage<br/>
(template) This is between the header and body<br/>
(page) This is the body of mypage
```

## Related Topics

- apex:define (atlas.en-us.pages.meta/pages/pages_compref_define.htm)
- apex:insert (atlas.en-us.pages.meta/pages/pages_compref_insert.htm)
- Defining Templates with <apex:composition> (atlas.en-us.pages.meta/pages/pages_templates_composition.htm)
