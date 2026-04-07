---
title: "Retrieve Bounce Event Details"
domain: mc-sdks
topic: retrieve-bounce-event-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.934Z
estimatedTokens: 991
keywords: [Retrieve, Bounce, Event, ET_BounceEvent, column, Marketing, Cloud, account, SDK, interact, described, below, Ruby, PHP, Python]
---

# Retrieve Bounce Event Details

> The ET_BounceEvent object represents a column with a bounce event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

# Retrieve Bounce Event Details

The **ET\_BounceEvent** object represents a column with a bounce event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing bounce events.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
bounceevent = FuelSDK::BounceEvent.new
bounceevent.authStub = myClient
response = bounceevent.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$bounceevent = new ET_BounceEvent();
$bounceevent->authStub = $myclient;
$response = $bounceevent->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
bounceevent = ET_Client.ET_BounceEvent()
bounceevent.auth_stub = myClient
results = bounceevent.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_BounceEvent bounceevent = new ET_BounceEvent();
bounceevent.AuthStub = myclient;
GetReturn results = bounceevent.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline your usage of Get

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
-   SMTPCode
-   BounceCategory
-   SMTPReason
-   BounceType
-   EventType
-   TriggeredSendDefinitionObjectID
-   BatchID

### Ruby

```ruby
bounceevent.props = ['SendID', 'EventDate']
```

### PHP

```php
$bounceevent->props = array('SendID', 'EventDate');
```

### Python

```python
bounceevent.props = ["SendID", "EventDate"]
```

### CSharp

```python
bounceevent.Props = new string[] { "SendID", "EventDate" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a bounce event
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
bounceevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```

### PHP

```php
$bounceevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```

### Python

```python
bounceevent.filter = {"Property" : "SubscriberKey","SimpleOperator" : "equals","Value" : "example@example.com"}
```

### CSharp

```python
bounceevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
