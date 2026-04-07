---
title: "Create a Campaign Asset"
domain: mc-sdks
topic: create-a-campaign-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.946Z
estimatedTokens: 590
keywords: [Campaign, Asset, Post, new, Marketing, Cloud, account, Ruby, PHP, Python, CSharp, Java]
---

# Create a Campaign Asset

> Use the Post method to create a new campaign within a Marketing Cloud account.

# Create a Campaign Asset

Use the **Post** method to create a new campaign within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaignAsset = FuelSDK::Campaign::Asset.new
campaignAsset.authStub = myClient
campaignAsset.props = {"id" => "1212", "ids"=> [1000154], "type"=> "EMAIL"}
results = campaignAsset.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaignAsset = new ET_Campaign_Asset();
$campaignAsset->authStub = $myclient;
$campaignAsset->props = array("id" => "1212", "ids"=> [1000154], "type"=> "EMAIL");
$results = $campaignAsset->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
campaignAsset = ET_Client.ET_Campaign_Asset()
campaignAsset.auth_stub = myClient
campaignAsset.props = {"id" : "1212", "ids": (1000154), "type": "EMAIL"}
results = campaignAsset.post()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_CampaignAsset campaignAsset = new ET_CampaignAsset();
campaignAsset.AuthStub = myclient;
campaignAsset.CampaignID = "1212";
campaignAsset.IDs = new string[] { "1000154" };
campaignAssets.Type = "EMAIL";
PostReturn results = campaignAsset.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **id**
    -   String datatype
    -   Id of the campaign
-   **ids**
    -   Array datatype
    -   Unique IDs for assets
-   **type**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type
    -   Valid Values:
        -   email
        -   automation\_definition
        -   calendar\_event
        -   triggered
        -   list
        -   group
        -   data\_extension
        -   sendable\_custom\_object
        -   landing\_page
        -   facebook\_tab
        -   ct\_facebook\_post
        -   ct\_twitter\_post
        -   sms\_message
        -   push\_message
