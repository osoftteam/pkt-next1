const tutorialsImagesPath = "/images/tutorials";

const tutorialsData = [
  {   
    categoryName: "Navigation",
    tutorials: [
      {
        name: "Selector",
        images: [
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.15, y: 0.5 },
            rightSide: true,
            instruction:
              "This is the selector. All your notes, topics, emails, contacts, and boards can be created and/or accessed from here.",
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.26, y: 0.3 },
            rightSide: true,
            pointerSize: "s",
            instruction: "Select folder tab on the right to open it in Selector.",
          },
          {
            src: `${tutorialsImagesPath}/selector-emails.jpg`,
            coordinates: { x: 0.01, y: 0.2 },
            rightSide: true,
            pointerSize: "s",
            instruction:
              "Select left tabs to open email, notes or different grouping panels.",
          },
        ],
      },
      {
        name: "Workspace",
        images: [
          {
            src: `${tutorialsImagesPath}/wspace.jpg`,
            coordinates: { x: 0.32, y: 0.1 },
            rightSide: true,
            instruction:
              "Workspace are tabs to the right of the selector. There is one tab for email filters, one for Notes board, one for current Blackboard and one for current selected topic",
          },
          {
            src: `${tutorialsImagesPath}/wspace-1.jpg`,
            coordinates: { x: 0.38, y: 0.1 },
            rightSide: true,
            instruction:
              "Notes board selected in Workspace, it shows columns of outlined folders. We can edit topic in columns same as in Selector",
          },
          {
            src: `${tutorialsImagesPath}/board-edit-1.jpg`,
            coordinates: { x: 0.42, y: 0.1 },
            rightSide: true,
            instruction:
              "Selected Blackboard has reference to various topics and email and maintain graph that shows relation between them.",
          },
          {
            src: `${tutorialsImagesPath}/wspace-2.jpg`,
            coordinates: { x: 0.28, y: 0.09 },
            rightSide: true,
            pointerSize: "xs",
            instruction:
              "Topics tab in Workspace can be used to edit note. Selector and Workspace are linked via 'link' button and any selected topic will have it's note in tab.",
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.26, y: 0.3 },
            rightSide: true,
            pointerSize: "s",
            instruction: "Select folder tab on the right to open it in Selector.",
          },
          {
            src: `${tutorialsImagesPath}/selector-emails.jpg`,
            coordinates: { x: 0.01, y: 0.2 },
            rightSide: true,
            pointerSize: "s",
            instruction:
              "Select left tabs to open email, notes or different grouping panels.",
          },
        ],
      },      
    ],
  },
  {
    categoryName: "Topics",
    tutorials: [
      {
        name: "Creating topics",
        images: [
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.01, y: 0.35 },
            rightSide: true,
            pointerSize: "xs",
            instruction: "Click here to open notes and topics panel",
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.01, y: 0.09 },
            rightSide: true,
            pointerSize: "xs",
            instruction: "Click here create a new topic",
          },
          {
            src: `${tutorialsImagesPath}/selector-new-topic.jpg`,
            coordinates: { x: 0.16, y: 0.35 },
            rightSide: true,
            instruction:
              "Give your topic a title in the input box and press Enter once you're done",
          },
        ],
      },
      {
        name: "Creating subtopics",
        images: [
          {
            src: `${tutorialsImagesPath}/sortbox-subtopic.jpg`,
            coordinates: { x: 0.24, y: 0.2 },
            instruction:
              "Drag and drop a topic into the center of another topic to insert it as a subtopic (note that the black line that appears aligns with the center of the parent topic)",
          },
          {
            src: `${tutorialsImagesPath}/sortbox-now-a-subtopic.jpg`,
            coordinates: { x: 0.28, y: 0.2 },
            instruction: "You now have a nested topic",
          },
        ],
      },
      {
        name: "Note editor",
        images: [
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.15, y: 0.83 },
            rightSide: true,
            instruction: "Select any topic to edit text",
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.45, y: 0.08 },
            pointerSize: "s",
            instruction:
              "This is Workspace to the right of the Selector. It has tabs, one of the tab will be selected, and you can start to edit content of your topic.",
            rightSide: true,
          },          
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.6, y: 0.35 },
            instruction:
              "This is the note editor pane, where the contents of your topics can be edited.",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.4, y: 0.12 },
            instruction:
              "This is the text styling toolbar. First select the text you wish to style, then click on the desired effect in the toolbar",
            rightSide: true,
            pointerSize: "s",
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.90, y: 0.12 },
            instruction: "You can undo or redo actions, insert tables, and search for keywords",
            pointerSize: "s",            
          },
        ],
      },
      {
        name: "Folders",
        images: [
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.26, y: 0.3 },
            instruction: "Please note the tabs on the right in Selector, this is the locus bar where you can select folder.",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.27, y: 0.18 },
            pointerSize: "m",
            instruction:
              "The Sortbox is for all your yet unorganized notes. Jot them down here, and later move them to separate organized folders",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.27, y: 0.28 },
            pointerSize: "m",
            instruction:
              "The Reference sub-tab is a place for all your non-actionable topics that don't have strategic importance or urgency",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/selector-topics.jpg`,
            coordinates: { x: 0.27, y: 0.4 },
            instruction: "The Maybe/Someday sub-tab is dedicated to tasks planned for the future",
            rightSide: true,
            pointerSize: "m",
          },
        ],
      },
      {
        name: "Adding folders",
        images: [
          {
            src: `${tutorialsImagesPath}/edit-folders.jpg`,
            coordinates: { x: 0.1, y: 0.18 },
            pointerSize: "m",
            rightSide: true,
            instruction: 'Click on "View" from the menu bar, then click on "Notes Folders"',
          },
          {
            src: `${tutorialsImagesPath}/edit-folders-1.jpg`,
            coordinates: { x: 0.32, y: 0.9 },
            pointerSize: "s",
            instruction: 'Click on "New"',
          },
          {
            src: `${tutorialsImagesPath}/edit-folders-2.jpg`,
            coordinates: { x: 0.39, y: 0.52 },
            rightSide: true,
            instruction:
              'Check the box if you wish the folder to show on the locus bar. Name your new folder and click on "OK"',
          },
          {
            src: `${tutorialsImagesPath}/edit-folders-3.jpg`,
            coordinates: { x: 0.27, y: 0.65 },
            instruction: "Your newly created folder",
            rightSide: true,
          },
        ],
      },
    ],
  },
  {
    categoryName: "Emails",
    tutorials: [
      {
        name: "Signing in",
        images: [
          {
            src: `${tutorialsImagesPath}/email-sign-in.jpg`,
            coordinates: { x: 0.015, y: 0.18 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Select Emails tab",
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in.jpg`,
            coordinates: { x: 0.06, y: 0.17 },
            instruction: "Click here to sign in",
            pointerSize: "m",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in-select.jpg`,
            coordinates: { x: 0.28, y: 0.86 },
            rightSide: true,
            instruction: "Select the email account you would like to connect with Ardi",
            brighterPointer: "true",
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in-allow.jpg`,
            coordinates: { x: 0.78, y: 0.82 },
            instruction: "Follow Gmail instructions",
            brighterPointer: "true",
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in-copy-auth-code.jpg`,
            coordinates: { x: 0.25, y: 0.39 },
            brighterPointer: "true",
            rightSide: true,
            instruction:
              "Once you've granted Ardi access to your Gmail acount, copy the authorization code provided",
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in-paste-auth-code.png`,
            coordinates: { x: 0.14, y: 0.62 },
            instruction:
              "Return to Ardi and paste the authorization code into the input box, then click on OK",
            brighterPointer: "true",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/email-sign-in-end.jpg`,
            coordinates: { x: 0.15, y: 0.26 },
            instruction: "Your emails are now accessible through the selector",
            brighterPointer: "true",
            rightSide: true,
          },
        ],
      },
      {
        name: "Adding accounts",
        images: [
          {
            src: `${tutorialsImagesPath}/email-selector.jpg`,
            coordinates: { x: 0.94, y: 0.08 },
            pointerSize: "s",
            instruction: "To connect more accounts, click on the icon here",
          },
          {
            src: `${tutorialsImagesPath}/add-account.png`,
            coordinates: { x: 0.07, y: 0.79 },
            pointerSize: "m",
            rightSide: true,
            instruction: 'Click on "Add" and repeat the previous tutorial',
          },
        ],
      },
      {
        name: "Composing mails",
        images: [
          {
            src: `${tutorialsImagesPath}/email-sign-in-end.jpg`,
            coordinates: { x: 0.06, y: 0.1 },
            pointerSize: "m",
            rightSide: true,
            instruction: 'Click on "Compose"',
          },
          {
            src: `${tutorialsImagesPath}/email-compose.jpg`,
            coordinates: { x: 0.15, y: 0.08 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Use the search bar to find your contacts by name or email.",
          },
          {
            src: `${tutorialsImagesPath}/email-compose.jpg`,
            coordinates: { x: 0.3, y: 0.6 },
            rightSide: true,            
            instruction:
              "Select a recipient(s) from your contacts list (On how to add contacts, refer to the Contacts section)",
          },
          {
            src: `${tutorialsImagesPath}/email-compose.jpg`,
            coordinates: { x: 0.1, y: 0.86 },
            rightSide: true,
            pointerSize: "m",
            instruction:
              'You may either double-click on a contact or select it and then click on "To" or "cc" (carbon copy). Click on "OK" when done',
          },
          {
            src: `${tutorialsImagesPath}/email-compose-2.jpg`,
            coordinates: { x: 0.38, y: 0.36 },
            rightSide: true,
            brighterPointer: true,
            instruction:
              "This is the email editor. Enter the subject line at the top, and the content of your email here.",
          },
          {
            src: `${tutorialsImagesPath}/email-compose-2.jpg`,
            coordinates: { x: 0.97, y: 0.15 },
            pointerSize: "m",
            brighterPointer: true,
            instruction:
              'Click on "Attach" if you wish to attach files. Click on "Send" when your email is ready to be sent',
          },
        ],
      },
    ],
  },
  {
    categoryName: "Boards",
    tutorials: [
      {
        name: "What are Boards?",        
        images: [
          {
            src: `${tutorialsImagesPath}/board-is.jpg`,
            coordinates: { x: 0.5, y: 0.7 },
            instruction: "Boards are vertical bands with items expanded vertically and connected with arrows.",
          },
          {
            src: `${tutorialsImagesPath}/board-edit.jpg`,
            coordinates: { x: 0.5, y: 0.5 },
            instruction: "Boards contain reference to selector topics and emails. All items in board can be edited, commented, marked with color.",
          },
          {
            src: `${tutorialsImagesPath}/board-is-1.jpg`,
            coordinates: { x: 0.35, y: 0.7 },
            instruction: "Boards maintain links between items.",
          },          
          {
            src: `${tutorialsImagesPath}/board-new.jpg`,
            coordinates: { x: 0.02, y: 0.74 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Select 'Boards' tab in sidebar",
          },
          {
            src: `${tutorialsImagesPath}/board-is-2.jpg`,
            coordinates: { x: 0.1, y: 0.43 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Select board from list of available to open board tab in workspace to the right",
          },
          {
            src: `${tutorialsImagesPath}/board-is-2.jpg`,
            coordinates: { x: 0.26, y: 0.09 },
            pointerSize: "s",
            rightSide: true,
            instruction: "Select and Workspace can be connected and disconnected via 'selector link' button. When they are connected selected item appears in workspace tab.",
          },          
        ]
      },
      {
        name: "Create a board",
        images: [
          {
            src: `${tutorialsImagesPath}/board-new.jpg`,
            coordinates: { x: 0.02, y: 0.74 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Select Boards in sidebar",
          },
          {
            src: `${tutorialsImagesPath}/board-new.jpg`,
            coordinates: { x: 0.08, y: 0.23 },
            pointerSize: "m",
            rightSide: true,
            instruction: "Click here to create a board",
          },
          {
            src: `${tutorialsImagesPath}/board-new-1.jpg`,
            coordinates: { x: 0.5, y: 0.5 },
            instruction: "This is your new board. Click on band, enter text to create new topic on the board.",
          },
          {
            src: `${tutorialsImagesPath}/board-new-1.jpg`,
            coordinates: { x: 0.69, y: 0.1 },
            pointerSize: "s",
            instruction: "Click to template button to create items from template.",
          }, 
          {
            src: `${tutorialsImagesPath}/board-new-2.jpg`,
            coordinates: { x: 0.71, y: 0.2 },
            pointerSize: "m",
            instruction: "Select template box ('Greeks', for example). Click anywhere on board to generate items from template.",
          },
          {
            src: `${tutorialsImagesPath}/board-new-3.jpg`,
            coordinates: { x: 0.71, y: 0.5 },
            instruction: "New items generated, feel free to rearrange them and assign new links.",
          },                              
        ],
      },
      {
        name: "Drag & Drop",
        images: [
          {
            src: `${tutorialsImagesPath}/board-dnd.jpg`,
            coordinates: { x: 0.28, y: 0.09 },
            pointerSize: "m",
            rightSide: true,            
            instruction:
              "Click on 'Link' button to disconnect Selector and Workspace.",
          },          
          {
            src: `${tutorialsImagesPath}/board-dnd.jpg`,
            coordinates: { x: 0.14, y: 0.5 },
            pointerSize: "m",
            rightSide: true,            
            instruction:
              "Drag and drop any item (topic, email, etc.) from the selector onto a board",
          },
          {
            src: `${tutorialsImagesPath}/board-dnd-1.jpg`,
            coordinates: { x: 0.42, y: 0.25 },
            instruction:
              "If your item is a nested one (i.e. contains subtopics), choose your preferred alignment of parent & children nodes on the board, and then click on OK",
          },
          {
            src: `${tutorialsImagesPath}/board-dnd-2.jpg`,
            coordinates: { x: 0.6, y: 0.45 },
            instruction: "Your topic is now visualized on the board along with its subtopics",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/board-dnd-3.jpg`,
            coordinates: { x: 0.15, y: 0.6 },
            instruction: "Drag emails from Email panel.",
            rightSide: true,
          },          
        ],
      },
      {
        name: "Associatons",
        images: [
          {
            src: `${tutorialsImagesPath}/board-links.jpg`,
            coordinates: { x: 0.50, y: 0.35 },
            instruction:
              "In Ardi you can draw visual associations between items on a board. First select an item",
          },
          {
            src: `${tutorialsImagesPath}/board-links.jpg`,
            coordinates: { x: 0.63, y: 0.1 },
            pointerSize: "s",
            instruction: "Click on the arrow button",
          },
          {
            src: `${tutorialsImagesPath}/board-links-1.jpg`,
            coordinates: { x: 0.4, y: 0.58 },
            pointerSize: "s",
            instruction:
              'Now click on the item (or select group of items) you wish to associate the original item with, and then click on "Add link"',
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/board-links-2.jpg`,
            coordinates: { x: 0.63, y: 0.1 },
            pointerSize: "s",
            instruction: "The newly created arrow represents an association between the items. Uncheck the arrow button to exit 'link' mode.",
            rightSide: true,
          },
        ],
      },
      {
        name: "Edit items in board",
        images: [
          {
            src: `${tutorialsImagesPath}/board-dnd-3.jpg`,
            coordinates: { x: 0.59, y: 0.54 },
            instruction: "We can rename regular topics in blackboard. Emails can't be renamed but can be commented, marked with color, assigned todo-priority.",
          },
          {
            src: `${tutorialsImagesPath}/board-dnd-3.jpg`,
            coordinates: { x: 0.3, y: 0.12 },
            pointerSize: "xs",
            instruction: "Click the annotation icon to comment email or any topic.",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/board-edit.jpg`,
            coordinates: { x: 0.39, y: 0.54 },
            instruction:
              "Type your annotation in the popped up window and close it once you're done.",
          },
          {
            src: `${tutorialsImagesPath}/board-edit-1.jpg`,
            coordinates: { x: 0.6, y: 0.52 },
            instruction: "Your new annotation will be shown over its parent item",
          },
          {
            src: `${tutorialsImagesPath}/board-edit-1.jpg`,
            coordinates: { x: 0.40, y: 0.12 },
            pointerSize: "xs",
            instruction: "Click the color icon to mark email or topic with color.",
            rightSide: true,
          },          
          {
            src: `${tutorialsImagesPath}/board-edit-3.jpg`,
            coordinates: { x: 0.65, y: 0.5 },
            instruction: "See some items marked with color on blackboard.",
            rightSide: true,
          },
        ],
      },      
    ],
  },
  {
    categoryName: "Miscellaneous",
    tutorials: [
      {
        name: "Selector tabs",
        images: [
          {
            src: `${tutorialsImagesPath}/selector-misc.jpg`,
            coordinates: { x: 0.1, y: 0.46 },
            rightSide: true,
            instruction: "Any item, including email, can be a 'todo' item with assigned progress. 'ToDo' tab select all todos in one list.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-1.jpg`,
            coordinates: { x: 0.1, y: 0.62 },
            rightSide: true,
            instruction:
              "We can label email and topic with a color and have them grouped in separate tab.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-2.jpg`,
            coordinates: { x: 0.1, y: 0.84 },
            rightSide: true,
            instruction:
              "Misc tab has subtabs, one of them 'Search' - displays last search results.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-2.jpg`,
            coordinates: { x: 0.07, y: 0.08 },
            pointerSize: "s",
            instruction: "To search for a keyword, click here",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-3.jpg`,
            coordinates: { x: 0.7, y: 0.82 },
            instruction:
              "Enter the keyword(s) in the input box. The boxes above indicate the number of matches found.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-4.jpg`,
            coordinates: { x: 0.4, y: 0.3 },
            instruction:
              "In 'Notes List' we show all topics with long notes attached.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-5.jpg`,
            coordinates: { x: 0.4, y: 0.45 },
            instruction:
              "In 'Comments' we show all topics and emails with comments.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-5.jpg`,
            coordinates: { x: 0.03, y: 0.1 },
            pointerSize: "xs",
            instruction:
              "Click on the target button to locate item in selector(outline) or in email tab.",
          },
          {
            src: `${tutorialsImagesPath}/selector-misc-6.jpg`,
            coordinates: { x: 0.3, y: 0.3 },
            rightSide: true,
            instruction:
              "After 'Locate' button we found topic in outline, we can see it's parent and sibling items.",
          },

        ],
      },
    ],  
  }
];

export default tutorialsData;
