---
title: "Example: Add Event Enrichment Fields with Tooling API"
domain: change-data-capture
topic: example-add-event-enrichment-fields-with-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.543Z
estimatedTokens: 1316
keywords: [Add, Event, Enrichment, Tooling, API, PlatformEventChannelMember, specify, channel, member, Query, Enriched]
---

# Example: Add Event Enrichment Fields with Tooling API

> To add event enrichment fields, use the PlatformEventChannelMember Tooling API object,
    and specify the fields, the channel, and channel member.

# Example: Add Event Enrichment Fields with Tooling API

To add event enrichment fields, use the PlatformEventChannelMember Tooling API object, and specify the fields, the channel, and channel member.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

To carry out similar steps in Trailhead and earn a badge, check out [Create a Custom Channel and Enrich Change Events](https://trailhead.salesforce.com/content/learn/projects/create-a-custom-channel-and-enrich-change-events?trail_id=design-eventdriven-apps-for-realtime-integration "HTML (New Window)").

If the channel member you’re enriching is part of a custom channel, create the custom channel first, as shown in this example. You can skip this step if using the ChangeEvents standard channel, or if you created the custom channel earlier.

Make a POST request to this REST endpoint:

```

```

Request body for the custom channel:

```

```

To add enrichment fields, perform a REST request that creates a PlatformEventChannelMember component by using Tooling API. In this example, the component contains three enriched fields in the enrichedFields array for AccountChangeEvent on the SalesEvents custom channel. Before you create this channel member, create a custom Text(20) field for Account with the label External Account ID.

Make a POST request to this REST endpoint (API version 51.0 or later is supported for enrichment fields):

```

```

Request body with enrichment fields added in a channel member:

```

```

## Query Enriched Fields

To find out which channel members and fields you configured, query the EnrichedField object in Tooling API. For example, this query returns the selected enriched field and the channel member ID.

```

```

You can perform a query using the Query Editor in the Developer Console and by checking **Use Tooling API**. For more information, see [Developer Console Query Editor](https://help.salesforce.com/articleView?id=code_dev_console_tab_query_editor.htm&language=en_US "HTML (New Window)") in Salesforce Help.

Alternatively, you can run a query using REST API. Perform a GET request to the following URI. The URI includes the query with spaces replaced with +.

```

```

In these query results, the rows returned are for the same channel member. They contain these enriched fields: Industry, the External\_Account\_ID\_\_c custom field, whose value is an ID, and BillingAddress.

| ChannelMemberId | Field |
| --- | --- |
| 0v8RM00000000JsYAI | Industry |
| 0v8RM00000000JsYAI | 00NRM000001gEx32AE |
| 0v8RM00000000JsYAI | BillingAddress |

## Update a Channel Member with Enriched Fields

If there’s an existing channel member for the same selected entity and channel, you can’t create a duplicate channel member with a POST request. Instead, update the channel member with a PATCH request. Alternatively, you can delete the channel member and recreate it with the enriched fields.

To update a channel member, follow these steps.

1.  If you’re using a custom channel, get the channel ID by running this query:

    ```

    ```

    DeveloperName doesn’t contain the \_\_chn suffix of a custom channel name. For example, for the SalesEvents\_\_chn channel, the query would be:

    ```

    ```

2.  Get the channel member ID with this Tooling API query. For a custom channel, replace Channel\_ID with the ID you got in the previous step, or for the standard ChangeEvents channel, replace Channel\_ID with ChangeEvents. Replace EntityChangeEvent with the selected entity name.

    ```

    ```

    For example, for AccountChangeEvent on custom channel ID 0YLRM00000000434AA, the query looks as follows.

    ```

    ```

    Or for the standard ChangeEvents channel, the full URI would be:

    ```

    ```

3.  Make a PATCH request to this URI and append the channel member ID you got in the previous step.

    ```

    ```

    In the request body, include the JSON definition of the channel member. For example, to update AccountChangeEvent on the channel member ID of 0v8RM00000000JsYAI and set the enriched fields to be the Phone field only, make a PATCH request to this URI:

    ```

    ```

    With this request body:

    ```

    ```

    If the channel member was previously configured with enriched fields, the update clears them and replaces them with the fields specified in the request body. This example specifies only one enriched field, the Phone field. If the channel member didn’t contain enriched fields, the update adds the specified enriched fields.

    For PATCH requests, include the full definition of a PlatformEventChannelMember. Partial definitions with only the enriched fields aren’t supported.


#### See Also

-   [*Tooling API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Tooling API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Tooling API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannel
```

```
{
  "FullName": "SalesEvents__chn",
  "Metadata": {
    "channelType": "data",
    "label": "Custom Channel for Sales App"
  }
}
```

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannelMember
```

```
{
  "FullName": "SalesEvents_AccountChangeEvent",
  "Metadata": {
    "enrichedFields": [
      {
        "name": "External_Account_ID__c"
      },
      {
        "name": "Industry"
      },
      {
        "name": "BillingAddress"
      }
    ],
    "eventChannel": "SalesEvents__chn",
    "selectedEntity": "AccountChangeEvent"
  }
}
```

```
SELECT ChannelMemberId,Field FROM EnrichedField ORDER BY ChannelMemberId
```
