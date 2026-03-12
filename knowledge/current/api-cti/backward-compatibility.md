---
title: "Backward Compatibility"
domain: api-cti
topic: backward-compatibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.631Z
estimatedTokens: 664
keywords: [Backward, Compatibility, Salesforce, strives, easy, Open, CTI]
---

# Backward Compatibility

> Salesforce strives to make backward compatibility easy when using Open CTI.

# Backward Compatibility

Salesforce strives to make backward compatibility easy when using Open CTI.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

Each new Salesforce release consists of two components:

-   A new release of platform software that resides on Salesforce systems
-   A new version of the API

Open CTI matches the API version for any given release. For example, if the current version of SOAP API is 66.0, then there’s also a version 66.0 of Open CTI.

We maintain support for each Open CTI version across releases of the platform. Open CTI is backward compatible in that an application created to work with a given Open CTI version will continue to work with that same Open CTI version in future platform releases.

Salesforce doesn't guarantee that an application written against one Open CTI version will work with future Open CTI versions: Changes in method signatures and data representations are often required as we continue to enhance Open CTI. However, we strive to keep Open CTI consistent from version to version with minimal changes required to port applications to newer Open CTI versions.

For example, an application written using Open CTI version 37.0, which shipped with the Summer ’16 release, will continue to work with Open CTI version 37.0 on the Winter ’17 release and on future releases. However, that same application might not work with Open CTI version 38.0 without modifications to the application.
