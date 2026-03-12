---
title: "currentPage()"
domain: pages
topic: currentpage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.615Z
estimatedTokens: 119
keywords: [currentPage, current, page's, PageReference, $CurrentPage, merge, referencing, Visualforce, Usage]
---

# currentPage()

> A global merge field type to use when referencing the current Visualforce page or page
  request.

# $CurrentPage

A global merge field type to use when referencing the current Visualforce page or page request.

## Usage

Use this global variable in a Visualforce page to reference the current page name ($CurrentPage.Name) or the URL of the current page ($CurrentPage.URL). Use $CurrentPage.parameters.parameterName to reference page-request parameters and values, where parameterName is the request parameter being referenced. parameterName isn't case-sensitive.

## Example

```

```

#### See Also

-   [Getting Query String Parameters](atlas.en-us.pages.meta/pages/pages_quick_start_query_params_getting.htm)

## Code Examples

```apex
public MyController() {
    account = [
        SELECT Id, Name, Site 
        FROM Account 
        WHERE Id =
            :ApexPages.currentPage().
             getParameters().
             get('id')
    ];
}
```

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You belong to the {!account.name} account.<br/>
        You're also a nice person.
    </apex:pageBlock>
    <apex:detail subject="{!account}" relatedList="false"/>
    <apex:relatedList list="OpenActivities" 
        subject="{!$CurrentPage.parameters.relatedId}"/> 
</apex:page>
```

## Related Topics

- System.PageReference (atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)
- Getting Query String Parameters (atlas.en-us.pages.meta/pages/pages_quick_start_query_params_getting.htm)
