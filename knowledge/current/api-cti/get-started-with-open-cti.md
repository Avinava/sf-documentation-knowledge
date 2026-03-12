---
title: "Get Started with  Open CTI"
domain: api-cti
topic: get-started-with-open-cti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.775Z
estimatedTokens: 1455
keywords: [Started, Open, CTI, Build, integrate, third-party, computer-telephony, integration, systems, Salesforce, Call, Center, browser-based, JavaScript, API]
---

# Get Started with  Open CTI

> Build and integrate third-party computer-telephony integration (CTI) systems with Salesforce Call Center using a
    browser-based JavaScript API.

# Get Started with Open CTI

Build and integrate third-party computer-telephony integration (CTI) systems with Salesforce Call Center using a browser-based JavaScript API.

| Supported Editions |
| --- |
| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer Editions |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

To display CTI functionality in Salesforce, Open CTI uses browsers as clients. With Open CTI, you can make calls from a softphone directly in Salesforce without installing CTI adapters on your machines. After you develop an Open CTI implementation, you can integrate it with Salesforce using Salesforce Call Center.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience. You can’t swap the two Open CTI APIs in custom JavaScript code because they behave and function differently. Make sure that you think about where you want to implement your CTI system before you begin developing.

![Architecture Overview](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_cti%2Fimages%2FCTI_arch_overview.png&folder=api_cti)

With Open CTI, you can:

-   Build CTI systems that integrate with Salesforce without the use of CTI adapters.
-   Create customizable softphones (call-control tools) that function as fully integrated parts of Salesforce and the Salesforce console.
-   Provide users with CTI systems that are browser and platform agnostic, for example, CTI for Microsoft® Internet Explorer®, Mozilla® Firefox®, Apple® Safari®, or Google Chrome™ on Mac, Linux, or Windows machines.

To implement Open CTI, it helps if you have a basic familiarity with: CTI, JavaScript, Visualforce, web services, software development, the Salesforce console, and the Salesforce Call Center.

Keep in mind that Open CTI is only available for use with JavaScript pages. The examples in this guide are in JavaScript. You can use Open CTI in JavaScript to embed API calls and processes.

-   **[Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)**
    The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.
-   **[Method Parity Between Open CTI for Salesforce Classic and Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic_methods.htm)**
    The methods provided in the two APIs aren’t always the same. Some Salesforce Classic methods aren’t available in Lightning Experience and some have been renamed.
-   **[Open CTI and Other Voice Solutions](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_when_to_use.htm)**
    Open CTI integrates third-party CTI systems with Salesforce. But do you wonder what came before? Or what the difference is between Open CTI and Sales Dialer?
-   **[Customize Open CTI Functionality](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_customize.htm)**
    Your organization may have complex business processes that are unsupported by Open CTI functionality. Not to worry. When this is the case, the Lightning platform offers advanced administrators and developers several ways to implement custom functionality.
-   **[Open CTI Support Policy](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_support.htm)**
    Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice.

#### See Also

-   [*Salesforce Help*: Salesforce Call Center](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_overview.htm&language=en_US "Salesforce Help: Salesforce Call Center - html (New Window)")

-   [*Salesforce Help*: Salesforce Console](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_about.htm&language=en_US "Salesforce Help: Salesforce Console - html (New Window)")

-   [*Salesforce Help*: Supported Browsers](https://help.salesforce.com/apex/HTViewHelpDoc?id=getstart_browsers_sfx.htm&language=en_US "Salesforce Help: Supported Browsers - html (New Window)")

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
- Method Parity Between Open CTI for Salesforce Classic and Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic_methods.htm)
- Open CTI and Other Voice Solutions (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_when_to_use.htm)
- Customize Open CTI Functionality (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_customize.htm)
- Open CTI Support Policy (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_support.htm)
