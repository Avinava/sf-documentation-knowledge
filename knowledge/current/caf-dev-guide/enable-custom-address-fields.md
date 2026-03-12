---
title: "Enable Custom Address Fields"
domain: caf-dev-guide
topic: enable-custom-address-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.269Z
estimatedTokens: 492
keywords: [Enable, Custom, Address, review, feature, limitations, configure, State, Country, Territory, picklists]
---

# Enable Custom Address Fields

> After you review the feature limitations and configure the State and Country/Territory
    picklists, enable the Custom Address Fields feature.

# Enable Custom Address Fields

After you review the feature limitations and configure the State and Country/Territory picklists, enable the Custom Address Fields feature.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: all editions |


| User Permissions Needed |
| --- |
| To modify user interface settings: | Customize Application |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

Before you enable custom address fields, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature.") and [Configure State and Country/Territory Picklists](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_configure_picklists.htm "Custom Address Fields uses picklists for the State and Country address fields. Before you enable custom address fields, configure State and Country/Territory picklists.").

To enable Custom Address Fields in Setup:

1.  In Setup, in the Quick Find box, enter User Interface, and then select **User Interface**.
2.  In the Setup section, select **Use custom address fields** and save your changes.

    After you enable custom address fields, the Address data type is available when you add a field via Object Manager.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

    #### Note

    This feature can’t be disabled.


To enable Custom Address Fields via Metadata API, use the enableCustomAddressField field in the CustomAddressFieldSettings metadata type.

## Related Topics

- Custom Address Fields
        Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
- Configure State and Country/Territory Picklists (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_configure_picklists.htm)
