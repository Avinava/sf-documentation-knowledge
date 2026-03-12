---
title: "Best Practices for  <apex:panelbar>"
domain: pages
topic: best-practices-for-apexpanelbar
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.131Z
estimatedTokens: 195
keywords: [Best, Practices, <apex, panelbar>, display, account, data, record, query, URL, https, MyDomain_login_URL, apex, myPage?id=001D000000IRosz]
---

# Best Practices for  <apex:panelbar>

> For this page to display account data, the ID of a valid account
record must be specified as a query parameter in the URL for the page.
For example: https://MyDomain_login_URL/apex/myPage?id=001D000000IRosz

# Best Practices for <apex:panelbar>

Adding a Collection of Child <apex:panelBarItem\> Components to an <apex:panelBar\> Component

An <apex:panelBar\> component can only have <apex:panelBarItem\> child components. Sometimes, though, you want to add a collection of child components. For example, you may want to add an item for each contact associated with an account. You can do this by wrapping <apex:panelBarItem\> in an <apex:repeat\> component, as follows:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example: https://MyDomain\_login\_URL/apex/myPage?id=001D000000IRosz

```

```

## Code Examples

```
<apex:page standardController="account">
  <apex:panelBar >
    <apex:repeat value="{!account.contacts}" var="c">
      <apex:panelBarItem label="{!c.firstname}">one</apex:panelBarItem>
    </apex:repeat>
  </apex:panelBar>
</apex:page>
```
