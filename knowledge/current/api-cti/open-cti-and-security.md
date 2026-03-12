---
title: "Open CTI and Security"
domain: api-cti
topic: open-cti-and-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.001Z
estimatedTokens: 483
keywords: [Open, CTI, Security, recommend, implementations, HTTPS, reqAdapterUrl, element, their, call, center, definition, file, ensures, traffic]
---

# Open CTI and Security

> We recommend that all Open CTI implementations use HTTPS in the reqAdapterUrl element in their call center definition file.
    Using HTTPS ensures that traffic between your telephony server and Salesforce is
    encrypted.

# Open CTI and Security

We recommend that all Open CTI implementations use HTTPS in the reqAdapterUrl element in their call center definition file. Using HTTPS ensures that traffic between your telephony server and Salesforce is encrypted.

By using HTTPS, Open CTI inherits all the benefits of browser and cloud-based security because it points directly to the softphone provider using a secure connection. When users access the softphone on any Salesforce page, it’s displayed in an iFrame and all messages from the softphone to Salesforce are sent via Window.postMessage() methods. For each message sent, the target is restricted to Salesforce. For each message received, Salesforce verifies its format and the sender origin.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_cti)

#### Tip

For Salesforce Classic console apps, if your CTI phone is running on a server with a non-standard port, make sure to include the port number in your domain. For example, if your server is called myserver and your port number is 8500, include myserver:8500 as an allowed URL in your Salesforce console. This setting doesn’t apply for Lightning console apps.

#### See Also

-   [Required Call Center Elements and Attributes](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_required.htm "The call center definition file must include the required <item> elements in the <section> element.")

-   [*Mozilla Developer Network*: Window.postMessage() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage "Mozilla Developer Network: Window.postMessage() method - HTML (New Window)")

-   [*Salesforce Help*: Whitelist Domains for a Salesforce Console in Salesforce Classic](https://help.salesforce.com/articleView?id=console2_whitelist_domains.htm&language=en_US "Salesforce Help: Whitelist Domains for a Salesforce Console in Salesforce
    Classic - HTML (New Window)")

## Related Topics

- Required Call Center Elements and Attributes (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_required.htm)
