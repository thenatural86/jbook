import MonacoEditor from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <MonacoEditor
      theme='dark'
      language='javascript'
      height='200px'
      options={{ wordWrap: 'on' }}
    />
  )
}

export default CodeEditor
