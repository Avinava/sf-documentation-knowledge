---
title: "Security Considerations"
domain: integration-patterns-and-practices
topic: security-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:41.296Z
estimatedTokens: 1266
keywords: [Security, Considerations, effective, members, enterprise, portfolio, applications, created, integrated, relevant, mechanisms, Modern, strategies, employ, combination]
---

# Security Considerations

> To be effective members of the enterprise portfolio, all applications must be created
        and integrated with relevant security mechanisms. Modern IT strategies employ a combination
        of on-premises and cloud-based services.

# Security Considerations

To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.

While integrating cloud-to-cloud services typically focuses on web services and associated authorization, connecting on-premises and cloud services often introduces increased complexity. This section describes security tools, techniques, and Salesforce-specific considerations.

## Reverse Proxy Server

“A reverse proxy is a server that sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. Reverse proxies are typically implemented to help increase security, performance, and reliability.”[1](#fntarg_1)

It’s “a type of proxy server that retrieves resources on behalf of a client from one or more servers. These resources are then returned to the client as though they originated from the proxy server itself. Unlike a forward proxy, which is an intermediary for its associated clients to contact any server, a reverse proxy is an intermediary for its associated servers to be contacted by any client.”[2](#fntarg_2)

In Salesforce implementations, such a service is typically provided via an external gateway product. For example, open source options such as Apache HTTP, lighttpd, and nginix can be used. Commercial products include IBM WebSeal and Computer Associates SiteMinder. These products can be easily configured to proxy and manage all outbound Salesforce requests on behalf of the internal requester.

## Encryption

Some enterprises require selected transactions or data fields to be encrypted between a combination of on-premises and cloud-based applications. If your organization must adhere to additional compliance requirements, you can implement alternatives, including:

-   On-premises commercial encryption gateway services, including Salesforce’s own, CipherCloud, IBM DataPower, Computer Associates. For each solution, the encryption engine or gateway is invoked at the transaction boundary by sending and receiving an encrypted payload or when encrypting or decrypting specific data fields before the HTTP(S) request executes.
-   Cloud-based options, such as Salesforce Shield Platform Encryption. Shield Platform Encryption gives your data a whole new layer of security while preserving critical platform functionality. The data you select is encrypted at rest using an advanced key derivation system. You can protect your data more securely than ever before. Refer to the Salesforce online help for more information.

## Specialized WS-\* Protocol Support

To address the requirements of security protocols (such as WS-\*), we recommend these alternatives.

-   Security/XML gateway—Inject WS-Security credentials (IBM WebSeal or Datapower, Layer7, TIBCO, and so on) into the transaction stream itself. This approach requires no changes to application-level web services or web service invocations from Salesforce. You can also reuse this approach across the Salesforce installation. However, it requires additional design, configuration, testing, and maintenance to manage the appropriate WS-Security injection into the existing security gateway approach.
-   Transport-level encryption—Encrypt the communication channel using two-way SSL and IP restrictions. While this approach doesn’t directly implement the WS-\* protocol by itself, it secures the communication channel between the on-premises applications and Salesforce without passing a username and password. It also doesn’t require changes to Salesforce-generated classes. However, some on-premises web services modifications might be required (at either the application itself or at the middleware/ESB layer).
-   Salesforce custom development—Add WS-Security headers to the outbound SOAP request via the WSDL2Apex utility. This generates a Java-like Apex class from the WSDL file used to invoke the internal service. While this approach requires no changes to back-end web services or additional components in the DMZ, it does require:

    -   an increased build and test effort
    -   a relatively complex and manual process to hand-code the WS-Security attributes (including XML serialization within the Apex code)
    -   a higher long-term maintenance effort

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=integration_patterns_and_practices)

    #### Note

    The last option isn’t recommended due to its complexity and the risk that such integrations need periodic reviews based on regular updates to Salesforce.


[1](#fnsrc_1) “What Is a Reverse Proxy?,” Cloudflare, last accessed April 11, 2019, [https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/ "HTML (New Window)").

[2](#fnsrc_2) “Reverse proxy,” Wikipedia, last accessed April 11, 2019, [http://en.wikipedia.org/wiki/Reverse\_proxy](http://en.wikipedia.org/wiki/Reverse_proxy "HTML (New Window)").
