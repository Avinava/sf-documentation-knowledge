---
title: "Delete a TriggeredSend"
domain: mc-sdks
topic: delete-a-triggeredsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.783Z
estimatedTokens: 395
keywords: [Ruby, Python, CSharp, Java, TriggeredSend, Specify, unique, identifier, props, order, identify, PHP]
---

> Use the Delete method to delete a triggeredsend. Specify a unique identifier in the props properties in order to identify which triggeredsend to update:

# Delete a TriggeredSend

Use the **Delete** method to delete a triggeredsend. Specify a unique identifier in the **props** properties in order to identify which triggeredsend to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
triggeredsend.props = {"CustomerKey" => "151515151"}
results = triggeredsend.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$triggeredsend->props = array("CustomerKey" => "151515151");
$results = $triggeredsend->delete();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
triggeredsend.props = {"CustomerKey" : "151515151"}
results = triggeredsend.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
triggeredsend.CustomerKey = "151515151";
DeleteReturn results = triggeredsend.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
