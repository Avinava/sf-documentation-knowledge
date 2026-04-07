---
title: "Update a List"
domain: mc-sdks
topic: update-a-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.718Z
estimatedTokens: 376
keywords: [Ruby, Python, CSharp, Java, Patch, Specify, unique, identifier, props, order, identify, updated, PHP]
---

> Use the Patch method to update an existing list. Specify a unique identifier in the props property in order to identify which list will be updated:

# Update a List

Use the **Patch** method to update an existing list. Specify a unique identifier in the **props** property in order to identify which list will be updated:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ID" => "151515151", "ListName"=> "SDK Example, now Updated!"}
results = list.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$list->props = array("ID" => "151515151", "ListName"=> "SDK Example, now Updated!");
$results = $list->patch();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
list = ET_Client.ET_List()
list.auth_stub = myclient
list.props = {"ID" : "151515151", "ListName": "SDK Example, now Updated!"}
results = list.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_List list = new ET_List();
list.AuthStub = myclient;
list.ID = 151515151;
list.ListName = "SDK Example, now Updated!";
PatchReturn results = list.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
