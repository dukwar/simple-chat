## Чат (Simple Chat)

The purpose of this project was to develop a frontend application - a corporate social network on behalf of one of the employees

Application features:
- There are two sections in the chat - one for discussing work issues (Team Chat), the second for flooding and communication.
- The employee has the ability to see the entire list of sent messages, and also has the ability to send messages (and then edit and delete).
- The initial message list is taken from a static file
- The user has the ability to add, delete, and edit files
- Implemented the logic of the sidebar, which displays the username, avatar, menu, as well as the expand-collapse sidebar button and the enter and exit button
- Implemented authorization on the client, in which the user can enter his name and add his avatar
- Simple server implemented

Detailed description of features:
- Authorization: it is possible to add a name and an avatar (you can also do without an avatar, instead an anonymous avatar will be displayed), then click the "login" button
- Select a chat: to select a chat, you need to click in the block with conversations on the block with the name of the conversation
- Adding messages: in the chat area, you need to enter your message in the field, after which the send button will appear
- Editing a message: when you hover the mouse over the window with sent messages (only your own), a pencil icon will appear, when you click on it, the editing status will appear above the message input field (you can cancel it by clicking on the cross on the right), then enter a new message in the field and also send - the message will be changed
- Deleting a message: to delete a message or a group of messages, select them by clicking on each message separately in the sent messages window. If at least one message is selected in the chat name block, a trash will be displayed, when you click on it, messages will be deleted
- Adding files (pictures, videos, music): to add a file to your message, move the mouse over the picture with a paper clip, then a pop-up window with a small menu will appear, when you click on one of the elements, you can select a file from the file system of your PC, after confirmation selection, the file icons (preview) will appear at the bottom of the input field, but the music can already be played. After these manipulations, click the add button. The files will be successfully added to your message
- Editing and deleting files is carried out according to the principle of editing and deleting text, with one exception - when editing in the preview, each file type has a delete button

Technologies used:
- React
- TypeScript
- React-create-app
- Redux, redux-thunk, react-redux
- React-router
- CSS Flexbox, Scss
- CSS animations
- Classnames
- Formik
- Axios
- Json-server



You can watch this work [here](https://simple-chat-vladimir.herokuapp.com/)

All components are in the `/src` folder. Server logic is implemented in the root folder. All another files was generated by `react-create-app`

You can run this project locally just do:
- clone branch `main` with `https://github.com/dukwar/simple-chat.git` or fork it and then clone it from your forked repo
- `cd simple_chat`
- `yarn install`
- `yarn dev`
