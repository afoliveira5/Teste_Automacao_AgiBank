Feature: search

@test @mostImportant
Scenario: Perform a successful search on the blog
Given I accessed the agiBank blog
When searching for a specific post
Then I see the success message

@test @mostImportant
Scenario: Search for material that does not exist
Given I'm on the search screen
When searching for a subject that does not exist
Then I see the error message


