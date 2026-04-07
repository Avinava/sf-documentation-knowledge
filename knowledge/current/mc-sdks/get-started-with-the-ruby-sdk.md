---
title: "Get Started with the Ruby SDK"
domain: mc-sdks
topic: get-started-with-the-ruby-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.676Z
estimatedTokens: 383
keywords: [Installation, Started, Ruby, SDK, Download, GitHub, sure, install, dependencies, described, SDK’s, README]
---

> Download the Ruby SDK from GitHub. Make sure you install all dependencies as described in the SDK’s README.

# Get Started with the Ruby SDK

## Installation

[Download the Ruby SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-Ruby) Make sure you install all dependencies as described in the SDK’s README.

## Use

Once the SDK is configured, initialize it by instantiating an ET\_Client object:

```ruby
require 'fuelsdk'
client = FuelSDK::Client.new {'client' => { 'id' => YOUR_CLIENT_ID, 'secret' => YOUR_CLIENT_SECRET }}
```

The ET\_Client object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the ET\_Client instance. Here's an example of the SDK being used to retrieve all lists in an account:

```ruby
require 'fuelsdk'
client = FuelSDK::Client.new {'client' => { 'id' => YOUR_CLIENT_ID, 'secret' => YOUR_CLIENT_SECRET }}
request = FuelSDK::List.new
request.client = client
response = list.get
p response
```

This code sample highlights the pattern for interacting with objects in the Ruby SDK. First, you instantiate an ET\_Client object. Then, you instantiate an object of the type you want to work with, in this example ET\_List. Then, you specify account context (the ET\_Client instance) for the operation using the authStub property. Finally, you perform a REST-style operation on the object: get (retrieve), post (create), patch (update), or delete.
