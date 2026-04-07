---
title: "Connecting to the API using Java and Axis2"
domain: mc-apis
topic: connecting-to-the-api-using-java-and-axis2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.627Z
estimatedTokens: 1652
keywords: [Connecting, API, Java, Axis2, development, environment, systems, Marketing, Cloud, SOAP, via, client, preferred, users, Prerequisites]
---

# Connecting to the API using Java and Axis2

> This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Java via the Axis2 SOAP client. Axis2 is a SOAP client preferred by many Java users.

# Connecting to the API using Java and Axis2

This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Java via the Axis2 SOAP client. Axis2 is a SOAP client preferred by many Java users.

## Prerequisites

In order to use the configuration in this document, you must use the following tools:

-   Axis2 Libraries
-   Rampart Module (use as authentication module)
-   Ant build files to generate stubs and compile code

The instructions in this document refer to Axis2 version 1.6.0.

## Why Connect to the SOAP API using Java and Axis2

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How To Connect to the SOAP API using Java and Axis2

1.  [Download Apache Axis2](http://ws.apache.org/axis2)
2.  Follow the appropriate instructions at that site to install the service on your computer.
3.  Use the sample code below to authenticate your installation and exchange information with the SOAP API servers.

Keep these steps in mind when connecting to the API via Axis2:

-   When generating Axis2 stubs, use XML-Beans as the databinding option.
    ![et_axis2-1.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fet_axis2-1.jpg&folder=mc-apis)
-   Generated files create the resources folder with .class and .xsb files, these files should be in class-path to successfully run and execute API calls.
    ![et_axis2-2.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fet_axis2-2.jpg&folder=mc-apis)
-   Enter your authentication information in the ETClient.java file.
-   Enter the location of your log file in the log4j.properties file.
-   Enter your project's base directory location in the build2.xml file.
-   Enter the following information in your props.xml before compiling, building, and running your jar file:
    -   Entry key authentication information
    -   Repository folder location
    -   Location for your axis2-client.xml file
-   [Download the Axis2 client for sample configuration.](http://help.marketingcloud.com/globalassets/documentation/javaaxis2/axis2client.zip)

![et_axis2-3.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fet_axis2-3.jpg&folder=mc-apis)

In that .zip file, theETClient.java file sample file has both a Retrieve and a Create method. Use thePropertiesUtil.java file to read properties from the props.xml file located in class-path. Use thePWCBHandler.java file to define the password handler class; this file is required by Axis2engine to handle authentication. Conduct the build using the Ant file and it generates the ETClient.jar file. The command **Java -jar ETClient.jar** executes the ETClient.java file.

### Troubleshooting

Follow these steps if the password is always being passed as Digest format.

1.  For theAxis2.xml passwordType node value, define the value as "PasswordText".
2.  Ensure that the class paths contain only one Axis configuration.
3.  Ensure that you have installed the most recent Axis2 library on the machine.

### Eclipse Development Environment

Use the [Eclipse development environment](http://help.marketingcloud.com/globalassets/documentation/javaaxis2/eclipseaxis2etclient.zip "Eclipse Axis2") to aid your connection to and efforts working with the Marketing Cloud SOAP API. This environment includes all the necessary information to use Axis2 Java with the SOAP API. Find more information about the Eclipse development environment [here](http://www.eclipse.org/ "http://www.eclipse.org/"). This link does not imply any preference or endorsement of the Eclipse development environment. This information is presented only as an example and aid for your development efforts.

### Handling Accounts in Multiple Environments Using a Single Codebase

You can use a single props.xml file to manage multiple username/password credentials (for production and test accounts, for example):

1.  Copy the **Axis2-Client.xml** file in the provided example.
2.  Rename the copy to **Axis2-Client-Test.xml**.
3.  Add the provided key/value pair to the**props.xml** file:
    -   Key: **axis2FileTest**
    -   Value: **axis2-client-test.xml**
4.  Edit the user tag for the **Axis2-Client.xml** file:
    -   production
5.  Edit the user tag for the **Axis2-Client-Test.xml** file:
    -   test
6.  Add the provided key/value pair to the **props.xml** file to provide the credentials for the test environment:
    -   key: **username-test**
    -   value: (your test environment username)
    -   key: **password-test**
    -   value: (your test environment password)

Change the handle method in the **PWCBHandler.java** file:

```apex
public void handle(Callback callbacks[])
        throws IOException, UnsupportedCallbackException
    {
        for(int i = 0; i < callbacks.length; i++)
            if(callbacks[i] instanceof WSPasswordCallback)
            {
                WSPasswordCallback pc = (WSPasswordCallback)callbacks[i];
                if (pc.getIdentifer().equalsIgnoreCase("production")){
                                pc.setIdentifier(PropertiesUtil.getInstance().getProperty("username"));
                                pc.setPassword(PropertiesUtil.getInstance().getProperty("password"));
                } else {
                                pc.setIdentifier(PropertiesUtil.getInstance().getProperty("username-test"));
                                pc.setPassword(PropertiesUtil.getInstance().getProperty("password-test"));
                }
            } else
            {
                throw new UnsupportedCallbackException(callbacks[i], "Unrecognized Callback");
            }
    }
```

Specify whether the call uses the test or production configuration when instantiating ConfigurationContext prior to the request:

```
PartnerAPIStub stub = null;
if (Environment == "Test") {
                configurationContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(PropertiesUtil.getInstance().getProperty("repositoryFolder"), PropertiesUtil.getInstance().getProperty("axis2FileTest"));
                  stub = new PartnerAPIStub(configurationContext, "https://YOUR_SUBDOMAIN.soap.test.marketingcloudsandboxapis.com/Service.asmx");
} else {
    configurationContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(PropertiesUtil.getInstance().getProperty("repositoryFolder"), PropertiesUtil.getInstance().getProperty("axis2File"));
     stub = new PartnerAPIStub(configurationContext, "https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx");
}
```
