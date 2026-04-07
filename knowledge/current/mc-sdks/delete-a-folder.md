---
title: "Delete a Folder"
domain: mc-sdks
topic: delete-a-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.178Z
estimatedTokens: 340
keywords: [Folder, Specify, unique, identifier, props, identify, Ruby, PHP, Python, CSharp, Java]
---

# Delete a Folder

> Use the Delete method to delete a folder. Specify a unique identifier in the props properties to identify the folder to update:

# Delete a Folder

Use the **Delete** method to delete a folder. Specify a unique identifier in the **props** properties to identify the folder to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new
folder.authStub = myclient
folder.props = {"ID" => "151515151"}
results = folder.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$folder->props = array("ID" => "151515151");
$results = $folder->delete();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
folder.props = {"ID" : "151515151"}
results = folder.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
folder.ID = 151515151;
DeleteReturn results = folder.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
