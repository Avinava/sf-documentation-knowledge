---
title: "Setting  Read-Only Mode for an Entire Page for an Entire Page"
domain: pages
topic: setting-read-only-mode-for-an-entire-page-for-an-entire-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.343Z
estimatedTokens: 307
keywords: [Setting, Read-Only, Mode, Entire, enable, readOnly, attribute, <apex, page>, component]
---

# Setting  Read-Only Mode for an Entire Page for an Entire Page

> To enable read-only mode for an entire page, set the readOnly attribute on the <apex:page> component to true.

# Setting Read-Only Mode for an Entire Page for an Entire Page

To enable read-only mode for an entire page, set the readOnly attribute on the <apex:page\> component to true.

For example, here’s a simple page that is processed in enable read-only mode:

```

```

The controller for this page is also simple, but illustrates how you can calculate summary statistics for display on a page:

```

```

Normally, queries for a single Visualforce page request may not retrieve more than 50,000 rows. In enable read-only mode, this limit is relaxed to allow querying up to 1,000,000 rows.

In addition to querying many more rows, the readOnly attribute also increases the maximum number of items in a collection that can be iterated over using components such as <apex:dataTable\>, <apex:dataList\>, and <apex:repeat\>. This limit increased from 1,000 items to 10,000. Here’s a simple controller and page demonstration:

```

```

```

```

While Visualforce pages that use enable read-only mode for the entire page can’t use data manipulation language (DML) operations, they can call getter, setter, and action methods that affect form and other user interface elements on the page, make additional read-only queries, and so on.

## Code Examples

```
<apex:page controller="SummaryStatsController" readOnly="true">
    <p>Here is a statistic: {!veryLargeSummaryStat}</p>
</apex:page>
```

```apex
public class SummaryStatsController {
    public Integer getVeryLargeSummaryStat() {
        Integer closedOpportunityStats = 
            [SELECT COUNT() FROM Opportunity WHERE Opportunity.IsClosed = true];
        return closedOpportunityStats;
    }
}
```

```apex
public class MerchandiseController {

    public List<Merchandise__c> getAllMerchandise() {
        List<Merchandise__c> theMerchandise = 
            [SELECT Name, Price__c FROM Merchandise__c LIMIT 10000];
        return(theMerchandise);
    }
}
```

```
<apex:page controller="MerchandiseController" readOnly="true">
    <p>Here is all the merchandise we have:</p>
    <apex:dataTable value="{!AllMerchandise}" var="product">
        <apex:column>
            <apex:facet name="header">Product</apex:facet>
            <apex:outputText value="{!product.Name}" />
        </apex:column>
        <apex:column>
            <apex:facet name="header">Price</apex:facet>
            <apex:outputText value="{!product.Price__c}" />
        </apex:column>
    </apex:dataTable>
</apex:page>
```
