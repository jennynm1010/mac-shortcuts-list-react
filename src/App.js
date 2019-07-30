import React, {Component} from 'react';
import ShortcutItem from './ShortcutItem';
import './App.css';
import shortcutsData from './shortcutsData';

class App extends Component {
  constructor() {
    super()
    this.state={
      shortcuts: shortcutsData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedShortcuts = prevState.shortcuts.map(shortcut => {
        if (shortcut.id === id) {
          shortcut.completed = !shortcut.completed
        }
        return shortcut
      })
      return {
        shortcuts: updatedShortcuts
      }
    })
  }

  render() {
    const shortcutItems = this.state.shortcuts.map(item => <ShortcutItem key={item.id} item={item}
      handleChange={this.handleChange}/>)
  
  return (
    <div className="shortcut-list">
    <h1> Mac Shortcuts List:</h1>
    {shortcutItems}
    </div>
  )
}
}

export default App;
