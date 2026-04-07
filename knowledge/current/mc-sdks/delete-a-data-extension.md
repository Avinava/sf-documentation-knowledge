---
title: "Delete a Data Extension"
domain: mc-sdks
topic: delete-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.558Z
estimatedTokens: 402
keywords: [Ruby, Python, CSharp, Java, Extension, Specify, unique, identifier, needs, props, order, identify, PHP]
---

> Use the Delete method to delete a data extension. Specify a unique identifier needs to be specified in the props properties in order to identify which data extension to update:

# Delete a Data Extension

Use the **Delete** method to delete a data extension. Specify a unique identifier needs to be specified in the **props** properties in order to identify which data extension to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
dataextension.props = {"CustomerKey" => "151515151"}
results = dataextension.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$dataextension->props = array("CustomerKey" => "151515151");
$results = $dataextension->delete();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
dataextension.props = {"CustomerKey" : "151515151"}
results = dataextension.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;

ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
dataextension.CustomerKey = "151515151";
DeleteReturn response = dataextension.Delete();
Console.WriteLine("Delete Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
