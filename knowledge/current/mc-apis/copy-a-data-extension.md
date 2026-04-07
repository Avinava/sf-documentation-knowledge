---
title: "Copy a Data Extension"
domain: mc-apis
topic: copy-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:15.888Z
estimatedTokens: 674
keywords: [Copy, Extension, SOAP, API, Why, How, Sample, PHP, Code]
---

> This page contains information  about using the SOAP API to copy an existing data extension.

# Copy a Data Extension

This page contains information about using the SOAP API to copy an existing data extension.

## Why Copy a Data Extension using the SOAP API

You can use this code to create a data extension with the same fields and data types as an existing data extension. This process saves the time and effort necessary to manually create a data extension.

## How to Copy a Data Extension using the SOAP API

Use the provided sample code as a model for your own API call. Note that this code does not function correctly for data extensions created via a template. While the code creates a data extension with the appropriate fields, the new data extension does not function in the same context as the data extension created via a template (such as a triggered send data extension).

### Sample PHP Code

```apex
public function DataExtension_Copy($sourceCustomerKey, $name, $customerkey, $description, $folderID)
  {
    $out = new stdClass();
    try
    {
      //First Get the Columns from the Source DataExtension
      $sourceColumns = new ET_DataExtension_Column();
      $sourceColumns->authStub = $this->client;
      $sourceColumns->props = array("Name", "FieldType", "IsPrimaryKey", "MaxLength", "IsRequired");
      $sourceColumns->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => $sourceCustomerKey);
      $columnResult = $sourceColumns->get();
      //Setup the call to create the new DE
      $newDE = new ET_DataExtension();
      $newDE->authStub = $this->client;
      $newDE->props = array("Name" => $name, "CustomerKey" => $customerkey, "Description" => $description, "CategoryID" => $folderID);
      $newDE->columns = array();
      //Loop through the columns of the SubscriberDE so that they match
      for($i = 0; $i < count($columnresult-="">results) ; $i++)
      {
        $col = $columnResult->results[$i];
        $temp = array("Name" => $col->Name, "FieldType" => $col->FieldType, "IsPrimaryKey" => $col->IsPrimaryKey, "IsRequired" => $col->IsRequired);
        if(isset($col->MaxLength))
        {
          $maxTemp = array("MaxLength" => $col->MaxLength);
          $temp = array_merge($temp, $maxTemp);
        }
        $newDE->columns[] = $temp;
      }
      $result = $newDE->post();
      if($result->results[0]->StatusCode != "OK")
      {
        $out->Status = "Error";
        $out->Message = $result->results[0]->StatusMessage;
      }
      else
      {
        $out->Status = "OK";
        $out->Message = "Data Extension: " . $sourceCustomerKey . " Copied Successfully";
      }
    }
    catch(Exception $e)
    {
      $out->Status = "Error";
      $out->Message = $e;
    }
    return $out;
  }
```
