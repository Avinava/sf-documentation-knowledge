---
title: "Retrieve Open Event Details"
domain: mc-sdks
topic: retrieve-open-event-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.284Z
estimatedTokens: 961
keywords: [Retrieve, Open, Event, ET_OpenEvent, column, Marketing, Cloud, account, SDK, interact, described, below, Ruby, PHP, Python]
---

# Retrieve Open Event Details

> The ET_OpenEvent object represents a column with a open event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

# Retrieve Open Event Details

The **ET\_OpenEvent** object represents a column with a open event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing open events.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
openevent = FuelSDK::OpenEvent.new
openevent.authStub = myClient
response = openevent.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$openevent = new ET_OpenEvent();
$openevent->authStub = $myclient;
$response = $openevent->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
openevent = ET_Client.ET_OpenEvent()
openevent.auth_stub = myClient
results = openevent.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_OpenEvent openevent = new ET_OpenEvent();
openevent.AuthStub = myclient;
GetReturn results = openevent.Get();
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

### Ruby

```ruby
openevent.props = ['SendID', 'EventDate']
```

### PHP

```php
$openevent->props = array('SendID', 'EventDate');
```

### Python

```python
openevent.props = ["SendID", "EventDate"]
```

### CSharp

```csharp
openevent.Props = new string[] { "SendID", "EventDate" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a open event
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
openevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```

### PHP

```php
$openevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```

### Python

```python
openevent.filter = {"Property" : "SubscriberKey","SimpleOperator" : "equals","Value" : "example@example.com"}
```

### CSharp

```csharp
openevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
