import { FormEvent, useState } from "react";

interface UserFilterProps{
  updateFilter: (val: string) => void
}

export default function ({updateFilter}: UserFilterProps) {
  const [inputState, setInputState] = useState('')

  const onInput = (event: FormEvent<HTMLInputElement>) => {
    if(event.currentTarget.value == ''){
      updateFilter(inputState)
    }
  }


  return (
    <div className="users__search">
      <input onInput={(event) => onInput(event)} onBlur={(event) => setInputState(event.target.value)} className="users__search-input" type="text" />
      <div onClick={() => updateFilter(inputState)} role="button" className="users__search-button">
        <img src="./images/search.svg" alt="Батон" />
      </div>
    </div>
  );
}
