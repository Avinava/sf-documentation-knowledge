---
title: "Specify Values for <item> Elements"
domain: api-cti
topic: specify-values-for-item-elements
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.640Z
estimatedTokens: 481
keywords: [Specify, <item>, Elements, exception, reqInternalName, whose, always, call, center, definition, file, either, Salesforce, once, imported]
---

# Specify Values for <item> Elements

> With the exception of the reqInternalName
  <item>, whose value must always be specified in a call center
  definition file, you can specify <item> values either in the
  call center definition file or in Salesforce
  once the definition file has been imported.

# Specify Values for <item> Elements

With the exception of the reqInternalName <item\>, whose value must always be specified in a call center definition file, you can specify <item\> values either in the call center definition file or in Salesforce once the definition file has been imported.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

To specify a value for an <item> element in a call center definition file, place the value between the opening and closing tags of the <item>. For example:

```

```

sets the value of the reqInternalName <item> to MyCallCenter. Note that any <item> value other than the value for reqInternalName can be edited in Salesforce after the call center definition is imported.

## Code Examples

```
<item sortOrder="0" name="reqInternalName" label="Call Center Internal Label">MyCallCenter</item>
```
