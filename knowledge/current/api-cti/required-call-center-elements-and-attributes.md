---
title: "Required Call Center Elements and Attributes"
domain: api-cti
topic: required-call-center-elements-and-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.653Z
estimatedTokens: 811
namespace: Represents
keywords: [Call, Center, Elements, Attributes, definition, file, include, <item>, <section>, element]
---

# Required Call Center Elements and Attributes

> The call center definition file must include the required <item> elements in the <section>
    element.

**Namespace:** `Represents`

# Required Call Center Elements and Attributes

The call center definition file must include the required <item\> elements in the <section\> element.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience. The reqSalesforceCompatibilityMode item in your call center definition file identifies the user interface you plan to use—Salesforce Classic, Lightning Experience, or both. If no value is specified, the default is Classic. This item is optional, but to make calls in Lightning Experience you must specify Lightning or Classic\_and\_Lightning.

| <item> Name | Description | Supported in Salesforce Classic | Supported in Lightning Experience |
| --- | --- | --- | --- |
| reqAdapterUrl | Represents the location of where the CTI adapter or softphone is hosted. For example:http://localhost:11000Relative URLs are allowed for Visualforce pages. For example:: /apex/softphoneIf you add Canvas applications to Open CTI, those apps can trump reqAdapterUrl when specified.NoteTo implement in a Lightning Experience org, use https in your URL. |  |  |
| reqCanvasApiName | Represents the API name associated with any Canvas applications added to your call center. Required if you add canvas apps to Open CTI. |  | Not supported |
| reqCanvasNamespace | Represents the namespace associated with any Canvas applications added to your call center. Required if you add canvas apps to Open CTI. |  | Not supported |
| reqDisplayName | Represents the name of the call center as displayed in Salesforce. It must have a sortOrder value of 1. A value for reqDisplayName has a maximum length of 1,000 UTF-8 characters. |  |  |
| reqInternalName | Represents the unique identifier for the call center in the database. It must have a sortOrder value of 0, and its value must be specified in the call center definition. A value for reqInternalName must be composed of no more than 40 alphanumeric characters with no white space or other punctuation. It must start with an alphabetic character and must be unique from the reqInternalName of all other call centers defined in your organization. |  |  |
| reqSoftphoneHeight | Represents the height of the softphone in pixels as displayed in Salesforce.NoteIf you’re using Open CTI for Lightning Experience, enter a number from 240 through 2,560. Value is in pixels (px). |  |  |
| reqSoftphoneWidth | Represents the width of the softphone in pixels as displayed in Salesforce.NoteIf you’re using Open CTI for Lightning Experience, enter a number from 200 through 1,920. Value is in pixels (px). |  |  |
| reqUseApi | Represents that the call center is using Open CTI (true) or not (false). |  |  |

If needed, you can add more <item\> elements to this section.

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
