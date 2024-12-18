import React, { useEffect, useState } from 'react'

declare global {
  interface Window {
    electron: {
      getClipboardText: () => Promise<string>
      storeText: (text: string) => Promise<boolean>
    }
  }
}

function App() {
  const [clipboardTexts, setClipboardTexts] = useState<string[]>([])

  useEffect(() => {
    const fetchClipboardText = async () => {
      try {
        const text = await window.electron.getClipboardText()
        if (text && !clipboardTexts.includes(text)) {
          setClipboardTexts(prev => [...prev, text])
        }
      } catch (error) {
        console.error('Error fetching clipboard text:', error)
      }
    }

    fetchClipboardText()
    const interval = setInterval(fetchClipboardText, 1000)

    return () => clearInterval(interval)
  }, [clipboardTexts])  // clipboardTexts를 의존성 배열에 추가

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>도토리 수집가</h1>
      <div className='space-y-4'>
        <h2 className='text-xl'>수집된 도토리들:</h2>
        {clipboardTexts.length === 0 ? (
          <p>아직 수집된 도토리가 없습니다. 텍스트를 복사해보세요!</p>
        ) : (
          <ul className='space-y-2'>
            {clipboardTexts.map((text, index) => (
              <li key={index} className='p-2 bg-gray-100 rounded'>
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
