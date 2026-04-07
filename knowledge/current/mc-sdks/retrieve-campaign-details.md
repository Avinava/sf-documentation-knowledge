---
title: "Retrieve Campaign Details"
domain: mc-sdks
topic: retrieve-campaign-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.975Z
estimatedTokens: 517
keywords: [Retrieve, Campaign, campaigns, Ruby, PHP, Python, CSharp, Java, Filtering, Requests]
---

# Retrieve Campaign Details

> Use the Get method to return information about existing campaigns.

# Retrieve Campaign Details

Use the **Get** method to return information about existing campaigns.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
response = campaign.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$response = $campaign->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
campaign = ET_Client.ET_Campaign()
campaign.auth_stub = myClient
results = campaign.get()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Campaign campaign = new ET_Campaign();
campaign.AuthStub = myclient;
GetReturn results = campaign.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filtering Get Requests

Optionally, you can set values in the **props** property to limit the number of results returned and handle paging.

-   **$page** - 1 based ordinal for the page number.
-   **$pageSize** - Number of items to return. 50 is the maximum.
-   **$orderBy** - Specifies the sort order

1.  ModifiedDate DESC
2.  ModifiedDate ASC
3.  Name DESC
4.  Name ASC
5.  CampaignCode DESC
6.  CampaignCode ASC
7.  Id DESC
8.  Id ASC
9.  CreatedDate DESC
10.  CreatedDate ASC

### Ruby

```ruby
campaign.props = {'$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC'}
```

### PHP

```php
$campaign->props = array('$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC');
```

### Python

```python
campaign.props = {"$page" :  "2", "$pageSize" : "10", "$orderBy" : "ModifiedDate DESC"};
```

### CSharp

```csharp
campaign.Page = 2;
```
