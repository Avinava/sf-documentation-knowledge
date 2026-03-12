---
title: "Custom Component Markup"
domain: pages
topic: custom-component-markup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.040Z
estimatedTokens: 316
keywords: [Custom, Component, Markup, defined, <apex, component>, tag, top-level, definition]
---

# Custom Component Markup

> All markup for a custom component is defined within
an <apex:component> tag.
This tag must be the top-level tag in a custom component definition.
For example:

# Custom Component Markup

All markup for a custom component is defined within an <apex:component\> tag. This tag must be the top-level tag in a custom component definition. For example:

```

```

Notice that the markup can be a combination of Visualforce and HTML tags, just like other Visualforce pages.

For a more complex example, you could use a custom component to create a form that is used across multiple Visualforce pages. Create a new custom component named recordDisplay and copy the following code:

```

```

Next, create a page called displayRecords and use the following code:

```

```

For this example to render properly, you must associate the Visualforce page with a valid account record in the URL. For example, if 001D000000IRt53 is the account ID, the resulting URL should be:

```

```

You should see a page with details about the account you passed in as an ID.

Now, replace the code in displayRecords with the following sample:

```

```

Again, pass in the ID of a contact before refreshing the page. You should see the page display information about your Contact.

[Custom Component Attributes](atlas.en-us.pages.meta/pages/pages_comp_cust_elements_attributes.htm) contains more information on using the <apex:attribute\> component.

## Code Examples

```
<apex:component>
    <b>
        <apex:outputText value="This is my custom component."/> 
    </b>
</apex:component>
```

```
<apex:component>
    <apex:attribute name="record" description="The type of record we are viewing."
                    type="Object" required="true"/>
                     
    <apex:pageBlock title="Viewing {!record}">   
        <apex:detail />
    </apex:pageBlock>
</apex:component>
```

```
<apex:page >
  <c:recordDisplay record="Account" />
</apex:page>
```

```
https://MyDomain_login_URL/apex/displayRecords?id=001D000000IRt53
```

```
<apex:page>
  <c:recordDisplay record="Contact" />
</apex:page>
```

## Related Topics

- Custom Component Attributes (atlas.en-us.pages.meta/pages/pages_comp_cust_elements_attributes.htm)
