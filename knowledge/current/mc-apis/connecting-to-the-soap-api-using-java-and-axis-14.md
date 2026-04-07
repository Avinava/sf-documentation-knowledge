---
title: "Connecting to the SOAP API Using Java and Axis 1.4"
domain: mc-apis
topic: connecting-to-the-soap-api-using-java-and-axis-14
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.768Z
estimatedTokens: 1276
keywords: [Connecting, SOAP, API, Java, Axis, 1.4, connection, test, perform, various, tasks, sending, email, retrieving, Why, Connect, How, Authenticate, Apache, Password, Callback, Handler, Content, Client, config.xml, File, Changing, Call, Timeout, Known, Issues, Items]
---

> You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

# Connecting to the SOAP API Using Java and Axis 1.4

## Why Connect to the SOAP API using Java and Axis 1.4

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How To Connect to the SOAP API using Java and Axis 1.4

1.  [Download Apache Axis 1.4.](http://www.apache.org/dyn/closer.cgi/ws/axis/1_4/)
2.  Follow the appropriate instructions at that site to install the service on your computer.
3.  Use the sample code below to authenticate your installation and exchange information with the SOAP API servers.

## Authenticate with Apache Axis 1.4

This sample code demonstrates how to use Java and Axis 1.4 to authenticate with the SOAP API.

### Password Callback Handler

Place this sample code in the Class-path.file to define PasswordTokenHandler and what type of Password method the service is using. In this case, the service uses the **PasswordText** method.

```apex
public class PasswordTokenHandler implements CallbackHandler {
    public void handle(Callback[] callbacks) throws IOException,
        UnsupportedCallbackException {
    for (int i = 0; i < callbacks.length; i++) {
        if (callbacks[i] instanceof WSPasswordCallback) {
            WSPasswordCallback pc = (WSPasswordCallback) callbacks[i];
            pc.setPassword("ET Password");
        } else {
            throw new UnsupportedCallbackException(callbacks[i], "Unrecognized Callback");
            }
        }
    }
}
```

The sample code below demonstrates how to define a callback handler.

```
<deployment
        name="commonsHTTPConfig"
        xmlns="http://xml.apache.org/axis/wsdd/"
        xmlns:java="http://xml.apache.org/axis/wsdd/providers/java">
    <!-- <transport name="http" pivot="java:org.apache.axis.transport.http.HTTPSender"/> -->
    <globalConfiguration>
        <requestFlow>
            <handler type="java:org.apache.ws.axis.security.WSDoAllSender">
                <parameter name="action" value="UsernameToken"/>
                <parameter name="passwordCallbackClass" value="com.et.util.PasswordTokenHandler"/>
                <parameter name="passwordType" value="PasswordText"/>
            </handler>
        </requestFlow>
    </globalConfiguration>
    <transport name="http" pivot="java:org.apache.axis.transport.http.CommonsHTTPSender"></transport>
   <!-- <transport name="http" pivot="java:org.apache.axis.transport.http.CommonsHTTPSender"/>
    <transport name="local" pivot="java:org.apache.axis.transport.local.LocalSender"/>
    <transport name="java" pivot="java:org.apache.axis.transport.java.JavaSender"/>-->
</deployment>
```

The sample code below accesses the SOAP client and assigns the username and password in the request.

```apex
public Soap_PortType init() {
    Soap_PortType stub = null;
    try {
        InputStream inConfig = BaseTestCase.class.getClassLoader().getResourceAsStream("axis_client_config.xml");
        EngineConfiguration config = new FileProvider(inConfig);
        PartnerAPILocator locator = new PartnerAPILocator(config);
        inConfig.close();
        stub = locator.getSoap();

        Stub axisPort = (Stub) stub;
        axisPort._setProperty(UsernameToken.PASSWORD_TYPE, WSConstants.PASSWORD_TEXT);
        axisPort._setProperty(WSHandlerConstants.USER, "ET USERNAME");
        axisPort._setProperty(WSHandlerConstants.PW_CALLBACK_REF, new PasswordTokenHandler());
    }
    catch (Exception e) {
        e.printStackTrace();
    }
    return stub;
}
```

### Content of Axis Client config.xml File

```
<deployment
        name="commonsHTTPConfig"
        xmlns="http://xml.apache.org/axis/wsdd/"
        xmlns:java="http://xml.apache.org/axis/wsdd/providers/java">
    <globalConfiguration>
        <requestFlow>
            <handler type="java:org.apache.ws.axis.security.WSDoAllSender">
                <parameter name="action" value="UsernameToken"/>
                <parameter name="passwordCallbackClass" value="com.et.util.PasswordTokenHandler"/>
                <parameter name="passwordType" value="PasswordText"/>
            </handler>
        </requestFlow>
    </globalConfiguration>
    <transport name="http" pivot="java:org.apache.axis.transport.http.CommonsHTTPSender"></transport>
 </deployment>
```

### Changing the Default Call Timeout

Insert code shown in line 4 of the example below to change the length of the default timout on the call. Note that the call expresses the time in seconds.

```
PartnerAPI service = new PartnerAPILocator(config);
Soap stub = service.getSoap();
org.apache.axis.client.Stub s = (Stub) stub;
s.setTimeout(10000);
```

## Known Issues

Axis 1.4 encounters an error deserializing the response object as part of an Extract call. You can resolve this issue by moving to Axis2.

If you require the use of double-byte characters in your code, you must use Axis2 instead of Axis 1.4. Axis 1.4 does not correctly support double-byte characters and causes errors.

## Related Items

[Axis2](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_java_and_axis2.htm)

## Related Topics

- Axis2 (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_java_and_axis2.htm)
