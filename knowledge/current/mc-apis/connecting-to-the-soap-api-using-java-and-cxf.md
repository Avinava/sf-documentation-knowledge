---
title: "Connecting to the SOAP API Using Java and CXF"
domain: mc-apis
topic: connecting-to-the-soap-api-using-java-and-cxf
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.654Z
estimatedTokens: 796
keywords: [Connecting, SOAP, API, Java, CXF, development, environment, systems, Marketing, Cloud, via, client, users, Prerequisites, Why]
---

# Connecting to the SOAP API Using Java and CXF

> This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Java via the CXF SOAP client. CXF is a SOAP client used by many Java users.

# Connecting to the SOAP API Using Java and CXF

This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Java via the CXF SOAP client. CXF is a SOAP client used by many Java users.

## Prerequisites

In order to use the configuration in this document, you must download and implement the CXF development environment.

[Download CXF](http://cxf.apache.org/)

## Why Connect to the SOAP API using Java and CXF

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How To Connect to the SOAP API using Java and CXF

Download CXFand follow the appropriate instructions at that site to install the service on your computer. You can use the sample code below to authenticate your installation and exchange information with the SOAP API servers. The code example below does not include all of the libraries and classes your environment may require to authenticate. Be sure to include all applicable libraries and classes in your code to ensure proper functionality.

### Sample Authentication Code

```apex
public ClientInstance() {
                GZIPFeature gzip = new GZIPFeature();
                gzip.setThreshold(1);
                JaxWsProxyFactoryBean factory = new
                JaxWsProxyFactoryBean();
                factory.getFeatures().add(gzip);
                factory.getInInterceptors().add(new LoggingInInterceptor());
                factory.getOutInterceptors().add(new
                LoggingOutInterceptor());
                PartnerAPI service = new PartnerAPI();
                Soap s = service.getSoap();
                Client client = org.apache.cxf.frontend.ClientProxy.getClient(s);
                Map outProps = new HashMap();
                outProps.put(WSHandlerConstants.ACTION,
                WSHandlerConstants.USERNAME_TOKEN);
                outProps.put(WSHandlerConstants.USER,PropertiesUtil.getInstance().getProperty("username"));
                System.out.println(PropertiesUtil.getInstance().getProperty("username"));
                outProps.put(WSHandlerConstants.PASSWORD_TYPE,WSConstants.PW_TEXT);
                // Automatically adds a Base64 encoded message nonce and a created timestamp
                outProps.put(WSHandlerConstants.ADD_UT_ELEMENTS,WSConstants.NONCE_LN + " " + WSConstants.CREATED_LN);
                outProps.put(WSHandlerConstants.PW_CALLBACK_CLASS,

                ClientPasswordCallback.class.getName());
                WSS4JOutInterceptor wssOut = new WSS4JOutInterceptor(outProps);
                client.getOutInterceptors().add(wssOut);
                //Enable GZip compression
                Map<String, java.util.List<String httpHeaders = new HashMap<String, java.util.List<String();
                httpHeaders.put("Content-Encoding",Collections.singletonList("gzip"));
                httpHeaders.put("Accept-Encoding",Collections.singletonList("gzip"));
                Map<String, Object> reqContext = client.getRequestContext();
                reqContext.put(MessageContext.HTTP_REQUEST_HEADERS,httpHeaders);
}
```
