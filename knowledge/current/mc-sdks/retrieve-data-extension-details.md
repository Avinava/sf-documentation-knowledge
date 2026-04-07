---
title: "Retrieve Data Extension Details"
domain: mc-sdks
topic: retrieve-data-extension-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.565Z
estimatedTokens: 880
keywords: [Ruby, Python, CSharp, Java, Retrieve, Extension, extensions, PHP, Streamline, Filtering, Requests]
---

> Use the Get method to return information about existing data extensions.

# Retrieve Data Extension Details

Use the **Get** method to return information about existing data extensions.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
response = dataextension.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$response = $dataextension->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
results = dataextension.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
GetReturn response = dataextension.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ObjectID
-   PartnerKey
-   CustomerKey
-   Name
-   CreatedDate
-   ModifiedDate
-   Client.ID
-   Description
-   IsSendable
-   IsTestable
-   SendableDataExtensionField.Name
-   SendableSubscriberField.Name
-   Template.CustomerKey
-   CategoryID
-   Status
-   IsPlatformObject
-   DataRetentionPeriodLength
-   DataRetentionPeriodUnitOfMeasure
-   RowBasedRetention
-   ResetRetentionPeriodOnImport
-   DeleteAtEndOfRetentionPeriod
-   RetainUntil
-   DataRetentionPeriod

### Ruby

```ruby
dataextension.props = ['Name', 'CustomerKey']
```

### PHP

```php
$dataextension->props = array('Name', 'CustomerKey');
```

### Python

```python
dataextension.props = ['Name', 'CustomerKey']
```

## Filtering Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a data extension
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
dataextension.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension'}
```

### PHP

```php
$dataextension.filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension');
```

### Python

```python
dataextension.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyDataExtension'}
```

### CSharp

```csharp
dataextension.SearchFilter = new SimpleFilterPart() { Property = "DataExtension.CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyDataExtension" } };
```
