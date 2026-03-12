---
title: "List View Describe"
domain: rest-api
topic: list-view-describe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.553Z
estimatedTokens: 109
keywords: [View, Describe, detailed, including, columns, SOQL, query]
---

# List View Describe

> Returns detailed information about a list view, including the ID, the columns, and the
    SOQL query.

# List View Describe

Returns detailed information about a list view, including the ID, the columns, and the SOQL query.

This resource is available in REST API version 32.0 and later.

URI

/services/data/vXX.X/sobjects/sObject/listviews/queryLocator/describe

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/describe -H "Authorization: Bearer token"
```

```
{
  "columns" : [ {
    "ascendingLabel" : "Z-A",
    "descendingLabel" : "A-Z",
    "fieldNameOrPath" : "Name",
    "hidden" : false,
    "label" : "Account Name",
    "selectListItem" : "Name",
    "sortDirection" : "ascending",
    "sortIndex" : 0,
    "sortable" : true,
    "type" : "string"
  }, {
    "ascendingLabel" : "Z-A",
    "descendingLabel" : "A-Z",
    "fieldNameOrPath" : "Site",
    "hidden" : false,
    "label" : "Account Site",
    "selectListItem" : "Site",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : true,
    "type" : "string"
  }, {
    "ascendingLabel" : "Z-A",
    "descendingLabel" : "A-Z",
    "fieldNameOrPath" : "BillingState",
    "hidden" : false,
    "label" : "Billing State/Province",
    "selectListItem" : "BillingState",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : true,
    "type" : "string"
  }, {
    "ascendingLabel" : "9-0",
    "descendingLabel" : "0-9",
    "fieldNameOrPath" : "Phone",
    "hidden" : false,
    "label" : "Phone",
    "selectListItem" : "Phone",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : true,
    "type" : "phone"
  }, {
    "ascendingLabel" : "Low to High",
    "descendingLabel" : "High to Low",
    "fieldNameOrPath" : "Type",
    "hidden" : false,
    "label" : "Type",
    "selectListItem" : "toLabel(Type)",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : true,
    "type" : "picklist"
  }, {
    "ascendingLabel" : "Z-A",
    "descendingLabel" : "A-Z",
    "fieldNameOrPath" : "Owner.Alias",
    "hidden" : false,
    "label" : "Account Owner Alias",
    "selectListItem" : "Owner.Alias",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : true,
    "type" : "string"
  }, {
    "ascendingLabel" : null,
    "descendingLabel" : null,
    "fieldNameOrPath" : "Id",
    "hidden" : true,
    "label" : "Account ID",
    "selectListItem" : "Id",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : false,
    "type" : "id"
  }, {
    "ascendingLabel" : null,
    "descendingLabel" : null,
    "fieldNameOrPath" : "CreatedDate",
    "hidden" : true,
    "label" : "Created Date",
    "selectListItem" : "CreatedDate",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : false,
    "type" : "datetime"
  }, {
    "ascendingLabel" : null,
    "descendingLabel" : null,
    "fieldNameOrPath" : "LastModifiedDate",
    "hidden" : true,
    "label" : "Last Modified Date",
    "selectListItem" : "LastModifiedDate",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : false,
    "type" : "datetime"
  }, {
    "ascendingLabel" : null,
    "descendingLabel" : null,
    "fieldNameOrPath" : "SystemModstamp",
    "hidden" : true,
    "label" : "System Modstamp",
    "selectListItem" : "SystemModstamp",
    "sortDirection" : null,
    "sortIndex" : null,
    "sortable" : false,
    "type" : "datetime"
  } ],
  "id" : "00BD0000005WcBe",
  "orderBy" : [ {
    "fieldNameOrPath" : "Name",
    "nullsPosition" : "first",
    "sortDirection" : "ascending"
  }, {
    "fieldNameOrPath" : "Id",
    "nullsPosition" : "first",
    "sortDirection" : "ascending"
  } ],
  "query" : "SELECT name, site, billingstate, phone, tolabel(type), owner.alias, id, createddate, lastmodifieddate, systemmodstamp FROM Account WHERE CreatedDate = THIS_WEEK ORDER BY Name ASC NULLS FIRST, Id ASC NULLS FIRST",
  "scope" : null,
  "sobjectType" : "Account",
  "whereCondition" : {
    "field" : "CreatedDate",
    "operator" : "equals",
    "values" : [ "THIS_WEEK" ]
  }
}
```
