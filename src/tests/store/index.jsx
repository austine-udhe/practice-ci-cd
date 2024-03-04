import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../../store'

export const renderWithRedux = (testComponent) => {
  return render(<Provider store={store}>{testComponent}</Provider>)
}
