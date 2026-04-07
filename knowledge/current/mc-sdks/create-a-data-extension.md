---
title: "Create a Data Extension"
domain: mc-sdks
topic: create-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.043Z
estimatedTokens: 1675
keywords: [Data, Extension, Post, new, Marketing, Cloud, account, Ruby, PHP, Python, CSharp, Java, Columns]
---

# Create a Data Extension

> Use the Post method to create a new data extension within a Marketing Cloud account.

# Create a Data Extension

Use the **Post** method to create a new data extension within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
dataextension.props = {"Name" => "SDKDataExtension", "Description" => "SDK Created Data Extension"}
dataextension.columns = [{"Name" => "Name", "FieldType" => "Text", "IsPrimaryKey" => "true", "MaxLength" => "100", "IsRequired" => "true"},{"Name" => "OtherField", "FieldType" => "Text"}]
results = dataextension.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$dataextension->props = array("Name" => "SDKDataExtension", "Description" => "SDK Created Data Extension");
$dataextension->columns = array();
$dataextension->columns[] = array("Name" => "Key", "FieldType" => "Text", "IsPrimaryKey" => "true","MaxLength" => "100", "IsRequired" => "true");
$dataextension->columns[] = array("Name" => "Value", "FieldType" => "Text");
$results = $dataextension->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
dataextension.props = {"Name" : "SDKDataExtension", "Description": "SDK Created Data Extension"}
dataextension.columns = [{"Name" : "Key", "FieldType" : "Text", "IsPrimaryKey" : "true", "MaxLength" : "100", "IsRequired" : "true"},{"Name" : "Value", "FieldType" : "Text"}]
results = dataextension.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
dataextension.Name = NameOfTestDataExtension;
dataextension.CustomerKey = NameOfTestDataExtension;
ET_DataExtensionColumn nameColumn = new ET_DataExtensionColumn() { Name = "Name", FieldType = DataExtensionFieldType.Text, IsPrimaryKey = true, MaxLength = 100, IsRequired = true };
ET_DataExtensionColumn otherColumn = new ET_DataExtensionColumn() { Name = "OtherColumn", FieldType = DataExtensionFieldType.Text };
dataextension.Columns = new ET_DataExtensionColumn[] { nameColumn, otherColumn };
PostReturn response = dataextension.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Columns

ET\_DataExtension has a unique property called **columns** for specifying information about the columns for the data extension. This property is an array of definitions that provide details about each column. Each column can have the following set:

-   **Name**
    -   String datatype
    -   Name of the field
-   **DefaultValue**
    -   String datatype
    -   Default value for the field
-   **MaxLength**
    -   Int32 datatype
    -   The maximum length for Text type fields
-   **IsRequired**
    -   Boolean datatype
    -   Determines if a row can be added with no value for this field
-   **IsPrimaryKey**
    -   Boolean datatype
    -   Specifies if the row is a primary key
-   **FieldType**
    -   String datatype
    -   Determines the type of data that can be stored in the column
    -   Valid Values
        -   Text
        -   Number
        -   Date
        -   Boolean
        -   EmailAddress
        -   Phone
        -   Decimal
        -   Locale

## Properties

You can provide the following values for the **props** property on the object:

-   **CustomerKey**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type (corresponds to the external key assigned to an object in the user interface)
-   **Name**
    -   String datatype
    -   Name of the object or property
-   **Description**
    -   String datatype
    -   Describes and provides information regarding the object
-   **IsSendable**
    -   Boolean datatype
    -   Indicates whether you can use a data extension as part of an audience for a message send
-   **IsTestable**
    -   Boolean datatype
    -   Indicates whether a sendable data extension can be used within tests sends for a message
-   **SendableDataExtensionField**
    -   **Name**
        -   Object datatype
        -   Specifies the Data Extension field that contains the Email Address or SubscriberKey
    -   Specify a null value for the object
-   **SendableSubscriberField**
    -   **Name**
        -   Object datatype
        -   Specifies SubscriberKey or Email Address based on account configuration
    -   Specify a null value for the object
-   **Template**
    -   **CustomerKey**
        -   String datatype
        -   Optional value to pass the unique identifier for a Data Extension template
-   **CategoryID**
    -   Int64 datatype
    -   Identifies the folder containing the list
-   **DataRetentionPeriodLength**
    -   Int32 datatype
    -   Specifies the number of time units for which data will be retained (used with DataRetentionPeriodUnitOfMeasure to specify the full data retention time)
-   **RowBasedRetention**
    -   Boolean datatype
    -   Indicates whether the data retention policy removes data by row or by entire data extension. A value of **true** indicates all records within a data extension are removed at the same time. A value of **false** indicates that the application can remove individual rows within a data extension
-   **ResetRetentionPeriodOnImport**
    -   Boolean datatype
    -   Indicates whether a data retention period should be reset after a successful import of new data. A value of **true** indicates that the data retention period resets to the beginning upon completion of a successful data import. A value of **false** indicates the data retention period continues from the original starting point
-   **DeleteAtEndOfRetentionPeriod**
    -   Boolean datatype
    -   Indicates whether data should be deleted at the end of the retention period
-   **RetainUntil**
    -   String datatype
    -   Indicates the date that ends the retention period for a data extension. Make sure that the value passed to this property is correctly formatted based on the Date Format setting of the API user. Failure to do so may result in an error
-   **DataRetentionPeriod**
    -   DateTimeUnitOfMeasure datatype
    -   Specifies the period during which the application retains the data within a data extension
