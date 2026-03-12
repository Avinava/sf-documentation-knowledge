---
title: "Translate SOQL Query Results"
domain: salesforce-scheduler-developer-guide
topic: translate-soql-query-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.583Z
estimatedTokens: 424
keywords: [Translate, SOQL, Query, Results, language, user, submits, toLabel, translation, search, organization]
---

# Translate SOQL Query Results

> To translate SOQL query results into the language of the user who
      submits the query, use the toLabel method. If no
    translation is available, the method returns the search results in the default language of the
    organization.

# Translate SOQL Query Results

To translate SOQL query results into the language of the user who submits the query, use the toLabel method. If no translation is available, the method returns the search results in the default language of the organization.

Any organization can use the toLabel() method. It’s useful for organizations that enabled the data translation. For information on how to enable data translation, see [Manage Entities’ Data Translation](https://help.salesforce.com/s/articleView?id=platform.ls_manage_data_translations.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Scheduler Help.

The toLabel method uses the following syntax:

```

```

This method is supported on the WorkTypeGroup, ServiceResource, and ServiceTerritory objects. Use this method to return translated search results on the following fields:

-   Name
-   Description
-   Custom fields of type Text, MultiLine Text, Long Text Area, Rich Text Area, and URL

You can’t use the toLabel() method in the ORDER BY clause. For limitations that apply to the translation, see [Translate Returned SOQL Results](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_tolabel.htm) in SOQL and SOSL Reference.

Sample Request

Example of data translation request for WorkTypeGroup:

```

```

Example of data translation request for ServiceResource:

```

```

Example of data translation request for ServiceTerritory:

```

```

Sample Response

Example of translated query results for WorkTypeGroup:

```

```

Example of translated query results for ServiceResource:

```

```

Example of translated query results for ServiceTerritory:

```

```

## Code Examples

```
toLabel(object.field)
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/
query/?q=SELECT+toLabel(Name),+toLabel(Description),+toLabel(Details__c),+toLabel(Disclaimer__c)+From+WorkTypeGroup
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/
query/?q=SELECT+toLabel(Name),+toLabel(Description),+toLabel(Profile_URL__c)+From+ServiceResource
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/
query/?q=SELECT+toLabel(Name),+toLabel(Description),+toLabel(Notes__c)+From+ServiceTerritory
```

```
{
  "totalSize": 6,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v54.0/sobjects/WorkTypeGroup/0VSx00000000ZTDGA2"
      },
      "Name": "手術",
      "Description": "説明",
      "Details__c": "<ul><li><b><i><u>これはテキスト領域です</u></i></b><span style="color: rgb(0, 0, 0);"></span></li></ul>",
      "Disclaimer__c": "信頼"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v54.0/sobjects/WorkTypeGroup/0VSx00000000ZTAGA2"
      },
      "Name": "WTG 3",
      "Description": null,
      "Details__c": null,
      "Disclaimer__c": null
    }
  ]
}
```
