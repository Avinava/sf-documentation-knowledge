---
title: "Create a Campaign"
domain: mc-sdks
topic: create-a-campaign
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.465Z
estimatedTokens: 520
keywords: [Ruby, Python, CSharp, Java, Campaign, Post, new, Marketing, Cloud, account, PHP]
---

> Use the Post method to create a new campaign within a Marketing Cloud account.

# Create a Campaign

Use the **Post** method to create a new campaign within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
campaign.props = {"name" => "SDKCampaign", "description" => "SDK Created Campaign"}
results = campaign.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$campaign->props = array("name" => "SDKCampaign", "description" => "SDK Created Campaign");
$results = $campaign->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
       campaign = ET_Client.ET_Campaign()
  campaign.auth_stub = myClient
  campaign.props = {"name" : "SDKCampaign", "description": "SDK Created Campaign"}
results = campaign.post()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Campaign campaign = new ET_Campaign();
campaign.AuthStub = myclient;
campaign.Name = "SDKCampaign";
campaign.Description = "SDK Created Campaign";
PostReturn results = campaign.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **name**
    -   String datatype
    -   Name of the campaign
-   **description**
    -   String datatype
    -   Description of the campaign
-   **campaignCode**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type
-   **color**
    -   String datatype
    -   Specifies either Public or Private as the type
-   **favorite**
    -   Boolean datatype
    -   Specifies if campaign is a favorite
