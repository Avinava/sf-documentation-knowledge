---
title: "Get Started with the PHP SDK"
domain: mc-sdks
topic: get-started-with-the-php-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.667Z
estimatedTokens: 524
keywords: [Installation, Configuration, Started, PHP, SDK, Download, GitHub, sure, install, dependencies, described, SDK’s, README]
---

> Download the PHP SDK from GitHub. Make sure you install all dependencies as described in the SDK’s README.

# Get Started with the PHP SDK

## Installation

[Download the PHP SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-PHP) Make sure you install all dependencies as described in the SDK’s README.

In our code samples, we assume you place the downloaded files in a subdirectory of your workspace called sdk. You'll want to adapt the code to your local environment.

## Configuration

The PHP SDK is configured via the config.php file. Add your client ID and secret to this file. It is safe to include your client ID and secret in config.php because config.php is hosted server side and not exposed to the client. Here's an example config.php:

```php
return array(
    'appsignature' => 'none',
    'clientid' => 'YOUR_CLIENT_ID',
    'clientsecret' => 'YOUR_CLIENT_SECRET',
    'defaultwsdl' => 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl'
);
```

## Use

Once the SDK is configured, initialize it by instantiating an ET\_Client object:

```php
require('sdk/ET_Client.php');
$client = new ET_Client();
```

The ET\_Client object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the ET\_Client instance. Here's an example of the SDK being used to retrieve all lists in an account:

```php
require('sdk/ET_Client.php');
$client = new ET_Client();
$request = new ET_List();
$request->authStub = $client;
$response = $request->get();
print_r($response);
```

This code sample highlights the pattern for interacting with objects in the PHP SDK. First, you instantiate an ET\_Client object. Then, you instantiate an object of the type you want to work with, in this example ET\_List. Then, you specify account context (the ET\_Client instance) for the operation using the authStub property. Finally, you perform a REST-style operation on the object: get (retrieve), post (create), patch (update), or delete.
