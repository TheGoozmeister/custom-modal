# React Custom Modal Component

This is a custom modal component for displaying modal on top of a page. 

## Installation

To install this modal, open a terminal and enter the following : 

```bash 
npm install custom-modal-pastor 
```

## Usage 


To use this modal, import it in top of your code

```javascript
import CustomModal from "custom-modal-pastor";
```

### Basic Usage Example
```javascript
<CustomModal
    message='Hello World'
    isVisible={true}
    onClose={()=>toggleModal(false)}
/>
```

### Properties

| Prop       | Type     | Default Value | Description                                                                 |
|------------|----------|---------------|-----------------------------------------------------------------------------|
| `message`  | `string` | `""`          | The message that will be displayed inside the modal.                        |
| `isVisible`| `boolean`| `true`        | Controls whether the modal is visible.                                      |
| `onClose`  | `function`| `undefined`  | Function to be called when the modal is closed. Typically used to update the state controlling the modal visibility. |

## Customization

You can customize the modal by adding a classname to the component.

## Additional Notes 

The CustomModal component is controlled via the isVisible prop. Make sure to bind this prop to a state variable in the parent component to dynamically show or hide the modal.

The onClose function is invoked when the user clicks the "Ok" button. You can use this to update your state and close the modal.