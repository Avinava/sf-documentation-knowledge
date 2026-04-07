---
title: "Update a Data Extension"
domain: mc-sdks
topic: update-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.126Z
estimatedTokens: 439
keywords: [Data, Extension, Patch, Specify, unique, identifier, props, order, identify, updated, Ruby, PHP, Python, CSharp, Java]
---

# Update a Data Extension

> Use the Patch method to update an existing data extension. Specify a unique identifier in the props property in order to identify which data extension will be updated:

# Update a Data Extension

Use the **Patch** method to update an existing data extension. Specify a unique identifier in the **props** property in order to identify which data extension will be updated:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
dataextension.props = {"CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = dataextension.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$dataextension->props = array("CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $dataextension->patch();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
dataextension.props = {"CustomerKey" : "151515151", "Name": "SDK Example, now Updated!"}
results = dataextension.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;

ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
dataextension.CustomerKey = "151515151";
dataextension.Name = "SDK Example, now Updated!";
PatchReturn response = dataextension.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
