---
title: "Retrieve Sent Event Details"
domain: mc-sdks
topic: retrieve-sent-event-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.293Z
estimatedTokens: 955
keywords: [Retrieve, Sent, Event, ET_SentEvent, column, Marketing, Cloud, account, SDK, interact, described, below, Ruby, PHP, Python]
---

# Retrieve Sent Event Details

> The ET_SentEvent object represents a column with a sent event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

# Retrieve Sent Event Details

The **ET\_SentEvent** object represents a column with a sent event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing sent events.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
sentevent = FuelSDK::SentEvent.new
sentevent.authStub = myClient
response = sentevent.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$sentevent = new ET_SentEvent();
$sentevent->authStub = $myclient;
$response = $sentevent->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
sentevent = ET_Client.ET_SentEvent()
sentevent.auth_stub = myClient
results = sentevent.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_SentEvent sentevent = new ET_SentEvent();
sentevent.AuthStub = myclient;
GetReturn results = sentevent.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   SendID
-   SubscriberKey
-   EventDate
-   Client.ID
-   EventType
-   BatchID
-   TriggeredSendDefinitionObjectID
-   ListID
-   PartnerKey
-   SubscriberID

### Ruby

```ruby
sentevent.props = ['SendID', 'EventDate']
```

### PHP

```php
$sentevent->props = array('SendID', 'EventDate');
```

### Python

```python
sentevent.props = ["SendID", "EventDate"]
```

### CSharp

```csharp
sentevent.Props = new string[] { "SendID", "EventDate" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a sent event
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
sentevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```

### PHP

```php
$sentevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```

### Python

```python
sentevent.filter = {"Property" : "SubscriberKey","SimpleOperator" : "equals","Value" : "example@example.com"}
```

### CSharp

```csharp
sentevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
