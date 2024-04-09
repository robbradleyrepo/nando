# Nando Coding challenge UI component

### Rob Bradley - paraxia@hotmail.com

#### Notes:

Modal opens and closes functionally and is 100% fluid responsive via SCSS.

Opted to focus on prop variants primarily, specifically demonstrating the following core props 

/components/button.tsx

```
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string, // default, primary, info, success, warning, danger, dark
  size?: string, // sm, md, lg
  disabled?: boolean,
  className?: string;
}
```
Although not complete, I felt this was essential as a foundation here.

Minimal accessibility but using the ```disabled``` prop as above we can proceed as needed with a fine comb in this respect

Components need to be broken up more, I would have opted for a ButtonContainer, Modal tsx components and imported then in using ATOMIC (whether we extend this too styling AND component tsx is a controversial subject, i opted to demoinstate ATOMIC + BEMIT strictly with respect to styling here)

Then.... ```modalIsOpen``` states need to be LIFTED across components etc

Keyboard controls need to be added for accessibility, focusTrap library etc.

I did create a hooks/ subdir where much of this could be handled.

I could go on here, but I trust I've covered enough with my approach to demonstrate where I'm going with this. 







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
