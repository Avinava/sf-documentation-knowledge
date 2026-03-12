---
title: "apex:sectionHeader"
domain: pages
topic: apexsectionheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.062Z
estimatedTokens: 758
keywords: [apex, sectionHeader, title, bar, standard, Salesforce, colored, directly, under, tab, Attributes]
---

# apex:sectionHeader

> A title bar for a page. In a standard Salesforce page, the title bar
			is a colored header displayed directly under the tab bar.

# apex:sectionHeader

A title bar for a page. In a standard Salesforce page, the title bar is a colored header displayed directly under the tab bar.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <div\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| description | String | Descriptive text for the page that displays under the colored title bar. The escape attribute determines whether markup in the description is evaluated. |  | 10.0 | global |
| escape | Boolean | A Boolean value that specifies whether sensitive HTML and XML characters are escaped in the description attribute's output.If not specified, the description attribute by default allows secure HTML elements, such as commonly used formatting, block, style, and link elements. Uncommon HTML elements, insecure attributes, and JavaScript are removed. Optionally, you can set the default escape value to false with a setting on the User Interface Setup page.Caution: Selecting the User Interface setting makes pages that contain <apex:sectionHeader> vulnerable to cross-site scripting (XSS) attacks. We recommend that you keep this setting unselected.If true, markup characters in the description attribute render as plain text.If false, markup characters in the description attribute aren't escaped.Caution: Setting escape to false is a security risk. If set to false, pages that contain the component are vulnerable to XSS attacks.We recommend that Independent Software Vendors (ISVs) explicitly set the escape attribute of any <apex:sectionHeader> components used. Setting the escape attribute overrides the default behavior that the subscriber org configures, so <apex:sectionHeader> retains the expected behavior in all subscriber orgs. |  | 10.0 | global |
| help | String | The URL for the page's help file. When this value is specified, a Help for this Page link automatically appears on the right side of the colored title bar. The URL must be a fully-qualified, absolute, or relative URL; JavaScript URLs aren't permitted. Invalid URLs display a warning icon instead of the help link. |  | 10.0 | global |
| id | String | An identifier that allows the sectionHeader component to be referenced by other components in the page. |  | 10.0 | global |
| printUrl | String | The URL for the printable view. |  | 18.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| subtitle | String | The text displayed just under the main title in the colored title bar. |  | 10.0 | global |
| title | String | The text displayed at the top of the colored title bar. |  | 10.0 | global |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid account record in the URL.
For example, if 001D000000IRt53 is the account ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
-->


<apex:page standardController="Opportunity" tabStyle="Opportunity" sidebar="false">
    <apex:sectionHeader title="One of Your Opportunities" subtitle="Exciting !"/>
    <apex:detail subject="{!opportunity.ownerId}" relatedList="false" title="false"/>
</apex:page>
```
