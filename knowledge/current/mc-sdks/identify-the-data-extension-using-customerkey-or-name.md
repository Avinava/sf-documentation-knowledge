---
title: "Identify the Data Extension Using CustomerKey or Name"
domain: mc-sdks
topic: identify-the-data-extension-using-customerkey-or-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.089Z
estimatedTokens: 905
keywords: [Identify, Data, Extension, CustomerKey, ET_DataExtensionRow, includes, unique, specifying, rows, define, Ruby, Specify, identifier, PHP, Python]
---

# Identify the Data Extension Using CustomerKey or Name

> ET_DataExtensionRow includes unique properties called CustomerKey and Name for specifying the data extension for the rows. You need to define only one of these properties to identify the data extension.

# Identify the Data Extension Using CustomerKey or Name

**ET\_DataExtensionRow** includes unique properties called **CustomerKey** and **Name** for specifying the data extension for the rows. You need to define only one of these properties to identify the data extension.

### Ruby

```ruby
# Specify Name
dataextensionrow.Name = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.CustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```

### PHP

```php
// Specify Name
$dataextensionrow->Name = 'ExampleDEName';
// Specify CustomerKey
$dataextensionrow->CustomerKey = 'ExampleDECustomerKey';
// Only specify one of these properties as the unique identifier
```

### Python

```python
# Specify Name
dataextensionrow.Name = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.CustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```

### CSharp

```csharp
# Specify Name
dataextensionrow.DataExtensionName = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.DataExtensionCustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

# Creating a Data Extension Row

Use the **Post** method to create a new data extension row within a Marketing Cloud account.

## Properties

You must set the **props** property when using the **Post** method in order to specify the columns values. The values that can be specified for props vary by data extension. If the column names are not known, use the ET\_DataExtension\_Column SDK object to return those names:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensionrow = FuelSDK::DataExtension::Row.new
dataextensionrow.authStub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"Name" => "ExampleNameValue", "OtherField" => "Some randon text for the other field"}
results = dataextensionrow.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensionrow = new ET_DataExtension_Row();
$dataextensionrow->authStub = $myclient;
$dataextensionrow->Name = 'ExampleDEName';
$dataextensionrow->props = array("Name" => "ExampleNameValue", "OtherField" => "Some randon text for the other field");
$results = $dataextensionrow->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextensionrow = ET_Client.ET_DataExtension_Row()
dataextensionrow.auth_stub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"Name" : "ExampleNameValue", "OtherField" : "Some randon text for the other field"}
results = dataextensionrow.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
                ET_DataExtensionRow dataextensionrow = new ET_DataExtensionRow();
                dataextensionrow.AuthStub = myclient;
                dataextensionrow.DataExtensionName = "ExampleDEName";
                dataextensionrow.ColumnValues.Add("Name", "ExampleNameValue");
                dataextensionrow.ColumnValues.Add("OtherField", "Some randon text for the other field");
                PostReturn response = dataextensionrow.Post();
                Console.WriteLine("Post Status: " + response.Status.ToString());
```
