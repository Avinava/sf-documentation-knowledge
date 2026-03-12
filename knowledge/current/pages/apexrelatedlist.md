---
title: "apex:relatedList"
domain: pages
topic: apexrelatedlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.021Z
estimatedTokens: 633
keywords: [apex, relatedList, Salesforce, records, parent, record, lookup, master-detail, relationship, Attributes, Facets]
---

# apex:relatedList

> A list of Salesforce records that are related to a parent record with a lookup or master-detail relationship.

# apex:relatedList

A list of Salesforce records that are related to a parent record with a lookup or master-detail relationship.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the relatedList component to be referenced by other components in the page. |  | 10.0 | global |
| list | String | The related list to display. This does not need to be on an object's page layout. To specify this value, use the name of the child relationship to the related object. For example, to display the Contacts related list that would normally display on an account detail page, use list="Contacts". | Yes | 10.0 | global |
| pageSize | Integer | The number of records to display by default in the related list. If not specified, this value defaults to 5. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| subject | String | The parent record from which the data and related list definition are derived. If not specified, and if using a standard controller, this value is automatically set to the value of the ID query string parameter in the page URL. |  | 10.0 | global |
| title | String | The text displayed as the title of the related list. If not specified, this value defaults to the title specified in the application. |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| body | The components that appear in the body of the related list. Note that the order in which a body facet appears in a relatedList component does not matter, because any facet with name="body" will control the appearance of the related list body. If specified, this facet overrides any other content in the related list tag. | 10.0 |
| footer | The components that appear in the footer area of the related list. Note that the order in which a footer facet appears in the body of a relatedList component does not matter, because any facet with name="footer" will control the appearance of the bottom of the related list. | 10.0 |
| header | The components that appear in the header area of the related list. Note that the order in which a header facet appears in the body of a relatedList component does not matter, because any facet with name="header" will control the appearance of the top of the related list. | 10.0 |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid account record in the URL.
For example, if 001D000000IRt53 is the account ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->


<apex:page standardController="Account">
    <apex:pageBlock>
    You're looking at some related lists for {!account.name}:
    </apex:pageBlock>

    <apex:relatedList list="Opportunities" />

    <apex:relatedList list="Contacts">
        <apex:facet name="header">Titles can be overriden with facets</apex:facet>
    </apex:relatedList>

    <apex:relatedList list="Cases" title="Or you can keep the image, but change the text" />
</apex:page>
```
