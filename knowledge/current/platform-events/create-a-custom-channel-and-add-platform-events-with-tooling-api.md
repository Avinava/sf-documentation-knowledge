---
title: "Create a Custom Channel and Add Platform Events with Tooling API"
domain: platform-events
topic: create-a-custom-channel-and-add-platform-events-with-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.743Z
estimatedTokens: 670
keywords: [Custom, Channel, Add, Platform, Events, Tooling, API, orders, named, Order_Channel__chn, two, members, Order_NorthAmer__e, Order_EMEA__e]
---

# Create a Custom Channel and Add Platform Events with Tooling API

> Create a channel for orders named Order_Channel__chn, and add two platform events as members: Order_NorthAmer__e and
  Order_EMEA__e.

# Create a Custom Channel and Add Platform Events with Tooling API

Create a channel for orders named Order\_Channel\_\_chn, and add two platform events as members: Order\_NorthAmer\_\_e and Order\_EMEA\_\_e.


| User Permissions Needed |
| --- |
| To create or update PlatformEventChannel and PlatformEventChannelMember objects: | Customize Application |
| To use REST API: | API Enabled |

You can use your preferred REST API tool to perform these steps. We recommend using Postman with the Salesforce Platform APIs collection, which contains handy templates for Salesforce API calls. See [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

1.  Create the channel using PlatformEventChannel, and set the channelType field to event. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel**.

2.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```

3.  Add the Order\_NorthAmer\_\_e platform event to the channel using PlatformEventChannelMember. The channel member references the channel it’s part of (Order\_Channel\_\_chn) through the eventChannel field. Specify the platform event in the selectedEntity field. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel member**.

4.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```

5.  Add the second channel member that specifies the platform event, Order\_EMEA\_\_e. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel member**.

6.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```


#### See Also

-   [*Tooling API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Tooling API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Tooling API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannel
```

```
{
  "FullName": "Order_Channel__chn",
  "Metadata": {
    "channelType": "event",
    "label": "Custom Channel for Orders"
  }
}
```

```
{
    "id": "0YLRM0000004CEI4A2",
    "success": true,
    "errors": [],
    "warnings": [],
    "infos": []
}
```

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannelMember
```

```
{
 "FullName": "Order_Channel_chn_Order_NorthAmer_e",
 "Metadata": {
  "eventChannel": "Order_Channel__chn",
  "selectedEntity": "Order_NorthAmer__e"
 }
}
```
