//validation
interface Validatable{
  value: string | number;
  required?: boolean;
  minLength?:number;
  maxLength?: number;
  min?:number;
  max?:number;
}


function validate(validatableInput:Validatable){
  let isValid = true;
  if(validatableInput.required){
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }  

  if(validatableInput.minLength != null && typeof validatableInput.value === 'string'){
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if(validatableInput.maxLength != null && typeof validatableInput.value === 'string'){
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  if(validatableInput.min != null && typeof validatableInput.value === 'number'){
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if(validatableInput.max != null && typeof validatableInput.value === "number"){
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}


//autobind decorator
function autobind(_:any, _2:string, descriptor:PropertyDescriptor){
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable:true,
    get(){
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element:HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor(){
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; //template
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement; //form element
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private attach(){
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  private gatherUserInput():[string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1
    };
    
    if(!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)){ 
      alert('invalid input, please try again!');
      return;
    }
    else{
      return [enteredTitle, enteredDescription, +enteredPeople]
    }
  }

  private clearInputs(){
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event:Event){
    event.preventDefault();
    console.log('this.titleInputElement: ', this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    if(Array.isArray(userInput)){
      const [title, desc, people] = userInput;
      console.log(title, desc, people)
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }
}

const prjInput = new ProjectInput();