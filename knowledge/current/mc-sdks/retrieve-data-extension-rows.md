---
title: "Retrieve Data Extension Rows"
domain: mc-sdks
topic: retrieve-data-extension-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.111Z
estimatedTokens: 909
keywords: [Retrieve, Data, Extension, Rows, Specify, Ruby, PHP, Python, CSharp, Java, Filtering, Requests]
---

# Retrieve Data Extension Rows

> Use the Get method to return data from existing data extension rows.

# Retrieve Data Extension Rows

Use the **Get** method to return data from existing data extension rows.

## Specify Which Fields to Return

You must set the **props** property when using the **Get** method in order to specify the columns returned. The values that can be specified for props vary by data extension. If the column names are not known, use the ET\_DataExtension\_Column SDK object to return those names:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensionrow = FuelSDK::DataExtension::Row.new
dataextensionrow.authStub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = ['FirstName', 'LastName', 'AnotherColumnName']
response = dataextensionrow.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensionrow = new ET_DataExtension_Row();
$dataextensionrow->authStub = $myclient;
$dataextensionrow->Name = 'ExampleDEName';
$dataextensionrow->props = array('FirstName', 'LastName', 'AnotherColumnName');
$response = $dataextensionrow->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextensionrow = ET_Client.ET_DataExtension_Row()
dataextensionrow.auth_stub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = ['FirstName', 'LastName', 'AnotherColumnName']
results = dataextensionrow.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
                ET_DataExtensionRow dataextensionrow = new ET_DataExtensionRow();
                dataextensionrow.AuthStub = myclient;
                dataextensionrow.DataExtensionName = "ExampleDEName";
                dataextensionrow.Props = new string[] { "FirstName", "LastName", "AnotherColumnName" };
                GetReturn response = dataextensionrow.Get();
                Console.WriteLine("Get Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filtering Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the columns that exist in the data extension row
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
dataextensionrow.filter = {'Property' => 'FirstName','SimpleOperator' => 'equals','Value' => 'Example Name'}
```

### PHP

```php
$dataextensionrow->filter = array('Property' => 'FirstName','SimpleOperator' => 'equals','Value' => 'Example Name');
```

### Python

```python
dataextensionrow.search_filter = {'Property' : 'FirstName','SimpleOperator' : 'equals','Value' : 'Example Name'}
```

### CSharp

```python
dataextensionrow.SearchFilter = new SimpleFilterPart() { Property = "Name", SimpleOperator = SimpleOperators.equals, Value = new string[] { "Example Name" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
