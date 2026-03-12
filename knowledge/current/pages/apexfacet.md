---
title: "apex:facet"
domain: pages
topic: apexfacet
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.426Z
estimatedTokens: 441
keywords: [apex, facet, placeholder, content, that's, rendered, specific, part, parent, component, footer, <apex, dataTable>, Attributes]
---

# apex:facet

> A placeholder for content that's rendered in a specific part of the parent component, such as the header or footer of an <apex:dataTable>.

# apex:facet

A placeholder for content that's rendered in a specific part of the parent component, such as the header or footer of an <apex:dataTable\>.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

An <apex:facet\> component can only exist in the body of a parent component if the parent supports facets. The name of the facet component must match one of the pre-defined facet names on the parent component. This name determines where the content of the facet component is rendered. The order in which a facet component is defined within the body of a parent component doesn't affect the appearance of the parent component.

See <apex:dataTable\> for an example of facets.

**Note:** Although you can't represent an <apex:facet\> directly in Apex, you can specify it on a dynamic component that has the facet. For example:

Component.apex.dataTable dt = new Component.apex.dataTable(); dt.facets.header = 'Header Facet';

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| name | String | The name of the facet to be rendered. This name must match one of the pre-defined facet names on the parent component and determines where the content of the facet component is rendered. For example, the dataTable component includes facets named "header", "footer", and "caption". | Yes | 10.0 | global |

#### See Also

-   [apex:dataTable](atlas.en-us.pages.meta/pages/pages_compref_dataTable.htm)

-   [Best Practices for Using Component Facets](atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm)

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid account record in the URL.
For example, if 001D000000IRt53 is the account ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->

<!-- Shows a two column table of contacts associated with the account.
The account column headers are controlled by the facets.-->

<apex:page standardController="Account">
    <apex:pageBlock title="Contacts">
        <apex:dataTable value="{!account.Contacts}" var="contact" cellPadding="4" border="1">
            <apex:column >
                <apex:facet name="header">Name</apex:facet>
                        {!contact.Name}
            </apex:column>
            <apex:column >
                <apex:facet name="header">Phone</apex:facet>
                        {!contact.Phone}
            </apex:column>
        </apex:dataTable>
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- apex:dataTable (atlas.en-us.pages.meta/pages/pages_compref_dataTable.htm)
- Best Practices for Using Component Facets (atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm)
