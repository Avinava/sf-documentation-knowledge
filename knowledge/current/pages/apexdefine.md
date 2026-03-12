---
title: "apex:define"
domain: pages
topic: apexdefine
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.388Z
estimatedTokens: 226
keywords: [apex, define, template, component, content, <apex, insert>, defined, Visualforce, Attributes]
---

# apex:define

> A template component that provides content for an <apex:insert> component defined in a Visualforce template page.

# apex:define

A template component that provides content for an <apex:insert\> component defined in a Visualforce template page.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

See also: <apex:composition\>, <apex:insert\>

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| name | String | The name of the insert component into which the content of this define component should be inserted. | Yes | 10.0 | global |

#### See Also

-   [apex:composition](atlas.en-us.pages.meta/pages/pages_compref_composition.htm)

-   [apex:insert](atlas.en-us.pages.meta/pages/pages_compref_insert.htm)

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
- apex:insert (atlas.en-us.pages.meta/pages/pages_compref_insert.htm)
