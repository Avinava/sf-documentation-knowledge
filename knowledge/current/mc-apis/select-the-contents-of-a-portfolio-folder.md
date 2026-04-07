---
title: "Select the Contents of a Portfolio Folder"
domain: mc-apis
topic: select-the-contents-of-a-portfolio-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.114Z
estimatedTokens: 903
keywords: [Select, Contents, Portfolio, Folder, retrieving, selecting, contained, subfolders, Marketing, Cloud, account, Why, How, Sample, NET, Code, Items]
---

> This page contains information  about retrieving and selecting object contained within the Portfolio and associated subfolders of a given Marketing Cloud account.

# Select the Contents of a Portfolio Folder

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about retrieving and selecting object contained within the Portfolio and associated subfolders of a given Marketing Cloud account.

## Why Select the Contents of a Portfolio Folder

You can use the Retrieve call to return information about the object contained within the Portfolio or a subfolder and use it as part of other calls, including creating and sending email messages.

## How to Select Contents of a Portfolio Folder

Use the sample code below as a model for your own call. Remember that the Portfolio contains folders; if a folder is not specified, all Portfolio items for the account are returned.

### Sample .NET Code

```apex
string requestID;
// Filter by the Folder/Category
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "CategoryID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "6437" };
// Create the RetrieveRequest object
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "Portfolio";
request.Filter = sfp;
request.Properties = new string[] { "ObjectID", "CustomerKey", "Client.ID", "CategoryID", "FileName", "DisplayName", "Description", "TypeDescription", "IsUploaded", "IsActive", "FileSizeKB", "ThumbSizeKB", "FileWidthPX", "FileHeightPX", "FileURL", "ThumbURL", "CacheClearTime"};
// Execute the Retrieve
APIObject[] results;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Portfolio Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each retrieved object
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       Portfolio id = results[cntr] as Portfolio;
       sb.Append("
 CategoryID: " + id.CategoryID);
       sb.Append("
 DisplayName: " + id.DisplayName);
       sb.Append("
 FileHeightPX: " + id.FileHeightPX);
       sb.Append("
 FileName: " + id.FileName);
       sb.Append("
 FileURL: " + id.FileURL);
       sb.Append("
 FileWidthPX: " + id.FileWidthPX);
       sb.Append("
 IsUploaded: " + id.IsUploaded);
       sb.Append("
 IsActive: " + id.IsActive);
       sb.Append("
 ThumbSizeKB: " + id.ThumbSizeKB);
       sb.Append("
 ThumbURL: " + id.ThumbURL);
       sb.Append("
 TypeDescription: " + id.TypeDescription);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```

### Output

```
Porfolio Summary Overall result: OK.
RequestID: af2ff633-1a4d-4e42-98d4-1f36edcd1851 ---- Index 0
CategoryID: 6437
DisplayName: Gravatar_25
FileHeightPX: 0
FileName: Gravatar_25.jpg
FileURL: m/1/Gravatar_25.jpg
FileWidthPX: 0
IsUploaded: False
IsActive: True
ThumbSizeKB: 0
ThumbURL: m/1/thumb/jpg/Gravatar_25.jpg
TypeDescription:   ---- Index 1
CategoryID: 6437
DisplayName: software
FileHeightPX: 0
FileName: software.gif
FileURL: m/1/software.gif
FileWidthPX: 0
IsUploaded: False
IsActive: True
ThumbSizeKB: 0
ThumbURL: m/1/thumb/gif/software.jpg
TypeDescription:
```

## Related Items

-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)

## Code Examples

```apex
string requestID;  
// Filter by the Folder/Category 
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "CategoryID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "6437" };
// Create the RetrieveRequest object
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "Portfolio";
request.Filter = sfp;
request.Properties = new string[] { "ObjectID", "CustomerKey", "Client.ID", "CategoryID", "FileName", "DisplayName", "Description", "TypeDescription", "IsUploaded", "IsActive", "FileSizeKB", "ThumbSizeKB", "FileWidthPX", "FileHeightPX", "FileURL", "ThumbURL", "CacheClearTime"};
// Execute the Retrieve
APIObject[] results;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Portfolio Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each retrieved object
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       Portfolio id = results[cntr] as Portfolio;
       sb.Append("
 CategoryID: " + id.CategoryID);
       sb.Append("
 DisplayName: " + id.DisplayName);
       sb.Append("
 FileHeightPX: " + id.FileHeightPX);
       sb.Append("
 FileName: " + id.FileName);
       sb.Append("
 FileURL: " + id.FileURL);
       sb.Append("
 FileWidthPX: " + id.FileWidthPX);
       sb.Append("
 IsUploaded: " + id.IsUploaded);
       sb.Append("
 IsActive: " + id.IsActive);
       sb.Append("
 ThumbSizeKB: " + id.ThumbSizeKB);
       sb.Append("
 ThumbURL: " + id.ThumbURL);
       sb.Append("
 TypeDescription: " + id.TypeDescription);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```

```
Porfolio Summary Overall result: OK.  
RequestID: af2ff633-1a4d-4e42-98d4-1f36edcd1851 ---- Index 0 
CategoryID: 6437 
DisplayName: Gravatar_25 
FileHeightPX: 0 
FileName: Gravatar_25.jpg 
FileURL: m/1/Gravatar_25.jpg 
FileWidthPX: 0 
IsUploaded: False 
IsActive: True 
ThumbSizeKB: 0 
ThumbURL: m/1/thumb/jpg/Gravatar_25.jpg 
TypeDescription:   ---- Index 1 
CategoryID: 6437 
DisplayName: software 
FileHeightPX: 0 
FileName: software.gif 
FileURL: m/1/software.gif 
FileWidthPX: 0 
IsUploaded: False 
IsActive: True 
ThumbSizeKB: 0 
ThumbURL: m/1/thumb/gif/software.jpg 
TypeDescription:
```

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
