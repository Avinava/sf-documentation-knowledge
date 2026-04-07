---
title: "Update a Content Area"
domain: mc-sdks
topic: update-a-content-area
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.016Z
estimatedTokens: 492
keywords: [Content, Area, Patch, Specify, unique, identifier, props, identify, Ruby, PHP, Python, CSharp, Java]
---

# Update a Content Area

> Use the Patch method to update an existing content area. Specify a unique identifier in the props property to identify the content area to update:

# Update a Content Area

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Patch** method to update an existing content area. Specify a unique identifier in the **props** property to identify the content area to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new
contentarea.authStub = myClient
contentarea.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = contentarea.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$contentarea = new ET_ContentArea();
$contentarea->authStub = $myclient;
$contentarea->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $contentarea->patch();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
       contentarea = ET_Client.ET_ContentArea()
  contentarea.auth_stub = myClient
  contentarea.props = {"ID" : "151515151", "Name" : "SDK Example, now Updated!"}
results = contentarea.patch()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_ContentArea contentArea = new ET_ContentArea();
contentArea.AuthStub = myclient;
contentArea.ID = 151515151;
contentArea.Name = "SDK Example, now Updated!";
PatchReturn response = contentArea.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
