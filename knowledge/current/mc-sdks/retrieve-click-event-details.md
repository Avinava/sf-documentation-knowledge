---
title: "Retrieve Click Event Details"
domain: mc-sdks
topic: retrieve-click-event-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.490Z
estimatedTokens: 973
keywords: [Ruby, Python, CSharp, Java, Retrieve, Click, Event, ET_ClickEvent, column, Marketing, Cloud, account, SDK, interact, described, below, PHP, Streamline, Filter, Requests]
---

> The ET_ClickEvent object represents a column with a click event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

# Retrieve Click Event Details

The **ET\_ClickEvent** object represents a column with a click event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing click events.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
clickevent = FuelSDK::ClickEvent.new
clickevent.authStub = myclient
response = clickevent.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$clickevent = new ET_ClickEvent();
$clickevent->authStub = $myclient;
$response = $clickevent->get();
print_r($response);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
clickevent = ET_Client.ET_ClickEvent()
clickevent.auth_stub = myclient
results = clickevent.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_ClickEvent clickevent = new ET_ClickEvent();
clickevent.AuthStub = myclient;
GetReturn results = clickevent.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ID
-   ObjectID
-   PartnerKey
-   CreatedDate
-   ModifiedDate
-   Client.ID
-   SendID
-   SubscriberKey
-   EventDate
-   EventType
-   TriggeredSendDefinitionObjectID
-   BatchID
-   URLID
-   URL

### Ruby

```ruby
clickevent.props = ['SendID', 'EventDate']
```

### PHP

```php
$clickevent->props = array('SendID', 'EventDate');
```

### Python

```python
clickevent.props = ["SendID", "EventDate"]
```

### CSharp

```python
clickevent.Props = new string[] { "SendID", "EventDate" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a click event
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
clickevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```

### PHP

```php
$clickevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```

### Python

```python
clickevent.filter = {"Property" : "SubscriberKey", "SimpleOperator" : "equals", "Value" : "example@example.com"}
```

### CSharp

```python
clickevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
