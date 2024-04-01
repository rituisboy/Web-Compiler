import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const HTML = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">
  <h1>Hello, World!</h1>
  <p>This is a simple example of HTML, CSS, and JavaScript.</p>
  <button id="colorButton">Change Color</button>
</div>

<script src="script.js"></script>

</body>
</html>`;

const CSS = `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
}`;

const JS = `document.getElementById("colorButton").addEventListener("click", function() {
changeColor();
});

function changeColor() {
var container = document.querySelector('.container');
container.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
  `;

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: HTML,
    css: CSS,
    javascript: JS
  },
//   fullCode: {
//     html: "",
//     css: "",
//     javascript: "",
//   },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode:(state,action:PayloadAction<CompilerSliceStateType['fullCode']>)=>{
      state.fullCode=action.payload
    }
  },
});

export const { updateCurrentLanguage, updateCodeValue,updateFullCode } = compilerSlice.actions;

export default compilerSlice.reducer;
