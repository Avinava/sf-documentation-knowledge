---
title: "GroupMember"
domain: object-reference
topic: groupmember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.990Z
estimatedTokens: 497
keywords: [GroupMember, User, Group, member, Calls, Usage]
---

# GroupMember

> Represents a User or Group that is a member of a public group.

# GroupMember

Represents a User or Group that is a member of a public group.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Group.This is a relationship field.Relationship NameGroupRelationship TypeLookupRefers ToGroup |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the User or Group that is a direct member of the group.This field is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

If your group contains more than 10,000 members, for improved performance, you can adjust group membership using the GroupMember API object instead of the group's detail page in Setup. You can also adjust membership using the public group's access summary or user access policies in Setup.

A record exists for every User or Group who is a direct member of a public group whose Type field is set to Regular. User records that are indirect members of Regular public groups aren't listed as group members. A User can be an indirect member of a group if he or she is in a UserRole above the direct group member in the hierarchy, or if he or she is a member of a group that is included as a subgroup in that group.

If you attempt to create a record that matches an existing record, the system simply returns the existing record.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
