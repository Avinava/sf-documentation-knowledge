---
title: "Replicating a Standard Case Feed Page"
domain: case-feed-dev
topic: replicating-a-standard-case-feed-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.287Z
estimatedTokens: 472
keywords: [Replicating, Standard, Case, Feed, support, CaseFeed, component, includes, elements, Attributes, Code, Sample]
---

# Replicating a Standard Case Feed Page

> The support:CaseFeed component includes all
                of the elements of the standard Case Feed page:

# Replicating a Standard Case Feed Page

The support:CaseFeed component includes all of the elements of the standard Case Feed page:

-   Email, Portal, Log a Call, and Case Note actions
-   Case activity feed
-   Feed filters
-   Highlights panel
-   Case following icon
-   Case followers list
-   Layout, print, and help links

## support:CaseFeed Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| caseId | id | ID of the case record to display in Case Feed. | Yes | 26.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 26.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 26.0 | global |

## Use Case

National Foods is a food service company supplying restaurants and corporate cafeterias throughout the United States. National’s support operations includes both call center agents who work primarily on desktop computers and field agents who work mainly on mobile devices. The company wanted a simplified Case Feed page that would be easy for its field agents to use, and also wanted to give its call center agents access to the full Case Feed functionality.

National used the support:CaseFeed component to recreate the standard Case Feed page for its call center agents working on desktops, and created a custom page for its field agents working on mobile devices.

Standard Case Feed page created with support:CaseFeed ![Case Feed standard page](/docs/resources/img/en-us/260.0?doc_id=images%2Fcase_feed_standard_page_example.png&folder=case_feed_dev)

## Code Sample

```

```

The following sample shows an Apex class containing a controller extension to be used with the Visualforce page above.

```

```

## Code Examples

```
<apex:page standardController="Case"
    extensions="CasePageSelectorExtension" showHeader="true" sidebar="false">
    <apex:dynamicComponent componentValue="{!casePage}"/>
</apex:page>
```

```apex
public class CasePageSelectorExtension {
    boolean isFieldAgent;
    String caseId;
    
    public CasePageSelectorExtension(ApexPages.StandardController controller) {
        List<UserRole> roles = [SELECT Id FROM UserRole WHERE Name = 'FieldAgent'];
        isFieldAgent = !roles.isEmpty() && UserInfo.getUserRoleId() == roles[0].Id;
        caseId = controller.getRecord().id;
    }

    public Component.Apex.OutputPanel getCasePage() {
        Component.Apex.OutputPanel panel = new Component.Apex.OutputPanel();
        if (isFieldAgent) {
            Component.Apex.Detail detail = new Component.Apex.Detail();
            detail.subject = caseId;
            panel.childComponents.add(detail);
        } else {
            Component.Support.CaseFeed caseFeed = new Component.Support.CaseFeed();
            caseFeed.caseId = caseId;
            panel.childComponents.add(caseFeed);
        }
        return panel;
    }      
}
```
