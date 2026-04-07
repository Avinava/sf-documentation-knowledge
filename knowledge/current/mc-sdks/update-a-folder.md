---
title: "Update a Folder"
domain: mc-sdks
topic: update-a-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.653Z
estimatedTokens: 380
keywords: [Ruby, Python, CSharp, Java, Folder, Patch, Specify, unique, identifier, props, identify, PHP]
---

> Use the Patch method to update an existing folder. Specify a unique identifier in the props property to identify the folder to update:

# Update a Folder

Use the **Patch** method to update an existing folder. Specify a unique identifier in the **props** property to identify the folder to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new
folder.authStub = myclient
folder.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = folder.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$folder->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $folder->patch();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
folder.props = {"ID" => "151515151", "Name" : "SDK Example, now Updated!"}
results = folder.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
folder.ID = 151515151;
folder.Name = "SDK Example, now Updated!";
PatchReturn results = folder.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
