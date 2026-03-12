---
title: "Example: Add Event Enrichment Fields with Metadata API"
domain: change-data-capture
topic: example-add-event-enrichment-fields-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.537Z
estimatedTokens: 484
keywords: [Add, Event, Enrichment, Metadata, API, PlatformEventChannelMember, specify, channel, member]
---

# Example: Add Event Enrichment Fields with Metadata API

> To add event enrichment fields, use the PlatformEventChannelMember metadata type, and
        specify the fields, the channel, and channel member.

# Example: Add Event Enrichment Fields with Metadata API

To add event enrichment fields, use the PlatformEventChannelMember metadata type, and specify the fields, the channel, and channel member.

If the channel member you are enriching is part of a custom channel, create the custom channel first, as shown in this example. You can skip this step if using the ChangeEvents standard channel, or if you created the custom channel earlier.

This sample metadata component is for a custom channel.

```

```

This package.xml references the previous definition. The custom channel name is SalesEvents\_\_chn.

```

```

To add enrichment fields, deploy the PlatformEventChannelMember component containing the enriched fields. In this example, the component contains three enriched fields for AccountChangeEvent on the SalesEvents custom channel. Before you create this channel member, create a custom Text(20) field for Account with the label External Account ID.

```

```

Use this package.xml manifest file to deploy or retrieve the channel member definition. Only API version 51.0 or later is supported for enriched fields.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If the member is already part of the channel, you can update it with enriched fields by redeploying the PlatformEventChannelMember component with an updated definition.

#### See Also

-   [*Metadata API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm "Metadata API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Metadata API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>data</channelType>
    <label>Custom Channel for Sales Events</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>SalesEvents__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <enrichedFields>
        <name>External_Account_ID__c</name>
    </enrichedFields>
    <enrichedFields>
        <name>Industry</name>
    </enrichedFields>
    <enrichedFields>
        <name>BillingAddress</name>
    </enrichedFields>
    <eventChannel>SalesEvents__chn</eventChannel>
    <selectedEntity>AccountChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>SalesEvents_AccountChangeEvent</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <version>66.0</version>
</Package>
```
