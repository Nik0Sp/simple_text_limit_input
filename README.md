<h1 align="center">Simple Max Text Input</h1>

<p align="center">
  <strong>A simple React component for limiting the maximum length of a text input.</strong>
</p>

##  Getting Started

To use this text input component, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_text_limit_input.git`
2. Change directory to the project folder: `cd simple_text_limit_input`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the text input component in action.

##  Features

- The text input component allows the user to input text in a textarea.
- The maximum length of the input is limited to a specified value (default is 30 characters).
- The current character count is displayed below the textarea.
- If the input exceeds the maximum length, the textarea border and character count turn red.
- If the input is within the maximum length, the textarea border and character count turn green.

##  Usage

The main component of the text input is `App`, which handles the state and functionality of the component.

### App

The `App` component is responsible for the following:

- The `useEffect` hook initializes the event listener and sets the initial character count.
- The event listener updates the character count and adjusts the styling based on the input length.
- The textarea element has an ID of `text-input`, and the character count is displayed in an element with the ID of `result`.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.