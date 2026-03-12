---
title: "UI API Limitations"
domain: knowledge-dev
topic: ui-api-limitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.542Z
estimatedTokens: 1034
keywords: [API, Limitations, Lightning, Knowledge, RecordTypeId, Linked, Record, Shouldn’t, object-info, Error, Retrieving, KnowledgeArticleVersion.RecordTypeId, Fails, Data, Metadata]
---

# UI API Limitations

> UI API with Lightning Knowledge has these limitations.

# UI API Limitations

UI API with Lightning Knowledge has these limitations.

## RecordTypeId of Linked Record Shows as Null When It Shouldn’t

To retrieve the recordTypeId of a LinkedArticle.LinkedEntity record using the [Get a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_record_get.htm) UI API, replace Id with RecordTypeId. This limitation applies to API version 57.0 and later.

```

```

The response shows the record type ID in two places.

-   LinkedEntity | value | fields | RecordTypeId | value—Shows the correct record type ID.
-   LinkedEntity | value | recordTypeId—Shows null even if there’s an associated record type.

```

```

## object-info UI API Returns an Error

Changing the **Object Name** of the Knowledge object in **Object Manager** results in an error when you run the [Get Object Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_object_info.htm) UI API for LinkedArticle or CaseArticle. Don’t change the Knowledge object name. This limitation applies to API version 57.0 and later.

![Object Manager Details tab that shows Knowledge object name that must not change.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fknowledge_object_name.png&folder=knowledge_dev)

For example, you change the Knowledge object name and run these UI APIs.

```

```

You get an INSUFFICIENT\_ACCESS error.

```

```

## Retrieving KnowledgeArticleVersion.RecordTypeId Fails

To retrieve the KnowledgeArticleVersion.RecordTypeId of LinkedArticle or CaseArticle records using the [Get a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_record_get.htm) UI API, use the optionaFields not fields request parameter. This limitation applies to API version 57.0 and later.

```

```

Here’s the error that you get when you try to retrieve this RecordTypeId using the fields request parameter.

```

```

## Record Data and Metadata of Related Lists Don’t Show Up

If the related object isn’t added to the page layout of the parent record, UI API doesn’t return the record data or metadata of related lists. This limitation applies to API version 57.0 and later.

The affected endpoints are:

-   [Get Related List Records with URL Parameters](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_related_list_records.htm)
-   [Get Related List Records with a Request Body](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_related_list_records_get.htm)
-   [Get Related List Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_related_list_info_md.htm)

If the related object is missing from the page layout, you encounter one of these problems.

-   NVALID\_TYPE error code
-   UNKNOWN\_EXCEPTION error code
-   UI API returns the wrong record, for example, the LinkedArticle record instead of Article

To retrieve the correct record data or metadata with the related list UI API endpoints, add the related object to the parent object’s page layout.

```

```

To add a related list object, go to **Object Manager** | **{PARENT\_OBJECT}** | **Page Layouts** | **Related Lists**.

![Page Layouts tab in the Object Manager where you configure the related lists](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fconfigure_object_related_lists.png&folder=knowledge_dev)

For example, to retrieve the Articles related list with these UI API calls, add the **Articles** related list to the **WorkOrder**, **WorkOrderLineItem**, and **Case** page layouts. Apply this solution to other parent object types that **Articles** relate to.

```

```

To retrieve related list records related to Knowledge articles with these UI API calls, add the **WorkOrder**, **WorkOrderLineItem**, and **SocialPosts** related objects to the **Knowledge** page layout.

```

```

To retrieve record data or metadata of cases related to Knowledge articles, add the **Cases** related list to the **Knowledge** page layout.

```

```

## Code Examples

```
// This code doesn't retrieve the correct recordTypeId.
GET /services/data/v57.0/ui-api/records/{LinkedArticleId}?fields=LinkedArticle.LinkedEntity.Id
// This code retrieves the correct recordTypeId.
GET /services/data/v57.0/ui-api/records/{LinkedArticleId}?fields=LinkedArticle.LinkedEntity.RecordTypeId
```

```
{
    "apiName": "LinkedArticle",
    "childRelationships": {},
    "eTag": "0a4b81f3e165e7feefcc2f0e0f30e6da",
    "fields": {
        "LinkedEntity": {
            "displayValue": "00000001",
            "value": {
                "apiName": "Name",
                "childRelationships": {},
                "eTag": "0917224c30df4322d4e5abbda36a9c25",
                "fields": {
                    "Id": {
                        "displayValue": null,
                        "value": "0WORM0000006nan4AA"
                    },
                    "RecordTypeId": {
                        "displayValue": null,
                        "value": "012RM0000005Yl2YAE"
                    }
                },
                "id": "0WORM0000006nan4AA",
                "lastModifiedById": null,
                "lastModifiedDate": null,
                "recordTypeId": null,
                "recordTypeInfo": null,
                "systemModstamp": null,
                "weakEtag": 0
            }
        },
        "LinkedEntityId": {
            "displayValue": null,
            "value": "0WORM0000006nan4AA"
        }
    },
    "id": "1WKRM0000004MKA4A2",
    "lastModifiedById": "005RM000002Z4dkYAC",
    "lastModifiedDate": "2022-09-28T18:12:10.000Z",
    "recordTypeId": "012000000000000AAA",
    "recordTypeInfo": null,
    "systemModstamp": "2022-09-28T18:12:10.000Z",
    "weakEtag": 1664388730000
}
```

```
GET /services/data/v57.0/ui-api/object-info/LinkedArticle
GET /services/data/v57.0/ui-api/object-info/CaseArticle
```

```
{
    "errorCode":"INSUFFICIENT_ACCESS",
    "message":"You don't have access to this record. Ask your administrator for help or to request access."
}
```

```
GET /services/data/v57.0/ui-api/records/{LinkedArticleId}?optionalFields=LinkedArticle.KnowledgeArticleVersion.RecordTypeId
GET /services/data/v57.0/ui-api/records/{CaseArticleId}?optionalFields=CaseArticle.KnowledgeArticleVersion.RecordTypeId
```
