---
title: "Configure State and Country/Territory Picklists"
domain: caf-dev-guide
topic: configure-state-and-countryterritory-picklists
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.233Z
estimatedTokens: 587
keywords: [Configure, State, Country, Territory, Picklists, Custom, Address, uses, enable]
---

# Configure State and Country/Territory Picklists

> Custom Address Fields uses picklists for the State and Country address fields. Before
    you enable custom address fields, configure State and Country/Territory picklists.

# Configure State and Country/Territory Picklists

Custom Address Fields uses picklists for the State and Country address fields. Before you enable custom address fields, configure State and Country/Territory picklists.

| Available in: all editions except Database.com. |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you enable custom address fields, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

If State and Country/Territory picklists are enabled, those picklist values are used in standard address fields. With Custom Address Fields, the same picklist values are automatically available in custom address fields. You can’t specify separate picklist values for standard and custom address fields.

If State and Country/Territory Picklists aren’t enabled, those picklists are enabled for custom address fields with Custom Address Fields. By default, all countries, territories, and their states and provinces are visible to users. To specify the available picklist values in Salesforce, configure State and Country/Territory Picklists.

When you configure these picklist values, the behavior of standard address fields is unaffected unless you enable State and Country/Territory Picklists for standard fields through Setup. Enabling the picklists for standard fields isn’t required to use Custom Address Fields.

To configure the picklists, use the AddressSettings Metadata API or see [Configure State and Country/Territory Picklists](https://help.salesforce.com/s/articleView?id=admin_state_country_picklists_configure.htm&language=en_US) in Salesforce Help.

For details on enabling the picklists for standard address fields, see [Let Users Select States, Countries, and Territories from Picklists](https://help.salesforce.com/s/articleView?id=xcloud.admin_state_country_picklists_overview.htm&type=5&language=en_US) in Salesforce Help.

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
