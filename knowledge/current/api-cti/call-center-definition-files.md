---
title: "Call Center Definition Files"
domain: api-cti
topic: call-center-definition-files
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.637Z
estimatedTokens: 1263
keywords: [Call, Center, Definition, Files, file, define, Salesforce, particular, softphone, uses, support, integration, CRM, multiple, CTI]
---

# Call Center Definition Files

> A call center definition file specifies a set of fields and values that are used to
  define a call center in Salesforce for a particular softphone. Salesforce uses call center
  definition files to support the integration of Salesforce CRM Call Center with multiple CTI system
  vendors.

# Call Center Definition Files

A call center definition file specifies a set of fields and values that are used to define a call center in Salesforce for a particular softphone. Salesforce uses call center definition files to support the integration of Salesforce CRM Call Center with multiple CTI system vendors.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

A call center in Salesforce CRM Call Center must have a call center definition file that works specifically with a softphone. If you build a custom softphone with Open CTI, you must write a call center definition file to support it. The first instance of a call center for a particular softphone must be defined by importing the adapter's call center definition file into Salesforce. Subsequent call centers can be created by cloning the original call center that was created with the import.

If your organization modifies a softphone or builds a new one, you must customize the softphone’s call center definition file so that it includes any additional call center information that is required. For example, if you are building a softphone for a system that supports a backup server, your call center definition file should include fields for the backup server's IP address and port number. Softphones for systems that don’t have a backup server, don’t need those fields in their associated call center definition files.

Use a text or XML editor to define a call center definition file.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience. The reqSalesforceCompatibilityMode item in your call center definition file identifies the user interface you plan to use—Salesforce Classic, Lightning Experience, or both. If no value is specified, the default is Classic. This item is optional, but to make calls in Lightning Experience you must specify Lightning or Classic\_and\_Lightning.

-   **[Call Center Definition File Format](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_xml.htm)**
    A call center definition file consists of three XML elements: callCenter, section, and item.
-   **[Required Call Center Elements and Attributes](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_required.htm)**
    The call center definition file must include the required <item\> elements in the <section\> element.
-   **[Optional Call Center Elements and Attributes](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm)**
    The call center definition file can include optional <item\> elements in the <section\> element.
-   **[Specify Values for <item> Elements](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_item.htm)**
    With the exception of the reqInternalName <item\>, whose value must always be specified in a call center definition file, you can specify <item\> values either in the call center definition file or in Salesforce once the definition file has been imported.
-   **[Sample Call Center Definition File](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_sample.htm)**
    Each call center definition file looks different. This example shows you what a call center definition file looks like for an org using Salesforce Classic and Lightning Experience.

#### See Also

-   [*Salesforce Help*: Set Up a Call Center](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_overview.htm&language=en_US "Salesforce Help: Set Up a Call Center - html (New Window)")

-   [*Salesforce Help*: Creating a Call Center](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_createcc.htm&language=en_US "Salesforce Help: Creating a Call Center - html (New Window)")

## Related Topics

- Call Center Definition File Format (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_xml.htm)
- Required Call Center Elements and Attributes (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_required.htm)
- Optional Call Center Elements and Attributes (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm)
- Specify Values for <item> Elements (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_item.htm)
- Sample Call Center Definition File (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_sample.htm)
