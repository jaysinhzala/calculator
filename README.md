# 🧮 JavaScript Calculator

A simple, fully functional **web-based calculator** built using HTML, CSS, and vanilla JavaScript. It mimics the behavior of a standard calculator with support for arithmetic operations, percentages, decimal values, and a formatted display with comma separators.

---

## 🚀 Features

- **Basic Arithmetic**: Supports addition (`+`), subtraction (`-`), multiplication (`×`), and division (`÷`).
- **Real-Time Display Formatting**: Adds commas automatically (e.g., `1234567` → `1,234,567`) while retaining decimal accuracy.
- **Percentage (%)**: Converts current number into a percentage (e.g., `50` → `0.5`).
- **Decimal Support**: Allows floating point numbers like `3.14`.
- **Delete Function**: Removes the last digit entered.
- **Clear Function**: Clears all input and resets the calculator.
- **Double Zero Button (`00`)**: Quickly append two zeroes.
- **Error Handling**: Handles divide-by-zero and invalid input cases with safe fallback (`"Error"`).

---

## 🧱 Tech Stack

- **HTML5** – Structure of the calculator
- **CSS3** – Basic layout and styling
- **JavaScript (ES6)** – Functionality and logic

---

## 📂 File Structure

```plaintext
calculator/
├── index.html         # Main HTML file
├── style.css          # Stylesheet
└── script.js          # Calculator logic (this repo)
