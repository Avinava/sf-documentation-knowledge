---
title: "Metadata API Example: Create a Custom Channel and Add Platform Events"
domain: platform-events
topic: metadata-api-example-create-a-custom-channel-and-add-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.724Z
estimatedTokens: 658
keywords: [Metadata, API, Custom, Channel, Add, Platform, Events, Instead, Tooling, member, recommend, part, application, lifecycle, management]
---

# Metadata API Example: Create a Custom Channel and Add Platform Events

> Instead of Tooling API, you can use Metadata API to create a channel and channel member.
        We recommend using Metadata API as part of the application lifecycle management process to
        develop, test, deploy, and release your apps to production. If you want to only configure
        the channel, we recommend using Tooling API with REST.

# Metadata API Example: Create a Custom Channel and Add Platform Events

Instead of Tooling API, you can use Metadata API to create a channel and channel member. We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to only configure the channel, we recommend using Tooling API with REST.


| User Permissions Needed |
| --- |
| To deploy and retrieve metadata types: | Customize Application |
| To update metadata types: | Modify Metadata Through Metadata API Functions |
| To use Metadata API: | API Enabled |

In this example, you create a channel for orders named Order\_Channel\_\_chn, and you add two platform events as members: Order\_NorthAmer\_\_e and Order\_EMEA\_\_e.

To create a channel and channel member with Metadata API, you can use tools such as Visual Studio Code with the Salesforce Extension pack or Salesforce CLI. For more information, see [Metadata API Developer Tools](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_developer_tools.htm) and [Quick Start: Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_quickstart_retrieve.htm) in the Metadata API Developer Guide.

This sample custom channel definition is for the Order\_Channel\_\_chn channel. The file name is Order\_Channel\_\_chn.platformEventChannel. To have this channel accept platform events, event is specified for channelType.

```

```

The sample channel member definition associates the custom platform event to the channel. This channel member specifies the platform event, Order\_NorthAmer\_\_e, and the channel, Order\_Channel\_\_chn. The file name is Order\_Channel\_chn\_Order\_NorthAmer\_e.platformEventChannelMember.

```

```

This channel member specifies the custom platform event, Order\_EMEA\_\_e, and the channel, Order\_Channel\_\_chn. The file name is Order\_Channel\_chn\_Order\_EMEA\_e.platformEventChannelMember.

```

```

This package.xml file references the channel and its two channel members.

```

```

#### See Also

-   [*Metadata API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm "Metadata API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Metadata API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>event</channelType>
    <label>Custom Channel for Orders</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>Order_Channel__chn</eventChannel>
    <selectedEntity>Order_NorthAmer__e</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>Order_Channel__chn</eventChannel>
    <selectedEntity>Order_EMEA__e</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Order_Channel__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <types>
        <members>Order_Channel_chn_Order_NorthAmer_e</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <types>
        <members>Order_Channel_chn_Order_EMEA_e</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <version>66.0</version>
</Package>
```
