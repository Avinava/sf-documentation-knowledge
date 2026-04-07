---
title: "Update a Data Extension Row"
domain: mc-sdks
topic: update-a-data-extension-row
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.119Z
estimatedTokens: 533
keywords: [Data, Extension, Row, Patch, include, column, primary, key, pass, props, Ruby, PHP, Python, CSharp, Java]
---

# Update a Data Extension Row

> Use the Patch method to update an existing data extension row. The data extension must include a column set as the primary key, and you must pass a value for that primary key column in the props property:

# Update a Data Extension Row

Use the **Patch** method to update an existing data extension row. The data extension must include a column set as the primary key, and you must pass a value for that primary key column in the **props** property:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensionrow = FuelSDK::DataExtension::Row.new
dataextensionrow.authStub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"NameOfKeyField" => "151515151", "ExampleField"=> "SDK Example, now Updated!"}
results = dataextensionrow.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensionrow = new ET_DataExtension_Row();
$dataextensionrow->authStub = $myclient;
$dataextensionrow->Name = 'ExampleDEName';
$dataextensionrow->props = array("NameOfKeyField" => "151515151", "ExampleField" => "SDK Example, now Updated!");
$results = $dataextensionrow->patch();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextensionrow = ET_Client.ET_DataExtension_Row()
dataextensionrow.auth_stub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"NameOfKeyField" : "151515151", "ExampleField" : "SDK Example, now Updated!"}
results = dataextensionrow.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtensionRow dataextensionrow = new ET_DataExtensionRow();
dataextensionrow.AuthStub = myclient;
dataextensionrow.DataExtensionCustomerKey = "ExampleDEName";
dataextensionrow.ColumnValues.Add("NameOfKeyField", "151515151");
dataextensionrow.ColumnValues.Add("ExampleField", "SDK Example, now Updated!");
PatchReturn response = dataextensionrow.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
