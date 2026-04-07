---
title: "Retrieve TriggeredSend Details"
domain: mc-sdks
topic: retrieve-triggeredsend-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.352Z
estimatedTokens: 1140
keywords: [Retrieve, TriggeredSend, triggeredsends, Ruby, PHP, Python, CSharp, Java, Streamline, Usage, Filter, Requests]
---

# Retrieve TriggeredSend Details

> Use the Get method to return information about existing triggeredsends.

# Retrieve TriggeredSend Details

Use the **Get** method to return information about existing triggeredsends.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
response = triggeredsend.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$response = $triggeredsend->get();
print_r($response);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
results = triggeredsend.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
GetReturn results = triggeredsend.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ObjectID
-   PartnerKey
-   CreatedDate
-   ModifiedDate
-   Client.ID
-   CustomerKey
-   Email.ID
-   List.ID
-   Name
-   Description
-   TriggeredSendType
-   TriggeredSendStatus
-   HeaderContentArea.ID
-   FooterContentArea.ID
-   SendClassification.ObjectID
-   SendClassification.CustomerKey
-   SenderProfile.CustomerKey
-   SenderProfile.ObjectID
-   DeliveryProfile.CustomerKey
-   DeliveryProfile.ObjectID
-   PrivateDomain.ObjectID
-   PrivateIP.ID
-   AutoAddSubscribers
-   AutoUpdateSubscribers
-   BatchInterval
-   FromName
-   FromAddress
-   BccEmail
-   EmailSubject
-   DynamicEmailSubject
-   IsMultipart
-   IsWrapped
-   TestEmailAddr
-   AllowedSlots
-   NewSlotTrigger
-   SendLimit
-   SendWindowOpen
-   SendWindowClose
-   SuppressTracking
-   Keyword
-   List.PartnerKey
-   Email.PartnerKey
-   SendClassification.PartnerKey
-   PrivateDomain.PartnerKey
-   PrivateIP.PartnerKey
-   Client.PartnerClientKey
-   IsPlatformObject
-   CategoryID

### Ruby

```ruby
triggeredsend.props = ['Name', 'CustomerKey']
```

### PHP

```php
$triggeredsend->props = array('Name', 'CustomerKey');
```

### Python

```python
triggeredsend.props = ["Name", "CustomerKey"]
```

### CSharp

```csharp
triggeredsend.Props = new string[] { "Name", "CustomerKey" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a triggeredsend
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
triggeredsend.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyTriggeredSend'}
```

### PHP

```php
$triggeredsend->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyTriggeredSend');
```

### Python

```python
triggeredsend.filter = {"Property" : "CustomerKey", "SimpleOperator" : "equals", "Value" : "MyTriggeredSend"}
```

### CSharp

```csharp
triggeredsend.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyTriggeredSend" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
