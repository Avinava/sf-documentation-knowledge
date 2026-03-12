---
title: "apex:insert"
domain: pages
topic: apexinsert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.634Z
estimatedTokens: 200
keywords: [apex, insert, template, component, declares, named, area, defined, <apex, define>, another, Visualforce, composition>, components, share]
---

# apex:insert

> A template component that declares a named area that must be defined by an <apex:define> component in another Visualforce page. Use this component with the <apex:composition> and <apex:define> components to share data between multiple pages.

# apex:insert

A template component that declares a named area that must be defined by an <apex:define\> component in another Visualforce page. Use this component with the <apex:composition\> and <apex:define\> components to share data between multiple pages.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| name | String | The name of the matching define tag that provides the content to be inserted into this Visualforce page. | Yes | 10.0 | global |

#### See Also

-   [apex:composition](atlas.en-us.pages.meta/pages/pages_compref_composition.htm)

-   [apex:define](atlas.en-us.pages.meta/pages/pages_compref_define.htm)

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

- apex:composition (atlas.en-us.pages.meta/pages/pages_compref_composition.htm)
- apex:define (atlas.en-us.pages.meta/pages/pages_compref_define.htm)
