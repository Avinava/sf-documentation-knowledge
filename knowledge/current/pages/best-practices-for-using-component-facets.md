---
title: "Best Practices for Using Component Facets"
domain: pages
topic: best-practices-for-using-component-facets
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.120Z
estimatedTokens: 677
keywords: [Best, Practices, Component, Facets, <apex, dataTable>, actionStatus>]
---

# Best Practices for Using Component Facets

# Best Practices for Using Component Facets

A facet consists of content in an area of a Visualforce component that provides contextual information about the data that is presented in the component. For example, <apex:dataTable\> supports facets for the header, footer, and caption of a table, while <apex:column\> only supports facets for the header and footer of the column. The <apex:facet\> component allows you to override the default facet on a Visualforce component with your own content. Facets only allow a single child within the start and close tags.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Not all components support facets. Those that do are listed in the [Standard Visualforce Component Reference](atlas.en-us.pages.meta/pages/pages_compref.htm "This section provides a full list of standard Visualforce components.").

When defining an <apex:facet\>, it is always used as the child of another Visualforce component. The name attribute on the facet determines which area of the parent component is overridden.

## Example: Using Facets with <apex:dataTable>

The following markup shows how the <apex:dataTable\> component can be modified with <apex:facet\>:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

The page displays as follows:

Extending <apex:dataTable> with a Facet ![An example of a facet](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_facet_sample.jpg&folder=pages)

## Using Facets with <apex:actionStatus>

Another component that can use a facet is <apex:actionStatus\>. The <apex:actionStatus\> component can be extended to display an indicator whenever a page is being refreshed. For example, you can define a progress wheel with the following markup:

```

```

The associated controller updates the counter:

```

```

The page displays as follows:

Extending <apex:actionStatus> with a Facet ![A refresh counter stating, "Watch this counter: 1"](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_facet_ajax_capture.png&folder=pages)

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

## Code Examples

```
<apex:page standardController="Account">
    <apex:pageBlock>
        <apex:dataTable value="{!account}" var="a">
            <apex:facet name="caption"><h1>This is 
              {!account.name}</h1></apex:facet>
            <apex:facet name="footer"><p>Information 
              Accurate as of {!NOW()}</p></apex:facet>
            <apex:column>
                <apex:facet name="header">Name</apex:facet>
                <apex:outputText value="{!a.name}"/>
            </apex:column>
            
            <apex:column>
                <apex:facet 
              name="header">Owner</apex:facet>
                <apex:outputText value="{!a.owner.name}"/>
            </apex:column>
        </apex:dataTable>
    </apex:pageBlock>        
</apex:page>
```

```
https://MyDomain_login_URL/apex/facet?id=001D000000IRosz
```

```
<apex:page controller="exampleCon">
    <apex:form >
        <apex:outputText value="Watch this counter: {!count}" id="counter"/>
        <apex:actionStatus id="counterStatus">
            <apex:facet name="start">
                 <img src="{!$Resource.spin}"/> <!-- A previously defined image -->
            </apex:facet>
        </apex:actionStatus>    
        <apex:actionPoller action="{!incrementCounter}" rerender="counter"
            status="counterStatus" interval="7"/>
    </apex:form>
</apex:page>
```

```apex
public class exampleCon {
    Integer count = 0;
                        
    public PageReference incrementCounter() {
            count++;
            return null;
    }
                        
    public Integer getCount() {
        return count;
    }
}
```

## Related Topics

- Standard Visualforce Component Reference (atlas.en-us.pages.meta/pages/pages_compref.htm)
- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
