---
title: "Call Center Definition File Format"
domain: api-cti
topic: call-center-definition-file-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.667Z
estimatedTokens: 1125
keywords: [Call, Center, Definition, File, consists, three, XML, elements, callCenter, item]
---

# Call Center Definition File Format

> A call center definition file consists of three XML elements: callCenter, section, and item.

# Call Center Definition File Format

A call center definition file consists of three XML elements: callCenter, section, and item.

This list provides details about the properties and attributes of each element:

-   callCenter

    This element represents a definition for a single call center phone system. At least one <callCenter\> element must be included in every call center definition file. A <callCenter\> element consists of one or more <section\> elements.

-   section

    This element represents a grouping of related data fields, such as server information or dialing prefixes. When a call center is edited in Salesforce, fields are organized by the section to which they are assigned. A <section\> element belongs to a single <callCenter\> element, and consists of one or more <item\> elements.

    Attributes:

    | Name | Type | Required? | Description |
    | --- | --- | --- | --- |
    | sortOrder | Positive Integer | Required | The order in which the section appears when the call center is edited in Salesforce. For example, a section with sortOrder="1" comes just before a section with sortOrder="2".The values for sortOrder must be non-negative integers, and no numbers can be skipped within a single call center definition. For example, if there are three section elements in a call center definition file, one <section> element must have sortOrder="0", one <section> element must have sortOrder="1", and one <section> element must have sortOrder="2". |
    | name | String | Required | The internal name of the section as defined in the Salesforce database. You can use this value to refer to the section when writing custom adapter or SoftPhone code.Names must be composed of only alphanumeric characters with no white space or other punctuation. They are limited to 40 characters each.Names beginning with req are reserved for required Salesforce sections only. Other reserved words that cannot be used for the name attribute include label, sortOrder, internalNameLabel, and displayNameLabel. |
    | label | String | Optional | The name of the section when viewed in Salesforce. Labels can be composed of any string of UTF-8 characters. They are limited to 1000 characters each. |

-   item

    This element represents a single field in a call center definition, such as the IP address of a primary server or the dialing prefix for international calls. When call centers are edited in Salesforce, each <item\> element is listed under the section to which it belongs. You can have multiple <item\> elements in a <section\> element.

    Attributes:

    | Name | Type | Required? | Description |
    | --- | --- | --- | --- |
    | sortOrder | Positive Integer | Required | The order in which the item appears when the call center is edited in Salesforce. For example, an item with sortOrder="1" comes just before an item with sortOrder="2".The values for sortOrder must be non-negative integers, and no numbers can be skipped within a single call center definition. For example, if there are three item elements in a call center definition file, one <item> element must have sortOrder="0", one <item> element must have sortOrder="1", and one <item> element must have sortOrder="2". |
    | name | String | Required | The internal name of the item as defined in the Salesforce database. You can use this value to refer to the item when writing a custom adapter or SoftPhone code.Names must be composed of only alphanumeric characters with no white space or other punctuation. They are limited to 40 characters each.Names beginning with req are reserved for required Salesforce sections only. Other reserved words that cannot be used for the name attribute include label, sortOrder, internalNameLabel, and displayNameLabel. |
    | label | String | Optional | The name of the item when viewed in Salesforce. Labels can be composed of any string of UTF-8 characters. They are limited to 1,000 characters each. |


#### See Also

-   [*Salesforce Help*: Call Center Definition Files](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_cctemplateoverview.htm&language=en_US "Salesforce Help: Call Center Definition Files - html (New Window)")

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
