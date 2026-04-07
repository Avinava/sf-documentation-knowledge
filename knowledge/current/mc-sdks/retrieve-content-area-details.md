---
title: "Retrieve Content Area Details"
domain: mc-sdks
topic: retrieve-content-area-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.011Z
estimatedTokens: 949
keywords: [Retrieve, Content, Area, areas, Ruby, PHP, Python, CSharp, Java, Streamline, Usage, Filter, Requests]
---

# Retrieve Content Area Details

> Use the Get method to return information about existing content areas.

# Retrieve Content Area Details

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Get** method to return information about existing content areas.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new
contentarea.authStub = myClient
response = contentarea.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$contentarea = new ET_ContentArea();
$contentarea->authStub = $myclient;
$response = $contentarea->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
contentarea = ET_Client.ET_ContentArea()
contentarea .auth_stub = myClient
results = contentarea.get()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_ContentArea contentArea = new ET_ContentArea();
contentArea.AuthStub = myclient;
GetReturn response = contentArea.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   RowObjectID
-   ObjectID
-   ID
-   CustomerKey
-   Client.ID
-   ModifiedDate
-   CreatedDate
-   CategoryID
-   Name
-   Layout
-   IsDynamicContent
-   Content
-   IsSurvey
-   IsBlank
-   Key

### Ruby

```ruby
contentarea.props = ['Name', 'CustomerKey']
```

### PHP

```php
$contentarea->props = array('Name', 'CustomerKey');
```

### Python

```python
contentarea.props = ['Name', 'CustomerKey']
```

### CSharp

```csharp
contentArea.Props = new string[] { "Name", "CustomerKey"};
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a content area
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
contentarea.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyContent Area'}
```

### PHP

```php
$contentarea->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyContent Area');
```

### Python

```python
contentarea.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyContent Area'}
```

### CSharp

```csharp
contentArea.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new String[] { "MyContent Area" } };
```
