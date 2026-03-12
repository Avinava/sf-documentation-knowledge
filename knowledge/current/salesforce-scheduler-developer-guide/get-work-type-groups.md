---
title: "Get Work Type Groups"
domain: salesforce-scheduler-developer-guide
topic: get-work-type-groups
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.998Z
estimatedTokens: 204
keywords: [Work, Groups, group, general, appointment, category, topic, home, loan, investment, Show, users, groupson, landing, app, retrieving, Salesforce, Query, WorkTypeGroup, retrieve]
---

# Get Work Type Groups

> Display the work type groups for the appointment.

# Get Work Type Groups

Display the work type groups for the appointment.

A work type group represents a general appointment category or topic, such as a home loan or investment.

Create a page in your app where you can show the work type groups from your org.

1.  Use the Query() request on the ServiceTerritoryWorkType object to retrieve the work types associated with the service territory selected on the Select Service Territory screen.

    Sample Request

    This sample REST API call uses the Query() request to retrieve the work type records.

    For more information on using Query() request, see [Execute a SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)").

    ```

    ```

    Sample Response

    The request returns the work type records.

    ```

    ```

2.  Use the Query() request on the WorkTypeGroupMember object to retrieve the work type groups by work types retrieved in the previous step.

    Sample Request

    This sample REST API call uses the Query() request to retrieve work type groups.

    For more information on using Query() request, see [Execute a SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)").

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    You can use the toLabel method to translate the SOQL query results in the language of the user. For more information, see [Translate SOQL Query Results](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_tolabel.htm "HTML (New Window)").

    Sample Response

    The request returns the work type group records.

    ```

    ```

    Parse the JSON response, and display the work type groups on web page so that users can select a work type group for the appointment. Here’s how that page can look.

    ![A representation of the Select Work Type Group screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fuc9_work_type_groups.png&folder=salesforce_scheduler_developer_guide)


Default to the work type that is associated with the service territory selected on the Select Service Territory screen and the work type group selected on the Select Work Type Group screen.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_service_territories.htm "Get Service Territories")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm "Get Work Type")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/query/?q=
SELECT+Id,+Name+From+WorkTypeGroup+Where+isActive+=+true+ORDER+BY+NAME
```

```
{
  "totalSize": 13,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009NdOAI"
      },
      "Id": "0VSS700000009NdOAI",
      "Name": "Create Account"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009YmOAI"
      },
      "Id": "0VSS700000009YmOAI",
      "Name": "Parent 1"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS70000004DuiOAE"
      },
      "Id": "0VSS70000004DuiOAE",
      "Name": "Parent topic Create"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009YwOAI"
      },
      "Id": "0VSS700000009YwOAI",
      "Name": "test"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009Z1OAI"
      },
      "Id": "0VSS700000009Z1OAI",
      "Name": "test 32"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS70000004DunOAE"
      },
      "Id": "0VSS70000004DunOAE",
      "Name": "test 32"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009ZaOAI"
      },
      "Id": "0VSS700000009ZaOAI",
      "Name": "Virtual WTG"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS70000004DvWOAU"
      },
      "Id": "0VSS70000004DvWOAU",
      "Name": "WorkTypeGrp1"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009TvOAI"
      },
      "Id": "0VSS700000009TvOAI",
      "Name": "Work_Type_Group_48368"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009TqOAI"
      },
      "Id": "0VSS700000009TqOAI",
      "Name": "Work_Type_Group_67304"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009ZVOAY"
      },
      "Id": "0VSS700000009ZVOAY",
      "Name": "Work_Type_Group_96227"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009O7OAI"
      },
      "Id": "0VSS700000009O7OAI",
      "Name": "WTG Block Time"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v56.0/sobjects/WorkTypeGroup/0VSS700000009Z6OAI"
      },
      "Id": "0VSS700000009Z6OAI",
      "Name": "ytre"
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/query/?q=SELECT+Id,+Name+From+WorkTypeGroup​+Where+isActive+=+true+ORDER+BY+NAME
```

```
{
  "totalSize": 3,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v57.0/sobjects/WorkTypeGroup/0VSS700000000sLOAQ"
      },
      "Id": "0VSS700000000sLOAQ",
      "Name": "Wealth Management"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v57.0/sobjects/WorkTypeGroup/0VSS700000000sQOAQ"
      },
      "Id": "0VSS700000000sQOAQ",
      "Name": "Loans"
    },
    {
      "attributes": {
        "type": "WorkTypeGroup",
        "url": "/services/data/v57.0/sobjects/WorkTypeGroup/0VSS700000000sVOAQ"
      },
      "Id": "0VSS700000000sVOAQ",
      "Name": "Banking"
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+Id,+Name+From+WorkTypeGroup
+Where+isActive+=+true+ORDER+BY+NAME+DESC
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_channel_types.htm)
- Translate SOQL Query Results (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_soql_select_tolabel.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_engagement_channel_types.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_engagement_channel_types.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_service_territories.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm)
