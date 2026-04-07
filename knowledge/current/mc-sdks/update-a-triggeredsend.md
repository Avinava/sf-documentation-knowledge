---
title: "Update a TriggeredSend"
domain: mc-sdks
topic: update-a-triggeredsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.808Z
estimatedTokens: 438
keywords: [Ruby, Python, CSharp, Java, TriggeredSend, Patch, Specify, unique, identifier, props, order, identify, updated, PHP]
---

> Use the Patch method to update an existing triggeredsend. Specify a unique identifier in the props property in order to identify which triggeredsend will be updated:

# Update a TriggeredSend

Use the **Patch** method to update an existing triggeredsend. Specify a unique identifier in the **props** property in order to identify which triggeredsend will be updated:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
triggeredsend.props = {"CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = triggeredsend.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$triggeredsend->props = array("CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $triggeredsend->patch();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
triggeredsend.props = {"CustomerKey" : "151515151", "Name" : "SDK Example, now Updated!"}
results = triggeredsend.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
triggeredsend.CustomerKey = "151515151";
triggeredsend.Name = "SDK Example, now Updated!";
PatchReturn results = triggeredsend.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
