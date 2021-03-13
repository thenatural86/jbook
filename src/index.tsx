import ReactDOM from 'react-dom'
import { useState } from 'react'
import CodeEditor from './components/code-editor'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import Preview from './components/preview'
import bundle from './bundler'

const App = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const onClick = async () => {
    const output = await bundle(input)
    setCode(output)
  }

  return (
    <div>
      <CodeEditor
        initialValue='const yolo = "you only live once, imma bet it all"'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
