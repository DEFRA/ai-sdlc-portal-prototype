Product Requirements Document (PRD)

## Context

I want to refactor the SLDC prototype so that the 'Test engineer' journey is enabled. The journey is a multi-step GOV.UK journey that will allow test engineers to view advice on using Gen AI. A new endpoint will be created to allow using to post prompt request to be sent to it and saved in an inmemory sqllite database.

## Feature 1 - Initiate the 'Test engineer' journey (/choose-option)

### Story 1.1

As a test engineer
I want to be able to select the 'Test engineer' option and continue to the test engineer journey
So that I can learn how to use Gen AI.

### Acceptance Criteria

**AC 1**
As a test engineer
Given I am on the home page on route /
When i click the 'Start now' button
Then i should be routed to the /choose-option page
And the 'Test engineer' option should be enabled

**AC 2**
As a test engineer
Given I have selected the 'Test engineer' option on the /choose-option page
When i click the 'Continue' button
Then i should be routed to the /test-engineer page

## Feature 2 - Display test engineer information sections (/test-engineer)

### Story 2.1

As a test engineer
I want to be able to see information broken into sections
So that I can read about the approved tools, how to use AI affectively in test engineering and frequently asked questions

### Acceptance Criteria

**AC 1**
As a test engineer
Given I have been routed to /test-engineer page
When the page is loaded
Then I expect the form to match the design detailed in the test-engineer-design.md

**AC 2**
As a test engineer
Given I am on the /test-engineer page
When i click on the 'Approved Tool' link
Then i expect a new browser tab to open and display the approved tools page

AC 3
As a test engineer
Given I am on the /test-engineer page
When i click on the 'How to use AI effectively' section
Then i expect a new browser tab to open and display the how to use AI effectively page

## Page layout

The page layout should be constructed as follows:

**Page title (H1):** "AI guidance for test engineers"
**Summary text** **(paragraph)**: "Get the information and tools you need to use AI effectively in test engineering"
**Sections**: A section consists of a section title (bold text) above a box which contains a link and a short summary underneath the link of what you will see when you click on the link
**Sections to include:**
  **Section 1**
  **Section title:** Your AI tools and guidance
  **Box 1:**
  - link:
    - text: Approved AI tool
    - href: http://localhost:3000/software-engineer/approved-tools
    - summary: Find out which AI tools you can use at Defra and how to access them
  **Box 2:**
    - link:
      - text: How to use AI effectively
      - href: http://localhost:3000/software-engineer/how-to-guide
    - summary: Practical guidance on integrating AI into your development workflow, from basics to advanced technique.

  **Section 2**
  **Section title:** Resources and support
  **Box 1:**
  - link:
    - text: Acceptable use policy
    - href: http://localhost:3000/acceptable-use-policy
    - summary: Understand your responsibilities when using AI tools.
  **Change role**: Should be placed below the sections with a label and link to the right of the label.
    - header (h3): "Change role"
    - label: "Change role"
    - link:
      - text: Change role
      - href: http://localhost:3000/change-role

