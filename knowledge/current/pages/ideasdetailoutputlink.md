---
title: "ideas:detailOutputLink"
domain: pages
topic: ideasdetailoutputlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.478Z
estimatedTokens: 449
keywords: [ideas, detailOutputLink, link, displaying, idea, component, please, contact, Salesforce, representative, extended, standard, controllers, enabled, organization]
---

# ideas:detailOutputLink

> A link to the page displaying an idea. Note: To use this component, please contact your
			Salesforce representative and request that the Ideas extended standard controllers be
			enabled for your organization.

# ideas:detailOutputLink

A link to the page displaying an idea. Note: To use this component, please contact your Salesforce representative and request that the Ideas extended standard controllers be enabled for your organization.

## detailOutputLink component using the ideas standard controller

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| ideaId | String | The ID for the idea to be displayed. | Yes | 43.0 |  |
| page | ApexPages.PageReference | The Visualforce page whose URL is used for the output link. This page must use the standard controller. | Yes | 43.0 |  |
| pageNumber | Integer | The desired page number for the comments on the idea detail page (50 per page). E.g. if there are 100 comments, pageNumber="2" would show comments 51-100. |  | 43.0 |  |
| pageOffset | Integer | The desired page offset from the current page. If pageNumber is set, then the pageOffset value is not used. If neither pageNumber nor pageOffset are set, the resulting link does not have a page specified and the controller defaults to the first page. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| style | String | The style used to display the detailOutputLink component, used primarily for adding inline CSS styles. |  | 43.0 |  |
| styleClass | String | The style class used to display the detailOutputLink component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 43.0 |  |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid idea record in the URL. 
For example, if 001D000000IRt53 is the idea ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         
<!-- Page: detailPage -->
<apex:page standardController="Idea">
    <apex:pageBlock title="Idea Section">
        <ideas:detailOutputLink page="detailPage" ideaId="{!idea.id}">{!idea.title}</ideas:detailOutputLink>
        <br/><br/>
        <apex:outputText >{!idea.body}</apex:outputText>
    </apex:pageBlock>
    <apex:pageBlock title="Comments Section">
        <apex:dataList var="a" value="{!commentList}" id="list">
        {!a.commentBody}
        </apex:dataList>
    </apex:pageBlock>
</apex:page>
```
