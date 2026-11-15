import { useState, useCallback, useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setChaAllo] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*{}[]?+_/~="

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  const copyPasswordtoClipboard = useCallback(()=> {
    passordRef.current?.select()
    passordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passordRef}
          />

          <button  
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numAllow}
              id='numInput'
              onChange={() => setNumAllow(prev => !prev)}
            />

            <label htmlFor='numInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllow}
              id='charInput'
              onChange={() => setChaAllo(prev => !prev)}
            />

            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

