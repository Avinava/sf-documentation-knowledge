---
title: "ideas:profileListOutputLink"
domain: pages
topic: ideasprofilelistoutputlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.492Z
estimatedTokens: 613
keywords: [ideas, profileListOutputLink, link, displaying, user's, profile, component, please, contact, Salesforce, representative, extended, standard, controllers, enabled]
---

# ideas:profileListOutputLink

> A link to the page displaying a user's profile. Note: To use this component, please contact your
			Salesforce representative and request that the Ideas extended standard controllers be
			enabled for your organization.

# ideas:profileListOutputLink

A link to the page displaying a user's profile. Note: To use this component, please contact your Salesforce representative and request that the Ideas extended standard controllers be enabled for your organization.

## profileListOutputLink component using the ideas standard list controller

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| communityId | String | The ID for the zone in which the ideas are displayed. If communityID is not set, the zone is defaulted to an active zone accessible to the user. If the user has access to more than one zone, the zone whose name comes first in the alphabet is used. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| page | ApexPages.PageReference | The Visualforce page whose URL is used for the output link. This page must use the set oriented standard controller. | Yes | 43.0 |  |
| pageNumber | Integer | The desired page number for the list of ideas (20 per page). E.g. if there are 100 ideas, pageNumber="2" would show ideas 21-40. |  | 43.0 |  |
| pageOffset | Integer | The desired page offset from the current page. If pageNumber is set, then the pageOffset value is not used. If neither pageNumber nor pageOffset are set, the resulting link does not have a page specified and the controller defaults to the first page. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| sort | String | The desired sort for the list of ideas. Possible values include "ideas", "votes", and "recentReplies." |  | 43.0 |  |
| stickyAttributes | Boolean | A Boolean value that specifies whether this component should reuse values for userId, communityId, and sort that are used on the page containing this link. |  | 43.0 |  |
| style | String | The style used to display the profileListOutputLink component, used primarily for adding inline CSS styles. |  | 43.0 |  |
| styleClass | String | The style class used to display the profileListOutputLink component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 43.0 |  |
| userId | String | The ID of the user whose profile is displayed. |  | 43.0 |  |

## Code Examples

```
<!-- Page: profilePage -->

<apex:page standardController="Idea" recordSetVar="ideaSetVar">
    <apex:pageBlock>
        <ideas:profileListOutputLink sort="recentReplies" page="profilePage">Recent Replies</ideas:profileListOutputLink>
        | 
        <ideas:profileListOutputLink sort="ideas" page="profilePage">Ideas Submitted</ideas:profileListOutputLink>
        | 
        <ideas:profileListOutputLink sort="votes" page="profilePage">Ideas Voted</ideas:profileListOutputLink>
    </apex:pageBlock>
    <apex:pageBlock >
        <apex:dataList value="{!ideaList}" var="ideadata">
            <apex:outputText value="{!ideadata.title}"/>
        </apex:dataList>
    </apex:pageBlock>    
</apex:page>
```
