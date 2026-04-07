---
title: "Retrieve Data Extension Column Details"
domain: mc-sdks
topic: retrieve-data-extension-column-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.537Z
estimatedTokens: 871
keywords: [Ruby, Python, CSharp, Java, Retrieve, Extension, Column, columns, PHP, Streamline, Filtering, Requests]
---

> Use the Get method to return information about existing data extension columns.

# Retrieve Data Extension Column Details

Use the **Get** method to return information about existing data extension columns.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensioncolumn = FuelSDK::DataExtension::Column.new
dataextensioncolumn.authStub = myClient
response = dataextensioncolumn.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensioncolumn = new ET_DataExtension_Column();
$dataextensioncolumn->authStub = $myclient;
$response = $dataextensioncolumn->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextensioncolumn = ET_Client.ET_DataExtension_Column()
dataextensioncolumn.auth_stub = myClient
response = dataextensioncolumn.get()
print response
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtensionColumn dataextensioncolumn = new ET_DataExtensionColumn();
dataextensioncolumn.AuthStub = myclient;
PostReturn response = dataextensioncolumn.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ObjectID
-   PartnerKey
-   Name
-   DefaultValue
-   MaxLength
-   IsRequired
-   Ordinal
-   IsPrimaryKey
-   FieldType
-   CreatedDate
-   ModifiedDate
-   Scale
-   Client.ID
-   CustomerKey

### Ruby

```ruby
dataextensioncolumn.props = ['Name', 'CustomerKey']
```

### PHP

```php
$dataextensioncolumn->props = array('Name', 'CustomerKey');
```

### Python

```python
dataextensioncolumn.props = ["Name", "CustomerKey"]
```

### CSharp

```csharp
dataextensioncolumn.Props = new string[] { "Name", "CustomerKey" };
```

## Filtering Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a data extension column
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
dataextensioncolumn.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension'}
```

### PHP

```php
$dataextensioncolumn->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension');
```

### Python

```python
dataextensioncolumn.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyDataExtension'}
```

### CSharp

```csharp
dataextensioncolumn.SearchFilter = { Property = "DataExtension.CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyDataExtension" } };
```
