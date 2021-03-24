import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state'
import CellList from './components/cell-list'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulmaswatch/superhero/bulmaswatch.min.css'

// import CodeCell from './components/code-cell'
// import TextEditor from './components/text-editor'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
        {/* <CodeCell />
        <TextEditor /> */}
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
