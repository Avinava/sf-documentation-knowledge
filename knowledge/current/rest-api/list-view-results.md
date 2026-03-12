---
title: "List View Results"
domain: rest-api
topic: list-view-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.560Z
estimatedTokens: 171
keywords: [View, Results, Executes, SOQL, query, resulting, data, presentation, resource, REST, API, version, 32.0, later]
---

# List View Results

> Executes the SOQL query for the list view and returns the resulting data and
    presentation information. This resource is available in REST API version 32.0 and
    later.

# List View Results

Executes the SOQL query for the list view and returns the resulting data and presentation information. This resource is available in REST API version 32.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/listviews/listViewID/results

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| limit | The maximum number of records to return, between 1-2000. The default value is 25. |
| offset | The first record to return. Use this parameter to paginate the results. The default value is 0. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0/results?offset=10&limit=5 -H "Authorization: Bearer token"
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
  "developerName" : "MyAccounts",
  "done" : true,
  "id" : "00BD0000005WcCN",
  "label" : "My Accounts",
  "records" : [ {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Burlington Textiles Corp of America"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "NC"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(336) 222-7000"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSTIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Dickenson plc"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "KS"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(785) 241-6200"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Channel"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSVIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Edge Communications"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "TX"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(512) 757-6000"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSSIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Express Logistics and Transport"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "OR"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(503) 421-7800"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Channel"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSXIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "GenePoint"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "CA"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(650) 867-3450"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Channel"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSPIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Grand Hotels and Resorts Ltd"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "IL"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(312) 596-1000"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSWIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "Pyramid Construction Inc."
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : null
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(014) 427-4427"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Channel"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSUIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "sForce"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "CA"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(415) 901-7000"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : null
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSaIAJ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "United Oil and Gas Corp."
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "NY"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(212) 842-5500"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSZIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "United Oil and Gas, Singapore"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "Singapore"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(650) 450-8810"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSRIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "United Oil and Gas, UK"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "UK"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "+44 191 4956203"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSQIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  }, {
    "columns" : [ {
      "fieldNameOrPath" : "Name",
      "value" : "University of Arizona"
    }, {
      "fieldNameOrPath" : "Site",
      "value" : null
    }, {
      "fieldNameOrPath" : "BillingState",
      "value" : "AZ"
    }, {
      "fieldNameOrPath" : "Phone",
      "value" : "(520) 773-9050"
    }, {
      "fieldNameOrPath" : "Type",
      "value" : "Customer - Direct"
    }, {
      "fieldNameOrPath" : "Owner.Alias",
      "value" : "TUser"
    }, {
      "fieldNameOrPath" : "Id",
      "value" : "001D000000JliSYIAZ"
    }, {
      "fieldNameOrPath" : "CreatedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "LastModifiedDate",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    }, {
      "fieldNameOrPath" : "SystemModstamp",
      "value" : "Fri Aug 01 21:15:46 GMT 2014"
    } ]
  } ],
  "size" : 12
}
```
