---
title: "Optional Call Center Elements and Attributes"
domain: api-cti
topic: optional-call-center-elements-and-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.646Z
estimatedTokens: 598
keywords: [Call, Center, Elements, Attributes, definition, file, include, <item>, <section>, element]
---

# Optional Call Center Elements and Attributes

> The call center definition file can include optional <item> elements in the <section>
    element.

# Optional Call Center Elements and Attributes

The call center definition file can include optional <item\> elements in the <section\> element.

In addition to the required elements, you can add optional elements to configure a softphone.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience. The reqSalesforceCompatibilityMode item in your call center definition file identifies the user interface you plan to use—Salesforce Classic, Lightning Experience, or both. If no value is specified, the default is Classic. This item is optional, but to make calls in Lightning Experience you must specify Lightning or Classic\_and\_Lightning.

| <item> Name | Description | Supported in Salesforce Classic | Supported in Lightning Experience |
| --- | --- | --- | --- |
| reqSalesforceCompatibilityMode | Determines where the softphone is visible. If no value is specified, the default is Classic.NoteTo display the softphone in Lightning Experience, specify Lightning.To display the softphone in Salesforce Classic, specify Classic.To display the softphone in both user interfaces, specify Classic_and_Lightning. |  |  |
| reqStandbyUrl | Represents the location that hosts the secondary softphone. The standby softphone is used after the timeout period for the primary softphone has elapsed and the notifyInitializationComplete() for Salesforce Classic for Salesforce Classic method hasn’t been called within the required timeout period. When you specify a standby URL, you must also specify the reqTimeout field. |  |  |
| reqTimeout | Represents the time in milliseconds after which the standby URL is used to host the softphone. Before the timeout period has elapsed, the softphone displays a loading icon indicating that the softphone is initializing. When you specify a required timeout, you must also specify the reqStandbyUrl field. |  |  |

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Related Topics

- notifyInitializationComplete() for Salesforce Classic for Salesforce Classic (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_notifyInitializationComplete.htm)
- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
