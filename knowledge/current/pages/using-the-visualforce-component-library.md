---
title: "Using the Visualforce Component Library"
domain: pages
topic: using-the-visualforce-component-library
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.937Z
estimatedTokens: 667
keywords: [Visualforce, Component, Library, point, tag, examples, mandatory, <apex, page>, placed, start, end, markup, However, insert]
---

# Using the Visualforce Component Library

> Up to this point, the only Visualforce tag that has been used in the examples is the mandatory <apex:page> tag that must be placed
at the start and end of all Visualforce markup. However, just as you can insert images or tables into an
HTML document with the <img> or <table> tags, respectively,
you 

# Using the Visualforce Component Library

Up to this point, the only Visualforce tag that has been used in the examples is the mandatory <apex:page\> tag that must be placed at the start and end of all Visualforce markup. However, just as you can insert images or tables into an HTML document with the <img\> or <table\> tags, respectively, you can add user interface components to your Visualforce pages using tags that are defined in the Visualforce component library.

For example, to add a component that looks like a section on a detail page, use the <apex:pageBlock\> component tag:

```

```

The <apex:pageBlock> Component ![The Apex Page Editor, displaying apex:pageBlock in the code window and a section that says, "Hello John! You are viewing the Global Media account," in the page view](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_pageblock.png&folder=pages)

Tags also exist for other common Salesforce interface components, such as related lists, detail pages, and input fields. For example, to add the content of a detail page, use the <apex:detail\> component tag:

```

```

The <apex:detail> Component Without Attributes ![The Apex Page Editor, displaying aped:detail in the code window and an account detail view in the page view](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_detail.png&folder=pages)

Without any specified attributes on the tag, <apex:detail\> displays the complete detail view for the context record. If you want to modify properties such as which record details are displayed, or whether related lists or the title appear, you can use attributes on the tag. For example, the following markup displays the details of the context account's owner, without related lists or a colored title bar:

```

```

The <apex:detail> Component Without Related List or Title Elements ![The apex:detail component without Related List or Title elements](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_detail_attribute.png&folder=pages)

If a component is updated or edited, the Visualforce page that references it is also updated.

To browse the component library, click **Component Reference** in the Page Editor. From this page you can drill down into any component to see the attributes that are available for each, including any [custom components](atlas.en-us.pages.meta/pages/pages_comp_cust.htm) that you define.

#### See Also

-   [Standard Visualforce Component Reference](atlas.en-us.pages.meta/pages/pages_compref.htm "This section provides a full list of standard Visualforce components.")

## Code Examples

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!"> 
            You are viewing the {!account.name} account.
    </apex:pageBlock> 
</apex:page>
```

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You are viewing the {!account.name} account.
    </apex:pageBlock>
    <apex:detail/> 
</apex:page>
```

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You are viewing the {!account.name} account.
    </apex:pageBlock>
    <apex:detail subject="{!account.ownerId}" relatedList="false" title="false"/> 
</apex:page>
```

## Related Topics

- custom
components (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
- Standard Visualforce Component Reference (atlas.en-us.pages.meta/pages/pages_compref.htm)
