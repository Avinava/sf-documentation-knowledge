---
title: "Retrieve and Update Information"
domain: restriction-rules
topic: retrieve-and-update-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.406Z
estimatedTokens: 244
keywords: [Retrieve, deploy, calls, move, metadata, XML, files, Salesforce, organization, local, file, system, PATCH, restriction, rules]
---

# Retrieve and Update Information

> Use the GET, PATCH, and DELETE methods to retrieve, update, and delete restriction
  rules.

# Retrieve and Update Information

Use the GET, PATCH, and DELETE methods to retrieve, update, and delete restriction rules.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=restriction_rules)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


## Retrieve

To retrieve information about your restriction rule, use the GET method.

Example HTTP Method and URI:

GET /services/data/v55.0/tooling/query/?q=SELECT+id,+targetEntity,+enforcementType,+recordFilter,+userCriteria+FROM+RestrictionRule

## Update

To update the restriction rule, use the PATCH method.

We recommend that you don’t update the value of targetEntity after the restriction rule is created. Instead, delete the restriction rule and create another one with the correct values.

Example HTTP Method and URI:

PATCH /services/data/v55.0/tooling/sobjects/RestrictionRule/0eYxxxxxxxxxxxx2AY

Replace 0eYxxxxxxxxxxxx2AY with the ID returned when creating the restriction rule.

Example Request Body:

All Metadata fields must be included, even if you aren’t updating them. Specify the FullName value only if you’re changing this field.

In this example, we deactivate the restriction rule by setting active to false.

```

```

## Delete

To delete a restriction rule, use the DELETE method.

Example HTTP Method and URI:

DELETE /services/data/v55.0/tooling/sobjects/RestrictionRule/0eYxxxxxxxxxxxx2AY

Replace 0eYxxxxxxxxxxxx2AY with the ID returned when creating the restriction rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=restriction_rules)

#### Note

If you include Salesforce org IDs in your userCriteria or recordCriteria fields, you must modify these IDs before deploying to the target org if different from the org where the restriction rules were retrieved.

## Code Examples

```
{
    "Metadata": {
        "active": false,
        "description": "Sales team can see only task records with specified record type",
        "enforcementType": "Restrict",
        "masterLabel": "Sales Team Record Type",
        "recordFilter": "recordTypeId = '011xxxxxxxxxxxx'",
        "targetEntity": "Task",
        "userCriteria": "$User.ProfileId = '00exxxxxxxxxxxx'",
        "version": 1
    }
}
```
