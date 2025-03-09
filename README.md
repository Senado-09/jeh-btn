/**
  # 📌 Advanced React Button Component
  
  A customizable button component with multiple variants, sizes, and loading states.
  
  ## 🚀 Installation
  npm install jeh-btn

 ## 🛠 Usage
 
  import Button from "jeh-btn";
  import { Plus } from "lucide-react";

  function App() {
    return (
      <Button 
        label="Click Me" 
        variant="primary" 
        size="medium" 
        onClick={() => alert('Button clicked!')} 
        icon={<Plus size={16} />} 
      />
    );
  }
  
  export default App;
  
  ## 🎨 Props
  | Prop      | Type                            | Default    | Description                          |
  |----------|--------------------------------|------------|--------------------------------------|
  | `label`   | `string`                        | **Required** | Button text                         |
  | `onClick` | `() => void`                    | **Required** | Click event handler                 |
  | `variant` | `'primary' | 'secondary' | 'danger'` | `'primary'`  | Button style variant               |
  | `size`    | `'small' | 'medium' | 'large'`   | `'medium'`   | Button size                         |
  | `isLoading` | `boolean`                    | `false`    | Show loading spinner                |
  | `disabled`  | `boolean`                    | `false`    | Disable the button                  |
  | `icon`    | `ReactNode`                    | `undefined` | Icon to display inside the button   |
  
  ## 🔗 License
  MIT
 */