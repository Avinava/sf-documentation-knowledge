---
title: "social:profileViewer"
domain: pages
topic: socialprofileviewer
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.145Z
estimatedTokens: 387
keywords: [social, profileViewer, component, adds, Accounts, Contacts, viewer, Account, including, person, Contact, Lead, detail, pages, displays]
---

# social:profileViewer

> UI component that adds the Social Accounts and Contacts viewer to Account (including person account), Contact, or Lead detail pages. The viewer displays the record name, a profile picture, and the social network icons that allow users to sign in to their accounts and view social data directly in Sal

# social:profileViewer

UI component that adds the Social Accounts and Contacts viewer to Account (including person account), Contact, or Lead detail pages. The viewer displays the record name, a profile picture, and the social network icons that allow users to sign in to their accounts and view social data directly in Salesforce.

Social Accounts and Contacts must be enabled for your organization. Note that this component is only supported for Account, Contact, and Lead objects and can only be used once on a page. This component isn't available for Visualforce pages on Force.com sites.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The Social Accounts, Contacts, and Leads feature is now unavailable. See [Twitter/X Public API Access](https://help.salesforce.com/s/articleView?id=000396136&type=1&language=en_US).

## This example displays the Social Accounts and Contacts viewer for a contact.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | Entity ID of the record for which to display the Social Accounts and Contacts viewer; for example, Contact.Id. | Yes | 24.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page standardController="Contact">
      <social:profileViewer entityId="{!contact.id}"/>
    </apex:page>
```
