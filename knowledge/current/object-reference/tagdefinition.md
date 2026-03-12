---
title: "TagDefinition"
domain: object-reference
topic: tagdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.690Z
estimatedTokens: 579
keywords: [TagDefinition, attributes, child, Tag, objects, Calls, Special, Access, Rules, Usage]
---

# TagDefinition

> Defines the attributes of child Tag objects.

# TagDefinition

Defines the attributes of child Tag objects.

## Supported Calls

delete(), describeSObjects(), query(), retrieve(), search(), undelete(), update()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Detail |
| --- | --- |
| Name | TypestringPropertiesFilter, Nillable, UpdateDescriptionIdentifies the tag word or phrase. |
| Type | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionDefines the visibility of a tag. Possible value are:Public: The tag can be viewed and manipulated between all users in an organization.Personal: The tag can be viewed or manipulated only by a user with a matching OwnerId. |

## Usage

When you create a tag for a record, an association is created with to a corresponding TagDefinition:

-   If the value in the tag's Name field is new, a new TagDefinition record is automatically created and becomes the parent of the tag.
-   If the value in the tag's Name field already exists in a TagDefinition, that TagDefinition automatically becomes the parent of the tag.

Each TagDefinition record has a one-to-many relationship with its child tag records.

The following standard objects represent tags for records:

-   AccountTag
-   AssetTag
-   CampaignTag
-   CaseTag
-   ContactTag
-   ContractTag
-   DocumentTag
-   EventTag
-   LeadTag
-   NoteTag
-   OpportunityTag
-   SolutionTag
-   TaskTag

Custom objects may also be tagged. Tags for custom objects are identified by a suffix of two underscores immediately followed by the word tag. For example, a custom object named Meeting has a corresponding tag named Meeting\_\_tag in that organization’s WSDL. Meeting\_\_tag is only valid for Meeting objects.

TagDefinition is useful for mass operations on any tag record. For instance, if you want to rename existing tags, you can search for the appropriate TagDefinition object, update it, and the child tag's Name values are also changed. The following Java example replaces all WC tags with the phrase West Coast:

```

```

When a tag is deleted, its parent TagDefinition will also be deleted if the name is not being used; otherwise, the parent remains. Deleting a TagDefinition sends it to the Recycle Bin, along with any associated tag entries.

## Code Examples

```apex
public void tagDefinitionSample() {
  String soqlQuery = "SELECT Id, Name FROM TagDefinition " +
      "WHERE Name = 'WC'";
  QueryResult qResult = null;
  try {
      qResult = connection.query(soqlQuery);
    TagDefinition tagDef = (TagDefinition) qResult.getRecords()[0];
    tagDef.setName("West Coast");
    connection.update(new SObject[]{tagDef});
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```
