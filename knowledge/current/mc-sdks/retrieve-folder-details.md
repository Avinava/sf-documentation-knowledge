---
title: "Retrieve Folder Details"
domain: mc-sdks
topic: retrieve-folder-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.190Z
estimatedTokens: 786
keywords: [Retrieve, Folder, folders, Ruby, PHP, Python, CSharp, Java, Streamline, Usage, Filter, Requests]
---

# Retrieve Folder Details

> Use the Get method to return information about existing folders.

# Retrieve Folder Details

Use the **Get** method to return information about existing folders.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new
folder.authStub = myclient
response = folder.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$response = $folder->get();
print_r($response);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
results = folder.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
GetReturn results = folder.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ID
-   Client.ID
-   ParentFolder.ID
-   ParentFolder.CustomerKey
-   ParentFolder.ObjectID
-   ParentFolder.Name
-   ParentFolder.Description
-   ParentFolder.ContentType
-   ParentFolder.IsActive
-   ParentFolder.IsEditable
-   ParentFolder.AllowChildren
-   Name
-   Description
-   ContentType
-   IsActive
-   IsEditable
-   AllowChildren
-   CreatedDate
-   ModifiedDate
-   Client.ModifiedBy
-   ObjectID
-   CustomerKey
-   Client.EnterpriseID
-   Client.CreatedBy

### Ruby

```ruby
folder.props = ['ParentFolder.ID', 'ID']
```

### PHP

```php
$folder->props = array('ParentFolder.ID', 'ID');
```

### Python

```python
folder.props = ["ParentFolder.ID", "ID"]
```

### CSharp

```csharp
folder.Props = new string[] { "ParentFolder.ID", "ID"};
```

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a folder
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
folder.filter = {'Property' => 'ID','SimpleOperator' => 'equals','Value' => '121212'}
```

### PHP

```php
$folder->filter = array('Property' => 'ID','SimpleOperator' => 'equals','Value' => '121212');
```

### Python

```python
folder.filter = {"Property" : "ID", "SimpleOperator" : "equals", "Value" : "121212"}
```
