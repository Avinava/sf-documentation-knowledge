---
title: "WITH HIGHLIGHT"
domain: soql-sosl
topic: with-highlight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.957Z
estimatedTokens: 454
keywords: [HIGHLIGHT, clause, added, SOSL, query, business, account, campaign, contact, custom, lead, opportunity, quote, user, searches]
---

# WITH HIGHLIGHT

> WITH HIGHLIGHT is an
            optional clause that can be added to a SOSL query for business account, campaign,
            contact, custom object, lead, opportunity, quote, and user searches. It highlights the
            terms matching the search query in search results, making it easier to identify relevant
            content. The WITH HIGHLIGHT clause can be used in API
            version 39.0 or later. Using WITH HIGHLIGHT for
            custom fields and objects can be used in API version 40.0 and later.

# WITH HIGHLIGHT

WITH HIGHLIGHT is an optional clause that can be added to a SOSL query for business account, campaign, contact, custom object, lead, opportunity, quote, and user searches. It highlights the terms matching the search query in search results, making it easier to identify relevant content. The WITH HIGHLIGHT clause can be used in API version 39.0 or later. Using WITH HIGHLIGHT for custom fields and objects can be used in API version 40.0 and later.

Highlighted search terms are generated from the following standard and custom field types.

-   Auto number
-   Email
-   Text
-   Text Area
-   Text Area (Long)

Highlighted search terms are *not* generated from the following field types.

-   Checkbox
-   Compound fields
-   Currency
-   Date
-   Date/Time
-   File
-   Formula
-   Lookup Relationship
-   Number
-   Percent
-   Phone
-   Picklist
-   Picklist (Multi-Select)
-   Text Area (Rich)
-   URL

## Example

The following SOSL statement returns search results with the search term salesforce highlighted.

```

```

The matching terms are highlighted with <mark> tags. If the original search term doesn’t yield any results because of incorrect spelling, the corrected spelling of the search term is highlighted in the results.

## Example

```

```

## Example

The following statement returns search results with the search term salesforce west highlighted for the custom field BuildingDescription of the custom object Building.

```

```

## Usage

Search terms that contain a wildcard are not highlighted.

Other objects that are included in searches that contain WITH HIGHLIGHT don’t return highlighted search terms.

A maximum of 25 records per entity per SOSL query are highlighted.

## Supported APIs

The WITH HIGHLIGHT clause in SOSL is supported in SOAP API and REST API.

## Code Examples

```
FIND {salesforce} IN ALL FIELDS RETURNING Account(Name,Description) WITH HIGHLIGHT
```

```
{
  "searchRecords" : [ {
    "attributes" : {
      "type" : "Account",
     "url" : "/services/data/v39.0/sobjects/Account/001xx000003DpxkAAC"
    },
    "Name" : "salesforce",
    "Description" : "Salesforce.com",
    "highlight.Description" : "<mark>salesforce</mark>.com",
    "highlight.Name" :
     "<mark>salesforce</mark>"
  } ]
}
```

```
FIND {Salesforce West} IN ALL FIELDS RETURNING Building__c(Name, BuildingDescription__c) WITH HIGHLIGHT
```
