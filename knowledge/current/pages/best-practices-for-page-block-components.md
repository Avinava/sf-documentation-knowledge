---
title: "Best Practices for Page Block Components"
domain: pages
topic: best-practices-for-page-block-components
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.128Z
estimatedTokens: 190
keywords: [Best, Practices, Block, Components, display, account, data, record, query, URL]
---

# Best Practices for Page Block Components

> For this page to display account data, the ID of
a valid account record must be specified as a query parameter in the
URL for the page. For example:

# Best Practices for Page Block Components

Adding More than Two Child Components to <apex:pageBlockSectionItem\>

An <apex:pageBlockSectionItem\> component can only have up to two child components. Sometimes, though, you want to add an extra child component. For example, you may want to add an asterisk before an <apex:outputLabel\> and still display the associated input text field. You can do this by wrapping the asterisk and output label in an <apex:outputPanel\> component, as follows:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

```

```

## Code Examples

```
https://MyDomain_login_URL/apex/myPage?id=001D000000IRosz
```

```
<!-- Page: -->
<apex:page standardController="Account">
    <apex:form >
        <apex:pageBlock title="My Content" mode="edit">
            <apex:pageBlockSection title="My Content Section" columns="2">
                <apex:pageBlockSectionItem >
                    <apex:outputPanel>
                        <apex:outputText>*</apex:outputText>
                        <apex:outputLabel value="Account Name" for="account__name"/>
                    </apex:outputPanel>
                    <apex:inputText value="{!account.name}" id="account__name"/> 
                </apex:pageBlockSectionItem>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```
