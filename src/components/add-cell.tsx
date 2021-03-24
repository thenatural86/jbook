import './add-cell.css'
import { useActions } from '../hooks/use-actions'
// import { CellTypes } from '../state/cell'

interface AddCellProps {
  nextCellId: string | null
  forceVisible?: boolean
  // cellType: CellTypes
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, nextCellId }) => {
  const { insertCellBefore } = useActions()

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
        <div className='divider'></div>
      </div>
    </div>
  )
}

export default AddCell
