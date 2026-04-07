---
title: "Get Started with the Python SDK"
domain: mc-sdks
topic: get-started-with-the-python-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.671Z
estimatedTokens: 359
keywords: [Installation, Started, Python, SDK, Download, GitHub, sure, install, dependencies, described, SDK’s, README]
---

> Download the Python SDK from GitHub. Make sure you install all dependencies as described in the SDK’s README.

# Get Started with the Python SDK

## Installation

[Download the Python SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-Python) Make sure you install all dependencies as described in the SDK’s README.

## Use

Once the SDK is configured, initialize it by instantiating an ET\_Client object:

```python
import ET_Client
client = ET_Client.ET_Client(False, False)
```

The ET\_Client object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the ET\_Client instance. Here's an example of the SDK being used to retrieve all lists in an account:

```python
import ET_Client
client = ET_Client.ET_Client(False, False)
request = ET_Client.ET_List()
request.auth_stub = client
response = request.get()
print response
```

This code sample highlights the pattern for interacting with objects in the Python SDK. First, you instantiate an ET\_Client object. Then, you instantiate an object of the type you want to work with, in this example ET\_List. Then, you specify account context (the ET\_Client instance) for the operation using the authStub property. Finally, you perform a REST-style operation on the object: get (retrieve), post (create), patch (update), or delete.
