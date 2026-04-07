---
title: "Create a List"
domain: mc-sdks
topic: create-a-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.235Z
estimatedTokens: 490
keywords: [Post, new, Marketing, Cloud, account, Ruby, PHP, Python, CSharp, Java]
---

# Create a List

> Use the Post method to create a new list within a Marketing Cloud account.

# Create a List

Use the **Post** method to create a new list within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ListName" => "SDKList", "Description" => "SDK Created List"}
results = list.post
p results
```

## PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$list->props = array("ListName" => "SDKList", "Description" => "SDK Created List");
$results = $list->post();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
list = ET_Client.ET_List()
list.auth_stub = myclient
list.props = {"ListName" : "SDKList", "Description" : "SDK Created List"}
results = list.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_List list = new ET_List();
list.AuthStub = myclient;
list.ListName = "SDKList";
list.Description = "SDK Created List";
PostReturn results = list.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **ListName**
    -   String datatype
    -   Name of the list
-   **Description**
    -   String datatype
    -   Description of the list
-   **Category**
    -   Int32 datatype
    -   Identifies the folder containing the list
-   **Type**
    -   ListTypeEnum datatype
    -   Specifies either Public or Private as the type
-   **CustomerKey**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type
