import {useForm,useFormState,useWatch} from 'react-hook-form'
function Controllers() {
  const Controller= ({  register, name, rules, render})=> {
    const props = register(name);
    return render();
  }
//dev dependencies vs dependencies , production vs dev env  ,webpack vs vite (bundler ) vercel deploy 

  return (
    <div>
      <Controller {...{ register, name:'lastname', 
        rules: {}, 
        render: ()=> <input/>}}/>
    </div>
  )
}

export default Controllers
