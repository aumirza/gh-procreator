import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(false)

    const darkModeHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDarkMode(darkMode => !darkMode)
        document.documentElement.classList.toggle('dark')
    }


    return (
        <div className='text-white'>

            <FiSun
                className={'text-3xl duration-200 overflow-hidden ' + (darkMode ? 'h-0 w-0' : '')}
                onClick={darkModeHandler} />
            <FiMoon
                className={'text-3xl duration-200 overflow-hidden ' + (!darkMode ? 'h-0 w-0' : '')} onClick={darkModeHandler} />

        </div>
    )
}
