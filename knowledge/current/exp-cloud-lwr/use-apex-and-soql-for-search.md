---
title: "Use Apex and SOQL for Search"
domain: exp-cloud-lwr
topic: use-apex-and-soql-for-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.518Z
estimatedTokens: 523
keywords: [Apex, SOQL, Search, theme, layout, component, user, results]
---

# Use Apex and SOQL for Search

> Create a theme layout search component that sends the user to a search results
    page.

# Use Apex and SOQL for Search

Create a theme layout search component that sends the user to a search results page.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See examples for custom search in codeSamples/customSearch/force-app/main/default/ in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

1.  Create a standard page for Search in the site, which functions as the search results landing page.![Search standard page](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_searchpage.png&folder=exp_cloud_lwr)
2.  Drag the **Simple Theme Header** component onto the theme header region. The Simple Theme Header component serves as the header for the page and contains some utilities, such as the Search Bar component.

    When a user types a term and clicks Enter, the Search Bar component uses the lightning-navigation API to navigate to the Search page in the site. See [lightning-navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation) in the Lightning Web Components Reference.

3.  Drag the **Search Results** component into the content region of the Search page. The Search Results component grabs the search URL parameter by using the {!Route.term} expression language reference.

    The Search Results component then sends the search term and object API name as parameters in an Apex method request for the search results data, which it uses to populate the UI.

4.  The GlobalSearchController.cls is the Apex controller that takes the search term and performs a SOQL search for records with a Name containing the search string.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

Make sure that you configure the Apex class with permissions for any user you want to be able to use the search results. See [How Does Apex Class Security Work](https://help.salesforce.com/articleView?id=code_package_security.htm&type=5&language=en_US) in Salesforce Help.

## Related Topics

- code
        sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
