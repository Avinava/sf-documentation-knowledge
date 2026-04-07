---
title: "Get Started with the C# SDK"
domain: mc-sdks
topic: get-started-with-the-c-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.658Z
estimatedTokens: 360
keywords: [Installation, Started, SDK, Download, GitHub, sure, install, dependencies, described, SDK’s, README]
---

> Download the C# SDK from GitHub. Make sure you install all dependencies as described in the SDK’s README.

# Get Started with the C# SDK

## Installation

[Download the C# SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-csharp) Make sure you install all dependencies as described in the SDK’s README.

## Use

Once the SDK is configured, initialize it by instantiating an ET\_Client object:

```c#
using FuelSDK;
ET_Client client = new ET_Client();
```

The ET\_Client object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the ET\_Client instance. Here's an example of the SDK being used to retrieve all lists in an account:

```c#
using FuelSDK;
ET_Client client = new ET_Client();
ET_List request = new ET_List();
request.AuthStub = client;
GetReturn response = list.Get();
Console.WriteLine(response.Status.ToString());
```

This code sample highlights the pattern for interacting with objects in the C# SDK. First, you instantiate an ET\_Client object. Then, you instantiate an object of the type you want to work with, in this example ET\_List. Then, you specify account context (the ET\_Client instance) for the operation using the authStub property. Finally, you perform a REST-style operation on the object: get (retrieve), post (create), patch (update), or delete.
