import './add-cell.css'
import { useActions } from '../hooks/use-actions'
// import { CellTypes } from '../state/cell'

interface AddCellProps {
  nextCellId: string | null
  // cellType: CellTypes
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions()

  return (
    <div>
      <button onClick={() => insertCellBefore(nextCellId, 'code')}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, 'text')}>Text</button>
    </div>
  )
}

export default AddCell
