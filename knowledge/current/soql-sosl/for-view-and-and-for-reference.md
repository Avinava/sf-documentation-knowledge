---
title: "FOR VIEW and and FOR REFERENCE"
domain: soql-sosl
topic: for-view-and-and-for-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.713Z
estimatedTokens: 672
keywords: [VIEW, Salesforce, stores, record, views, uses, generate, recently, viewed, referenced, records, sidebar, auto-complete, options, search]
---

# FOR VIEW and and FOR REFERENCE

> Salesforce stores information about record views in the interface and uses the
    information to generate a list of recently viewed and referenced records, such as a list of
    records in a sidebar and for a list of records as auto-complete options in search. To update
    recent usage data for retrieved objects, use the FOR VIEW clause in
    conjunction with the FOR REFERENCE clause.

# FOR VIEW and and FOR REFERENCE

Salesforce stores information about record views in the interface and uses the information to generate a list of recently viewed and referenced records, such as a list of records in a sidebar and for a list of records as auto-complete options in search. To update recent usage data for retrieved objects, use the FOR VIEW clause in conjunction with the FOR REFERENCE clause.

## FOR VIEW

Use the optional FOR VIEW clause in a SOQL query to update objects with information about when they were last viewed.

When the FOR VIEW clause is used with a query, two things happen:

-   The LastViewedDate field for the retrieved record is updated.
-   A record is added to the RecentlyViewed object to reflect the recently viewed data for the retrieved record.

This example SOQL query retrieves a contact and uses FOR VIEW to update the last viewed date of the retrieved contact. The same statement both retrieves the record and updates its last viewed date.

```

```

## FOR REFERENCE

Use the optional FOR REFERENCE in a SOQL query to notify Salesforce when a record is referenced from a custom interface, such as in a mobile application or from a custom page.

A record is referenced every time a related record is viewed. For example, when a user views an account record, all related records (such as contacts, owner, leads, opportunities) are referenced.

When the FOR REFERENCE clause is used with a query, two things happen:

-   The LastReferencedDate field is updated for any retrieved records.
-   A record is added to the RecentlyViewed object to reflect the recently referenced data for each retrieved record.

This example SOQL query retrieves a contact and uses FOR REFERENCE to update the LastReferencedDate field of the retrieved contact.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

-   Use the FOR VIEW and FOR REFERENCE clauses only when you are sure that the retrieved records will definitely be viewed by the logged-in user, else the clause incorrectly updates the usage information for the records. Also, the user won’t recognize any incorrectly updated records when they display in the recent items and the global search auto-complete lists.
-   The RecentlyViewed object is updated every time the logged-in user views or references a record. It is also updated when records are retrieved using the FOR VIEW or FOR REFERENCE clause in a SOQL query. To ensure that the most recent data is available, RecentlyViewed data is periodically truncated down to 200 records per object. RecentlyViewed data is retained for 90 days, after which it is removed on a periodic basis.

## Code Examples

```
SELECT Name, ID FROM Contact  LIMIT 1 FOR VIEW
```

```
SELECT Name, ID FROM Contact  LIMIT 1 FOR REFERENCE
```
