---
title: "Use the Marketing Cloud SDKs"
domain: mc-sdks
topic: use-the-marketing-cloud-sdks
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.380Z
estimatedTokens: 1754
keywords: [Marketing, Cloud, SDKs, Fuel, wrappers, around, APIs, enable, developers, integrate, native, language, constructs, download, SDK]
---

# Use the Marketing Cloud SDKs

> The Fuel SDKs are wrappers around the Marketing Cloud APIs that enable developers to integrate with those APIs using native language constructs. You can download the SDK for your preferred environment. There are currently SDKs available for C#, Java, PHP, Python, and Ruby.

# Use the Marketing Cloud SDKs

The Fuel SDKs are wrappers around the Marketing Cloud APIs that enable developers to integrate with those APIs using native language constructs. You can download the SDK for your preferred environment. There are currently SDKs available for C#, Java, PHP, Python, and Ruby.

The Salesforce Marketing Cloud Platform SDKs, excluding the MobilePush SDK and Content Builder SDK, are community-supported projects. The SDK source code, samples, and documentation are publicly available on Github to use as-is or fork and modify for your needs. We invite everyone in the community to collaborate with us on Github and submit pull requests to help improve the source code and samples.

## Client Library

In our examples, we will use the PHP client library, though you can easily adapt our examples to the other client libraries as they all follow similar patterns and expose the same objects and properties.

To get started, install the PHP client library in a subdirectory of your workspace called sdk. Make sure you install all dependencies as described in the README section of the client library.

To configure the client library, you need to add your client credentials from the installed package to config.php (the client library contains a template you can use to create config.php). Note that you can safely include your client credentials in config.php because config.php is hosted server-side, not exposed to the client:

```
<?php
return array(
    'appsignature' => 'none',
        'clientid' => 'YOUR_CLIENT_ID',
        'clientsecret' => 'YOUR_CLIENT_SECRET',
        'defaultwsdl' => 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl'
);
?>
```

After the client library is configured, you initialize it by instantiating an ET\_Client object:

```
<?php
require('sdk/ET_Client.php');

$client = new ET_Client();
?>
```

The ET\_Client object is the central object in all Marketing Cloud client libraries and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specify in config.php.

After initializing the client library, add a row to the data extension we created using the following code:

```
<?php
require('sdk/ET_Client.php');

$client = new ET_Client();

$deRow = new ET_DataExtension_Row();
$deRow->authStub = $client;

// specify the name of the data extension
$deRow->CustomerKey = "subscribers";

// specify the values of the data extension row
$deRow->props = array("EmailAddress" => "YOUR_EMAIL_ADDRESS", "FirstName" => "YOUR_FIRST_NAME");

$response = $deRow->post();

print_r($response);
?>
```

The following steps outline a typical journey with a Marketing Cloud client library object and highlight the patterns common to all Marketing Cloud client libraries:

-   Instantiate the object you want to interact with (in this case, ET\_DataExtension\_Row).
-   Supply the Marketing Cloud account context via the authStub property on the object ($deRow->authStub = $client). (In some client libraries, this is automatically handled for you.)
-   Identify the object you want to interact with, typically via a unique ID or key. In our case, **CustomerKey** is the API equivalent of the **External Key** value specified when creating a data extension in Marketing Cloud.
-   Set the appropriate properties that govern the operation (in this case, you are creating a data extension row with the “EmailAddress” column set to your email address and the “FirstName” column set to your first name).
-   Perform a REST-like operation (get, post, patch, or delete) on the object, depending on whether you want to retrieve, create, update, or delete it. In the example above, you create a data extension row, so you perform a post operation.

When you load the PHP file in your browser, you will see the following output:

```
ET_Post Object
(
    [status] => 1
    [code] => 200
    [message] =>
    [results] => Array
        (
            [0] => stdClass Object
                (
                    [StatusCode] => OK
                    [StatusMessage] => Created DataExtensionObject
                    [OrdinalID] => 0
                    [NewID] => 0
                    [Object] => stdClass Object
                        (
                            [PartnerKey] =>
                            [ObjectID] =>
                            [CustomerKey] => subscribers
                            [Properties] => stdClass Object
                                (
                                    [Property] => Array
                                        (
                                            [0] => stdClass Object
                                                (
                                                    [Name] => EmailAddress
                                                    [Value] => YOUR_EMAIL_ADDRESS
                                                )

                                            [1] => stdClass Object
                                                (
                                                    [Name] => FirstName
                                                    [Value] => YOUR_FIRST_NAME
                                                )
                                        )
                                )
                        )
                )
        )
    [request_id] =>
    [moreResults] =>
)
```

This output displays a typical response to a PHP client library operation. For now, just note that the call succeeded as indicated by StatusCode and StatusMessage.

Go back to Email Studio and verify the row was added successfully by navigating to the Data Extensions screen and clicking the data extension. Click the **Records** tab to view the data.

To highlight the similar patterns employed by the different client libraries, the following Java code is equivalent to the PHP code we used to add the row to the data extension:

```apex
public class DataExtensionAddRow {
    public static void main(String args[])
        throws ETSdkException
    {
        ETClient client = new ETClient();
        ETFilter filter = new ETSimpleFilter("CustomerKey",
                                             ETFilterOperators.EQUALS,
                                             "subscribers");
        ETDataExtension dataExtension = client.retrieveDataExtension(filter);
        ETDataExtensionRow row = new ETDataExtensionRow();
        row.setColumn("EmailAddress", "YOUR_EMAIL_ADDRESS");
        row.setColumn("FirstName", "YOUR_FIRST_NAME");
        dataExtension.insert(row);
    }
}
```

## Related Items

-   [Introduction to Marketing Cloud APIs](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/index-api.htm)
-   [REST Auth service, /requestToken](atlas.en-us.noversion.mc-sdks.meta/mc-sdks/requestToken.htm)
-   [Use the API Directly](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-access-token.htm)

## Related Topics

- REST Auth service, /requestToken (atlas.en-us.noversion.mc-sdks.meta/mc-sdks/requestToken.htm)
