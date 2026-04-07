---
title: "Delete a List"
domain: mc-sdks
topic: delete-a-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.698Z
estimatedTokens: 337
keywords: [Ruby, Python, CSharp, Java, Specify, unique, identifier, needs, props, order, identify, PHP]
---

> Use the Delete method to delete a list. Specify a unique identifier needs to be specified in the props properties in order to identify which list to update:

# Delete a List

Use the **Delete** method to delete a list. Specify a unique identifier needs to be specified in the **props** properties in order to identify which list to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ID" => "151515151"}
results = list.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$list->props = array("ID" => "151515151");
$results = $list->delete();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
list = ET_Client.ET_List()
list.auth_stub = myclient
list.props = {"ID" : "151515151"}
results = list.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_List list = new ET_List();
list.AuthStub = myclient;
list.ID = 151515151;
DeleteReturn results = list.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
