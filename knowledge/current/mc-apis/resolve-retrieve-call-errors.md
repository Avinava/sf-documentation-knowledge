---
title: "Resolve Retrieve Call Errors"
domain: mc-apis
topic: resolve-retrieve-call-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.311Z
estimatedTokens: 402
keywords: [Resolve, Retrieve, Call, Errors, resolving, Why, How, Items]
---

# Resolve Retrieve Call Errors

> This page contains information  about resolving errors during a Retrieve call.

# Resolve Retrieve Call Errors

This page contains information about resolving errors during a Retrieve call.

## Why Resolve Retrieve Call Errors

You can eliminate the cause of these errors preventing you from correctly performing calls using the Retrieve method.

## How to Resolve Retrieve Call Errors

When performing a Retrieve call (usually on the Email object), you may see the following exception:

```
Error in deserializing body of reply message for operation 'Retrieve'
```

To resolve this exception, increase the maxStringContentLength within the readerQuotas configuration for your customBinding from the default of **8192** to account for the large tag content for the HTMLBody. Integrate the following into your web.config/app.config to resolve this error:

```
<customBinding>
    <binding name="SoapBinding" closeTimeout="00:35:00" openTimeout="00:35:00"
     receiveTimeout="00:35:00" sendTimeout="00:35:00">
        <security authenticationMode="UserNameOverTransport"></security>
            <textMessageEncoding messageVersion="Soap12WSAddressingAugust2004">
            <readerQuotas maxDepth="2147483647" maxStringContentLength="2147483647"
             maxArrayLength="2147483647" maxBytesPerRead="2147483647" maxNameTableCharCount="2147483647"              />
            </textMessageEncoding>
        <httpsTransport maxReceivedMessageSize="655360000"></httpsTransport>
    </binding>
</customBinding>
```

## Related Items

-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
-   [Email Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)

## Code Examples

```
<customBinding> 
    <binding name="SoapBinding" closeTimeout="00:35:00" openTimeout="00:35:00" 
     receiveTimeout="00:35:00" sendTimeout="00:35:00"> 
        <security authenticationMode="UserNameOverTransport"></security> 
            <textMessageEncoding messageVersion="Soap12WSAddressingAugust2004"> 
            <readerQuotas maxDepth="2147483647" maxStringContentLength="2147483647" 
             maxArrayLength="2147483647" maxBytesPerRead="2147483647" maxNameTableCharCount="2147483647"              /> 
            </textMessageEncoding> 
        <httpsTransport maxReceivedMessageSize="655360000"></httpsTransport> 
    </binding> 
</customBinding>
```

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- Email Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)
